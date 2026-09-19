import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import type { Feature } from '@/content/features';

interface FeatureCardProps {
  feature: Feature;
  index?: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index = 0 }) => {
  const Icon = (Icons as any)[feature.icon] || Icons.Circle;
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (cardRef.current) {
            observer.unobserve(cardRef.current);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <Link 
      ref={cardRef}
      to={feature.href}
      className={`group p-8 rounded-[24px] bg-surface-container-lowest border border-outline-variant transition-all duration-300 hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.12)] hover:border-outline flex flex-col h-full relative overflow-hidden ${!isVisible ? 'motion-safe:opacity-0' : 'motion-safe:animate-slide-up'}`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-colors duration-500 pointer-events-none" />
      
      <div className="w-14 h-14 bg-surface-container-high rounded-[16px] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/10">
        <Icon className="w-7 h-7 text-on-surface group-hover:text-primary transition-colors" strokeWidth={1.5} />
      </div>
      
      <h3 className="text-xl font-display font-semibold text-on-surface mb-3 tracking-tight">
        {feature.title}
      </h3>
      
      <p className="text-on-surface-variant leading-relaxed flex-grow text-base">
        {feature.description}
      </p>
      
      <div className="mt-8 flex items-center text-primary font-medium text-sm group-hover:underline underline-offset-4">
        Explore capability 
        <Icons.ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

