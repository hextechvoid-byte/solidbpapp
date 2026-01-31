import { SEO } from '@/components/seo';
import { 
  Hero, 
  Services, 
  WhyChooseUs, 
  Sectors, 
  Projects, 
  Testimonials, 
  Locations, 
  CTA 
} from '@/sections';
import { companyInfo } from '@/lib/data';
import { generateLocalBusinessSchema } from '@/lib/utils';

export function Home() {
  const jsonLd = generateLocalBusinessSchema(
    companyInfo.name,
    companyInfo.description,
    companyInfo.url,
    companyInfo.phone,
    companyInfo.address
  );

  return (
    <>
      <SEO
        title="Solidbp | Specialist in Betonreparatie & Coatings Limburg"
        description="Solidbp is dé specialist in duurzame betonoplossingen in Limburg. Betonreparatie, vloercoatings, kelderafdichting en meer. 20+ jaar ervaring. Gratis offerte!"
        canonical="https://www.solidbp.nl"
        jsonLd={jsonLd}
      />
      
      <Hero />
      <Services />
      <WhyChooseUs />
      <Sectors />
      <Projects />
      <Testimonials />
      <Locations />
      <CTA />
    </>
  );
}
