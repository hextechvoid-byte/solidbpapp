import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { SEO, Breadcrumbs } from '@/components/seo';
import { SectionHeader } from '@/components/ui-custom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { getSectorBySlug } from '@/lib/data';
import { generateBreadcrumbSchema } from '@/lib/utils';
import { companyInfo } from '@/lib/data';

export function SectorDetail() {
  const { slug } = useParams<{ slug: string }>();
  const sector = getSectorBySlug(slug || '');
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  if (!sector) {
    return (
      <div className="section-padding">
        <div className="container-custom text-center">
          <h1 className="text-3xl font-bold mb-4">Sector niet gevonden</h1>
          <p className="text-muted-foreground mb-6">
            De sector die u zoekt bestaat niet.
          </p>
          <Link to="/sectoren" className="btn-primary">
            Bekijk alle sectoren
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Sectoren', url: 'https://www.solidbp.nl/sectoren' },
    { name: sector.title, url: `https://www.solidbp.nl/sectoren/${sector.slug}` }
  ]);

  return (
    <>
      <SEO
        title={sector.metaTitle}
        description={sector.metaDescription}
        canonical={`https://www.solidbp.nl/sectoren/${sector.slug}`}
        jsonLd={breadcrumbSchema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-solidbp-blue to-solidbp-blue-dark py-20">
        <div className="container-custom">
          <Breadcrumbs 
            items={[
              { label: 'Sectoren', href: '/sectoren' },
              { label: sector.title }
            ]} 
            className="text-white/70 mb-6" 
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {sector.title}
            </h1>
            <p className="text-lg text-white/80">
              {sector.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Applications */}
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
                Toepassingen
              </span>
              <h2 className="text-3xl font-bold mb-6">
                Onze diensten voor {sector.title.toLowerCase()}
              </h2>
              <p className="text-muted-foreground mb-8">
                Wij bieden een breed scala aan betonoplossingen speciaal afgestemd 
                op de eisen en wensen van de {sector.title.toLowerCase()} sector.
              </p>
              <ul className="space-y-4">
                {sector.applications.map((app, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-solidbp-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-solidbp-success text-sm">✓</span>
                    </div>
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-muted/30 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold mb-6">Voordelen voor uw sector</h3>
              <ul className="space-y-4">
                {sector.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-solidbp-blue flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="pt-1">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section ref={ref} className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionHeader
            subtitle="Referenties"
            title={`Projecten in ${sector.title}`}
            description={`Bekijk enkele van onze succesvolle projecten in de ${sector.title.toLowerCase()} sector.`}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sector.caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-card"
              >
                <div className="aspect-video bg-gradient-to-br from-solidbp-blue/20 to-solidbp-orange/20" />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <span className="px-2 py-1 bg-muted rounded">{study.location}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-muted-foreground">{study.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-solidbp-blue to-solidbp-blue-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Klaar voor uw {sector.title.toLowerCase()} project?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Neem contact met ons op voor een vrijblijvend gesprek over de mogelijkheden 
            voor uw specifieke situatie.
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
