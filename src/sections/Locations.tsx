import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui-custom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { locations } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Locations() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  // Get first 12 locations for display
  const displayLocations = locations.slice(0, 12);

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          subtitle="Werkgebied"
          title="Solidbp bedient heel Limburg"
          description="Van Maastricht tot Venlo, van Heerlen tot Roermond - 
                      wij zijn uw lokale betonspecialist in de hele provincie Limburg."
        />

        {/* Map visualization placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="aspect-[21/9] bg-gradient-to-br from-solidbp-blue/10 to-solidbp-orange/10 rounded-2xl border border-border overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-solidbp-blue mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Provincie Limburg</h3>
                <p className="text-muted-foreground">20+ gemeenten bediend</p>
              </div>
            </div>
            
            {/* Decorative dots for cities */}
            {displayLocations.slice(0, 8).map((location, index) => (
              <motion.div
                key={location.slug}
                initial={{ scale: 0 }}
                animate={isVisible ? { scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="absolute w-3 h-3 bg-solidbp-orange rounded-full"
                style={{
                  left: `${20 + (index % 4) * 20}%`,
                  top: `${20 + Math.floor(index / 4) * 40}%`
                }}
                title={location.name}
              />
            ))}
          </div>
        </motion.div>

        {/* Location grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {displayLocations.map((location, index) => (
            <motion.div
              key={location.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.03 }}
            >
              <Link
                to={`/locaties/${location.slug}`}
                className={cn(
                  "flex items-center gap-2 p-3 rounded-lg bg-muted hover:bg-solidbp-blue hover:text-white transition-colors group"
                )}
              >
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm font-medium">{location.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Link
            to="/locaties"
            className="inline-flex items-center gap-2 px-8 py-4 bg-solidbp-blue text-white font-semibold rounded-lg hover:bg-solidbp-blue-dark transition-colors"
          >
            Bekijk alle locaties
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
