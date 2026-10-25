import { IMAGES } from '../assets/images';

export interface ServicePricingTier {
  name: string;
  price: string;
  cadence: string;
  badge?: string;
  features: string[];
  recommendedFor: string;
}

export interface Service {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Specialized';
  subtitle: string;
  tagline: string;
  description: string;
  image: string;
  rating: number;
  reviewsCount: number;
  inspectionFee: string;
  turnaroundTime: string;
  warranty: string;
  keyHighlights: string[];
  treatmentSteps: {
    step: string;
    title: string;
    details: string;
  }[];
  targetedPests: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  pricingTiers: ServicePricingTier[];
}

export const SERVICES: Service[] = [
  {
    id: 'termite-defense',
    title: 'Termite Inspection & Shield Protection',
    category: 'Specialized',
    subtitle: 'Comprehensive subterranean and drywood termite defense with Sentricon® baiting and liquid barriers',
    tagline: 'Guaranteed 100% elimination with transfer-effect non-repellent barrier tech.',
    description: 'Our certified termite specialists perform high-precision acoustic, thermal, and optical inspections of your foundation, crawlspaces, and structural framing. We deploy advanced EPA-registered liquid termiticide barriers and smart bait stations that eradicate entire colonies, including the reproductive queen.',
    image: IMAGES.serviceTermite,
    rating: 4.96,
    reviewsCount: 384,
    inspectionFee: 'Free with treatment',
    turnaroundTime: 'Same-day or next-day inspection',
    warranty: '1-Year Renewable Re-treatment Guarantee ($1M repair bond available)',
    keyHighlights: [
      'Comprehensive optical scope & digital moisture diagnostics',
      'Non-disruptive exterior perimeter trenching and rod injection',
      'Advanced colony-elimination bait station placement',
      'Annual certified re-inspection with structural documentation'
    ],
    treatmentSteps: [
      {
        step: '01',
        title: '360° Foundation & Crawlspace Inspection',
        details: 'Technicians inspect foundation footings, sill plates, floor joists, plumbing penetrations, and exterior perimeter using moisture meters and fiber-optic scopes.'
      },
      {
        step: '02',
        title: 'Targeted Barrier Formulation',
        details: 'Continuous subterranean non-repellent perimeter barrier injected at 4 gallons per 10 linear feet, preventing termites from detecting and circumventing the shield.'
      },
      {
        step: '03',
        title: 'Smart Bait Station Grid Installation',
        details: 'Discreet tamper-resistant in-ground bait monitors installed every 10–15 feet around the property perimeter to intercept subterranean foraging termites.'
      },
      {
        step: '04',
        title: 'Digital Verification & Certificate of Protection',
        details: 'Full homeowner diagnostic report delivered with CAD site-map of installed barriers and guaranteed annual re-inspection schedule.'
      }
    ],
    targetedPests: ['Subterranean Termites', 'Drywood Termites', 'Carpenter Ants', 'Wood-Boring Beetles'],
    faqs: [
      {
        question: 'How do I know if I have termites or flying ants?',
        answer: 'Termites have straight antennae, equal-length wings, and a broad unconstricted waist. Flying ants have elbowed antennae, unequal wing lengths, and a pinched wasp-like waist. Our technicians provide instant microscopic identification during inspection.'
      },
      {
        question: 'Are modern termite treatments safe for kids and family pets?',
        answer: 'Yes. We utilize modern non-volatile, odorless EPA-approved materials placed deep underground in soil trenches or inside locked tamper-proof subterranean stations where children and pets cannot access them.'
      },
      {
        question: 'Do you offer real estate WDO (Wood-Destroying Organism) inspection reports?',
        answer: 'Yes, we provide official certified state NPMA-33 and VA/FHA loan compliance inspection reports with rapid 24-hour turnaround.'
      }
    ],
    pricingTiers: [
      {
        name: 'Single Inspection & Spot Treatment',
        price: '$189',
        cadence: 'One-time',
        features: [
          'Full visual & thermal scope inspection',
          'Spot treatment of isolated active areas',
          'Official WDO status report',
          '90-day spot guarantee'
        ],
        recommendedFor: 'Home sales & minor localized findings'
      },
      {
        name: 'Complete Perimeter Shield',
        price: '$549',
        cadence: 'One-time install + $29/mo warranty',
        badge: 'Most Popular',
        features: [
          'Full 360° exterior foundation trenching',
          'Non-repellent liquid termiticide barrier',
          'Up to 250 linear feet covered',
          '1-Year damage warranty ($500k bond)',
          'Free annual re-inspection'
        ],
        recommendedFor: 'Complete residential homes & long-term protection'
      },
      {
        name: 'Ultimate Bait & Barrier Combo',
        price: '$899',
        cadence: 'Complete install + $39/mo active monitor',
        features: [
          'Liquid foundation barrier + Sentricon® in-ground grid',
          'Colony elimination guarantee',
          'Quarterly bait station inspection & bait refresh',
          'Lifetime transferable structural warranty ($1M)',
          'Emergency priority dispatch'
        ],
        recommendedFor: 'High-value properties & active severe infestations'
      }
    ]
  },
  {
    id: 'rodent-exclusion',
    title: 'Rodent Control & Complete Exclusion',
    category: 'Residential',
    subtitle: 'Permanent rat and mouse eviction with structural entry-point sealing and sanitary cleanup',
    tagline: 'We don’t just trap mice; we seal your home so they never return.',
    description: 'Mice can squeeze through holes the size of a dime, and rats through nickel-sized gaps. Our complete rodent protocol pairs humane multi-catch removal with commercial-grade exclusion carpentry using stainless steel mesh, copper gauze, and metal flashing.',
    image: IMAGES.serviceRodent,
    rating: 4.94,
    reviewsCount: 420,
    inspectionFee: 'Included with service',
    turnaroundTime: 'Immediate same-day dispatch available',
    warranty: '100% Rat-Free 6-Month Guarantee with Exclusion Warranty',
    keyHighlights: [
      'Comprehensive roofline, soffit, and crawlspace gap audit',
      'Chew-proof metal flashing and copper mesh physical exclusion',
      'Tamper-resistant locked exterior bait stations',
      'Attic droppings sanitation and pheromone deodorization'
    ],
    treatmentSteps: [
      {
        step: '01',
        title: 'Thermal & Structural Entry-Point Audit',
        details: 'Technicians trace runs, urine trails with ultraviolet lights, and identify every attic gap, pipe penetration, weep hole, and garage door seal failure.'
      },
      {
        step: '02',
        title: 'Chew-Proof Physical Exclusion',
        details: 'Every discovered entry point is permanently armored using galvanized hardware cloth, copper Stuf-fit mesh, and polyurethane pest sealant.'
      },
      {
        step: '03',
        title: 'Strategic Trapping & Evacuation',
        details: 'Snap traps, multi-catch stations, and perimeter monitoring units positioned along natural rodent runways for quick, humane clearance.'
      },
      {
        step: '04',
        title: 'Sanitation & Follow-up Check',
        details: '7-day follow-up to inspect catches, clear stations, apply enzyme odor neutralizing treatments, and verify complete eviction.'
      }
    ],
    targetedPests: ['Norway Rats', 'Roof Rats', 'House Mice', 'Field Mice', 'Chipmunks'],
    faqs: [
      {
        question: 'Why not just use store-bought poison baits inside?',
        answer: 'Over-the-counter poisons cause rodents to die inside inaccessible wall voids and ceiling cavities, producing unbearable rotting odors and fly infestations for weeks. We emphasize physical exclusion and targeted interior snap trapping.'
      },
      {
        question: 'Will rodents chew through the sealing materials?',
        answer: 'No. We use heavy-gauge galvanized steel mesh, copper wool, and specialized expanding foam reinforced with bittering agents and metal fibers that rodents cannot chew through.'
      }
    ],
    pricingTiers: [
      {
        name: 'Basic Trapping & Removal',
        price: '$249',
        cadence: 'Initial service + 1 follow-up',
        features: [
          'Interior and attic trap setup',
          'Catch disposal & station reset',
          'Basic entry point identification list',
          '30-day activity guarantee'
        ],
        recommendedFor: 'Isolated single mouse in garage or pantry'
      },
      {
        name: 'Full Exclusion & Rodent Proofing',
        price: '$589',
        cadence: 'Complete seal + 3 service visits',
        badge: 'Recommended',
        features: [
          'Full structural entry-point exclusion (up to 12 entry points)',
          'Galvanized steel mesh and door sweep installation',
          'Attic & crawlspace trapping network',
          'Enzyme odor neutralizing spray',
          '6-Month zero-rodent guarantee'
        ],
        recommendedFor: 'Homes with repeated scratching in walls or attic'
      },
      {
        name: 'Total Protection & Attic Restoration',
        price: '$1,190',
        cadence: 'Comprehensive package',
        features: [
          'Unlimited entry-point structural sealing',
          'Attic insulation spot vacuuming and sanitizing',
          'Exterior locked commercial bait boxes (4 units)',
          'Quarterly monitoring refills for 1 year',
          '1-Year unlimited warranty'
        ],
        recommendedFor: 'Heavy infestations or long-neglected crawlspaces'
      }
    ]
  },
  {
    id: 'bed-bug-thermal',
    title: 'Bed Bug Thermal Remediation & Heat Extermination',
    category: 'Specialized',
    subtitle: 'One-day chemical-free thermal elimination penetrating mattresses, walls, and furniture',
    tagline: 'Dead in one visit: 100% kill rate of adults, nymphs, and microscopic eggs.',
    description: 'Bed bugs have developed high resistance to common over-the-counter pesticides. Our state-of-the-art electric thermal heat trailers raise ambient temperatures to a lethal 122°F–135°F for sustained hours, penetrating deep into walls, baseboards, and mattresses where chemicals cannot reach.',
    image: IMAGES.serviceBedbug,
    rating: 4.98,
    reviewsCount: 312,
    inspectionFee: 'Credited toward treatment',
    turnaroundTime: 'Emergency 24-hour scheduling',
    warranty: '90-Day Unconditional Bed Bug Free Warranty',
    keyHighlights: [
      'Single-day lethal heat treatment (kills eggs and adults alike)',
      'Zero toxic chemical residue on clothing or bedding',
      'Advanced high-velocity axial air circulating fans',
      'Remote wireless temperature telemetry monitoring'
    ],
    treatmentSteps: [
      {
        step: '01',
        title: 'Pre-Heat Room Preparation Guidance',
        details: 'Homeowner preparation checklist provided to safeguard heat-sensitive items (wax candles, aerosol cans, fine oil paintings).'
      },
      {
        step: '02',
        title: 'Thermal Unit Deployment',
        details: 'High-BTU industrial electric heaters and axial air movers placed strategically throughout affected bedrooms and living areas.'
      },
      {
        step: '03',
        title: 'Precision Temperature Soak (122°F - 135°F)',
        details: 'Sensors monitor room and wall-void temperatures constantly for 4–6 hours to ensure 100% lethal heat saturation to the core.'
      },
      {
        step: '04',
        title: 'Post-Heat Residual Desiccant Barrier',
        details: 'Application of amorphous silica gel dust behind electrical switch plates and baseboards for long-term preventative shielding.'
      }
    ],
    targetedPests: ['Cimex lectularius (Bed Bugs)', 'Bat Bugs', 'Fleas', 'Carpet Beetles'],
    faqs: [
      {
        question: 'Do I have to throw out my mattress and box spring?',
        answer: 'No! That is the primary advantage of our thermal remediation method. The heat penetrates right to the core of mattresses and upholstery, saving you thousands in replacement furniture costs.'
      },
      {
        question: 'Can I return home the same night?',
        answer: 'Yes. Once the treatment completes and rooms cool down (usually by late afternoon), your home is completely safe, chemical-free, and ready to sleep in that very night.'
      }
    ],
    pricingTiers: [
      {
        name: 'Single Room Targeted Thermal',
        price: '$699',
        cadence: 'One-day service',
        features: [
          'Treatment of 1 master bedroom suite',
          'High-velocity thermal heat equipment',
          'Precision wireless thermal logging',
          '60-Day guarantee'
        ],
        recommendedFor: 'Early detected single bedroom containment'
      },
      {
        name: 'Whole-Home Thermal Remediation',
        price: '$1,399',
        cadence: 'Complete single-day treatment',
        badge: 'Guaranteed Kill',
        features: [
          'Up to 3 bedrooms + living areas treated',
          'Full furniture and clothing heat penetration',
          'Residual perimeter silica dusting in wall voids',
          'Certified Bed Bug Mattress Encasement included',
          '90-Day 100% bug-free warranty'
        ],
        recommendedFor: 'Standard residential homes & multi-room infestations'
      },
      {
        name: 'Commercial Multi-Unit / Hospitality',
        price: 'Custom Quote',
        cadence: 'Discreet unmarked dispatch',
        features: [
          'High-capacity simultaneous unit heating',
          'Adjoining unit preventive perimeter barrier',
          'Digital certificate of clearance for guests/tenants',
          'Rapid 12-hour turnaround time'
        ],
        recommendedFor: 'Hotels, motels, and apartment communities'
      }
    ]
  },
  {
    id: 'commercial-defense',
    title: 'Commercial Pest Management & Audits',
    category: 'Commercial',
    subtitle: 'HACCP, USDA, and FDA compliant pest monitoring programs for food processing, logistics, and retail',
    tagline: 'Audit-ready pest compliance that protects your brand reputation.',
    description: 'We deliver comprehensive Integrated Pest Management (IPM) designed specifically for commercial dining, grocery chains, food processing facilities, pharmaceutical warehouses, and corporate complexes with full digital documentation.',
    image: IMAGES.commercialFacility,
    rating: 4.97,
    reviewsCount: 260,
    inspectionFee: 'Complimentary commercial facility audit',
    turnaroundTime: '24/7 dedicated account manager',
    warranty: 'Zero-Infestation Tolerance Audit Guarantee',
    keyHighlights: [
      'Barcode-scanned electronic station tracking logbook',
      'Non-toxic pheromone monitors and insect light traps (ILTs)',
      'Quarterly trend analysis reports for health inspectors',
      'Third-party audit compliance (SQF, BRC, AIB, USDA)'
    ],
    treatmentSteps: [
      {
        step: '01',
        title: 'Facility Vulnerability & Harbor Audit',
        details: 'Comprehensive inspection of loading docks, compactor enclosures, overhead conduits, false ceilings, and floor drain lines.'
      },
      {
        step: '02',
        title: 'Custom IPM Protocol Design',
        details: 'Developing site-specific pest boundary zones, trap placement maps, and structural exclusion recommendations.'
      },
      {
        step: '03',
        title: 'Digital Station Barcode Deployment',
        details: 'Installation of discreet, tamper-proof interior mechanical traps and exterior locked stations with QR-barcode tracking.'
      },
      {
        step: '04',
        title: 'Scheduled Logbook Service & Compliance',
        details: 'Routine servicing during off-hours, digital logbook updates, and proactive sanitation consultations.'
      }
    ],
    targetedPests: ['Stored Product Pests', 'Flies & Gnats', 'Cockroaches', 'Rodents', 'Birds'],
    faqs: [
      {
        question: 'Do your technicians service our building during off-hours?',
        answer: 'Yes. We routinely schedule commercial treatments late evenings or weekends when customers and daytime kitchen staff are absent to prevent any operational disruption.'
      },
      {
        question: 'Will this meet strict health department and food safety inspections?',
        answer: 'Exceeds them. We maintain full electronic audit binders with SDS sheets, product labels, technician licensing, and station trend graphs accepted by FDA, USDA, and SQF auditors.'
      }
    ],
    pricingTiers: [
      {
        name: 'Small Retail & Office',
        price: '$129/mo',
        cadence: 'Monthly service',
        features: [
          'Monthly interior & exterior inspection',
          'Pest prevention barrier maintenance',
          'Up to 10 monitoring stations serviced',
          'Emergency priority callback within 4 hours'
        ],
        recommendedFor: 'Offices, boutiques, dry retail under 4,000 sq ft'
      },
      {
        name: 'Restaurant & Food Service',
        price: '$249/mo',
        cadence: 'Bi-weekly service',
        badge: 'Health Code Priority',
        features: [
          'Bi-weekly kitchen drain & motor treatments',
          'Insect light trap bulb maintenance & fly control',
          'Sanitation gap reports for kitchen managers',
          'Online digital audit portal for health inspectors',
          'Zero-tolerance guarantee'
        ],
        recommendedFor: 'Restaurants, bakeries, cafes, and commercial kitchens'
      },
      {
        name: 'Industrial & Distribution Center',
        price: 'From $499/mo',
        cadence: 'Weekly or custom frequency',
        features: [
          'Full barcode scanning of perimeter stations',
          'Bird netting and dock door exclusion',
          'Stored product pest pheromone grids',
          'Quarterly executive trend presentations',
          'Dedicated senior pest entomologist account lead'
        ],
        recommendedFor: 'Warehouses, food packaging plants, logistics hubs'
      }
    ]
  },
  {
    id: 'residential-defense',
    title: 'Year-Round Home Pest Defense Shield',
    category: 'Residential',
    subtitle: 'Seasonal exterior perimeter defense protecting your family from 30+ common crawling and stinging pests',
    tagline: 'Exterior perimeter barrier keeps pests outside so we never need to spray inside.',
    description: 'Our flagship residential service builds an impenetrable 3-foot up and 3-foot out micro-encapsulated perimeter shield around your foundation. We sweep eaves for cobwebs and wasp nests, treat plumbing wall voids, and return seasonally to adapt protection against evolving pest patterns.',
    image: IMAGES.heroPestControl,
    rating: 4.95,
    reviewsCount: 580,
    inspectionFee: 'Free with any maintenance plan',
    turnaroundTime: 'Flexible scheduling 6 days a week',
    warranty: 'Free in-between retreatments anytime pests reappear',
    keyHighlights: [
      'Comprehensive 30-pest protective coverage',
      'Eaves de-webbing and wasp nest removal up to 25 feet',
      'Granular lawn perimeter barrier around garden beds',
      'Family & pet friendly botanical micro-emulsions'
    ],
    treatmentSteps: [
      {
        step: '01',
        title: 'Initial Deep Home Reset',
        details: 'Technician flushes interior baseboards, inspects crawlspaces, and applies botanical perimeter treatment.'
      },
      {
        step: '02',
        title: 'Exterior Eaves & Soffit De-Webbing',
        details: 'Telescopic brushes remove spider webs, wasp nests, and egg cases from high eaves and porch entryways.'
      },
      {
        step: '03',
        title: '3x3 Foundation Liquid Barrier',
        details: 'Micro-encapsulated EPA registered formula applied 3 feet up foundation wall and 3 feet out onto landscape.'
      },
      {
        step: '04',
        title: 'Seasonal Perimeter Refreshes',
        details: 'Quarterly treatments calibrated to seasonal pests: Ants in Spring, Wasps in Summer, Rodents in Fall, Spiders in Winter.'
      }
    ],
    targetedPests: ['Ants', 'Spiders', 'Cockroaches', 'Earwigs', 'Centipedes', 'Silverfish', 'Crickets', 'Beetles'],
    faqs: [
      {
        question: 'Do I need to leave my home during the exterior treatment?',
        answer: 'No! Because 95% of pest infestations originate outdoors, our exterior shield prevents them from ever entering. You do not even need to be home for routine seasonal exterior visits.'
      },
      {
        question: 'What happens if I see bugs in between quarterly visits?',
        answer: 'Simply call us or submit a request online. Under our 100% Pest-Free Guarantee, a technician will return and re-treat your home at zero additional charge within 24–48 hours.'
      }
    ],
    pricingTiers: [
      {
        name: 'Single Emergency Knockdown',
        price: '$199',
        cadence: 'One-time treatment',
        features: [
          'Immediate eradication of targeted active pests',
          'Interior baseboard & entry flush',
          'Exterior foundation perimeter spray',
          '30-Day warranty'
        ],
        recommendedFor: 'Renting tenants or immediate quick fixes'
      },
      {
        name: 'Quarterly Home Shield',
        price: '$39/mo',
        cadence: 'Billed quarterly ($117/visit)',
        badge: 'Best Value',
        features: [
          'Full year-round coverage against 30+ pest species',
          'Free unlimited emergency re-treatments',
          'Eaves and entry sweeping up to 25 ft',
          'Moisture point and crawlspace monitoring',
          'Priority dispatch window'
        ],
        recommendedFor: 'Single family suburban homes & condos'
      },
      {
        name: 'Premier Home + Yard + Mosquitoes',
        price: '$69/mo',
        cadence: 'Billed monthly',
        features: [
          'Includes complete Quarterly Home Shield',
          'Monthly yard mosquito and tick misting (Apr-Oct)',
          'Rodent exterior monitoring bait stations included',
          '15% discount on specialized termite or wildlife services',
          'Dedicated senior technician assigned'
        ],
        recommendedFor: 'Homes with acreage, wooded lots, or swimming pools'
      }
    ]
  },
  {
    id: 'stinging-insect-removal',
    title: 'Emergency Wasp, Hornet & Bee Removal',
    category: 'Specialized',
    subtitle: 'Safe, same-day extraction of yellow jacket colonies, hornet football nests, and humane honeybee relocation',
    tagline: 'Fast emergency removal before painful stings happen.',
    description: 'Stinging insects threaten outdoor family gatherings and can cause severe allergic emergencies. Our specialized team uses protective bee-suits, thermal cameras to locate hidden wall nests, and aerosol freeze-treatments to safely eliminate aggressive colonies.',
    image: IMAGES.serviceRodent,
    rating: 4.96,
    reviewsCount: 195,
    inspectionFee: 'Included with removal',
    turnaroundTime: '2-hour emergency priority dispatch',
    warranty: '30-Day Zero Re-nesting Guarantee',
    keyHighlights: [
      'Protective extraction of underground and elevated nests',
      'Humane honeybee cut-out and local apiary re-homing',
      'Wall void nest removal without structural demolition',
      'Residual repellent coating preventing queen re-colonization'
    ],
    treatmentSteps: [
      {
        step: '01',
        title: 'Species Identification & Colony Sizing',
        details: 'Technicians confirm whether pests are beneficial honeybees (for live relocation) or aggressive wasps/hornets (for immediate removal).'
      },
      {
        step: '02',
        title: 'Thermal Void Mapping',
        details: 'Infrared cameras detect the exact location and heat signature of nests hidden behind exterior siding or roof eaves.'
      },
      {
        step: '03',
        title: 'Targeted Knockdown & Safe Extraction',
        details: 'Pressurized rapid knockdown compounds neutralize workers and queen instantly, followed by physical nest removal.'
      },
      {
        step: '04',
        title: 'Entry Hole Caulking & Exclusion',
        details: 'Soffit gaps, vents, or weep holes are sealed with silicone and copper mesh to prevent returning foragers from re-building.'
      }
    ],
    targetedPests: ['Yellow Jackets', 'Bald-Faced Hornets', 'Paper Wasps', 'Mud Daubers', 'Carpenter Bees'],
    faqs: [
      {
        question: 'Do you kill honeybees?',
        answer: 'No. Whenever honeybees are identified, we coordinate with licensed local beekeepers to perform live extractions and safely relocate the colony to an apiary.'
      },
      {
        question: 'Can I spray the nest myself with a garden hose or aerosol can?',
        answer: 'We strongly discourage this. Spraying can agitate hundreds of aggressive wasps simultaneously, leading to multiple dangerous stings and potential trips to the emergency room.'
      }
    ],
    pricingTiers: [
      {
        name: 'Single Ground or Eaves Nest',
        price: '$189',
        cadence: 'One-time removal',
        features: [
          'Immediate knockdown and physical removal',
          'Nest location up to 15 feet high',
          'Surface repellent treatment',
          '30-Day re-nesting guarantee'
        ],
        recommendedFor: 'Visible paper wasp nest on deck or porch'
      },
      {
        name: 'Complex High or Wall-Void Nest',
        price: '$289',
        cadence: 'One-time extraction',
        badge: 'Common Choice',
        features: [
          'Thermal imaging and acoustic wall detection',
          'Ladders up to 28 feet or attic interior entry',
          'Pheromone masking & entry exclusion seal',
          '60-Day zero-activity guarantee'
        ],
        recommendedFor: 'Hornets or wasps nesting inside siding or roof soffits'
      }
    ]
  }
];
