import type { Dentist, WebinarEvent, Review, PricingOption } from '../types';

import SantoshImg from '../assets/santosh.jpg';
import ViktorImg from '../assets/viktor.png';

// Placeholder dentist data - Replace with real data
export const dentists: Dentist[] = [
    {
        id: '1',
        name: 'Dr. Santosh Patil',
        credentials: 'BDS, MSc, PG Dip Hyp, PG Dip Ortho, PG Dip Imp, PG Dip Acu, PG Cert SM',
        specialty: 'Restorative & Digital Dentistry',
        biography: "Dr Santosh has a long and successful record in patient dental care with a wide range of treatment offers across all aspects of general dentistry. His keen interest in teeth straightening & structured training has led him to offer braces (formerly known as 'train-tracks') discreet lingual (hidden) braces, ceramic labial braces, clear (plastic) aligners & the revolutionary Inman aligner.",
        profileImageUrl: SantoshImg,
        achievements: [
            'Masters in Laser Dentistry ALD, USA, 2025',
            'Masters in Laser Dentistry Catolica University, Rome, Italy 2024',
            'Mastership World Clinical Laser Institute, Dubai UAE, 2024',
            'Fellowship World Clinical Laser Institute, Tokyo Japan, 2022',
            'PG Diploma in Dental Implant, London 2021'
        ],
        socialLinks: {
            linkedin: 'https://linkedin.com',
            twitter: 'https://twitter.com'
        },
        topicsCovered: ['Comprehensive Restorative Dentistry', 'Digital Workflow', 'Practice Management'],
        institution: 'Whitefern Dental Health',
        yearsExperience: 20
    },
    {
        id: '2',
        name: 'Dr. Viktor Shcherbakov',
        credentials: 'DDS',
        specialty: 'Esthetic & Implant Dentistry', // Inferred from FICOI + context
        biography: 'Dr. Viktor Shcherbakov, DDS, based in Moscow, is an esteemed dentist renowned for his artistic approach to teeth restoration. His dedication to delivering naturally beautiful smiles is matched by his technical expertise and artistic flair. As an internationally recognized lecturer, he shares his profound knowledge globally, captivating audiences with his clear and engaging teaching style',
        profileImageUrl: ViktorImg,
        achievements: [
            'UCLA School of Dentistry Faculty',
            'Fellow, Intl Congress of Oral Implantologists',
            'Master of Science (MS)',
            'Renowned Clinical Educator'
        ],
        socialLinks: {
            linkedin: 'https://linkedin.com',
            researchGate: 'https://researchgate.net'
        },
        topicsCovered: ['Implant Surgery', 'Esthetic Rehabilitation', 'Advanced Prosthodontics'],
        institution: 'Zen Dentistry',
        yearsExperience: 15
    }
];

// Webinar event data
export const upcomingEvent: WebinarEvent = {
    id: 'london-2026',
    name: 'International hands-on course from Dr. Sche. Anterior+Posterior',
    date: 'April 24-26, 2026',
    time: '09:00 - 22:00',
    durationHours: 36,
    platform: 'In-Person',
    maxCapacity: 50,
    currentRegistrations: 42,
    basePrice: 2500,
    multiDayPricing: {
        1: 950,
        2: 1800,
        3: 2500
    },
    status: 'upcoming',
    description: "The world's most comprehensive and in-depth composite restoration course. Join us for 3 days of intensive hands-on training with Dr. Sche in London."
};

// Testimonials/Reviews
export const reviews: Review[] = [
    {
        id: '1',
        attendeeName: 'Dr. Robert Williams',
        attendeeCredential: 'DDS, Private Practice Owner',
        attendeePhotoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        rating: 5,
        reviewText: 'This was the most comprehensive dental education event I\'ve ever attended. The speakers were world-class and the interactive Q&A sessions were invaluable. I\'ve already implemented several techniques in my practice.',
        eventDate: '2025-11-15',
        verified: true
    },
    {
        id: '2',
        attendeeName: 'Dr. Lisa Chang',
        attendeeCredential: 'DMD, Prosthodontist',
        attendeePhotoUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
        rating: 5,
        reviewText: 'Absolutely transformative experience! Dr. Mitchell\'s session on digital implant planning alone was worth the entire registration fee. The networking opportunities were exceptional.',
        eventDate: '2025-11-15',
        verified: true
    },
    {
        id: '3',
        attendeeName: 'Dr. Ahmed Hassan',
        attendeeCredential: 'BDS, MDS, Endodontist',
        attendeePhotoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
        rating: 5,
        reviewText: 'The quality of instruction was unparalleled. Every minute of the 12 hours was packed with actionable insights. The materials kit and certificate were beautiful bonuses.',
        eventDate: '2025-08-20',
        verified: true
    },
    {
        id: '4',
        attendeeName: 'Dr. Maria Santos',
        attendeeCredential: 'DDS, Periodontist',
        attendeePhotoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
        rating: 5,
        reviewText: 'As a specialist, I was skeptical about what I could learn from a general masterclass. I was completely wrong - the advanced techniques shared here opened new horizons for my practice.',
        eventDate: '2025-08-20',
        verified: true
    },
    {
        id: '5',
        attendeeName: 'Dr. David Kim',
        attendeeCredential: 'DMD, General Dentist',
        attendeePhotoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
        rating: 5,
        reviewText: 'Best investment in my dental career. The knowledge I gained has directly translated to better patient outcomes and increased practice revenue. Highly recommend!',
        eventDate: '2025-05-10',
        verified: true
    }
];

// Pricing options
export const pricingOptions: PricingOption[] = [
    { id: 'acc-single', type: 'accommodation', name: 'Single Room', price: 200, description: 'Private single room accommodation' },
    { id: 'acc-shared', type: 'accommodation', name: 'Shared Room', price: 150, description: 'Shared room (2 people)' },
    { id: 'acc-none', type: 'accommodation', name: 'No Accommodation', price: 0, description: 'Arrange your own accommodation' },
    { id: 'food-halal', type: 'food', name: 'Halal', price: 0, description: 'Halal meals included' },
    { id: 'food-veg', type: 'food', name: 'Vegetarian', price: 0, description: 'Vegetarian meals included' },
    { id: 'food-vegan', type: 'food', name: 'Vegan', price: 0, description: 'Vegan meals included' },
    { id: 'food-none', type: 'food', name: 'No Food', price: -50, description: 'Opt out for $50 discount' },
    { id: 'cert-hard', type: 'extras', name: 'Hard Copy Certificate', price: 25, description: 'Printed and framed certificate' },
    { id: 'cert-digital', type: 'extras', name: 'Digital Certificate', price: 0, description: 'PDF certificate included' },
    { id: 'kit', type: 'extras', name: 'Workshop Materials Kit', price: 75, description: 'Physical materials and tools kit' },
    { id: 'dinner', type: 'extras', name: 'Networking Dinner', price: 100, description: 'Exclusive dinner with speakers' }
];

// Countries list for registration
export const countries = [
    'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany',
    'France', 'India', 'China', 'Japan', 'Brazil', 'Mexico', 'South Korea',
    'Italy', 'Spain', 'Netherlands', 'Sweden', 'Switzerland', 'Singapore',
    'United Arab Emirates', 'Saudi Arabia', 'South Africa', 'New Zealand',
    'Ireland', 'Belgium', 'Austria', 'Norway', 'Denmark', 'Finland', 'Other'
];

export const countryCodes = [
    { code: '+1', country: 'US/CA' },
    { code: '+44', country: 'UK' },
    { code: '+91', country: 'IN' },
    { code: '+61', country: 'AU' },
    { code: '+49', country: 'DE' },
    { code: '+33', country: 'FR' },
    { code: '+81', country: 'JP' },
    { code: '+86', country: 'CN' },
    { code: '+971', country: 'UAE' },
    { code: '+65', country: 'SG' },
    { code: '+55', country: 'BR' },
    { code: '+27', country: 'ZA' },
];
