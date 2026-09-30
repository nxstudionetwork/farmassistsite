import voice1 from '@/assets/voice-1.jpg';
import voice2 from '@/assets/voice-2.jpg';
import voice3 from '@/assets/voice-3.jpg';
import voice4 from '@/assets/voice-4.jpg';
import team1 from '@/assets/team-1.jpg';
import team2 from '@/assets/team-2.jpg';
import team3 from '@/assets/team-3.jpg';
import team4 from '@/assets/team-4.jpg';
import team5 from '@/assets/team-5.jpg';
import team6 from '@/assets/team-6.jpg';
import team7 from '@/assets/team-7.jpg';
import team8 from '@/assets/team-8.jpg';
import team9 from '@/assets/team-9.jpg';
import team10 from '@/assets/team-10.jpg';

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
    { image: team6, name: 'Dev Prakash', designation: 'Community Outreach', shortDescription: 'Listening to local farming perspectives.', fullDescription: 'Demo profile: Dev represents community outreach, helping ensure farmer voices remain part of every conversation.' },
    { image: team7, name: 'Priya Shah', designation: 'Customer Experience', shortDescription: 'Connecting customers to the people who grow.', fullDescription: 'Demo profile: Priya represents customer experience, imagining more transparent and human connections to food origins.' },
    { image: team8, name: 'Kiran Reddy', designation: 'Agricultural Services', shortDescription: 'Finding practical support for the field.', fullDescription: 'Demo profile: Kiran represents agricultural services, focusing on useful support across the farming journey.' },
    { image: team9, name: 'Lakshmi Devi', designation: 'Farmer Engagement', shortDescription: 'Keeping farmer needs at the centre.', fullDescription: 'Demo profile: Lakshmi represents farmer engagement, making space for field feedback and everyday farming realities.' },
    { image: team10, name: 'Sameer Khan', designation: 'Technology Operations', shortDescription: 'Helping the platform work in real life.', fullDescription: 'Demo profile: Sameer represents technology operations, working toward a dependable experience for farmers and customers.' },
  ],
  pilotStatus: 'PILOT PREPARATION',
  downloadUrl: '',
  farmerVoices: [
    { name: 'Savitri Devi', designation: 'Farmer · Demo voice', description: 'On finding practical support and planning everyday farm work.', quote: 'Clear information and practical support can make farm work easier.', image: voice1, audio: '/audio/voice-1.mp3' },
    { name: 'Mahesh Patil', designation: 'Farmer · Demo voice', description: 'On seasonal decisions and staying connected to markets.', quote: 'Every season brings new decisions and new opportunities.', image: voice2, audio: '/audio/voice-2.mp3' },
  ],
  customerVoices: [
    { name: 'Ananya Rao', designation: 'Customer · Demo voice', description: 'On knowing where food comes from and who grows it.', quote: 'I would like to know more about the people who grow our food.', image: voice3, audio: '/audio/voice-3.mp3' },
    { name: 'Vikram Shah', designation: 'Customer · Demo voice', description: 'On local produce and a closer connection to farms.', quote: 'The journey from farm to market should be easier to understand.', image: voice4, audio: '/audio/voice-4.mp3' },
  ],
  articles: [] as { title: string; category: string; summary: string; image?: string; url?: string }[],
  journeyYears: [] as { year: string; title: string; dimension: string; description: string }[],
  screenshots: [] as { title: string; image: string }[],
  journey: ['Idea', 'Concept', 'Planning', 'UI/UX', 'Application Development', 'Feature Development', 'Integration', 'Testing', 'Pilot Preparation', 'Pilot', 'Expansion'],
  pilot: ['Preparation', 'Farmer Introduction', 'Initial Testing', 'Pilot Farms', 'Real Usage', 'Feedback', 'Improvements', 'Wider Rollout'],
} as const;
