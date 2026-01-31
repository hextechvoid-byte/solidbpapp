import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import { SEO, Breadcrumbs } from '@/components/seo';
import { BeforeAfterSlider } from '@/components/ui-custom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { projects, services } from '@/lib/data';
import { cn } from '@/lib/utils';

const filters = [
  { value: 'all', label: 'Alle projecten' },
  ...services.slice(0, 5).map(s => ({ value: s.category, label: s.shortTitle }))
];

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.service.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <>
      <SEO
        title="Projecten | Betonreparatie & Coating Referenties - Solidbp"
        description="Bekijk onze afgeronde projecten. Van industriële vloeren tot woonbeton - zie het resultaat van ons vakmanschap in Limburg."
        canonical="https://www.solidbp.nl/projecten"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-solidbp-blue to-solidbp-blue-dark py-20">
        <div className="container-custom">
          <Breadcrumbs 
            items={[{ label: 'Projecten' }]} 
            className="text-white/70 mb-6" 
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Onze Projecten
            </h1>
            <p className="text-lg text-white/80">
              Bekijk een selectie van onze recent afgeronde projecten. 
              Van industriële vloeren tot woonbeton - wij leveren kwaliteit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-border">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  activeFilter === filter.value
                    ? "bg-solidbp-blue text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={ref} className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
              >
                {/* Before/After Slider */}
                <BeforeAfterSlider
                  beforeImage={project.beforeImage}
                  afterImage={project.afterImage}
                  className="aspect-video"
                />

                {/* Content */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-solidbp-blue/10 text-solidbp-blue text-sm font-medium rounded-full">
                      {project.service}
                    </span>
                    <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {project.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2">
                    <Link 
                      to={`/projecten/${project.slug}`}
                      className="hover:text-solidbp-blue transition-colors"
                    >
                      {project.title}
                    </Link>
                  </h3>

                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(project.completionDate).toLocaleDateString('nl-NL', { month: 'long', year: 'numeric' })}</span>
                    </div>
                    <Link
                      to={`/projecten/${project.slug}`}
                      className="inline-flex items-center gap-2 text-solidbp-blue font-medium hover:gap-3 transition-all"
                    >
                      Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Geen projecten gevonden voor deze filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-solidbp-gray-dark to-solidbp-gray rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ook een project voor ons?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Neem contact met ons op voor een gratis offerte. 
              Wij denken graag met u mee over de beste oplossing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/offerte"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-solidbp-orange text-white font-semibold rounded-lg hover:bg-solidbp-orange-dark transition-colors"
              >
                Gratis offerte aanvragen
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                Contact opnemen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
