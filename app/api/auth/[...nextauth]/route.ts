import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import bcrypt from 'bcryptjs';

import dbConnect from '@/lib/db';
import User from '@/models/User';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        phone: { label: 'Phone', type: 'tel' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        await dbConnect();

        if (!credentials) {
          return null;
        }

        try {
          // Check if login is using email or phone
          let user;
          if (credentials.email) {
            user = await User.findOne({ email: credentials.email });
          } else if (credentials.phone) {
            user = await User.findOne({ phone: credentials.phone });
          } else {
            throw new Error('Email or phone number is required');
          }

          if (!user) {
            throw new Error('No user found with these credentials');
          }

          // Check password
          const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
          if (!isPasswordValid) {
            throw new Error('Invalid credentials');
          }

          return {
            id: user._id.toString(),
            name: user.name,
            email: user.email,
            image: user.image,
            role: user.role,
          };
        } catch (error) {
          console.error('Auth error:', error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
        token.role = (user as any).role;
      }
      
      // If using Google provider, store user data
      if (account && account.provider === 'google') {
        await dbConnect();
        
        // Check if user exists
        const existingUser = await User.findOne({ email: token.email });
        
        if (!existingUser) {
          // Create new user
          const newUser = new User({
            name: token.name,
            email: token.email,
            image: token.picture,
            provider: 'google',
            providerId: token.sub,
            password: bcrypt.hashSync(Math.random().toString(36).slice(-8), 10), // Random password
          });
          
          await newUser.save();
          token.id = newUser._id.toString();
          token.role = newUser.role;
        } else {
          token.id = existingUser._id.toString();
          token.role = existingUser.role;
          
          // Update user's Google providerId if needed
          if (!existingUser.providerId) {
            existingUser.providerId = token.sub;
            await existingUser.save();
          }
        }
      }
      
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/login',
    signOut: '/',
    error: '/auth/error',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };