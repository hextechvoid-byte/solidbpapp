import type { CompanyInfo } from '@/types';

export const companyInfo: CompanyInfo = {
  name: 'Solidbp',
  legalName: 'Solidbp B.V.',
  description: 'Solidbp is dé specialist in duurzame betonoplossingen in de regio Limburg. Wij leveren hoogwaardige betonreparatie, coatings, vloerherstel en waterdichting voor woning, industrie en infrastructuur. Met meer dan 20 jaar ervaring staan wij garant voor vakmanschap en betrouwbaarheid.',
  url: 'https://www.solidbp.nl',
  logo: '/images/logo/solidbp-logo.png',
  email: 'info@solidbp.nl',
  phone: '+31 (0)43 123 4567',
  address: {
    street: 'Industrieweg 1',
    city: 'Heerlen',
    postalCode: '6412 PK',
    region: 'Limburg',
    country: 'Nederland'
  },
  socialLinks: {
    facebook: 'https://www.facebook.com/solidbp',
    linkedin: 'https://www.linkedin.com/company/solidbp',
    instagram: 'https://www.instagram.com/solidbp'
  },
  openingHours: 'Mo-Fr 08:00-17:00',
  priceRange: '€€'
};

export const stats = [
  { value: 20, suffix: '+', label: 'Jaar ervaring' },
  { value: 2500, suffix: '+', label: 'Projecten afgerond' },
  { value: 100, suffix: '%', label: 'Tevreden klanten' },
  { value: 20, suffix: '', label: 'Limburgse gemeenten' }
];

export const testimonials = [
  {
    name: 'Jan van den Berg',
    company: 'Bouwbedrijf Van den Berg',
    rating: 5,
    text: 'Solidbp heeft uitstekend werk geleverd bij de renovatie van ons magazijn. De vloer ziet er perfect uit en de communicatie verliep soepel.',
    image: '/images/testimonials/jan.jpg'
  },
  {
    name: 'Maria Jansen',
    company: 'Particulier, Maastricht',
    rating: 5,
    text: 'Onze kelder was al jaren vochtig. Solidbp heeft dit perfect opgelost met een professionele afdichting. Eindelijk een droge kelder!',
    image: '/images/testimonials/maria.jpg'
  },
  {
    name: 'Peter Willems',
    company: 'Logistiek Nederland B.V.',
    rating: 5,
    text: 'Snelle en professionele uitvoering van onze heftruckvloer. Minimale hinder voor onze dagelijkse operatie. Aanbevolen!',
    image: '/images/testimonials/peter.jpg'
  },
  {
    name: 'Lisa Hendriks',
    company: 'Hendriks Horeca',
    rating: 5,
    text: 'Onze nieuwe gietvloer in het restaurant is prachtig geworden. Solidbp dacht goed mee over het design en de uitvoering was vlekkeloos.',
    image: '/images/testimonials/lisa.jpg'
  }
];

export const certifications = [
  { name: 'VCA', description: 'Veiligheidscertificaat', logo: '/images/certifications/vca.png' },
  { name: 'ISO 9001', description: 'Kwaliteitsmanagement', logo: '/images/certifications/iso9001.png' },
  { name: 'BRL 2506', description: 'Betonreparatie', logo: '/images/certifications/brl2506.png' },
  { name: 'KOMO', description: 'Kwaliteitskeurmerk', logo: '/images/certifications/komo.png' }
];

export const navigation = {
  main: [
    { label: 'Home', href: '/' },
    { 
      label: 'Diensten', 
      href: '/diensten',
      children: [
        { label: 'Betonreparatie', href: '/diensten/betonreparatie-betonrenovatie' },
        { label: 'Scheurenherstel', href: '/diensten/scheurenherstel' },
        { label: 'Vloercoating', href: '/diensten/coating-bevonatolas' },
        { label: 'Industriële Coatings', href: '/diensten/industriele-coatings' },
        { label: 'Waterdicht Maken', href: '/diensten/waterdicht-maken' },
        { label: 'Woonbeton', href: '/diensten/woonbeton-design-vloeren' },
        { label: 'Gietvloeren', href: '/diensten/gietvloeren' },
        { label: 'Slijtvaste Coatings', href: '/diensten/slijtvaste-coatings' },
        { label: 'Industrieel Herstel', href: '/diensten/industriele-vloerherstel' }
      ]
    },
    { 
      label: 'Sectoren', 
      href: '/sectoren',
      children: [
        { label: 'Woningbouw', href: '/sectoren/woningbouw' },
        { label: 'Industrie', href: '/sectoren/industrie' },
        { label: 'Infrastructuur', href: '/sectoren/infrastructuur' },
        { label: 'Commercieel', href: '/sectoren/commercieel' }
      ]
    },
    { label: 'Projecten', href: '/projecten' },
    { label: 'Over ons', href: '/over-ons' },
    { label: 'Contact', href: '/contact' }
  ],
  footer: {
    diensten: [
      { label: 'Betonreparatie', href: '/diensten/betonreparatie-betonrenovatie' },
      { label: 'Vloercoating', href: '/diensten/coating-bevonatolas' },
      { label: 'Kelderafdichting', href: '/diensten/waterdicht-maken' },
      { label: 'Industriële vloeren', href: '/diensten/industriele-coatings' },
      { label: 'Gietvloeren', href: '/diensten/gietvloeren' },
      { label: 'Alle diensten', href: '/diensten' }
    ],
    sectoren: [
      { label: 'Woningbouw', href: '/sectoren/woningbouw' },
      { label: 'Industrie', href: '/sectoren/industrie' },
      { label: 'Infrastructuur', href: '/sectoren/infrastructuur' },
      { label: 'Commercieel', href: '/sectoren/commercieel' }
    ],
    bedrijf: [
      { label: 'Over ons', href: '/over-ons' },
      { label: 'Projecten', href: '/projecten' },
      { label: 'Contact', href: '/contact' },
      { label: 'Offerte aanvragen', href: '/offerte' }
    ],
    locaties: [
      { label: 'Heerlen', href: '/locaties/heerlen' },
      { label: 'Maastricht', href: '/locaties/maastricht' },
      { label: 'Sittard', href: '/locaties/sittard' },
      { label: 'Venlo', href: '/locaties/venlo' },
      { label: 'Alle locaties', href: '/locaties' }
    ]
  }
};
