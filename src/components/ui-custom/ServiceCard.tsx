import { Link } from 'react-router-dom';
import { ArrowRight, Hammer, Wrench, Paintbrush, Factory, Droplets, Home, Layers, Shield, Cog } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { Service } from '@/types';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Hammer,
  Wrench,
  Paintbrush,
  Factory,
  Droplets,
  Home,
  Layers,
  Shield,
  Cog
};

interface ServiceCardProps {
  service: Service;
  variant?: 'default' | 'compact' | 'featured';
  className?: string;
}

export function ServiceCard({ service, variant = 'default', className }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Hammer;

  if (variant === 'compact') {
    return (
      <Link
        to={`/diensten/${service.slug}`}
        className={cn(
          "group flex items-center gap-4 p-4 rounded-xl bg-white border border-border",
          "hover:border-solidbp-blue hover:shadow-card transition-all duration-300",
          className
        )}
      >
        <div className="w-12 h-12 rounded-lg bg-solidbp-blue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-solidbp-blue transition-colors">
          <Icon className="w-6 h-6 text-solidbp-blue group-hover:text-white transition-colors" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground group-hover:text-solidbp-blue transition-colors truncate">
            {service.shortTitle}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-1">
            {service.shortDescription}
          </p>
        </div>
        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-solidbp-blue group-hover:translate-x-1 transition-all" />
      </Link>
    );
  }

  if (variant === 'featured') {
    return (
      <motion.div
        whileHover={{ y: -8 }}
        className={cn(
          "group relative overflow-hidden rounded-2xl bg-white border border-border shadow-card",
          "hover:shadow-card-hover transition-shadow duration-300",
          className
        )}
      >
        <div className="aspect-video overflow-hidden">
          <div 
            className="w-full h-full bg-gradient-to-br from-solidbp-blue/20 to-solidbp-orange/20"
            style={{ backgroundImage: `url(${service.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
        </div>
        <div className="p-6">
          <div className="w-14 h-14 rounded-xl bg-solidbp-blue/10 flex items-center justify-center mb-4 group-hover:bg-solidbp-blue transition-colors">
            <Icon className="w-7 h-7 text-solidbp-blue group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-solidbp-blue transition-colors">
            {service.title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-2">
            {service.shortDescription}
          </p>
          <Link
            to={`/diensten/${service.slug}`}
            className="inline-flex items-center gap-2 text-solidbp-blue font-medium hover:gap-3 transition-all"
          >
            Lees meer
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={cn(
        "group p-6 rounded-xl bg-white border border-border",
        "hover:border-solidbp-blue hover:shadow-card transition-all duration-300",
        className
      )}
    >
      <div className="w-14 h-14 rounded-xl bg-solidbp-blue/10 flex items-center justify-center mb-4 group-hover:bg-solidbp-blue transition-colors">
        <Icon className="w-7 h-7 text-solidbp-blue group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-lg font-bold mb-2 group-hover:text-solidbp-blue transition-colors">
        {service.shortTitle}
      </h3>
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {service.shortDescription}
      </p>
      <Link
        to={`/diensten/${service.slug}`}
        className="inline-flex items-center gap-2 text-sm text-solidbp-blue font-medium hover:gap-3 transition-all"
      >
        Lees meer
        <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}
