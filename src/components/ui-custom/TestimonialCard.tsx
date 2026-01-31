import { Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  variant?: 'default' | 'compact';
  className?: string;
}

export function TestimonialCard({ testimonial, variant = 'default', className }: TestimonialCardProps) {
  if (variant === 'compact') {
    return (
      <div className={cn("p-6 bg-white rounded-xl border border-border", className)}>
        <div className="flex gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-4 h-4",
                i < testimonial.rating ? "text-solidbp-orange fill-solidbp-orange" : "text-gray-300"
              )}
            />
          ))}
        </div>
        <p className="text-foreground text-sm mb-4 line-clamp-3">
          "{testimonial.text}"
        </p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-solidbp-blue/10 flex items-center justify-center">
            <span className="text-solidbp-blue font-semibold text-sm">
              {testimonial.name.charAt(0)}
            </span>
          </div>
          <div>
            <p className="font-medium text-sm">{testimonial.name}</p>
            {testimonial.company && (
              <p className="text-muted-foreground text-xs">{testimonial.company}</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("p-8 bg-white rounded-2xl border border-border shadow-card", className)}>
      <Quote className="w-10 h-10 text-solidbp-orange/30 mb-4" />
      
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-5 h-5",
              i < testimonial.rating ? "text-solidbp-orange fill-solidbp-orange" : "text-gray-300"
            )}
          />
        ))}
      </div>
      
      <p className="text-foreground text-lg mb-6 leading-relaxed">
        "{testimonial.text}"
      </p>
      
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-solidbp-blue/10 flex items-center justify-center">
          <span className="text-solidbp-blue font-bold text-lg">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-semibold">{testimonial.name}</p>
          {testimonial.company && (
            <p className="text-muted-foreground">{testimonial.company}</p>
          )}
        </div>
      </div>
    </div>
  );
}
