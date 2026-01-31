import type { Sector } from '@/types';

export const sectors: Sector[] = [
  {
    id: 'woningbouw',
    slug: 'woningbouw',
    title: 'Woningbouw',
    description: 'Specialistische betonoplossingen voor de woningbouw. Van kelderafdichting tot stijlvolle woonbeton vloeren - wij maken uw woning compleet.',
    image: '/images/sectors/woningbouw.jpg',
    applications: [
      'Kelderafdichting en vochtbestrijding',
      'Woonbeton en design vloeren',
      'Gietvloeren voor woonruimtes',
      'Terras- en balkonafdichting',
      'Garagevloer coatings',
      'Funderingsherstel'
    ],
    benefits: [
      'Waardevermeerdering van uw woning',
      'Gezonder woonklimaat',
      'Lange levensduur',
      'Onderhoudsvriendelijk',
      'Veel design mogelijkheden',
      'Professioneel advies aan huis'
    ],
    caseStudies: [
      {
        title: 'Complete kelderrenovatie Maastricht',
        description: 'Volledige kelderafdichting met drainage systeem en vochtwering.',
        location: 'Maastricht',
        image: '/images/projects/kelder-maastricht.jpg'
      },
      {
        title: 'Design woonbeton villa',
        description: 'Gepolierde betonvloer met vloerverwarming in nieuwbouw villa.',
        location: 'Valkenburg',
        image: '/images/projects/woonbeton-valkenburg.jpg'
      }
    ],
    metaTitle: 'Betonvloeren Woningbouw Limburg | Solidbp',
    metaDescription: 'Specialist in betonoplossingen voor woningen in Limburg. Kelderafdichting, woonbeton, gietvloeren. Vraag offerte aan!'
  },
  {
    id: 'industrie',
    slug: 'industrie',
    title: 'Industrie',
    description: 'Zware industriële betonoplossingen voor fabrieken, magazijnen en productiebedrijven. Maximale duurzaamheid met minimale stilstand.',
    image: '/images/sectors/industrie.jpg',
    applications: [
      'Industriële vloercoatings',
      'Fabrieksvloer onderhoud',
      'Heftruckvloeren',
      'Chemisch resistente vloeren',
      'ESD vloeren',
      'Koel- en vrieshuis vloeren'
    ],
    benefits: [
      'Minimale productiestilstand',
      'Maximale belastbaarheid',
      'Langdurige bescherming',
      'Voldoet aan HACCP normen',
      '24/7 service mogelijk',
      'Snel uithardende systemen'
    ],
    caseStudies: [
      {
        title: 'Magazijn vloercoating Venlo',
        description: '15.000m² epoxy coating voor distributiecentrum.',
        location: 'Venlo',
        image: '/images/projects/magazijn-venlo.jpg'
      },
      {
        title: 'Productievloer renovatie',
        description: 'Sectie-gewijs herstel van productievloer tijdens weekenden.',
        location: 'Sittard',
        image: '/images/products/productie-sittard.jpg'
      }
    ],
    metaTitle: 'Industriële Vloeren Limburg | Fabrieksvloeren - Solidbp',
    metaDescription: 'Industriële betonvloeren en coatings in Limburg. Specialist in fabrieksvloeren. Minimale stilstand, maximale kwaliteit!'
  },
  {
    id: 'infrastructuur',
    slug: 'infrastructuur',
    title: 'Infrastructuur',
    description: 'Betrouwbare betonoplossingen voor infrastructurele projecten. Bruggen, tunnels, parkeergarages en wegen - wij zorgen voor duurzaamheid.',
    image: '/images/sectors/infrastructuur.jpg',
    applications: [
      'Bruggen en viaducten',
      'Parkeergarage vloeren',
      'Tunnelafdichting',
      'Wegen en opritten',
      'Kademuren',
      'Waterkerende constructies'
    ],
    benefits: [
      'Lange levensduur onder zware belasting',
      'Weerbestendige oplossingen',
      'Snelle uitvoering',
      'Minimale verkeershinder',
      'Gecertificeerde materialen',
      'Onderhoudscontracten mogelijk'
    ],
    caseStudies: [
      {
        title: 'Parkeergarage coating Heerlen',
        description: 'Complete renovatie parkeergarage met slijtvaste coating.',
        location: 'Heerlen',
        image: '/images/projects/parkeergarage-heerlen.jpg'
      },
      {
        title: 'Brugdek waterdichting',
        description: 'Vloeistofdichte afdichting van brugdek met beweegvoegen.',
        location: 'Roermond',
        image: '/images/projects/brug-roermond.jpg'
      }
    ],
    metaTitle: 'Infrastructuur Betonwerken Limburg | Solidbp',
    metaDescription: 'Infrastructurele betonoplossingen in Limburg. Bruggen, parkeergarages, tunnels. Specialist in duurzaam betonherstel!'
  },
  {
    id: 'commercieel',
    slug: 'commercieel',
    title: 'Commercieel',
    description: 'Representatieve betonvloeren voor winkels, kantoren en horeca. Combineer esthetiek met praktische duurzaamheid.',
    image: '/images/sectors/commercieel.jpg',
    applications: [
      'Winkelvloeren',
      'Kantoorvloeren',
      'Horeca vloeren',
      'Showroom vloeren',
      'Ontvangstruimtes',
      'Openbare gebouwen'
    ],
    benefits: [
      'Representatieve uitstraling',
      'Hoge belastbaarheid',
      'Eenvoudig onderhoud',
      'Snelle realisatie',
      'Veel design opties',
      'Slijtvast en duurzaam'
    ],
    caseStudies: [
      {
        title: 'Showroom gietvloer',
        description: 'Hoogglans gietvloer voor auto showroom met logo inleg.',
        location: 'Maastricht',
        image: '/images/projects/showroom-maastricht.jpg'
      },
      {
        title: 'Winkelketen vloeren',
        description: 'Meerdere filialen voorzien van slijtvaste winkelvloer.',
        location: 'Limburg breed',
        image: '/images/projects/winkel-limburg.jpg'
      }
    ],
    metaTitle: 'Commerciële Vloeren Limburg | Winkel & Kantoor - Solidbp',
    metaDescription: 'Commerciële betonvloeren voor winkels en kantoren in Limburg. Esthetisch en duurzaam. Vraag uw offerte aan!'
  }
];

export const getSectorBySlug = (slug: string): Sector | undefined => {
  return sectors.find(sector => sector.slug === slug);
};

export const getAllSectorSlugs = (): string[] => {
  return sectors.map(sector => sector.slug);
};
