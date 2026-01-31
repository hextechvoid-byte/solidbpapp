import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
  className
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "mb-12",
      centered && "text-center",
      className
    )}>
      {subtitle && (
        <span className="inline-block px-4 py-1.5 bg-solidbp-blue/10 text-solidbp-blue text-sm font-medium rounded-full mb-4">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className={cn(
          "text-lg text-muted-foreground max-w-3xl",
          centered && "mx-auto"
        )}>
          {description}
        </p>
      )}
    </div>
  );
}
