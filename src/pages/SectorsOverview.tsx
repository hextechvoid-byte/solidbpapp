import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Home, Factory, Building2, Landmark } from 'lucide-react';
import { SEO, Breadcrumbs } from '@/components/seo';
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

export function SectorsOverview() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <>
      <SEO
        title="Sectoren | Betonoplossingen voor elke branche - Solidbp"
        description="Solidbp levert betonoplossingen voor woningbouw, industrie, infrastructuur en commercieel vastgoed. Bekijk onze sectorgerichte diensten."
        canonical="https://www.solidbp.nl/sectoren"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-solidbp-blue to-solidbp-blue-dark py-20">
        <div className="container-custom">
          <Breadcrumbs 
            items={[{ label: 'Sectoren' }]} 
            className="text-white/70 mb-6" 
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sectoren
            </h1>
            <p className="text-lg text-white/80">
              Solidbp levert maatwerk betonoplossingen voor diverse sectoren. 
              Van woningbouw tot industrie, van infrastructuur tot commercieel vastgoed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section ref={ref} className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionHeader
            subtitle="Onze expertise"
            title="Oplossingen voor elke sector"
            description="Elke sector heeft eigen eisen en uitdagingen. Wij begrijpen uw branche en bieden passende oplossingen."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                      "hover:border-solidbp-blue hover:shadow-card transition-all duration-300 h-full"
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

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-solidbp-gray-dark to-solidbp-gray rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Niet zeker welke sector?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Neem contact met ons op voor persoonlijk advies. Wij helpen u graag 
              bij het vinden van de beste oplossing voor uw specifieke situatie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-solidbp-orange text-white font-semibold rounded-lg hover:bg-solidbp-orange-dark transition-colors"
              >
                Contact opnemen
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/offerte"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                Offerte aanvragen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
