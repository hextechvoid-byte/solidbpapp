import { useCountUp } from '@/hooks/useCountUp';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  delay?: number;
  className?: string;
}

export function StatCounter({
  value,
  suffix = '',
  prefix = '',
  label,
  duration = 2000,
  delay = 0,
  className
}: StatCounterProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.5 });
  const { formattedValue } = useCountUp({
    end: value,
    suffix,
    prefix,
    duration,
    delay: isVisible ? delay : 999999
  });

  return (
    <div
      ref={ref}
      className={cn("text-center", className)}
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-solidbp-blue mb-2">
        {formattedValue}
      </div>
      <div className="text-muted-foreground font-medium">
        {label}
      </div>
    </div>
  );
}
