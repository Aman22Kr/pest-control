export interface Pest {
  id: string;
  name: string;
  scientificName: string;
  category: 'Insects' | 'Rodents' | 'Stinging' | 'Wood-Destroying' | 'Parasites';
  riskLevel: 'Moderate' | 'High' | 'Severe';
  description: string;
  size: string;
  habitat: string;
  signsOfInfestation: string[];
  healthRisks: string[];
  preventionTips: string[];
  diyFeasibility: 'High' | 'Moderate' | 'Low - Professional Required';
  recommendedServiceId: string;
  commonSeasons: string;
  color: string;
}

export const PESTS: Pest[] = [
  {
    id: 'subterranean-termites',
    name: 'Subterranean Termites',
    scientificName: 'Reticulitermes flavipes',
    category: 'Wood-Destroying',
    riskLevel: 'Severe',
    description: 'Subterranean termites live in underground colonies and build distinctive mud tunnels to reach above-ground wood structures. They cause over $5 billion in property damage annually across the United States.',
    size: '1/8 inch (workers), 1/2 inch (swarmers)',
    habitat: 'Moist soil, crawlspaces, wall voids, foundation perimeters',
    signsOfInfestation: [
      'Mud tubes on foundation walls or floor joists',
      'Hollow-sounding or spongy timber',
      'Discarded translucent wings on windowsills in spring',
      'Tight-fitting doors or windows from warped framing'
    ],
    healthRisks: [
      'Structural collapse and major physical hazard',
      'Fungal spore release from decaying wood triggering allergies',
      'Severe financial and property destruction'
    ],
    preventionTips: [
      'Eliminate wood-to-ground contact around foundation',
      'Maintain 18-inch clearance between soil and timber',
      'Fix plumbing leaks and ensure proper crawlspace ventilation',
      'Direct downspouts and condensation lines away from foundation'
    ],
    diyFeasibility: 'Low - Professional Required',
    recommendedServiceId: 'termite-defense',
    commonSeasons: 'Spring swarm, active year-round underground',
    color: 'Milky white to light brown'
  },
  {
    id: 'bed-bugs',
    name: 'Bed Bugs',
    scientificName: 'Cimex lectularius',
    category: 'Parasites',
    riskLevel: 'High',
    description: 'Nocturnal blood-feeding parasites that nest within mattress seams, headboards, baseboards, and electrical outlets. Their microscopic eggs and extreme chemical resistance make professional thermal eradication essential.',
    size: '1/4 inch (apple seed size)',
    habitat: 'Mattresses, bed frames, box springs, headboards, luggage, soft upholstery',
    signsOfInfestation: [
      'Rust-colored blood smears on pillowcases and sheets',
      'Dark specks of fecal matter clustered along mattress seams',
      'Linear or clustered itchy red welts on skin upon waking',
      'Sweet, musty almond-like odor in heavily infested rooms'
    ],
    healthRisks: [
      'Intense pruritus (itching) and secondary skin infections',
      'Sleep deprivation, psychological distress, and chronic anxiety',
      'Rapid transfer between apartments and hotels'
    ],
    preventionTips: [
      'Inspect hotel headboards and luggage racks during travel',
      'Use certified zippered bed bug mattress encasements',
      'Wash and dry travel clothing on high heat (min 120°F) for 45 minutes',
      'Quarantine and steam second-hand furniture prior to bringing indoors'
    ],
    diyFeasibility: 'Low - Professional Required',
    recommendedServiceId: 'bed-bug-thermal',
    commonSeasons: 'Year-round, peaks during travel seasons',
    color: 'Reddish-brown, mahogany'
  },
  {
    id: 'norway-rats',
    name: 'Norway Rats & Roof Rats',
    scientificName: 'Rattus norvegicus / Rattus rattus',
    category: 'Rodents',
    riskLevel: 'Severe',
    description: 'Highly adaptable rodents capable of chewing through wood, plastics, drywall, and soft metals. They contaminate food supplies, gnaw electrical wiring causing house fires, and reproduce explosively.',
    size: '7 to 10 inches body length + 6-8 inch tail',
    habitat: 'Attics, crawlspaces, burrows under slabs, wall cavities, sewer lines',
    signsOfInfestation: [
      'Blunt capsule-shaped droppings (1/2 to 3/4 inch) along baseboards',
      'Greasy dark rub marks along walls and pipe chases',
      'Scampering or scratching noises inside ceilings at night',
      'Gnawed wiring, insulation, cardboard, and pantry packaging'
    ],
    healthRisks: [
      'Transmission of Leptospirosis, Hantavirus, and Salmonellosis',
      'Fire hazard from stripped electrical insulation',
      'Parasitic vectors carrying fleas, mites, and ticks'
    ],
    preventionTips: [
      'Seal all gaps larger than 1/4 inch with steel wool and exterior silicone',
      'Keep food in airtight metal or heavy glass containers',
      'Trim overhanging tree limbs 6 feet back from roofline',
      'Keep exterior garbage cans tightly sealed at all times'
    ],
    diyFeasibility: 'Moderate',
    recommendedServiceId: 'rodent-exclusion',
    commonSeasons: 'Fall and Winter intrusion surge',
    color: 'Brownish-gray to black with lighter underside'
  },
  {
    id: 'german-cockroaches',
    name: 'German Cockroaches',
    scientificName: 'Blattella germanica',
    category: 'Insects',
    riskLevel: 'High',
    description: 'The most prolific domestic cockroach species, capable of producing hundreds of offspring from a single egg capsule. They harbor behind kitchen appliances and in warm electrical motors, spreading bacteria.',
    size: '1/2 to 5/8 inch long',
    habitat: 'Kitchens, bathrooms, motor compartments of refrigerators, dishwashers',
    signsOfInfestation: [
      'Pepper-like dark droppings in cabinets, hinges, and countertops',
      'Empty brown egg cases (oothecae) hidden in corners',
      'Sightings of scurrying insects when turning on kitchen lights at night',
      'Oily, unpleasant pungent stench in severe cases'
    ],
    healthRisks: [
      'Potent airborne allergens triggering severe childhood asthma',
      'Mechanical vectors of E. coli, Salmonella, and gastroenteritis',
      'Contamination of sterile food preparation areas'
    ],
    preventionTips: [
      'Wipe down kitchen countertops nightly and clean crumb traps',
      'Eliminate standing moisture in sinks and fix dripping faucets',
      'Empty indoor trash cans every evening before sleep',
      'Never store loose cardboard boxes in kitchen pantries'
    ],
    diyFeasibility: 'Moderate',
    recommendedServiceId: 'residential-defense',
    commonSeasons: 'Year-round indoor pest',
    color: 'Light brown with two parallel dark stripes behind head'
  },
  {
    id: 'carpenter-ants',
    name: 'Carpenter Ants',
    scientificName: 'Camponotus pennsylvanicus',
    category: 'Wood-Destroying',
    riskLevel: 'High',
    description: 'Large black ants that excavate smooth galleries inside damp structural wood to nest. Unlike termites, they do not eat wood, but hollow out load-bearing wall studs and roof beams.',
    size: '1/4 to 1/2 inch (large)',
    habitat: 'Moist wall framing, under sinks, window sills, foam insulation, hollow doors',
    signsOfInfestation: [
      'Fine sawdust piles (frass) containing insect body fragments under wood',
      'Large black ants foraging inside kitchens or bathrooms',
      'Faint rustling sound inside wall cavities when tapped',
      'Winged reproductive ants emerging indoors during early spring'
    ],
    healthRisks: [
      'Weakening of structural support timbers and roof trusses',
      'Painful defensive bites with formic acid injection'
    ],
    preventionTips: [
      'Replace water-damaged wood and resolve roof or window leaks',
      'Store firewood off the ground and at least 20 feet away from home',
      'Ensure clear ventilation in attic and soffit vents',
      'Maintain gravel perimeter around foundation'
    ],
    diyFeasibility: 'Moderate',
    recommendedServiceId: 'termite-defense',
    commonSeasons: 'Spring through early Autumn',
    color: 'Jet black or dark reddish-black'
  },
  {
    id: 'yellow-jackets',
    name: 'Yellow Jackets & Hornets',
    scientificName: 'Vespula squamosa / Vespa crabro',
    category: 'Stinging',
    riskLevel: 'Severe',
    description: 'Aggressive social wasps that construct papery nests underground, inside wall voids, under eaves, and within soffits. They can sting repeatedly and release alarm pheromones to mobilize colony swarms.',
    size: '3/8 to 5/8 inch',
    habitat: 'Ground burrows, attic rafters, wall voids, roof overhangs, shrubs',
    signsOfInfestation: [
      'Steady flight stream of yellow-and-black wasps entering a hole in siding',
      'Paper pulp nests hanging under eaves or deck railings',
      'Chewing sounds in dry drywall as colony expands into interior living areas',
      'Aggressive swarming behavior when mowing or walking near bushes'
    ],
    healthRisks: [
      'Life-threatening anaphylactic shock in allergic individuals',
      'Multiple painful venomous stings causing localized necrosis'
    ],
    preventionTips: [
      'Keep outdoor garbage bins tightly capped with fitted lids',
      'Cover sweet drinks and grilled meats during outdoor dining',
      'Caulk gaps in fascia boards and eaves in early spring before queens establish nests',
      'Inspect ground holes and rodent burrows across lawn'
    ],
    diyFeasibility: 'Low - Professional Required',
    recommendedServiceId: 'stinging-insect-removal',
    commonSeasons: 'Late Summer and early Autumn aggression peak',
    color: 'Bright yellow and black striped abdomen'
  },
  {
    id: 'black-widow',
    name: 'Black Widow & Brown Recluse Spiders',
    scientificName: 'Latrodectus mactans / Loxosceles reclusa',
    category: 'Insects',
    riskLevel: 'Severe',
    description: 'Venomous spiders native to North America that hide in quiet, undisturbed locations such as crawlspaces, woodpiles, shoe boxes, sheds, and boiler rooms.',
    size: '1/2 inch body, 1.5 inch leg span',
    habitat: 'Garages, crawlspaces, water meter boxes, wood stacks, quiet storage boxes',
    signsOfInfestation: [
      'Irregular, disorganized tangled webs built close to ground level',
      'Smooth spherical white or spiky ivory egg sacs within webs',
      'Sightings of shiny black spider with red hourglass marking on belly',
      'Sightings of violin-marked brown spider with six eyes'
    ],
    healthRisks: [
      'Black widow neurotoxin causes severe muscle spasms, nausea, and hypertension',
      'Brown recluse cytotoxic venom causes painful necrotic ulcerations'
    ],
    preventionTips: [
      'Wear heavy leather gloves when moving wood, stones, or storage items',
      'Store clothes and shoes in airtight plastic containers rather than open boxes',
      'Vacuum corners, closet perimeters, and under furniture regularly',
      'Install tight door sweeps on garage and exterior doors'
    ],
    diyFeasibility: 'Low - Professional Required',
    recommendedServiceId: 'residential-defense',
    commonSeasons: 'Active Spring through Autumn, seeks warmth in Winter',
    color: 'Glossy coal black with red hourglass (Widow) or sandy brown (Recluse)'
  },
  {
    id: 'mosquitoes',
    name: 'Mosquitoes & Disease Vectors',
    scientificName: 'Aedes albopictus / Culex pipiens',
    category: 'Insects',
    riskLevel: 'High',
    description: 'Aggressive biters that breed in stagnant standing water as small as a bottle cap. Adults rest in shady foliage during heat and swarm during morning and dusk.',
    size: '1/8 to 3/8 inch',
    habitat: 'Standing water, clogged gutters, dense foliage, tall grass, bird baths',
    signsOfInfestation: [
      'Relentless swarming and biting during outdoor yard activities',
      'Wriggling larvae visible in standing water containers or gutters',
      'Resting adult mosquitoes in shaded shrubs, ivy, and porch ceilings'
    ],
    healthRisks: [
      'Transmission of West Nile Virus, Eastern Equine Encephalitis, and Dengue',
      'Severe allergic reactions and sleep-disturbing nocturnal buzzing'
    ],
    preventionTips: [
      'Dump standing water once per week from buckets, saucers, and tires',
      'Clean leaves out of roof gutters and check drainage downspouts',
      'Aerate garden ponds or treat with EPA-approved mosquito dunks',
      'Trim tall brush, ivy, and ornamental grasses around outdoor living areas'
    ],
    diyFeasibility: 'Moderate',
    recommendedServiceId: 'mosquito-yard-barrier',
    commonSeasons: 'Late Spring through first hard Frost',
    color: 'Silver-striped black (Tiger) or grayish-brown'
  }
];
