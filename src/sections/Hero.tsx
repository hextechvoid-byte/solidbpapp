import { motion } from 'framer-motion';
import { Check, Phone } from 'lucide-react';
import { CTAButton } from '@/components/ui-custom';

const trustBadges = [
  '20+ jaar ervaring',
  'Gecertificeerde specialisten',
  '5 jaar garantie',
  'Regio Limburg'
];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-solidbp-gray-dark via-solidbp-gray to-solidbp-gray-light">
        {/* Pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-6"
            >
              <span className="w-2 h-2 bg-solidbp-orange rounded-full animate-pulse" />
              Specialist in betonoplossingen
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Specialist in{' '}
              <span className="text-solidbp-orange">duurzame</span>{' '}
              betonoplossingen in Limburg
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
              Solidbp levert hoogwaardige betonreparatie, coatings en vloerherstel 
              voor woning, industrie en infrastructuur. Betrouwbaar, vakkundig en met garantie.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <CTAButton href="/offerte" variant="primary" size="lg">
                Gratis offerte aanvragen
              </CTAButton>
              <CTAButton href="/projecten" variant="outline" size="lg">
                Bekijk onze projecten
              </CTAButton>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 text-white/80"
                >
                  <Check className="w-5 h-5 text-solidbp-success" />
                  <span className="text-sm">{badge}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main image placeholder */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-solidbp-blue/30 to-solidbp-orange/30 border border-white/10">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-5xl font-bold text-white">S</span>
                    </div>
                    <p className="text-white/60 text-sm">Industriële vloer project</p>
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-solidbp-success/10 rounded-full flex items-center justify-center">
                    <Check className="w-6 h-6 text-solidbp-success" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">2500+</p>
                    <p className="text-sm text-muted-foreground">Projecten afgerond</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating card 2 */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -top-4 -right-4 bg-solidbp-orange text-white rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">24/7 Service</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
