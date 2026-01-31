import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Phone } from 'lucide-react';
import { SEO, Breadcrumbs } from '@/components/seo';
import { SectionHeader } from '@/components/ui-custom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { locations, companyInfo } from '@/lib/data';
import { cn } from '@/lib/utils';

export function LocationsOverview() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <>
      <SEO
        title="Locaties | Betonspecialist in heel Limburg - Solidbp"
        description="Solidbp is actief in heel Limburg. Van Maastricht tot Venlo, van Heerlen tot Roermond. Bekijk onze werkgebieden en vind een specialist bij u in de buurt."
        canonical="https://www.solidbp.nl/locaties"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-solidbp-blue to-solidbp-blue-dark py-20">
        <div className="container-custom">
          <Breadcrumbs 
            items={[{ label: 'Locaties' }]} 
            className="text-white/70 mb-6" 
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Onze Locaties
            </h1>
            <p className="text-lg text-white/80">
              Solidbp is actief in heel Limburg. Van Maastricht tot Venlo, 
              van Heerlen tot Roermond - wij zijn uw lokale betonspecialist.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 bg-solidbp-blue/10 text-solidbp-blue text-sm font-medium rounded-full mb-4">
                Werkgebied
              </span>
              <h2 className="text-3xl font-bold mb-6">
                Heel Limburg bediend
              </h2>
              <p className="text-muted-foreground mb-6">
                Met onze centrale ligging in Heerlen zijn wij snel ter plaatse 
                in heel Limburg. Of u nu in Maastricht, Venlo, Sittard of een 
                van de kleinere gemeenten woont - wij staan voor u klaar.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-solidbp-success/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-solidbp-success" />
                  </div>
                  <div>
                    <p className="font-medium">20+ gemeenten</p>
                    <p className="text-sm text-muted-foreground">Actief in heel Limburg</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-solidbp-success/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-solidbp-success" />
                  </div>
                  <div>
                    <p className="font-medium">Snelle responstijd</p>
                    <p className="text-sm text-muted-foreground">Meestal binnen 24 uur ter plaatse</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="aspect-video bg-gradient-to-br from-solidbp-blue/10 to-solidbp-orange/10 rounded-2xl border border-border flex items-center justify-center relative overflow-hidden"
            >
              <div className="text-center">
                <MapPin className="w-16 h-16 text-solidbp-blue mx-auto mb-4" />
                <p className="text-2xl font-bold">Provincie Limburg</p>
                <p className="text-muted-foreground">20+ gemeenten bediend</p>
              </div>
              {/* Decorative dots */}
              {locations.slice(0, 10).map((loc, index) => (
                <div
                  key={loc.slug}
                  className="absolute w-3 h-3 bg-solidbp-orange rounded-full"
                  style={{
                    left: `${15 + (index % 5) * 18}%`,
                    top: `${20 + Math.floor(index / 5) * 50}%`
                  }}
                  title={loc.name}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section ref={ref} className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionHeader
            subtitle="Gemeenten"
            title="Vind een specialist bij u in de buurt"
            description="Klik op uw gemeente voor meer informatie over onze diensten in uw regio."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {locations.map((location, index) => (
              <motion.div
                key={location.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.02 }}
              >
                <Link
                  to={`/locaties/${location.slug}`}
                  className={cn(
                    "group flex items-center gap-2 p-4 bg-white rounded-xl border border-border",
                    "hover:border-solidbp-blue hover:shadow-card transition-all"
                  )}
                >
                  <MapPin className="w-4 h-4 text-muted-foreground group-hover:text-solidbp-blue transition-colors" />
                  <span className="font-medium group-hover:text-solidbp-blue transition-colors">
                    {location.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-solidbp-blue to-solidbp-blue-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
 Staat uw gemeente er niet bij?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Neem contact met ons op. Ook buiten deze gemeenten kunnen wij 
            mogelijk van dienst zijn. Vraag vrijblijvend naar de mogelijkheden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/offerte"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-solidbp-orange text-white font-semibold rounded-lg hover:bg-solidbp-orange-dark transition-colors"
            >
              Gratis offerte aanvragen
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:${companyInfo.phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {companyInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
