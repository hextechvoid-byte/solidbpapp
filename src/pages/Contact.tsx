import { motion } from 'framer-motion';
import { SEO, Breadcrumbs } from '@/components/seo';
import { Phone, Mail, MapPin, Clock, Check } from 'lucide-react';
import { companyInfo } from '@/lib/data';
import { cn } from '@/lib/utils';

const contactMethods = [
  {
    icon: Phone,
    title: 'Telefoon',
    value: companyInfo.phone,
    href: `tel:${companyInfo.phone}`,
    description: 'Bereikbaar tijdens kantooruren'
  },
  {
    icon: Mail,
    title: 'E-mail',
    value: companyInfo.email,
    href: `mailto:${companyInfo.email}`,
    description: 'Reactie binnen 24 uur'
  },
  {
    icon: MapPin,
    title: 'Adres',
    value: `${companyInfo.address.street}, ${companyInfo.address.postalCode} ${companyInfo.address.city}`,
    description: 'Bezoek op afspraak'
  },
  {
    icon: Clock,
    title: 'Openingstijden',
    value: 'Ma - Vr: 08:00 - 17:00',
    description: '24/7 spoedservice beschikbaar'
  }
];

export function Contact() {
  return (
    <>
      <SEO
        title="Contact | Solidbp - Betonspecialist Limburg"
        description="Neem contact op met Solidbp voor betonreparatie, coatings en vloeroplossingen in Limburg. Telefoon, e-mail of bezoek ons op afspraak."
        canonical="https://www.solidbp.nl/contact"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-solidbp-blue to-solidbp-blue-dark py-20">
        <div className="container-custom">
          <Breadcrumbs 
            items={[{ label: 'Contact' }]} 
            className="text-white/70 mb-6" 
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact
            </h1>
            <p className="text-lg text-white/80">
              Heeft u vragen of wilt u een offerte aanvragen? Neem contact met ons op. 
              Wij staan klaar om u te helpen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              const content = (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={cn(
                    "bg-muted/30 rounded-2xl p-6 h-full",
                    method.href && "hover:bg-muted/50 transition-colors cursor-pointer"
                  )}
                >
                  <div className="w-14 h-14 rounded-xl bg-solidbp-blue/10 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-solidbp-blue" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{method.title}</h3>
                  <p className="text-foreground font-medium mb-1">{method.value}</p>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </motion.div>
              );

              return method.href ? (
                <a key={method.title} href={method.href}>
                  {content}
                </a>
              ) : (
                <div key={method.title}>{content}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map & Form Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6">Onze locatie</h2>
              <div className="aspect-video bg-gradient-to-br from-solidbp-blue/10 to-solidbp-orange/10 rounded-2xl border border-border flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-solidbp-blue mx-auto mb-4" />
                  <p className="font-medium">{companyInfo.address.street}</p>
                  <p className="text-muted-foreground">
                    {companyInfo.address.postalCode} {companyInfo.address.city}
                  </p>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-solidbp-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Gratis parkeergelegenheid</p>
                    <p className="text-sm text-muted-foreground">Voor bezoekers beschikbaar</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-solidbp-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Bezoek op afspraak</p>
                    <p className="text-sm text-muted-foreground">Wij ontvangen u graag na telefonische afspraak</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick contact form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6">Snel contact</h2>
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <p className="text-muted-foreground mb-6">
                  Vul het formulier in en wij nemen zo snel mogelijk contact met u op.
                  Voor een uitgebreide offerte kunt u het beste{' '}
                  <a href="/offerte" className="text-solidbp-blue hover:underline">
                    dit formulier
                  </a>{' '}
                  gebruiken.
                </p>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Naam *</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-solidbp-blue focus:border-transparent"
                        placeholder="Uw naam"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Telefoon</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-solidbp-blue focus:border-transparent"
                        placeholder="Uw telefoonnummer"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">E-mail *</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-solidbp-blue focus:border-transparent"
                      placeholder="uw@email.nl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Bericht *</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-solidbp-blue focus:border-transparent resize-none"
                      placeholder="Uw bericht..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-solidbp-blue text-white font-semibold rounded-lg hover:bg-solidbp-blue-dark transition-colors"
                  >
                    Versturen
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-solidbp-blue to-solidbp-blue-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Liever direct een offerte?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Vraag een gratis en vrijblijvende offerte aan. Binnen 24 uur ontvangt u 
            een voorstel op maat.
          </p>
          <a
            href="/offerte"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-solidbp-orange text-white font-semibold rounded-lg hover:bg-solidbp-orange-dark transition-colors"
          >
            Offerte aanvragen
          </a>
        </div>
      </section>
    </>
  );
}
