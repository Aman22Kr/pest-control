export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  category: 'Prevention' | 'Identification' | 'Seasonal' | 'Commercial';
  content: string[];
  keyTakeaways: string[];
  relatedPestId: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'fall-rodent-proofing-checklist',
    title: 'The Essential Autumn Rodent Proofing Checklist for Homeowners',
    excerpt: 'When autumn temperatures plunge, field mice and Norway rats seek warm wall cavities and attics. Here are 7 critical vulnerable zones to inspect before the first freeze.',
    author: 'Marcus Vance',
    authorRole: 'Board-Certified Urban Entomologist',
    date: 'October 18, 2026',
    readTime: '5 min read',
    category: 'Seasonal',
    content: [
      'As evening temperatures drop below 50°F across the country, millions of rodents begin seeking winter nesting sites. A house mouse requires a hole merely 1/4 inch across—the diameter of a standard wooden pencil—to squeeze into your basement or kitchen pantry.',
      'Unlike wild pests that hibernate, commensal rodents remain hyperactive throughout the winter months, reproducing every 21 days while chewing continuously to keep their growing incisors sharp. Here is our field-proven protocol for armoring your property against intrusion.',
      'Begin by walking your exterior foundation with a high-lumen inspection flashlight. Check AC line-set wall penetrations, dryer vent flappers, and garage corner weather stripping. Seal any hole with copper mesh and high-performance silicone sealant—never use plastic expansion foam alone, which mice readily chew through in minutes.'
    ],
    keyTakeaways: [
      'Inspect exterior AC line penetrations and pack gaps with pure copper mesh',
      'Replace garage door bottom vinyl sweeps with reinforced neoprene sweeps',
      'Trim tree branches back at least 6 feet to prevent roof rat access',
      'Move firewood piles 20+ feet away from home foundation walls'
    ],
    relatedPestId: 'norway-rats'
  },
  {
    id: 'early-warning-termite-swarms',
    title: 'Recognizing Early Warning Signs of Subterranean Termite Infestations',
    excerpt: 'Termite damage often remains completely silent until structural framing is severely compromised. Learn how to spot mud exploratory tubes and distinguish swarmers from winged ants.',
    author: 'Elena Gomez',
    authorRole: 'Structural Pest Specialist',
    date: 'September 28, 2026',
    readTime: '6 min read',
    category: 'Identification',
    content: [
      'Subterranean termites are subterranean engineers. Because their delicate exoskeletons deselect moisture and perish in open air, they construct miniature highways of packed mud, wood fibers, and saliva along concrete foundation footings to access overhead joists.',
      'When tapping wood baseboards or window sills, healthy timber will produce a solid dull thud. Termite-hollowed wood sounds papery, hollow, or crumbles easily under moderate thumb pressure.',
      'In early spring, mature colonies release hundreds of winged alates (swarmers). If you discover piles of uniform silvery wings shed on your interior window sills, it is a definitive sign that a reproductive swarm has emerged directly within your building envelope.'
    ],
    keyTakeaways: [
      'Check basement concrete stem walls for pencil-thick vertical mud tubes',
      'Test suspect wood trim with a screwdriver for hollow or spongey resistance',
      'Collect discarded wings in a zip-top bag for our technician to verify species',
      'Ensure mulch beds do not touch exterior siding or foundation weep holes'
    ],
    relatedPestId: 'subterranean-termites'
  },
  {
    id: 'preventing-bed-bugs-while-traveling',
    title: 'The Traveler’s Field Guide: Preventing Bed Bug Hitchhikers',
    excerpt: 'Bed bugs do not discriminate between budget motels and five-star luxury resorts. Learn our 4-step hotel room quarantine method that prevents bringing pests home.',
    author: 'Dr. Jason Lee',
    authorRole: 'Director of Technical Services',
    date: 'August 14, 2026',
    readTime: '4 min read',
    category: 'Prevention',
    content: [
      'Bed bugs are elite hitchhikers. They latch onto woven luggage fabrics, backpacks, and clothing seams in public transit, taxi cabs, and hotel rooms. Once brought inside your residence, an adult female can lay up to 5 eggs per day, resulting in a full-blown infestation within 8 weeks.',
      'Whenever entering a hotel room or rental property, immediately place your luggage in the bathroom shower stall or elevated metal luggage rack while conducting a 3-minute flashlight inspection.',
      'Pull back the fitted sheet at all four corners of the mattress. Examine the fabric piping and the headboard seam for tiny pepper-like black droppings, shed nymph skins, or live insects. If any signs are visible, request an immediate room reassignment to a non-adjacent floor.'
    ],
    keyTakeaways: [
      'Keep luggage elevated on luggage racks; never place suitcases directly on hotel beds or carpets',
      'Inspect mattress corners and headboards with a phone flashlight upon check-in',
      'Upon returning home, immediately wash travel clothing and dry on high heat for 45 minutes',
      'Store empty travel suitcases in heavy-duty zippered storage covers in the garage'
    ],
    relatedPestId: 'bed-bugs'
  }
];
