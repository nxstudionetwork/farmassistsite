import voice1 from '@/assets/voice-1.webp';
import voice2 from '@/assets/voice-2.webp';
import voice3 from '@/assets/voice-3.webp';
import voice4 from '@/assets/voice-4.webp';
import team1 from '@/assets/team-1.webp';
import team2 from '@/assets/team-2.webp';
import team3 from '@/assets/team-3.webp';
import team4 from '@/assets/team-4.webp';
import team5 from '@/assets/team-5.webp';
import farmLandscape from '@/assets/farm-hero.webp';
import farmField from '@/assets/farm-field.webp';
import farmThumb from '@/assets/farm-hero-thumb.webp';
import fieldThumb from '@/assets/farm-field-thumb.webp';

export type DemoVideo = { id: string; title: string; description: string; category: string; src: string; poster: string; youtubeId?: string; duration?: string; date?: string; featured?: boolean };
export type DemoImage = { image: string; thumbnail: string; title: string; caption: string; category: string; alt: string };
export type JourneyMilestone = {
  id: string;
  period: string;
  title: string;
  summary: string;
  detail: string;
  category: 'Idea & Vision' | 'Product Development' | 'Platform Expansion' | 'Farmer Engagement' | 'Customer Experience' | 'Pilot & Field Activities' | 'Future Direction';
  status: 'Completed' | 'In Progress' | 'Preparing' | 'Planned';
  image?: string;
  imageAlt?: string;
};

export const portal = {
  email: 'farm.assist@outlook.com',
  phone: '9440520641',
  location: 'Online',
  social: {
    Instagram: '',
    YouTube: '',
    X: '',
    LinkedIn: '',
    Facebook: '',
  },
  videos: {
    main: { src: '', poster: '' },
    journey: { src: '', poster: '' },
    platform: { src: '', poster: '' },
    assistant: { src: '', poster: '' },
    management: { src: '', poster: '' },
    marketplace: { src: '', poster: '' },
    prices: { src: '', poster: '' },
    map: { src: '', poster: '' },
  },
  team: [
    { image: team1, name: 'Asha Rao', designation: 'Field Partnerships', shortDescription: 'Building connections across farming communities.', fullDescription: 'Demo profile: Asha represents the field partnerships role, listening to farmers and shaping how practical services can reach their communities.' },
    { image: team2, name: 'Ravi Kumar', designation: 'Farm Operations', shortDescription: 'Grounding ideas in everyday farm work.', fullDescription: 'Demo profile: Ravi represents farm operations, bringing field-first thinking to the way Farm Assist supports agricultural work.' },
    { image: team3, name: 'Nisha Patel', designation: 'Product Design', shortDescription: 'Designing useful and approachable tools.', fullDescription: 'Demo profile: Nisha represents product design, focusing on clear experiences that make digital tools easier to use.' },
    { image: team4, name: 'Arjun Mehta', designation: 'Platform Development', shortDescription: 'Connecting people, services and technology.', fullDescription: 'Demo profile: Arjun represents platform development, exploring reliable ways to bring the agricultural ecosystem together.' },
    { image: team5, name: 'Meera Iyer', designation: 'Crop Research', shortDescription: 'Making agricultural knowledge accessible.', fullDescription: 'Demo profile: Meera represents crop research, translating complex growing information into practical insights.' },
  ],
  pilotStatus: 'PILOT PREPARATION',
  downloadUrl: '',
  demo: {
    main: { id: 'main', title: 'Farm Assist — Product Demo', description: 'An overview of farmer-side tools, the customer experience and the agricultural ecosystem.', category: 'Product Demo', src: '', youtubeId: 'fwlVi_wAJQI', poster: farmThumb, featured: true } as DemoVideo,
    videos: [
      { id: 'platform', title: 'The connected platform', description: 'Farmers, services, markets and customers.', category: 'Farm Assist', src: '', poster: farmThumb },
      { id: 'assistant', title: 'AI & farm assistance', description: 'A closer look at agricultural assistance.', category: 'Product Features', src: '', poster: fieldThumb },
      { id: 'farmers', title: 'Farmer perspectives', description: 'Verified farmer stories will be shared here.', category: 'Farmer Stories', src: '', poster: farmThumb },
      { id: 'customers', title: 'The customer experience', description: 'Discovering products and connecting with growers.', category: 'Customer Experience', src: '', poster: fieldThumb },
      { id: 'experiences', title: 'Beyond the app', description: 'Agricultural learning and farm experiences.', category: 'Farm Experiences', src: '', poster: farmThumb },
      { id: 'technology', title: 'Technology in the field', description: 'Digital tools and connected agriculture.', category: 'Technology', src: '', poster: fieldThumb },
    ] as DemoVideo[],
    images: [
      { image: farmLandscape, thumbnail: farmThumb, title: 'An agricultural landscape', caption: 'Illustrative agricultural image—not a verified Farm Assist location.', category: 'Farm imagery · Illustration', alt: 'Green agricultural fields and a rural landscape' },
      { image: farmField, thumbnail: fieldThumb, title: 'A closer look at growing fields', caption: 'Illustrative farm imagery—not a Farm Assist activity photograph.', category: 'Crop imagery · Illustration', alt: 'Cultivated fields with growing crops' },
    ] as DemoImage[],
    screenCategories: ['App overview', 'Farmer experience', 'Customer experience', 'Connected farm'],
    features: [
      { title: 'AI & Farm Assistance', description: 'Agricultural information and practical guidance.', icon: 'assistant' },
      { title: 'Farm Management', description: 'Farms, crops, soil, irrigation and livestock in one connected view.', icon: 'farm' },
      { title: 'Agricultural Services', description: 'Connecting farm needs with agricultural support.', icon: 'services' },
      { title: 'Market & Marketplace', description: 'Market information and farmer-to-customer connections.', icon: 'market' },
      { title: 'Learning & Information', description: 'Agricultural reading for farmers and customers.', icon: 'learning' },
      { title: 'Farm Map & Connected Farm', description: 'Spatial information, sensors and digital tools.', icon: 'map' },
    ],
    sides: [
      { title: 'Farmer Experience', description: 'A simpler journey from everyday field work to connected markets.', image: farmThumb, items: ['Farms, crops & livestock', 'Services & agricultural information', 'Marketplace & farm tools'] },
      { title: 'Customer Experience', description: 'A closer connection to food and the people who grow it.', image: fieldThumb, items: ['Discovering farm products & shopping', 'Orders & wishlist', 'Growing guidance & agricultural connection'] },
    ],
  },
  farmerVoices: [
    { name: 'Savitri Devi', designation: 'Farmer · Demo voice', description: 'On finding practical support and planning everyday farm work.', quote: 'Clear information and practical support can make farm work easier.', image: voice1, audio: '/audio/voice-1.mp3' },
    { name: 'Mahesh Patil', designation: 'Farmer · Demo voice', description: 'On seasonal decisions and staying connected to markets.', quote: 'Every season brings new decisions and new opportunities.', image: voice2, audio: '/audio/voice-2.mp3' },
  ],
  customerVoices: [
    { name: 'Ananya Rao', designation: 'Customer · Demo voice', description: 'On knowing where food comes from and who grows it.', quote: 'I would like to know more about the people who grow our food.', image: voice3, audio: '/audio/voice-3.mp3' },
    { name: 'Vikram Shah', designation: 'Customer · Demo voice', description: 'On local produce and a closer connection to farms.', quote: 'The journey from farm to market should be easier to understand.', image: voice4, audio: '/audio/voice-4.mp3' },
  ],
  explore: {
    hero: farmLandscape,
    heroSmall: farmThumb,
    categories: ['All', 'Stories', 'Learn', 'Farm Visits', 'Farm Activities', 'Farm Tours', 'Farmers', 'Crops', 'Farm Assist Centers', 'AgriTech', 'Updates'],
    visitorTypes: ['School', 'College / Institution', 'Company', 'Organization', 'Student Group', 'Community Group', 'Individual', 'Other'],
    durations: ['Day Visit', 'Camp', 'Week', 'Month', 'Custom'],
    packs: ['Crops', 'Farmers', 'Farm Activities', 'Farm Tour', 'Farm Assist Center', 'Experts', 'Soil & Irrigation', 'Agricultural Technology', 'Learning', 'Custom Experience'],
    experiences: [
      { title: 'Farm Visits', category: 'Farm Visits', description: 'Explore agricultural farms and understand the work behind each growing season.', pack: 'Crops' },
      { title: 'Farm Activities', category: 'Farm Activities', description: 'Ask about supervised, seasonal activities and hands-on agricultural learning.', pack: 'Farm Activities' },
      { title: 'Farm Tours', category: 'Farm Tours', description: 'Discover crops, growing areas and agricultural facilities on a guided visit.', pack: 'Farm Tour' },
      { title: 'Meet Farmers', category: 'Farmers', description: 'Ask questions about everyday farming decisions and learn from the people who grow food.', pack: 'Farmers' },
      { title: 'Farm Assist Centers', category: 'Farm Assist Centers', description: 'Express interest in discovering Farm Assist tools and services at participating centers, once verified.', pack: 'Farm Assist Center' },
      { title: 'Meet Experts', category: 'Learn', description: 'Request agricultural learning with a specialist, subject to participation and availability.', pack: 'Experts' },
    ],
    audiences: [
      { title: 'Schools', description: 'Practical agriculture learning for curious students.' },
      { title: 'Colleges', description: 'Explore agriculture, technology, business and the environment.' },
      { title: 'Companies', description: 'Team learning, agriculture awareness and community initiatives.' },
      { title: 'Organizations', description: 'Discuss tailored learning and community experiences.' },
      { title: 'Groups', description: 'Student groups, families, clubs and communities.' },
      { title: 'Individuals', description: 'Personal farm exploration and learning.' },
    ],
    activities: ['Crop observation', 'Seed-to-harvest learning', 'Soil exploration', 'Irrigation demonstrations', 'Farm maintenance', 'Harvest-related activities', 'Sustainable farming demonstrations', 'Technology demonstrations', 'Farmer interaction', 'Agriculture learning sessions'],
  },
  articles: [
    { slug: 'soil-testing-fundamentals', title: 'Healthy soil starts with better questions', category: 'Crops', audience: 'Farmers', image: farmField, thumbnail: fieldThumb, imageAlt: 'Cultivated agricultural fields', summary: 'A practical starting point for soil sampling, interpreting results and planning locally appropriate inputs.', sections: [
      { title: 'Know the field before taking a sample', content: 'A soil test is most useful when the sample represents the area you actually manage. Separate patches with different soil, drainage or cropping histories rather than mixing them into one sample. Record the crop, recent inputs and sampling location. Ask the testing laboratory how deep to sample and how to handle the material; instructions vary by crop and purpose.' },
      { title: 'Turn numbers into a plan', content: 'A report can help explain pH and nutrient availability, but a number alone is not an application recommendation. Discuss the results alongside crop needs, irrigation water and your previous harvest with a local agricultural adviser. Avoid buying extra fertilizer simply because a field looks uneven: moisture stress, compaction or pests may also be involved.' },
      { title: 'Observe changes over time', content: 'Keep reports with your field records and sample consistently so comparisons are meaningful. Note changes in drainage, root growth and crop performance. Follow local guidance for compost and manure handling, especially when growing food eaten raw. Testing supports decisions; it does not replace field observation or food-safety practices.' },
    ] },
    { slug: 'smart-water-management', title: 'Water decisions: observe first, measure next', category: 'AgriTech', audience: 'Farmers', image: farmLandscape, thumbnail: farmThumb, imageAlt: 'Green agricultural landscape', summary: 'Combine field observation, weather and simple measurements before changing an irrigation routine.', sections: [
      { title: 'Start in the root zone', content: 'The surface can look dry while deeper soil still holds moisture. Check representative places around the active roots and compare wetter and drier parts of the field. Soil texture, crop stage and root depth all affect how much water is useful. A fixed calendar is only a starting point, not a rule for every field.' },
      { title: 'Use tools as a second opinion', content: 'Moisture sensors can show trends when installed and maintained correctly. Follow manufacturer instructions, and check readings against physical observations. Look at recent rainfall, forecasts and irrigation-system leaks before making changes. Digital information is useful when it helps explain the field, rather than replacing the farmer’s judgement.' },
      { title: 'Protect the crop and the water source', content: 'Too much water can reduce air around roots and move nutrients beyond their reach. Too little can stress a crop at sensitive stages. Ask a local adviser about crop-specific scheduling and suitable equipment. Water used on food crops also needs appropriate quality checks; a moisture reading cannot establish water safety.' },
    ] },
    { slug: 'cover-cropping-basics', title: 'Keeping soil covered between crops', category: 'Learn', audience: 'Farmers', image: farmField, thumbnail: fieldThumb, imageAlt: 'Fields with green growing crops', summary: 'Explore soil cover, crop residues and the questions to ask before introducing a cover crop.', sections: [
      { title: 'Why bare ground matters', content: 'Rain and wind can move exposed soil, while an uncovered surface can lose moisture quickly. Crop residues, mulches or a suitable living cover may help protect it. The right choice depends on your next crop, available water, equipment and local pests. Begin by observing where erosion or surface crusting actually occurs.' },
      { title: 'Choose for your conditions', content: 'Different cover crops have different growth habits. Some legumes can contribute nitrogen under suitable conditions; other plants may offer useful roots or surface cover. None is a universal solution. Check whether a species could host pests, become a weed or compete for scarce water. Plan how and when it will be terminated before planting it.' },
      { title: 'Try a manageable area', content: 'Discuss timing and species with a local agricultural adviser. A small trial can help you compare establishment, costs, water use and the following crop against your usual practice. Record both benefits and difficulties. Protecting soil is a long-term process, and one season should not be treated as proof of guaranteed yield improvement.' },
    ] },
    { slug: 'from-field-to-fork', title: 'The journey behind your vegetables', category: 'Stories', audience: 'Customers', image: farmLandscape, thumbnail: farmThumb, imageAlt: 'Agricultural land where crops are grown', summary: 'From planting to harvest and handling: understand the work before food reaches your kitchen.', sections: [
      { title: 'A crop begins before the harvest', content: 'Farmers choose planting material, prepare land and plan around weather and water. During growth, they watch for weeds, pests and signs of stress. Different crops follow different timelines. A vegetable at the market is the result of many decisions, not simply something picked from a field that morning.' },
      { title: 'Harvest is only one part of freshness', content: 'The appropriate harvest stage depends on the crop, intended use and journey to market. Sorting, shade, packaging and storage conditions can all affect quality afterwards. Ask sellers when produce was harvested and how it has been handled rather than assuming a local label guarantees freshness or safety.' },
      { title: 'Care continues at home', content: 'Store produce according to its needs and refrigerate perishable or cut items promptly. Wash fruit and vegetables under clean running water before preparation; do not use soap. Keep them away from raw meat and dirty utensils. Washing reduces contamination but does not remove every hazard. Follow local food-safety advice, especially for vulnerable family members.' },
    ] },
    { slug: 'choosing-seasonal-produce', title: 'A thoughtful guide to seasonal produce', category: 'Crops', audience: 'Customers', image: farmField, thumbnail: fieldThumb, imageAlt: 'Seasonal crops growing in a field', summary: 'Learn what seasonality means locally, ask useful questions and plan meals with less waste.', sections: [
      { title: 'Seasonal means local conditions', content: 'Growing seasons change with climate, elevation, water and protected cultivation. A crop available nearby may have travelled from a different region. Ask where it was grown and what is currently being harvested locally. Seasonality is a helpful conversation starter, not a guarantee about nutritional value, price or environmental impact.' },
      { title: 'Choose quality for your needs', content: 'Look for produce appropriate to the meal you are planning. Slightly irregular shapes can still be useful, but avoid items with mould or signs of spoilage. Ripeness, storage and variety affect flavour. Buy amounts you can realistically use rather than assuming every seasonal item will keep equally well.' },
      { title: 'Make the most of what you buy', content: 'Plan a few flexible meals and use the most perishable ingredients first. Follow crop-specific storage advice and safe methods if preserving food. Talking with growers can reveal unfamiliar varieties and preparation ideas. Small, informed choices help connect daily meals to the work of farming without making unsupported claims about any particular farm.' },
    ] },
    { slug: 'understanding-farm-labels', title: 'What food labels can—and cannot—tell you', category: 'Learn', audience: 'Customers', image: farmLandscape, thumbnail: farmThumb, imageAlt: 'Farmland supporting food production', summary: 'Read labels with confidence and ask producers clearer questions about how food is grown.', sections: [
      { title: 'Look for a defined standard', content: 'Some terms, such as certified organic, are tied to rules and verification in the region where food is sold. Check the certifier and what the standard covers. Certification does not mean a food is free from every hazard, nor does it automatically make every nutritional claim true. Food still needs careful handling.' },
      { title: 'Separate a description from a guarantee', content: 'Words such as natural, local or regenerative may have different meanings or no single shared certification. Ask what practices a producer is describing: soil cover, water management, traceability or something else. A clear answer is more useful than treating every appealing label as equivalent evidence.' },
      { title: 'Keep the conversation practical', content: 'Ask where a product was grown, how it was stored and how best to prepare it. For packaged food, check ingredients, allergens, storage instructions and applicable date guidance. Choose according to your needs and budget. Understanding labels is about making informed decisions, not judging farmers or customers by one word on a package.' },
    ] },
  ],
  journeyMilestones: [
    { id: 'idea', period: 'Date pending', title: 'The Farm Assist idea', summary: 'A farmer-focused purpose and a simpler path through agricultural technology.', detail: 'The project idea, concept and initial direction form the foundation of Farm Assist. A verified founding date has not yet been supplied.', category: 'Idea & Vision', status: 'Completed' },
    { id: 'purpose', period: 'Date pending', title: 'Defining the purpose', summary: 'Connecting farmers, practical support, services, markets and customers.', detail: 'The platform direction centers on making agricultural tools more approachable while keeping farmers and real farm work at the heart of the experience.', category: 'Idea & Vision', status: 'Completed' },
    { id: 'product', period: 'Current stage', title: 'Building the connected product', summary: 'Developing the core application and bringing its agricultural areas together.', detail: 'Application development, feature development and platform integration are current focus areas. Individual modules are not presented as complete or launched.', category: 'Product Development', status: 'In Progress', image: farmField, imageAlt: 'Cultivated fields representing the agricultural focus of product development' },
    { id: 'farmers', period: 'Preparing', title: 'Preparing the farmer experience', summary: 'Shaping farm management, information, services and market connections around farmer needs.', detail: 'Farmer introduction, practical testing and feedback are preparation stages. Participation, pilot farms and field results are not claimed until verified.', category: 'Farmer Engagement', status: 'Preparing' },
    { id: 'customers', period: 'In development', title: 'Extending the customer experience', summary: 'Bringing customers closer to farm products, growers and agricultural knowledge.', detail: 'Customer-side discovery and connection are part of the platform direction. Public availability and completed marketplace activity are not claimed.', category: 'Customer Experience', status: 'In Progress' },
    { id: 'field', period: 'Planned', title: 'Learning through real-world use', summary: 'Moving toward pilot activities, feedback and practical improvement.', detail: 'Pilot preparation, initial testing and wider real-world learning remain planned stages. Dates and participating locations will be added only when verified.', category: 'Pilot & Field Activities', status: 'Planned', image: farmLandscape, imageAlt: 'Agricultural landscape representing future field learning' },
    { id: 'ecosystem', period: 'Future direction', title: 'Growing the agricultural ecosystem', summary: 'Connecting farm experiences, learning, experts and Farm Assist centers over time.', detail: 'The long-term direction includes stronger farmer-customer connections, agricultural learning and real-world experiences. These are goals, not currently available services.', category: 'Future Direction', status: 'Planned' },
  ] as JourneyMilestone[],
  screenshots: [] as { title: string; image: string }[],
  journey: ['Idea', 'Concept', 'Planning', 'UI/UX', 'Application Development', 'Feature Development', 'Integration', 'Testing', 'Pilot Preparation', 'Pilot', 'Expansion'],
  pilot: ['Preparation', 'Farmer Introduction', 'Initial Testing', 'Pilot Farms', 'Real Usage', 'Feedback', 'Improvements', 'Wider Rollout'],
} as const;
