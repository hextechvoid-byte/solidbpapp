import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'magazijn-venlo-distributiecentrum',
    title: 'Distributiecentrum Venlo - Industriële Vloercoating',
    description: 'Complete vloercoating van 15.000m² distributiecentrum inclusief heftruckpaden en werkzones. Gebruik van 3-laags epoxy systeem voor maximale duurzaamheid.',
    location: 'Venlo',
    service: 'Industriële Coatings',
    beforeImage: '/images/projects/magazijn-venlo-before.jpg',
    afterImage: '/images/projects/magazijn-venlo-after.jpg',
    images: [
      '/images/projects/magazijn-venlo-1.jpg',
      '/images/projects/magazijn-venlo-2.jpg',
      '/images/projects/magazijn-venlo-3.jpg'
    ],
    completionDate: '2024-03-15',
    clientName: 'Logistiek Nederland B.V.',
    testimonial: {
      name: 'Peter Willems',
      company: 'Logistiek Nederland B.V.',
      rating: 5,
      text: 'Uitstekend werk geleverd binnen de afgesproken tijd. De vloer is nu perfect bestand tegen het intensieve heftruckverkeer.',
      image: '/images/testimonials/peter.jpg'
    }
  },
  {
    id: '2',
    slug: 'kelder-maastricht-herenhuis',
    title: 'Kelderafdichting Herenhuis Maastricht',
    description: 'Complete kelderrenovatie inclusief vochtwering, drainage systeem en nieuwe vloercoating. Het historische karakter van het pand is volledig behouden.',
    location: 'Maastricht',
    service: 'Waterdicht Maken',
    beforeImage: '/images/projects/kelder-maastricht-before.jpg',
    afterImage: '/images/projects/kelder-maastricht-after.jpg',
    images: [
      '/images/projects/kelder-maastricht-1.jpg',
      '/images/projects/kelder-maastricht-2.jpg'
    ],
    completionDate: '2024-02-20',
    clientName: 'Familie De Jong',
    testimonial: {
      name: 'Maria de Jong',
      rating: 5,
      text: 'Eindelijk een droge kelder! Het team werkte zeer netjes en professioneel in ons historische pand.',
      image: '/images/testimonials/maria.jpg'
    }
  },
  {
    id: '3',
    slug: 'parkeergarage-heerlen-centrum',
    title: 'Parkeergarage Heerlen Centrum - Renovatie',
    description: 'Complete renovatie van parkeergarage met slijtvaste coating, nieuwe belijning en waterdichte afdichting. Project uitgevoerd in fasen om openstelling te garanderen.',
    location: 'Heerlen',
    service: 'Slijtvaste Coatings',
    beforeImage: '/images/projects/parkeergarage-heerlen-before.jpg',
    afterImage: '/images/projects/parkeergarage-heerlen-after.jpg',
    images: [
      '/images/projects/parkeergarage-heerlen-1.jpg',
      '/images/projects/parkeergarage-heerlen-2.jpg',
      '/images/projects/parkeergarage-heerlen-3.jpg'
    ],
    completionDate: '2024-01-10',
    clientName: 'Gemeente Heerlen'
  },
  {
    id: '4',
    slug: 'woonbeton-valkenburg-villa',
    title: 'Design Woonbeton Villa Valkenburg',
    description: 'Gepolierde betonvloer met vloerverwarming in nieuwbouw villa. Afgewerkt in warme grijstint voor een industrieel-chique uitstraling.',
    location: 'Valkenburg',
    service: 'Woonbeton',
    beforeImage: '/images/projects/woonbeton-valkenburg-before.jpg',
    afterImage: '/images/projects/woonbeton-valkenburg-after.jpg',
    images: [
      '/images/projects/woonbeton-valkenburg-1.jpg',
      '/images/projects/woonbeton-valkenburg-2.jpg'
    ],
    completionDate: '2024-04-05',
    clientName: 'Familie Peters',
    testimonial: {
      name: 'Lisa Peters',
      rating: 5,
      text: 'De vloer is het pronkstuk van ons nieuwe huis geworden. Perfecte afwerking en heel fijn in combinatie met de vloerverwarming.',
      image: '/images/testimonials/lisa.jpg'
    }
  },
  {
    id: '5',
    slug: 'fabriek-sittard-productievloer',
    title: 'Productievloer Renovatie Sittard',
    description: 'Sectie-gewijs herstel van productievloer tijdens weekenden. Sneldrogende reparatiemortels toegepast om productiestilstand te minimaliseren.',
    location: 'Sittard',
    service: 'Industrieel Vloerherstel',
    beforeImage: '/images/projects/fabriek-sittard-before.jpg',
    afterImage: '/images/projects/fabriek-sittard-after.jpg',
    images: [
      '/images/projects/fabriek-sittard-1.jpg',
      '/images/projects/fabriek-sittard-2.jpg'
    ],
    completionDate: '2024-03-28',
    clientName: 'Productiebedrijf Sittard B.V.',
    testimonial: {
      name: 'Jan van den Berg',
      company: 'Productiebedrijf Sittard B.V.',
      rating: 5,
      text: 'Fantastisch hoe ze het werk hebben gepland. Geen enkele dag productieverlies en het resultaat is uitstekend.',
      image: '/images/testimonials/jan.jpg'
    }
  },
  {
    id: '6',
    slug: 'showroom-maastricht-gietvloer',
    title: 'Auto Showroom Maastricht - Gietvloer',
    description: 'Hoogglans gietvloer met ingegoten logo voor exclusieve auto showroom. Chemisch resistent en slijtvast voor intensief gebruik.',
    location: 'Maastricht',
    service: 'Gietvloeren',
    beforeImage: '/images/projects/showroom-maastricht-before.jpg',
    afterImage: '/images/projects/showroom-maastricht-after.jpg',
    images: [
      '/images/projects/showroom-maastricht-1.jpg',
      '/images/projects/showroom-maastricht-2.jpg',
      '/images/projects/showroom-maastricht-3.jpg'
    ],
    completionDate: '2024-02-14',
    clientName: 'Premium Cars Maastricht'
  },
  {
    id: '7',
    slug: 'brug-roermond-waterdichting',
    title: 'Brugdek Waterdichting Roermond',
    description: 'Vloeistofdichte afdichting van brugdek met beweegvoegen. Project uitgevoerd met minimale verkeershinder.',
    location: 'Roermond',
    service: 'Infrastructuur',
    beforeImage: '/images/projects/brug-roermond-before.jpg',
    afterImage: '/images/projects/brug-roermond-after.jpg',
    images: [
      '/images/projects/brug-roermond-1.jpg',
      '/images/projects/brug-roermond-2.jpg'
    ],
    completionDate: '2024-01-25',
    clientName: 'Provincie Limburg'
  },
  {
    id: '8',
    slug: 'winkel-roermond-vloer',
    title: 'Winkelketen Vloeren - Meerdere Locaties',
    description: 'Standaardisatie van winkelvloeren voor landelijke keten. Slijtvaste coating in huisstijl kleuren met antislip afwerking.',
    location: 'Roermond',
    service: 'Commercieel',
    beforeImage: '/images/projects/winkel-roermond-before.jpg',
    afterImage: '/images/projects/winkel-roermond-after.jpg',
    images: [
      '/images/projects/winkel-roermond-1.jpg',
      '/images/projects/winkel-roermond-2.jpg'
    ],
    completionDate: '2024-04-12',
    clientName: 'Fashion Retail Nederland'
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getProjectsByService = (service: string): Project[] => {
  return projects.filter(project => 
    project.service.toLowerCase().includes(service.toLowerCase())
  );
};

export const getProjectsByLocation = (location: string): Project[] => {
  return projects.filter(project => 
    project.location.toLowerCase().includes(location.toLowerCase())
  );
};

export const getAllProjectSlugs = (): string[] => {
  return projects.map(project => project.slug);
};

export const getRecentProjects = (count: number = 6): Project[] => {
  return projects
    .sort((a, b) => new Date(b.completionDate).getTime() - new Date(a.completionDate).getTime())
    .slice(0, count);
};
