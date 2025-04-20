import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

import dbConnect from '@/lib/db';
import User from '@/models/User';

export async function POST(request: Request) {
  try {
    const { name, email, phone, password, provider } = await request.json();
    
    // Validate fields
    if (!name || !password) {
      return NextResponse.json({ message: 'Name and password are required' }, { status: 400 });
    }
    
    if (provider === 'email' && !email) {
      return NextResponse.json({ message: 'Email is required' }, { status: 400 });
    }
    
    if (provider === 'phone' && !phone) {
      return NextResponse.json({ message: 'Phone number is required' }, { status: 400 });
    }
    
    // Connect to database
    await dbConnect();
    
    // Check if user already exists
    let existingUser;
    if (email) {
      existingUser = await User.findOne({ email });
      if (existingUser) {
        return NextResponse.json({ message: 'Email already registered' }, { status: 409 });
      }
    }
    
    if (phone) {
      existingUser = await User.findOne({ phone });
      if (existingUser) {
        return NextResponse.json({ message: 'Phone number already registered' }, { status: 409 });
      }
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create new user
    const newUser = new User({
      name,
      email: email || '',
      phone: phone || '',
      password: hashedPassword,
      provider: provider || 'email',
    });
    
    await newUser.save();
    
    return NextResponse.json({ 
      message: 'User created successfully',
      userId: newUser._id,
    }, { status: 201 });
    
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}