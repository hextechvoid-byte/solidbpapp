import { motion } from 'framer-motion';
import { Award, Clock, Shield, Users, CheckCircle, ThumbsUp } from 'lucide-react';
import { SectionHeader, StatCounter } from '@/components/ui-custom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { stats } from '@/lib/data';

const uspItems = [
  {
    icon: Clock,
    title: '20+ jaar ervaring',
    description: 'Jarenlange expertise in betonreparatie en coatings voor alle sectoren.'
  },
  {
    icon: Award,
    title: 'Gecertificeerd',
    description: 'VCA, ISO 9001 en BRL 2506 gecertificeerd voor hoogste kwaliteit.'
  },
  {
    icon: Shield,
    title: 'Garantie op werk',
    description: '5 jaar garantie op alle uitgevoerde werkzaamheden en materialen.'
  },
  {
    icon: Users,
    title: 'Lokale specialist',
    description: 'Snelle reactietijd in heel Limburg door onze regionale aanwezigheid.'
  },
  {
    icon: CheckCircle,
    title: 'Duurzame oplossingen',
    description: 'Milieubewuste materialen en methoden voor een duurzaam resultaat.'
  },
  {
    icon: ThumbsUp,
    title: 'Tevreden klanten',
    description: '100% tevredenheidsgarantie en uitstekende klantbeoordelingen.'
  }
];

export function WhyChooseUs() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          subtitle="Waarom Solidbp"
          title="De voordelen van werken met Solidbp"
          description="Kies voor een betrouwbare partner met bewezen expertise en een track record van succesvolle projecten."
        />

        {/* USP Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {uspItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-solidbp-blue/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-solidbp-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-solidbp-blue to-solidbp-blue-dark rounded-2xl p-8 md:p-12"
        >
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
        </motion.div>
      </div>
    </section>
  );
}
