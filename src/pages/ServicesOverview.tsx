import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEO, Breadcrumbs } from '@/components/seo';
import { ServiceCard, SectionHeader } from '@/components/ui-custom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { services } from '@/lib/data';
import { generateBreadcrumbSchema } from '@/lib/utils';

export function ServicesOverview() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Diensten', url: 'https://www.solidbp.nl/diensten' }
  ]);

  return (
    <>
      <SEO
        title="Onze Diensten | Betonreparatie, Coatings & Vloeren - Solidbp"
        description="Bekijk ons complete aanbod aan betondiensten. Van betonreparatie tot vloercoatings, van kelderafdichting tot gietvloeren. Specialist in Limburg."
        canonical="https://www.solidbp.nl/diensten"
        jsonLd={breadcrumbSchema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-solidbp-blue to-solidbp-blue-dark py-20">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: 'Diensten' }]} className="text-white/70" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Onze Diensten
            </h1>
            <p className="text-lg text-white/80">
              Solidbp biedt een compleet pakket aan betondiensten voor elke toepassing. 
              Van reparatie tot renovatie, van coating tot complete vloeroplossingen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionHeader
            subtitle="Specialismen"
            title="Al onze diensten op een rij"
            description="Klik op een dienst voor meer informatie, of neem direct contact op voor persoonlijk advies."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCard service={service} variant="featured" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-solidbp-gray-dark to-solidbp-gray rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Niet zeker welke dienst u nodig heeft?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Neem contact met ons op voor een gratis inspectie en advies. 
              We helpen u graag bij het vinden van de beste oplossing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/offerte"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-solidbp-orange text-white font-semibold rounded-lg hover:bg-solidbp-orange-dark transition-colors"
              >
                Gratis offerte aanvragen
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                Contact opnemen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
