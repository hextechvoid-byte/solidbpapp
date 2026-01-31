import type { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'betonreparatie',
    slug: 'betonreparatie-betonrenovatie',
    title: 'Betonreparatie en Betonrenovatie',
    shortTitle: 'Betonreparatie',
    description: 'Professionele betonreparatie en renovatie voor alle soorten betonconstructies. Van kleine scheuren tot grootscheepse renovaties.',
    shortDescription: 'Expert in het herstellen van beschadigd beton, scheuren en verouderde constructies.',
    icon: 'Hammer',
    image: '/images/services/betonreparatie-hero.jpg',
    category: 'reparatie',
    features: [
      'Scheurinjectie en -herstel',
      'Betonversterking',
      'Carbonatisatieherstel',
      'Chloride-extractie',
      'Betonvervanging',
      'Oppervlaktebescherming'
    ],
    benefits: [
      'Verlengde levensduur van uw constructie',
      'Voorkoming van verdere schade',
      'Structurele integriteit hersteld',
      'Waterdichte afwerking mogelijk',
      'Gecertificeerde werkwijze',
      '5 jaar garantie op uitgevoerd werk'
    ],
    process: [
      {
        step: 1,
        title: 'Inspectie en analyse',
        description: 'Grondige visuele inspectie en eventueel materiaalonderzoek om de oorzaak en omvang van de schade te bepalen.'
      },
      {
        step: 2,
        title: 'Voorbereiding',
        description: 'Reinigen van het oppervlak, verwijderen van losse delen en voorbereiden van de reparatiezone.'
      },
      {
        step: 3,
        title: 'Reparatie uitvoering',
        description: 'Toepassen van speciale reparatiemortels, injecteren van scheuren en herstellen van de constructie.'
      },
      {
        step: 4,
        title: 'Nabehandeling',
        description: 'Afwerking, beschermende coatings en kwaliteitscontrole volgens NEN-normen.'
      }
    ],
    faq: [
      {
        question: 'Hoe lang duurt een betonreparatie?',
        answer: 'De duur hangt af van de omvang van de schade. Kleine reparaties kunnen binnen een dag worden uitgevoerd, grotere projecten duren meestal 3-7 werkdagen.'
      },
      {
        question: 'Is betonreparatie duurzaam?',
        answer: 'Ja, wanneer correct uitgevoerd met kwalitatieve materialen, kan gerepareerd beton decennialang meegaan. Wij geven 5 jaar garantie op ons werk.'
      },
      {
        question: 'Kan betonreparatie in de winter?',
        answer: 'Ja, met speciale wintermortels en verwarmingstechnieken kunnen we het hele jaar door werken, mits de temperatuur boven het vriespunt blijft tijdens de uitharding.'
      },
      {
        question: 'Wat kost betonreparatie?',
        answer: 'De kosten variëren sterk per project. Vraag een gratis offerte aan voor een nauwkeurige prijsindicatie op maat.'
      }
    ],
    relatedServices: ['scheurenherstel', 'industriele-coatings', 'waterdicht-maken'],
    metaTitle: 'Betonreparatie Limburg | Specialist in Betonrenovatie - Solidbp',
    metaDescription: 'Professionele betonreparatie in Limburg. Scheurherstel, betonrenovatie en constructieherstel. 20+ jaar ervaring. Gratis offerte!'
  },
  {
    id: 'scheurenherstel',
    slug: 'scheurenherstel',
    title: 'Scheurenherstel en Scheurinjectie',
    shortTitle: 'Scheurenherstel',
    description: 'Specialistisch scheurenherstel door middel van injectietechnieken. Duurzame oplossingen voor alle soorten scheuren in beton.',
    shortDescription: 'Effectieve injectietechnieken voor het permanent dichten van scheuren in beton.',
    icon: 'Wrench',
    image: '/images/services/scheurenherstel-hero.jpg',
    category: 'reparatie',
    features: [
      'Epoxy-injectie',
      'Polyurethaan-injectie',
      'Cement-injectie',
      'Structureel herstel',
      'Waterdichte afdichting',
 'Bewegingsvoeg herstel'
    ],
    benefits: [
      'Permanente afdichting',
      'Structurele verbinding',
      'Waterdicht resultaat',
      'Minimale visuele impact',
      'Snelle uitvoering',
      'Kosteneffectief'
    ],
    process: [
      {
        step: 1,
        title: 'Scheuranalyse',
        description: 'Bepalen van het scheurtype, oorzaak en de beste injectiemethode.'
      },
      {
        step: 2,
        title: 'Voorbereiding',
        description: 'Reinigen van de scheur en aanbrengen van injectiepakketten.'
      },
      {
        step: 3,
        title: 'Injectie',
        description: 'Gecontroleerd injecteren van het reparatiemateriaal onder druk.'
      },
      {
        step: 4,
        title: 'Afwerking',
        description: 'Verwijderen van pakketten en nabewerken van het oppervlak.'
      }
    ],
    faq: [
      {
        question: 'Wanneer is scheurinjectie nodig?',
        answer: 'Bij actieve lekkages, structurele scheuren of wanneer waterindringing moet worden voorkomen.'
      },
      {
        question: 'Hoe lang duurt scheurinjectie?',
        answer: 'De meeste injecties worden binnen 1-2 dagen uitgevoerd, afhankelijk van de lengte en complexiteit.'
      },
      {
        question: 'Is injectie beter dan vervangen?',
        answer: 'Vaak wel - het is sneller, goedkoper en even duurzaam als correct uitgevoerd.'
      }
    ],
    relatedServices: ['betonreparatie-betonrenovatie', 'waterdicht-maken', 'industriele-coatings'],
    metaTitle: 'Scheurenherstel Limburg | Scheurinjectie Specialist - Solidbp',
    metaDescription: 'Scheurenherstel door experts in Limburg. Epoxy en polyurethaan injectie voor duurzame reparatie. Gratis inspectie!'
  },
  {
    id: 'coating',
    slug: 'coating-bevonatolas',
    title: 'Betoncoating en Vloercoating',
    shortTitle: 'Vloercoating',
    description: 'Hoogwaardige coatingoplossingen voor betonvloeren. Bescherming, esthetiek en duurzaamheid in één systeem.',
    shortDescription: 'Professionele coatings voor bescherming en verfraaiing van betonvloeren.',
    icon: 'Paintbrush',
    image: '/images/services/coating-hero.jpg',
    category: 'coating',
    features: [
      'Epoxy coatings',
      'Polyurethaan coatings',
      'Acrylaat coatings',
      'Antislip afwerkingen',
      'Chemisch resistente coatings',
      'Decoratieve finishes'
    ],
    benefits: [
      'Uitstekende slijtvastheid',
      'Chemische bestendigheid',
      'Eenvoudig schoon te houden',
      'Esthetisch aantrekkelijk',
      'Verlengde levensduur vloer',
      'Snelle doorlooptijd'
    ],
    process: [
      {
        step: 1,
        title: 'Ondergrond analyse',
        description: 'Beoordeling van de vloerconditie en bepaling van het juiste coatingsysteem.'
      },
      {
        step: 2,
        title: 'Voorbereiding',
        description: 'Reinigen, schuren of stralen van de vloer voor optimale hechting.'
      },
      {
        step: 3,
        title: 'Coating applicatie',
        description: 'Aanbrengen van primer, basislaag en toplaag volgens specificatie.'
      },
      {
        step: 4,
        title: 'Uitharding',
        description: 'Controle van uitharding en oplevering met kwaliteitsrapport.'
      }
    ],
    faq: [
      {
        question: 'Hoe lang gaat een vloercoating mee?',
        answer: 'Met goed onderhoud gaat een kwalitatieve coating 10-15 jaar mee in industriële omgevingen, langer in woonruimtes.'
      },
      {
        question: 'Kan coating over oude verf?',
        answer: 'Nee, oude verf moet worden verwijderd voor optimale hechting en duurzaamheid.'
      },
      {
        question: 'Hoelang is de vloer niet beloopbaar?',
        answer: 'Meestal 24-48 uur voor licht beloop, volledige belasting na 5-7 dagen.'
      }
    ],
    relatedServices: ['industriele-coatings', 'slijtvaste-coatings', 'woonbeton-design-vloeren'],
    metaTitle: 'Vloercoating Limburg | Betoncoating Specialist - Solidbp',
    metaDescription: 'Professionele vloercoating in Limburg. Epoxy en PU coatings voor industriële en commerciële vloeren. Vraag uw offerte aan!'
  },
  {
    id: 'industriele-coatings',
    slug: 'industriele-coatings',
    title: 'Industriële Vloercoatings',
    shortTitle: 'Industriële Coatings',
    description: 'Zware industriële coatingsystemen voor fabrieken, magazijnen en productieruimtes. Maximale bescherming onder extreme omstandigheden.',
    shortDescription: 'Zware coatingsystemen voor industriële vloeren met maximale belasting.',
    icon: 'Factory',
    image: '/images/services/industriele-coatings-hero.jpg',
    category: 'industrieel',
    features: [
      'Hogedrukbestendige coatings',
      'Chemisch resistente systemen',
      'ESD/anti-statische vloeren',
      'Hygienische coatings (HACCP)',
      'Temperatuurbestendige coatings',
      'Snel uithardende systemen'
    ],
    benefits: [
      'Minimale productiestilstand',
      'Maximale bescherming',
      'Lange onderhoudsintervallen',
      'Voldoet aan industriële normen',
      'Maatwerk oplossingen',
      '24/7 service mogelijk'
    ],
    process: [
      {
        step: 1,
        title: 'Situatie analyse',
        description: 'In kaart brengen van belasting, chemicaliën, temperatuur en gebruiksintensiteit.'
      },
      {
        step: 2,
        title: 'Systeem selectie',
        description: 'Keuze van het optimale coatingsysteem op basis van analyse.'
      },
      {
        step: 3,
        title: 'Professionele applicatie',
        description: 'Uitvoering door gecertificeerde vakmensen met industriële ervaring.'
      },
      {
        step: 4,
        title: 'Kwaliteitsborging',
        description: 'Testen en certificeren volgens industriële standaarden.'
      }
    ],
    faq: [
      {
        question: 'Kan coating tijdens productie?',
        answer: 'Ja, met speciale snel uithardende systemen en fasering van het werk.'
      },
      {
        question: 'Wat kost een industriële vloer?',
        answer: 'Prijs hangt af van oppervlakte, systeem en toegankelijkheid. Vraag een offerte voor exacte prijs.'
      },
      {
        question: 'Hoe snel is de vloer weer beloopbaar?',
        answer: 'Met snelsystemen al binnen 4-6 uur licht beloopbaar, volledig na 24 uur.'
      }
    ],
    relatedServices: ['coating-bevonatolas', 'slijtvaste-coatings', 'industriele-vloerherstel'],
    metaTitle: 'Industriële Vloercoating Limburg | Fabrieksvloeren - Solidbp',
    metaDescription: 'Industriële vloercoatings voor fabrieken en magazijnen in Limburg. Specialist in zware belasting. Vraag offerte aan!'
  },
  {
    id: 'waterdicht',
    slug: 'waterdicht-maken',
    title: 'Waterdicht Maken en Kelderafdichting',
    shortTitle: 'Waterdicht Maken',
    description: 'Complete waterdichtingsoplossingen voor kelders, funderingen, balkons en terrassen. Voorgoed af van vocht en lekkage.',
    shortDescription: 'Professionele afdichting tegen vocht en water voor kelders en funderingen.',
    icon: 'Droplets',
    image: '/images/services/waterdicht-hero.jpg',
    category: 'waterdicht',
    features: [
      'Kelderafdichting',
      'Funderingswaterdichting',
      'Balkon- en terrasafdichting',
      'Injectie tegen opstijgend vocht',
      'Drainage systemen',
      'Vochtwerende coatings'
    ],
    benefits: [
      'Permanente vochtbestrijding',
      'Preventie van schimmels',
      'Waardevermeerdering woning',
      'Gezonder binnenklimaat',
      'Energiebesparing',
      '10 jaar garantie'
    ],
    process: [
      {
        step: 1,
        title: 'Vochtonderzoek',
        description: 'Grondige analyse van vochtbronnen en lekkagepunten.'
      },
      {
        step: 2,
        title: 'Ontwatering',
        description: 'Eventueel aanleggen van drainage en pompsystemen.'
      },
      {
        step: 3,
        title: 'Afdichting',
        description: 'Aanbrengen van bitumineuze of kunststof afdichtingslagen.'
      },
      {
        step: 4,
        title: 'Nabehandeling',
        description: 'Aanbrengen van beschermlaag en eindcontrole.'
      }
    ],
    faq: [
      {
        question: 'Hoe weet ik of mijn kelder vochtig is?',
        answer: 'Tekenen zijn: muffe geur, schimmel, afbladderende verf, kalkuitslag en vochtige muren.'
      },
      {
        question: 'Is kelderafdichting duur?',
        answer: 'Investering varieert per situatie, maar voorkomt veel grotere schadekosten op termijn.'
      },
      {
        question: 'Hoelang duurt kelderafdichting?',
        answer: 'De meeste projecten duren 3-7 werkdagen, afhankelijk van de omvang.'
      }
    ],
    relatedServices: ['betonreparatie-betonrenovatie', 'scheurenherstel', 'coating-bevonatolas'],
    metaTitle: 'Kelderafdichting Limburg | Waterdicht Maken - Solidbp',
    metaDescription: 'Kelderafdichting en waterdicht maken in Limburg. Specialist in vochtbestrijding. Gratis inspectie en offerte!'
  },
  {
    id: 'woonbeton',
    slug: 'woonbeton-design-vloeren',
    title: 'Woonbeton en Design Betonvloeren',
    shortTitle: 'Woonbeton',
    description: 'Stijlvolle betonvloeren voor woningen. Van industrieel tot warm en uitnodigend - de perfecte vloer voor elk interieur.',
    shortDescription: 'Moderne betonvloeren voor een stijlvol en industrieel interieur.',
    icon: 'Home',
    image: '/images/services/woonbeton-hero.jpg',
    category: 'woonbeton',
    features: [
      'Gepolierde betonvloeren',
      'Gebrande betonvloeren',
      'Gekleurde betonvloeren',
      'Betonlook vloeren',
      'Vloerverwarming geschikt',
      'Mat of hoogglans afwerking'
    ],
    benefits: [
      'Unieke uitstraling',
      'Onderhoudsvriendelijk',
      'Hypoallergeen',
      'Levenslang mee',
      'Verwarmingsefficiënt',
      'Veel kleurmogelijkheden'
    ],
    process: [
      {
        step: 1,
        title: 'Advies en kleurkeuze',
        description: 'Persoonlijk advies en bepaling van de gewenste uitstraling.'
      },
      {
        step: 2,
        title: 'Voorbereiding',
        description: 'Egaliseren en voorbereiden van de ondergrond.'
      },
      {
        step: 3,
        title: 'Applicatie',
        description: 'Aanbrengen van designbeton in de gekozen kleur en structuur.'
      },
      {
        step: 4,
        title: 'Afwerking',
        description: 'Polijsten, impregneren of sealen voor het gewenste resultaat.'
      }
    ],
    faq: [
      {
        question: 'Is woonbeton koud?',
        answer: 'Nee, in combinatie met vloerverwarming is beton juist zeer comfortabel en warmte-efficiënt.'
      },
      {
        question: 'Hoe onderhoud ik een betonvloer?',
        answer: 'Regelmatig stofzuigen en dweilen met neutraal reinigingsmiddel is voldoende.'
      },
      {
        question: 'Kan beton over een bestaande vloer?',
        answer: 'Ja, meestal kan er een dunne laag designbeton worden aangebracht over de bestaande vloer.'
      }
    ],
    relatedServices: ['gietvloeren', 'coating-bevonatolas', 'slijtvaste-coatings'],
    metaTitle: 'Woonbeton Limburg | Design Betonvloeren - Solidbp',
    metaDescription: 'Woonbeton en design betonvloeren in Limburg. Stijlvolle vloeren voor uw woning. Bekijk mogelijkheden en vraag offerte!'
  },
  {
    id: 'gietvloer',
    slug: 'gietvloeren',
    title: 'Gietvloeren en Design Vloeren',
    shortTitle: 'Gietvloeren',
    description: 'Naadloze gietvloeren voor een moderne uitstraling. Perfect voor woningen, showrooms en kantoren die iets bijzonders verdienen.',
    shortDescription: 'Naadloze gietvloeren voor een luxe en moderne uitstraling.',
    icon: 'Layers',
    image: '/images/services/gietvloer-hero.jpg',
    category: 'gietvloer',
    features: [
      'Epoxy gietvloeren',
      'PU gietvloeren',
      'Acrylaat gietvloeren',
      'Decoratieve gietvloeren',
      '3D gietvloeren',
      'Marmerlook vloeren'
    ],
    benefits: [
      '100% naadloos',
      'Hygiënisch en eenvoudig schoon',
      'Chemisch resistent',
      'Veel design mogelijkheden',
      'Slijtvast en duurzaam',
      'Vloeistofdicht'
    ],
    process: [
      {
        step: 1,
        title: 'Ontwerp consult',
        description: 'Samen bepalen we kleur, structuur en afwerking van uw gietvloer.'
      },
      {
        step: 2,
        title: 'Ondergrond voorbereiding',
        description: 'Vloer egaliseren en voorbereiden voor optimale hechting.'
      },
      {
        step: 3,
        title: 'Gieten en verdelen',
        description: 'Vakkundig aanbrengen en uitgieten van de gietvloer.'
      },
      {
        step: 4,
        title: 'Afwerking',
        description: 'Aanbrengen van seal-laag voor bescherming en glans.'
      }
    ],
    faq: [
      {
        question: 'Hoelang duurt het aanbrengen van een gietvloer?',
        answer: 'Een gemiddelde woonruimte kan binnen 2-3 dagen worden voorzien van een gietvloer.'
      },
      {
        question: 'Is een gietvloer krasgevoelig?',
        answer: 'Met de juiste beschermlaag zijn gietvloeren zeer slijtvast, maar scherpe voorwerpen kunnen krassen veroorzaken.'
      },
      {
        question: 'Kan een gietvloer worden gerepareerd?',
        answer: 'Ja, kleine beschadigingen kunnen lokaal worden gerepareerd zonder de hele vloer te vervangen.'
      }
    ],
    relatedServices: ['woonbeton-design-vloeren', 'coating-bevonatolas', 'industriele-coatings'],
    metaTitle: 'Gietvloer Limburg | Design Gietvloeren - Solidbp',
    metaDescription: 'Gietvloeren in Limburg. Naadloze epoxy en PU vloeren voor woning en bedrijf. Ontdek de mogelijkheden!'
  },
  {
    id: 'slijtvaste',
    slug: 'slijtvaste-coatings',
    title: 'Slijtvaste Coatings en Vloerversterking',
    shortTitle: 'Slijtvaste Coatings',
    description: 'Extreem slijtvaste coatings voor intensief gebruikte vloeren. Ideaal voor magazijnen, parkeergarages en productieruimtes.',
    shortDescription: 'Ultra-slijtvaste coatings voor intensief belaste vloeren.',
    icon: 'Shield',
    image: '/images/services/slijtvaste-hero.jpg',
    category: 'coating',
    features: [
      'Quartz coatings',
      'Corundum versterking',
      'Hoge belastingscoating',
      'Heftruckbestendige vloeren',
      'Parkeergarage coatings',
      'Verkeersbelasting coatings'
    ],
    benefits: [
      'Extreme slijtvastheid',
      'Lange levensduur',
      'Minimaal onderhoud',
      'Stofvrije werking',
      'Verhoogde veiligheid',
      'Kostenbesparend'
    ],
    process: [
      {
        step: 1,
        title: 'Belastingsanalyse',
        description: 'In kaart brengen van mechanische belasting en gebruiksintensiteit.'
      },
      {
        step: 2,
        title: 'Systeem keuze',
        description: 'Selectie van het meest geschikte slijtvaste systeem.'
      },
      {
        step: 3,
        title: 'Professionele applicatie',
        description: 'Aanbrengen met speciale technieken voor maximale hechting.'
      },
      {
        step: 4,
        title: 'Controle en oplevering',
        description: 'Testen van slijtvastheid en certificering.'
      }
    ],
    faq: [
      {
        question: 'Hoe slijtvast zijn deze coatings?',
        answer: 'Onze slijtvaste coatings weersten jarenlang intensief heftruckverkeer en zware mechanische belasting.'
      },
      {
        question: 'Zijn ze geschikt voor parkeergarages?',
        answer: 'Absoluut, we leveren speciale parkeergarage coatings die bestand zijn tegen autoverkeer en chemicaliën.'
      },
      {
        question: 'Wat is de levensduur?',
        answer: 'Bij correct onderhoud gaan slijtvaste coatings 15-20 jaar mee in intensief gebruikte ruimtes.'
      }
    ],
    relatedServices: ['industriele-coatings', 'coating-bevonatolas', 'industriele-vloerherstel'],
    metaTitle: 'Slijtvaste Coating Limburg | Vloerversterking - Solidbp',
    metaDescription: 'Slijtvaste coatings voor intensief gebruikte vloeren in Limburg. Specialist in zware belasting. Vraag offerte aan!'
  },
  {
    id: 'industrieel-herstel',
    slug: 'industriele-vloerherstel',
    title: 'Industrieel Vloerherstel',
    shortTitle: 'Industrieel Herstel',
    description: 'Specialistisch herstel van industriële vloeren. Van kleine reparaties tot complete vloerrenovaties zonder productiestilstand.',
    shortDescription: 'Snel en professioneel herstel van beschadigde industriële vloeren.',
    icon: 'Cog',
    image: '/images/services/industrieel-herstel-hero.jpg',
    category: 'industrieel',
    features: [
      'Lokaal vloerherstel',
      'Joint repair',
      'Niveaucorrectie',
      'Sneldrogende reparatie',
      'Weekend werkzaamheden',
      'Sectie-gewijs herstel'
    ],
    benefits: [
      'Minimale productiestilstand',
      'Snelle uitvoering',
      'Duurzaam resultaat',
      'Flexibele planning',
      '24/7 beschikbaar',
      'Gecertificeerd werk'
    ],
    process: [
      {
        step: 1,
        title: 'Schade inspectie',
        description: 'Snelle beoordeling van de schade en planning van het herstel.'
      },
      {
        step: 2,
        title: 'Voorbereiding',
        description: 'Afzetten werkzone en voorbereiden van de reparatiezone.'
      },
      {
        step: 3,
        title: 'Herstel uitvoering',
        description: 'Vakkundig herstellen met industriële reparatiematerialen.'
      },
      {
        step: 4,
        title: 'Snelle oplevering',
        description: 'Minimale uithardingstijd en snelle terugkeer naar gebruik.'
      }
    ],
    faq: [
      {
        question: 'Kan herstel tijdens productie?',
        answer: 'Ja, we werken in secties en kunnen vaak tijdens doorlopende productie werken.'
      },
      {
        question: 'Hoe snel is de vloer weer belastbaar?',
        answer: 'Met snelsystemen is de vloer al binnen 4-6 uur weer beloopbaar.'
      },
      {
        question: 'Werken jullie in het weekend?',
        answer: 'Ja, we bieden weekend- en nachtdiensten aan om productiestilstand te minimaliseren.'
      }
    ],
    relatedServices: ['betonreparatie-betonrenovatie', 'industriele-coatings', 'slijtvaste-coatings'],
    metaTitle: 'Industrieel Vloerherstel Limburg | Fabrieksvloer Reparatie - Solidbp',
    metaDescription: 'Industrieel vloerherstel in Limburg. Snelle reparatie zonder productiestilstand. 24/7 service beschikbaar!'
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

export const getServicesByCategory = (category: Service['category']): Service[] => {
  return services.filter(service => service.category === category);
};

export const getAllServiceSlugs = (): string[] => {
  return services.map(service => service.slug);
};
