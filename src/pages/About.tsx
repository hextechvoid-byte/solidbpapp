import { motion } from 'framer-motion';
import { SEO, Breadcrumbs } from '@/components/seo';
import { SectionHeader, StatCounter } from '@/components/ui-custom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { stats, certifications } from '@/lib/data';
import { Award, Users, Target } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Kwaliteit',
    description: 'Wij leveren alleen het hoogste niveau van vakmanschap en gebruiken uitsluitend gecertificeerde materialen.'
  },
  {
    icon: Users,
    title: 'Betrouwbaarheid',
    description: 'Afspraak is afspraak. Wij komen onze beloften na en communiceren transparant over het verloop van uw project.'
  },
  {
    icon: Award,
    title: 'Innovatie',
    description: 'Wij blijven investeren in nieuwe technieken en materialen om onze klanten de beste oplossingen te bieden.'
  }
];

const milestones = [
  { year: '2004', title: 'Oprichting Solidbp', description: 'Gestart als specialist in betonreparatie' },
  { year: '2010', title: 'Uitbreiding diensten', description: 'Coatings en vloeroplossingen toegevoegd' },
  { year: '2015', title: 'VCA certificering', description: 'Gecertificeerd voor veilige werkpraktijken' },
  { year: '2020', title: '20 jaar jubileum', description: 'Meer dan 2000 succesvolle projecten' },
  { year: '2024', title: 'Marktleider Limburg', description: 'Dé betonspecialist in de regio' }
];

export function About() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <>
      <SEO
        title="Over Ons | Solidbp - Betonspecialist Limburg"
        description="Leer meer over Solidbp, dé specialist in betonreparatie en coatings in Limburg. 20+ jaar ervaring, gecertificeerd en betrouwbaar."
        canonical="https://www.solidbp.nl/over-ons"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-solidbp-blue to-solidbp-blue-dark py-20">
        <div className="container-custom">
          <Breadcrumbs 
            items={[{ label: 'Over ons' }]} 
            className="text-white/70 mb-6" 
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Over Solidbp
            </h1>
            <p className="text-lg text-white/80">
              Al meer dan 20 jaar dé betrouwbare partner voor betonoplossingen in Limburg. 
              Van kleine reparaties tot grootschalige projecten - wij staan voor u klaar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
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
                Ons verhaal
              </span>
              <h2 className="text-3xl font-bold mb-6">
                Van passie voor beton naar marktleider
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Solidbp is in 2004 opgericht met één duidelijke missie: het leveren van 
                  hoogwaardige betonoplossingen voor de regio Limburg. Wat begon als een 
                  klein bedrijf gespecialiseerd in betonreparatie, is uitgegroeid tot een 
                  veelzijdige organisatie die alle aspecten van betonwerk cover.
                </p>
                <p>
                  Door de jaren heen hebben wij onze expertise continu uitgebreid. Van 
                  traditionele betonreparatie zijn we doorgegroeid naar gespecialiseerde 
                  coatings, gietvloeren en waterdichtingsoplossingen. Dit alles met behoud 
                  van onze kernwaarden: kwaliteit, betrouwbaarheid en klanttevredenheid.
                </p>
                <p>
                  Vandaag de dag zijn wij trots op onze positie als marktleider in Limburg. 
                  Met een team van ervaren vakmensen en de nieuwste technieken staan wij klaar 
                  om ook uw project tot een succes te maken.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-solidbp-blue/20 to-solidbp-orange/20 rounded-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
                <p className="text-4xl font-bold text-solidbp-blue mb-1">20+</p>
                <p className="text-muted-foreground">Jaar ervaring</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={ref} className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionHeader
            subtitle="Onze waarden"
            title="Waar staan wij voor?"
            description="Onze kernwaarden vormen de basis van alles wat wij doen. 
                        Van elk project tot elke klantinteractie."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-card"
                >
                  <div className="w-14 h-14 rounded-xl bg-solidbp-blue/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-solidbp-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-gradient-to-br from-solidbp-blue to-solidbp-blue-dark">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <StatCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  delay={index * 200}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Onze geschiedenis</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Een terugblik op de belangrijkste mijlpalen in de geschiedenis van Solidbp.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 pb-8 last:pb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-solidbp-blue text-white flex items-center justify-center font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-4" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-sm text-solidbp-blue font-medium">{milestone.year}</span>
                  <h3 className="text-lg font-bold mt-1">{milestone.title}</h3>
                  <p className="text-muted-foreground mt-1">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Certificeringen</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Wij voldoen aan de strengste kwaliteitsnormen en zijn gecertificeerd 
              voor diverse specialisaties.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-card"
              >
                <div className="w-16 h-16 bg-solidbp-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-solidbp-blue" />
                </div>
                <h3 className="font-bold mb-1">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-solidbp-orange to-solidbp-orange-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Wilt u meer weten?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Neem contact met ons op voor meer informatie over onze diensten 
            of om een vrijblijvende offerte aan te vragen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-solidbp-orange font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact opnemen
            </a>
            <a
              href="/offerte"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              Offerte aanvragen
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
