import { Check, Shield, Clock, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TrustBadgeProps {
  icon: 'check' | 'shield' | 'clock' | 'award';
  title: string;
  description?: string;
  className?: string;
}

const iconMap = {
  check: Check,
  shield: Shield,
  clock: Clock,
  award: Award
};

export function TrustBadge({ icon, title, description, className }: TrustBadgeProps) {
  const Icon = iconMap[icon];

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="w-10 h-10 rounded-full bg-solidbp-success/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-solidbp-success" />
      </div>
      <div>
        <p className="font-medium text-foreground">{title}</p>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  );
}
