export interface Product {
  id: string;
  name: string;
  category: 'Traps & Baits' | 'Repellents' | 'Exclusion Hardware' | 'Eco & Botanical' | 'Protective Gear';
  price: number;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  shortDescription: string;
  description: string;
  targetPests: string[];
  specs: string[];
  usageInstructions: string;
  safetyNote: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'tamper-resistant-bait-station',
    name: 'ProShield Tamper-Resistant Rodent Bait Station (Pack of 2)',
    category: 'Traps & Baits',
    price: 34.99,
    rating: 4.88,
    reviewsCount: 142,
    inStock: true,
    shortDescription: 'Heavy-duty locked dual-entry bait stations designed to protect non-target wildlife, pets, and children.',
    description: 'Constructed from durable injection-molded high-impact polymer, these bait stations meet Tier 1 EPA safety standards for tamper-resistance. Double-lock key mechanism ensures child and pet safety while accommodating both block baits and snap traps.',
    targetPests: ['House Mice', 'Roof Rats', 'Norway Rats'],
    specs: [
      'Dimensions: 11.5" L x 9.5" W x 4.5" H',
      'Dual-entry baffle system preventing paw entry',
      'Universal two-prong lock with key included',
      'Horizontal & vertical bait securing rods'
    ],
    usageInstructions: 'Place along exterior foundation walls or garage perimeters every 15–20 feet where rodent droppings or rub marks are visible. Keep flush against walls.',
    safetyNote: 'Always keep locked. Use disposable nitrile gloves when handling bait.'
  },
  {
    id: 'ultrasonic-quad-repeller',
    name: 'UltraSonic Multi-Frequency Pest Deterrent Unit',
    category: 'Repellents',
    price: 49.50,
    rating: 4.75,
    reviewsCount: 89,
    inStock: true,
    shortDescription: 'Dual-transducer sweeping 20kHz–65kHz ultrasonic and electromagnetic pulse deterrent for interior spaces.',
    description: 'Generates fluctuating ultrasonic sound pressure waves imperceptible to human and domestic dogs/cats, yet disorienting to rodents, roaches, and spiders. Covers up to 1,200 square feet of unobstructed interior living space.',
    targetPests: ['Mice', 'Spiders', 'Cockroaches', 'Ants', 'Silverfish'],
    specs: [
      'Coverage: up to 1,200 sq ft per unit',
      'Frequency range: 22 kHz – 65 kHz sweeping automatically',
      'Low power consumption (under 5 Watts)',
      'Built-in soft blue ambient nightlight'
    ],
    usageInstructions: 'Plug into standard 110V wall outlet 10–30 inches above the floor in open living areas. Avoid placing behind curtains or heavy furniture that absorb sound waves.',
    safetyNote: 'Do not use in rooms housing pet rodents (hamsters, guinea pigs, pet rats).'
  },
  {
    id: 'copper-mesh-exclusion-roll',
    name: 'Pure Copper Stuf-Fit Rodent & Snail Exclusion Mesh (100 ft)',
    category: 'Exclusion Hardware',
    price: 28.00,
    rating: 4.95,
    reviewsCount: 210,
    inStock: true,
    shortDescription: '100% pure knitted copper mesh that will not rust or discolor siding, ideal for packing weep holes and AC pipe gaps.',
    description: 'Industrial-grade copper wire knitted into a flexible mesh tube. When packed tightly into foundation crevices, roof eaves, and plumbing penetrations, rodents cannot chew through the sharp, interlocked metallic mesh. Unlike steel wool, it will never corrode or leave unsightly rust streaks on bricks or siding.',
    targetPests: ['Rats', 'Mice', 'Bats', 'Wasps', 'Snails'],
    specs: [
      'Length: 100 feet roll (5 inches wide tubular)',
      '100% pure non-alloyed copper',
      'Weatherproof and completely rust-proof',
      'Cuts easily with kitchen scissors'
    ],
    usageInstructions: 'Cut desired length with scissors. Use a flathead screwdriver or putty knife to pack firmly into gaps, holes around HVAC conduits, brick weep holes, and siding gaps.',
    safetyNote: 'Wear gloves when cutting mesh to prevent minor copper wire snags.'
  },
  {
    id: 'cedar-botanical-perimeter-spray',
    name: 'EcoShield Botanical Insect Barrier Spray (32 oz Concentrate)',
    category: 'Eco & Botanical',
    price: 38.25,
    rating: 4.91,
    reviewsCount: 167,
    inStock: true,
    shortDescription: 'EPA FIFRA 25(b) exempt concentrated cedarwood and rosemary oil perimeter spray safe for organic gardens and pets.',
    description: 'Harnesses natural plant defense terpenes to create an invisible, aromatic repellent barrier around patios, door thresholds, and garden perimeters. Blocks insect octopamine receptors without synthetic pyrethroids or persistent environmental residues.',
    targetPests: ['Ants', 'Spiders', 'Mosquitoes', 'Fleas', 'Ticks'],
    specs: [
      'Active Ingredients: Texas Cedarwood Oil (10%), Rosemary Oil (4%)',
      'Makes up to 8 gallons of finished garden spray',
      'Child and pet safe immediately once dry',
      'Natural pleasant woodsy fragrance'
    ],
    usageInstructions: 'Dilute 4 oz concentrate per 1 gallon of clean water in a garden pump sprayer. Apply around foundation, outdoor patio dining sets, and shrub perimeters every 3–4 weeks.',
    safetyNote: 'Do not spray directly into fish ponds or aquatic ecosystems.'
  },
  {
    id: 'professional-termite-bait-stakes',
    name: 'GroundWatch In-Soil Termite Detection Stakes (Box of 8)',
    category: 'Traps & Baits',
    price: 42.00,
    rating: 4.82,
    reviewsCount: 78,
    inStock: true,
    shortDescription: 'Early-warning in-ground timber inspection monitors with pop-up active infestation indicator flags.',
    description: 'Designed for residential homeowners to detect subterranean termite activity before structural timber damage occurs. Features an internal high-cellulose wooden dowel and spring-loaded pop-up visual indicator that alerts you the moment foraging termites begin feeding.',
    targetPests: ['Subterranean Termites'],
    specs: [
      '8 heavy-duty stakes per box',
      'Spring-loaded high-visibility neon indicator top',
      'Deep 8-inch ground penetration',
      'Non-chemical detection mechanism'
    ],
    usageInstructions: 'Drive stakes into moist soil around home foundation perimeter 2 to 3 feet out from foundation walls, spaced roughly 10 feet apart. Check tops monthly.',
    safetyNote: 'Non-toxic monitoring device. If top pops up, contact our licensed termite department for complete barrier installation.'
  },
  {
    id: 'heavy-duty-door-sweep',
    name: 'ArmorSeal Aluminum & Neoprene Exterior Door Sweep (36")',
    category: 'Exclusion Hardware',
    price: 24.50,
    rating: 4.93,
    reviewsCount: 125,
    inStock: true,
    shortDescription: 'Commercial architectural-grade door sweep with reinforced metal backing that blocks mouse, snake, and spider entry.',
    description: 'Most domestic rodent infestations originate under exterior garage and kitchen entry doors where standard vinyl weather-stripping has worn thin or been gnawed. ArmorSeal combines aircraft-grade aluminum casing with dense, chew-resistant neoprene seal.',
    targetPests: ['Mice', 'Cockroaches', 'Spiders', 'Snakes', 'Scorpions'],
    specs: [
      'Fits standard 36-inch doors (trimmable with hacksaw)',
      'Heavy extruded aluminum channel',
      'Stainless steel mounting screws included',
      'Seals gaps up to 3/4 inch'
    ],
    usageInstructions: 'Hold sweep against exterior door bottom while door is closed. Mark screw holes, pre-drill, and secure firmly ensuring brush touches threshold without binding.',
    safetyNote: 'Ensure door closes and latches cleanly after installation.'
  }
];
