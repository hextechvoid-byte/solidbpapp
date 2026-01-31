import { motion } from 'framer-motion';
import { SEO, Breadcrumbs } from '@/components/seo';
import { QuoteForm } from '@/components/forms';
import { Check, Clock, Shield, Phone } from 'lucide-react';
import { companyInfo } from '@/lib/data';

const benefits = [
  { icon: Check, title: 'Gratis & vrijblijvend', description: 'Geen kosten, geen verplichtingen' },
  { icon: Clock, title: 'Binnen 24 uur', description: 'Snelle reactie gegarandeerd' },
  { icon: Shield, title: 'Persoonlijk advies', description: 'Maatwerk voor uw situatie' }
];

export function Quote() {
  return (
    <>
      <SEO
        title="Gratis Offerte Aanvragen | Betonreparatie & Coatings - Solidbp"
        description="Vraag gratis en vrijblijvend een offerte aan voor betonreparatie, coatings of vloerherstel. Binnen 24 uur een reactie van Solidbp."
        canonical="https://www.solidbp.nl/offerte"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-solidbp-blue to-solidbp-blue-dark py-20">
        <div className="container-custom">
          <Breadcrumbs 
            items={[{ label: 'Offerte aanvragen' }]} 
            className="text-white/70 mb-6" 
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Gratis offerte aanvragen
            </h1>
            <p className="text-lg text-white/80">
              Vul het formulier in en ontvang binnen 24 uur een vrijblijvende offerte 
              op maat voor uw project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <QuoteForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Benefits */}
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <h3 className="font-bold text-lg mb-4">Waarom een offerte bij Solidbp?</h3>
                <div className="space-y-4">
                  {benefits.map((benefit) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={benefit.title} className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-solidbp-blue/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-solidbp-blue" />
                        </div>
                        <div>
                          <p className="font-medium">{benefit.title}</p>
                          <p className="text-sm text-muted-foreground">{benefit.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Contact */}
              <div className="bg-solidbp-blue rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-4">Liever direct contact?</h3>
                <p className="text-white/80 mb-4">
                  Bel ons voor direct advies of om een afspraak te maken.
                </p>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center gap-3 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <Phone className="w-6 h-6" />
                  <div>
                    <p className="text-sm text-white/70">Telefoon</p>
                    <p className="font-semibold">{companyInfo.phone}</p>
                  </div>
                </a>
              </div>

              {/* Trust */}
              <div className="bg-white rounded-2xl p-6 shadow-card text-center">
                <p className="text-sm text-muted-foreground mb-2">Al meer dan</p>
                <p className="text-4xl font-bold text-solidbp-blue mb-2">2500+</p>
                <p className="text-sm text-muted-foreground">tevreden klanten</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
