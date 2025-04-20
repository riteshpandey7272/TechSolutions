'use client';

import { useEffect, useState } from 'react';
import { Users, CheckCircle, Award, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function StatsSection() {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    experience: 0,
    awards: 0
  });
  
  const targets = {
    clients: 200,
    projects: 500,
    experience: 12,
    awards: 25
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;
    
    const incrementCounters = (step: number) => {
      setCounters({
        clients: Math.ceil((targets.clients / steps) * step),
        projects: Math.ceil((targets.projects / steps) * step),
        experience: Math.ceil((targets.experience / steps) * step),
        awards: Math.ceil((targets.awards / steps) * step)
      });
    };
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep += 1;
      incrementCounters(currentStep);
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <StatCard 
            icon={<Users className="h-7 w-7 text-chart-1" />}
            value={counters.clients}
            label="Happy Clients"
            color="text-chart-1"
          />
          <StatCard 
            icon={<CheckCircle className="h-7 w-7 text-chart-2" />}
            value={counters.projects}
            label="Projects Completed"
            color="text-chart-2"
          />
          <StatCard 
            icon={<Calendar className="h-7 w-7 text-chart-3" />}
            value={counters.experience}
            label="Years Experience"
            color="text-chart-3"
          />
          <StatCard 
            icon={<Award className="h-7 w-7 text-chart-4" />}
            value={counters.awards}
            label="Awards Won"
            color="text-chart-4"
          />
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  color: string;
}

function StatCard({ icon, value, label, color }: StatCardProps) {
  return (
    <Card className="border-none bg-card/50">
      <CardContent className="flex flex-col items-center p-6 text-center">
        <div className="mb-2">{icon}</div>
        <div className={`text-3xl md:text-4xl font-bold mb-1 ${color}`}>
          {value}+
        </div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </CardContent>
    </Card>
  );
}