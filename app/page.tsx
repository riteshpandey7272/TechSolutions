import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { ServiceCard } from '@/components/service-card';
import { TestimonialCard } from '@/components/testimonial-card';
import { StatsSection } from '@/components/stats-section';
import { CallToAction } from '@/components/call-to-action';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pb-32">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 z-[-1]" />
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Innovative Software Solutions for Your Business
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              We craft cutting-edge software solutions that empower businesses to thrive in the digital age. Transform your ideas into reality with our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="px-8">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive software solutions tailored to meet your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Web Development"
              description="Custom, responsive websites and progressive web applications built with modern frameworks and technologies."
              icon="Code"
              link="/services/web-development"
            />
            <ServiceCard 
              title="Mobile Applications"
              description="Native and cross-platform mobile applications for iOS and Android that engage users and drive growth."
              icon="Smartphone"
              link="/services/mobile-apps"
            />
            <ServiceCard 
              title="Cloud Solutions"
              description="Scalable cloud infrastructure, migration services, and cloud-native application development."
              icon="Cloud"
              link="/services/cloud-solutions"
            />
            <ServiceCard 
              title="AI & Machine Learning"
              description="Intelligent systems that analyze data, provide insights, and automate processes to drive business decisions."
              icon="Brain"
              link="/services/ai-ml"
            />
            <ServiceCard 
              title="DevOps & CI/CD"
              description="Streamlined development workflows, automated testing, and continuous deployment pipelines."
              icon="GitBranch"
              link="/services/devops"
            />
            <ServiceCard 
              title="IT Consulting"
              description="Strategic technology planning, architecture design, and digital transformation guidance."
              icon="Lightbulb"
              link="/services/consulting"
            />
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/services" className="group">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose TechSolutions?</h2>
              <p className="text-muted-foreground mb-8">
                With over a decade of experience in delivering cutting-edge software solutions, we bring technical expertise and industry knowledge to every project.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 bg-primary/10 p-1 rounded-full mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Expert Development Team</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Our team consists of senior developers, architects, and designers with expertise across multiple domains.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 bg-primary/10 p-1 rounded-full mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Tailored Solutions</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      We create custom solutions designed specifically for your business needs and objectives.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 bg-primary/10 p-1 rounded-full mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Agile Methodology</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Our iterative approach ensures frequent delivery of working software and adaptability to changing requirements.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 bg-primary/10 p-1 rounded-full mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Ongoing Support</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      We provide continuous maintenance, updates, and strategic guidance long after project completion.
                    </p>
                  </div>
                </li>
              </ul>

              <Button asChild className="mt-8">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from businesses that have transformed with our software solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="TechSolutions delivered a complex web application that exceeded our expectations. Their team was professional, responsive, and truly committed to our success."
              author="Sarah Johnson"
              position="CTO, FinTech Innovations"
              image="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
            <TestimonialCard 
              quote="Working with TechSolutions transformed our business processes. Their cloud migration strategy saved us 40% in operational costs while improving performance."
              author="Michael Chen"
              position="Operations Director, Globalex"
              image="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
            <TestimonialCard 
              quote="The mobile app developed by TechSolutions helped us engage with customers in entirely new ways. Their attention to detail and user experience expertise made all the difference."
              author="Lisa Rodriguez"
              position="Marketing VP, RetailNow"
              image="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction />
    </div>
  );
}