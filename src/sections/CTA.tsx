import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, Clock, Check } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { companyInfo } from '@/lib/data';

const benefits = [
  'Gratis en vrijblijvend',
  'Binnen 24 uur reactie',
  'Persoonlijk advies',
  'Scherpe prijzen'
];

export function CTA() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-solidbp-blue to-solidbp-blue-dark">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Klaar om uw project te starten?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Vraag vandaag nog een gratis offerte aan. Onze specialisten staan klaar 
              om u te helpen met het vinden van de beste oplossing voor uw betonproject.
            </p>

            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 text-white"
                >
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
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
          </motion.div>

          {/* Right column - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-6">Contactgegevens</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-solidbp-blue/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-solidbp-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Telefoon</p>
                    <a 
                      href={`tel:${companyInfo.phone}`}
                      className="text-lg font-semibold hover:text-solidbp-blue transition-colors"
                    >
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-solidbp-blue/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-solidbp-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">E-mail</p>
                    <a 
                      href={`mailto:${companyInfo.email}`}
                      className="text-lg font-semibold hover:text-solidbp-blue transition-colors"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-solidbp-blue/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-solidbp-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Openingstijden</p>
                    <p className="font-semibold">Maandag - Vrijdag</p>
                    <p className="text-muted-foreground">08:00 - 17:00</p>
                    <p className="text-sm text-solidbp-orange mt-1">24/7 spoedservice</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  Reactie binnen 24 uur gegarandeerd
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
