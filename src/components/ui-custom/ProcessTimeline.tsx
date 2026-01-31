import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ProcessStep } from '@/types';

interface ProcessTimelineProps {
  steps: ProcessStep[];
  className?: string;
}

export function ProcessTimeline({ steps, className }: ProcessTimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Vertical line */}
      <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-border hidden md:block" />
      
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div
            key={step.step}
            className="relative flex flex-col md:flex-row gap-4 md:gap-8"
          >
            {/* Step number circle */}
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-solidbp-blue text-white flex items-center justify-center font-bold text-lg z-10">
              {step.step}
            </div>
            
            {/* Content */}
            <div className="flex-1 pb-8 md:pb-0">
              <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                {step.title}
                {index === steps.length - 1 && (
                  <Check className="w-5 h-5 text-solidbp-success" />
                )}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
