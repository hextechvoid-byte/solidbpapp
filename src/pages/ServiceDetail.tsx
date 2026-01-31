import { useParams, Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEO, Breadcrumbs } from '@/components/seo';
import { 
  SectionHeader, 
  ProcessTimeline, 
  AccordionFAQ, 
  ServiceCard,
  CTAButton 
} from '@/components/ui-custom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { getServiceBySlug, services } from '@/lib/data';
import { generateBreadcrumbSchema, generateServiceSchema, generateFAQSchema } from '@/lib/utils';
import { companyInfo } from '@/lib/data';

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || '');
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  if (!service) {
    return (
      <div className="section-padding">
        <div className="container-custom text-center">
          <h1 className="text-3xl font-bold mb-4">Dienst niet gevonden</h1>
          <p className="text-muted-foreground mb-6">
            De dienst die u zoekt bestaat niet.
          </p>
          <Link to="/diensten" className="btn-primary">
            Bekijk alle diensten
          </Link>
        </div>
      </div>
    );
  }

  const relatedServices = services.filter(s => 
    service.relatedServices.includes(s.slug) && s.id !== service.id
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Diensten', url: 'https://www.solidbp.nl/diensten' },
    { name: service.shortTitle, url: `https://www.solidbp.nl/diensten/${service.slug}` }
  ]);

  const serviceSchema = generateServiceSchema(
    service.title,
    service.description,
    companyInfo.name,
    'Limburg',
    `https://www.solidbp.nl/diensten/${service.slug}`
  );

  const faqSchema = generateFAQSchema(service.faq);

  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [breadcrumbSchema, serviceSchema, faqSchema]
  };

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        canonical={`https://www.solidbp.nl/diensten/${service.slug}`}
        jsonLd={combinedSchema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-solidbp-blue to-solidbp-blue-dark py-20">
        <div className="container-custom">
          <Breadcrumbs 
            items={[
              { label: 'Diensten', href: '/diensten' },
              { label: service.shortTitle }
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
              {service.title}
            </h1>
            <p className="text-lg text-white/80 mb-8">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton href="/offerte" variant="primary">
                Gratis offerte aanvragen
              </CTAButton>
              <a
                href={`tel:${companyInfo.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                <Phone className="w-5 h-5" />
                {companyInfo.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 bg-solidbp-orange/10 text-solidbp-orange text-sm font-medium rounded-full mb-4">
                Het probleem
              </span>
              <h2 className="text-3xl font-bold mb-4">
                Wat is het probleem?
              </h2>
              <p className="text-muted-foreground mb-6">
                Beton is een duurzaam materiaal, maar kan na verloop van tijd te maken krijgen 
                met diverse problemen. Scheuren, slijtage, vochtindringing en veroudering kunnen 
                de integriteit en uitstraling van uw betonconstructie aantasten.
              </p>
              <ul className="space-y-3">
                {['Scheurvorming en barsten', 'Slijtage en afschilfering', 'Vocht- en waterproblemen', 'Verkleuring en veroudering'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center">
                      <span className="text-destructive text-sm">×</span>
                    </div>
                    <span>{item}</span>
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
              <h3 className="text-xl font-bold mb-4">
                Wat gebeurt er als u niet ingrijpt?
              </h3>
              <p className="text-muted-foreground mb-6">
                Zonder tijdige interventie kunnen kleine problemen uitgroeien tot grote schade. 
                Dit leidt tot hogere reparatiekosten, veiligheidsrisico's en waardeverlies.
              </p>
              <ul className="space-y-3">
                {['Verdere structuurscheuring', 'Hogere reparatiekosten', 'Veiligheidsrisico\'s', 'Waardeverlies pand'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-solidbp-warning/10 flex items-center justify-center">
                      <span className="text-solidbp-warning text-sm">!</span>
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section ref={ref} className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionHeader
            subtitle="Onze aanpak"
            title="Onze oplossing"
            description="Wij bieden een professionele en duurzame oplossing voor uw betonproblemen. 
                        Met onze expertise en hoogwaardige materialen garanderen wij een resultaat 
                        dat jarenlang meegaat."
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <ProcessTimeline steps={service.process} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="text-xl font-bold mb-6">Voordelen van Solidbp</h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-solidbp-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-solidbp-success text-sm">✓</span>
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-solidbp-blue rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Direct een offerte?</h3>
                <p className="text-white/80 mb-6">
                  Vraag vandaag nog een gratis offerte aan. Binnen 24 uur ontvangt u 
                  een vrijblijvend voorstel op maat.
                </p>
                <CTAButton href="/offerte" variant="primary" className="w-full">
                  Offerte aanvragen
                </CTAButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Wat wij bieden</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Onze {service.shortTitle.toLowerCase()} dienst omvat een breed scala aan toepassingen 
              en mogelijkheden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-muted/30"
              >
                <div className="w-10 h-10 rounded-lg bg-solidbp-blue flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="font-medium pt-2">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Veelgestelde vragen</h2>
              <p className="text-muted-foreground">
                Antwoorden op de meest gestelde vragen over {service.shortTitle.toLowerCase()}.
              </p>
            </div>

            <AccordionFAQ faqs={service.faq} />
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Gerelateerde diensten</h2>
              <p className="text-muted-foreground">
                Bekijk ook onze andere diensten die goed samengaan met {service.shortTitle.toLowerCase()}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((relatedService) => (
                <ServiceCard 
                  key={relatedService.id} 
                  service={relatedService} 
                  variant="default" 
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-solidbp-blue to-solidbp-blue-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Klaar om uw project te starten?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Vraag vandaag nog een gratis offerte aan voor {service.shortTitle.toLowerCase()}. 
            Onze specialisten staan klaar om u te helpen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/offerte" variant="primary">
              Gratis offerte aanvragen
            </CTAButton>
            <CTAButton href="/contact" variant="outline">
              Contact opnemen
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
