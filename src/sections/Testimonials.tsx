import { motion } from 'framer-motion';
import { SectionHeader, TestimonialCard } from '@/components/ui-custom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { testimonials } from '@/lib/data';

export function Testimonials() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="section-padding bg-muted/30">
      <div className="container-custom">
        <SectionHeader
          subtitle="Klantbeoordelingen"
          title="Wat onze klanten zeggen"
          description="Lees de ervaringen van tevreden klanten die Solidbp hebben ingeschakeld 
                      voor hun betonprojecten."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <TestimonialCard testimonial={testimonial} variant="compact" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
