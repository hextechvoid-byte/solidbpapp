import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  href: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'phone';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  external?: boolean;
  className?: string;
  onClick?: () => void;
}

export function CTAButton({
  href,
  variant = 'primary',
  size = 'md',
  children,
  external = false,
  className,
  onClick
}: CTAButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200";
  
  const variants = {
    primary: "bg-solidbp-orange text-white hover:bg-solidbp-orange-dark shadow-button hover:shadow-lg hover:-translate-y-0.5",
    secondary: "bg-white text-solidbp-blue border-2 border-solidbp-blue hover:bg-solidbp-blue hover:text-white",
    outline: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-solidbp-blue",
    phone: "bg-solidbp-success text-white hover:bg-solidbp-success/90"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
      >
        {variant === 'phone' && <Phone className="w-5 h-5" />}
        {children}
        {variant !== 'phone' && <ArrowRight className="w-5 h-5" />}
      </a>
    );
  }

  return (
    <Link
      to={href}
      onClick={onClick}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
    >
      {variant === 'phone' && <Phone className="w-5 h-5" />}
      {children}
      {variant !== 'phone' && <ArrowRight className="w-5 h-5" />}
    </Link>
  );
}
