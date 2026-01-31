import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionHeader, BeforeAfterSlider } from '@/components/ui-custom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { getRecentProjects } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Projects() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  const recentProjects = getRecentProjects(4);

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          subtitle="Projecten"
          title="Recente projecten"
          description="Bekijk een selectie van onze recent afgeronde projecten. 
                      Van industriële vloeren tot woonbeton - wij leveren kwaliteit."
        />

        {/* Featured Project with Before/After */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center bg-muted/30 rounded-2xl p-6 md:p-8">
            <BeforeAfterSlider
              beforeImage={recentProjects[0]?.beforeImage || ''}
              afterImage={recentProjects[0]?.afterImage || ''}
              className="aspect-video"
            />
            <div>
              <span className="inline-block px-3 py-1 bg-solidbp-blue/10 text-solidbp-blue text-sm font-medium rounded-full mb-4">
                Uitgelicht project
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {recentProjects[0]?.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {recentProjects[0]?.description}
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="px-4 py-2 bg-white rounded-lg">
                  <span className="text-sm text-muted-foreground">Locatie</span>
                  <p className="font-medium">{recentProjects[0]?.location}</p>
                </div>
                <div className="px-4 py-2 bg-white rounded-lg">
                  <span className="text-sm text-muted-foreground">Dienst</span>
                  <p className="font-medium">{recentProjects[0]?.service}</p>
                </div>
              </div>
              <Link
                to={`/projecten/${recentProjects[0]?.slug}`}
                className="inline-flex items-center gap-2 text-solidbp-blue font-medium hover:gap-3 transition-all"
              >
                Bekijk project details
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {recentProjects.slice(1, 4).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Link
                to={`/projecten/${project.slug}`}
                className={cn(
                  "group block rounded-xl overflow-hidden bg-white border border-border",
                  "hover:border-solidbp-blue hover:shadow-card transition-all duration-300"
                )}
              >
                <div className="aspect-video bg-gradient-to-br from-solidbp-blue/20 to-solidbp-orange/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">{project.service}</span>
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium">
                    {project.location}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold mb-2 group-hover:text-solidbp-blue transition-colors line-clamp-1">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-solidbp-blue text-sm font-medium group-hover:gap-3 transition-all">
                    <span>Bekijk project</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Link
            to="/projecten"
            className="inline-flex items-center gap-2 px-8 py-4 bg-solidbp-blue text-white font-semibold rounded-lg hover:bg-solidbp-blue-dark transition-colors"
          >
            Bekijk alle projecten
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
