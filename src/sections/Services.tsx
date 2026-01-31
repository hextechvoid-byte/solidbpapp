import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ServiceCard, SectionHeader } from '@/components/ui-custom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { services } from '@/lib/data';

export function Services() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section ref={ref} className="section-padding bg-muted/30">
      <div className="container-custom">
        <SectionHeader
          subtitle="Onze Diensten"
          title="Specialismen in beton"
          description="Van reparatie tot renovatie, van coating tot complete vloeroplossingen. 
                      Solidbp biedt een compleet pakket aan betondiensten voor elke toepassing."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.slice(0, 6).map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <ServiceCard service={service} variant="featured" />
            </motion.div>
          ))}
        </motion.div>

        {/* View all services CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/diensten"
            className="inline-flex items-center gap-2 px-8 py-4 bg-solidbp-blue text-white font-semibold rounded-lg hover:bg-solidbp-blue-dark transition-colors"
          >
            Bekijk alle diensten
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
