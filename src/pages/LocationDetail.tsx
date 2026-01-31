import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { SEO, Breadcrumbs } from '@/components/seo';
import { SectionHeader, ServiceCard } from '@/components/ui-custom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { getLocationBySlug, services, companyInfo } from '@/lib/data';
import { generateBreadcrumbSchema } from '@/lib/utils';

export function LocationDetail() {
  const { slug } = useParams<{ slug: string }>();
  const location = getLocationBySlug(slug || '');
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  if (!location) {
    return (
      <div className="section-padding">
        <div className="container-custom text-center">
          <h1 className="text-3xl font-bold mb-4">Locatie niet gevonden</h1>
          <p className="text-muted-foreground mb-6">
            De locatie die u zoekt bestaat niet.
          </p>
          <Link to="/locaties" className="btn-primary">
            Bekijk alle locaties
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Locaties', url: 'https://www.solidbp.nl/locaties' },
    { name: location.name, url: `https://www.solidbp.nl/locaties/${location.slug}` }
  ]);

  const relatedServices = services.filter(s => 
    location.services.some(ls => 
      s.shortTitle.toLowerCase().includes(ls.toLowerCase()) ||
      ls.toLowerCase().includes(s.shortTitle.toLowerCase())
    )
  ).slice(0, 3);

  return (
    <>
      <SEO
        title={location.metaTitle}
        description={location.metaDescription}
        canonical={`https://www.solidbp.nl/locaties/${location.slug}`}
        jsonLd={breadcrumbSchema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-solidbp-blue to-solidbp-blue-dark py-20">
        <div className="container-custom">
          <Breadcrumbs 
            items={[
              { label: 'Locaties', href: '/locaties' },
              { label: location.name }
            ]} 
            className="text-white/70 mb-6" 
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-white/80 mb-4">
              <MapPin className="w-5 h-5" />
              <span>Limburg</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Betonspecialist in {location.name}
            </h1>
            <p className="text-lg text-white/80">
              Solidbp is uw lokale specialist voor betonreparatie, coatings en vloeroplossingen 
              in {location.name} en omgeving. Snel ter plaatse, korte lijnen, persoonlijke service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services in this location */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 bg-solidbp-blue/10 text-solidbp-blue text-sm font-medium rounded-full mb-4">
                Onze diensten
              </span>
              <h2 className="text-3xl font-bold mb-6">
                Wat wij in {location.name} doen
              </h2>
              <p className="text-muted-foreground mb-8">
                In {location.name} en omgeving bieden wij ons complete pakket aan betondiensten. 
                Van kleine reparaties tot grote projecten - wij staan voor u klaar.
              </p>
              <ul className="space-y-3">
                {location.services.map((service, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-solidbp-success/10 flex items-center justify-center">
                      <span className="text-solidbp-success text-sm">✓</span>
                    </div>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-solidbp-blue rounded-2xl p-8 text-white"
            >
              <h3 className="text-xl font-bold mb-4">Waarom Solidbp in {location.name}?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>Lokale aanwezigheid, snelle service</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>Kennis van lokale bouwstijlen en regelgeving</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>Persoonlijk contact en korte lijnen</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>20+ jaar ervaring in de regio</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section ref={ref} className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Werkgebied rond {location.name}
              </h2>
              <p className="text-muted-foreground mb-6">
                Naast {location.name} bedienen wij ook de omliggende plaatsen. 
                Ook voor uw project in de buurt staan wij graag voor u klaar.
              </p>
              <div className="flex flex-wrap gap-2">
                {location.nearbyLocations.map((nearby) => (
                  <span 
                    key={nearby}
                    className="px-3 py-1.5 bg-white rounded-lg text-sm border border-border"
                  >
                    {nearby}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="aspect-video bg-gradient-to-br from-solidbp-blue/10 to-solidbp-orange/10 rounded-2xl border border-border flex items-center justify-center"
            >
              <div className="text-center">
                <MapPin className="w-12 h-12 text-solidbp-blue mx-auto mb-4" />
                <p className="font-medium">Servicegebied {location.name}</p>
                <p className="text-sm text-muted-foreground">
                  +{location.nearbyLocations.length} omliggende plaatsen
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionHeader
              subtitle="Onze diensten"
              title={`Populaire diensten in ${location.name}`}
              description={`Bekijk onze meest gevraagde diensten in ${location.name} en omgeving.`}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((service) => (
                <ServiceCard key={service.id} service={service} variant="default" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-solidbp-blue to-solidbp-blue-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Zoekt u een betonspecialist in {location.name}?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Neem vandaag nog contact met ons op voor een gratis offerte of adviesgesprek. 
            Wij zijn snel ter plaatse in {location.name}.
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
              Bel direct
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
