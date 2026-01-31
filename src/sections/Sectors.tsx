import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Factory, Building2, Landmark } from 'lucide-react';
import { SectionHeader } from '@/components/ui-custom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { sectors } from '@/lib/data';
import { cn } from '@/lib/utils';

const iconMap = {
  Home,
  Factory,
  Building2,
  Landmark
};

export function Sectors() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="section-padding bg-muted/30">
      <div className="container-custom">
        <SectionHeader
          subtitle="Sectoren"
          title="Oplossingen voor elke sector"
          description="Of u nu een woningbezitter, industrieel bedrijf of overheidsinstelling bent, 
                      wij hebben de juiste expertise voor uw project."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sectors.map((sector, index) => {
            const Icon = iconMap[sector.slug as keyof typeof iconMap] || Building2;
            
            return (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/sectoren/${sector.slug}`}
                  className={cn(
                    "group block relative overflow-hidden rounded-2xl bg-white border border-border p-8",
                    "hover:border-solidbp-blue hover:shadow-card transition-all duration-300"
                  )}
                >
                  <div className="flex flex-col h-full">
                    <div className="w-16 h-16 rounded-xl bg-solidbp-blue/10 flex items-center justify-center mb-6 group-hover:bg-solidbp-blue transition-colors">
                      <Icon className="w-8 h-8 text-solidbp-blue group-hover:text-white transition-colors" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-solidbp-blue transition-colors">
                      {sector.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 flex-grow">
                      {sector.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {sector.applications.slice(0, 3).map((app, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-solidbp-orange rounded-full" />
                          <span>{app}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-2 text-solidbp-blue font-medium group-hover:gap-3 transition-all">
                      <span>Meer informatie</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
