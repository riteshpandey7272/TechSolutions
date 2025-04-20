'use client';

import Link from 'next/link';
import { ArrowRight, Code, Smartphone, Cloud, Brain, GitBranch, Lightbulb, LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export function ServiceCard({ title, description, icon, link }: ServiceCardProps) {
  // Map icon string to component
  const IconComponent = {
    'Code': Code,
    'Smartphone': Smartphone,
    'Cloud': Cloud,
    'Brain': Brain,
    'GitBranch': GitBranch,
    'Lightbulb': Lightbulb
  }[icon] as LucideIcon;

  return (
    <Card className="h-full transition-all duration-300 hover:shadow-md group overflow-hidden">
      <CardHeader className="pb-4">
        <div className="mb-3 bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
          <IconComponent className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Link 
          href={link} 
          className={cn(
            "inline-flex items-center text-sm font-medium",
            "text-primary hover:underline"
          )}
        >
          Learn More
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  );
}