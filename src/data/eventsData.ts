import type { Event } from '../types/event';

export const events: Event[] = [
    {
        id: 'london-2026',
        slug: 'london-anterior-posterior-2026',
        title: 'International hands-on course from Dr. Sche. Anterior+Posterior',
        subtitle: 'The world\'s most comprehensive and in-depth composite restoration course.',
        location: 'LONDON',
        venue: 'Sheraton Skyline, Bath Road, Heathrow, London UB3 5BP',
        dates: 'April 24/25/26 2026',
        shortDate: 'Apr 24-26, 2026',
        priceRange: '£2,500 - £2,700',
        registrationPhone: '+7 (909) 938-66-09',
        whatsapp: '+44 7500802149',
        thumbnailImage: '/images/events/london_thumb.png',
        heroImage: '/images/events/london_hero.png',
        galleryImages: [
            '/images/events/london_hotel.png',
            '/images/events/dental_seminar.png',
            '/images/events/dental_training.png',
            '/images/events/dental_networking.png'
        ],
        fullDescription: `This legendary course has long established itself in various countries as the world's most comprehensive and in-depth for those who truly want to learn how to create beautiful, natural, and functional composite restorations. The timing of each day's work has been increased, classes are held from 09:00 to 22:00, from morning to evening the days are filled with in-depth scientific analysis, study of protocols, techniques, demonstration of work on a microscope and a very large amount of practice (60% of all time is practice). Course participants will also be equipped with microscopes, binocular loupes, various materials, and all kinds of tools to achieve high-quality results. Viktor works in a unique manner, addressing each participant's mistakes individually and constantly providing constructive feedback.`,
        whatWillYouLearn: [
            "Optics of tooth tissues and composite materials",
            "DeepFakeOptics technique for chromatic construction",
            "Reproduction of mamelons and Halo effect",
            "Morphology of anterior teeth and surface texture",
            "Invisible logical transitions in segmental restorations",
            "Fundamental chemistry of composite materials",
            "Advanced anatomy and function of posterior teeth",
            "Restoration techniques for Class 2 defects"
        ],
        whatToBring: [
            "Your preferred binocular loupes (optional but recommended)",
            "Professional camera for case photography (optional)",
            "A passion for dental excellence",
            "Questions and clinical cases for discussion"
        ],
        whatWeProvide: [
            "Individual microscope for each participant",
            "All composite materials and tools",
            "Detailed printed protocols and manuals",
            "Catering: Coffee breaks, Lunch, and Dinner",
            "Certificate of completion"
        ],
        pricingTiers: [
            { label: 'Full 3-Day Course', price: '£2,500', description: 'Complete anterior + posterior restoration mastery' },
            { label: '2-Day Intensive', price: '£1,800', description: 'Anterior restoration focused sessions' },
            { label: '1-Day Foundation', price: '£950', description: 'Core optics and material science' }
        ],
        multiDayPricing: {
            1: 950,
            2: 1800,
            3: 2500
        },
        schedule: [
            {
                dayNumber: 1,
                title: 'Fundamentals of Anterior Teeth Restoration',
                items: [
                    { time: '09:00 - 11:00', title: 'Optics of Tooth Tissues', topics: ['Anatomy of Transparency', 'Shade Selection Protocol', 'DeepFakeOptics Technique'] },
                    { time: '11:00 - 11:30', title: 'Coffee Break' },
                    { time: '11:30 - 13:30', title: 'Morphology & Finishing', topics: ['Atlas of Forms', 'Invisible Transitions', 'Polishing Protocols'] },
                    { time: '13:30 - 15:00', title: 'Microscope Demonstration', speaker: 'Dr. Sche' },
                    { time: '15:00 - 16:00', title: 'Lunch' },
                    { time: '16:00 - 20:00', title: 'Practical Session I' },
                    { time: '20:00 - 20:30', title: 'Dinner' },
                    { time: '20:30 - 22:00', title: 'Practical Session II' }
                ]
            },
            {
                dayNumber: 2,
                title: 'Bleach Restorations & Veneers',
                items: [
                    { time: '09:00 - 11:00', title: 'Shade & Layer Recipes', topics: ['Alternative Bleach Approaches', 'Rubber Dam Isolation', 'Thickness Control'] },
                    { time: '11:00 - 11:30', title: 'Coffee Break' },
                    { time: '11:30 - 13:00', title: 'Fundamental Chemistry', topics: ['Chemical-Physical Properties', 'Behavior Under Stress'] },
                    { time: '13:30 - 15:00', title: 'Clinical Workflow Demo', speaker: 'Dr. Sche' },
                    { time: '15:00 - 16:00', title: 'Lunch' },
                    { time: '16:00 - 20:00', title: 'Practical Session III' },
                    { time: '20:00 - 20:30', title: 'Dinner' },
                    { time: '20:30 - 22:00', title: 'Practical Session IV' }
                ]
            },
            {
                dayNumber: 3,
                title: 'Posterior Teeth Restorations',
                items: [
                    { time: '09:00 - 11:00', title: 'Posterior Anatomy & Function', topics: ['Occlusal Surface Role', 'Defect Control', 'Fissure Pigmentation'] },
                    { time: '11:00 - 11:30', title: 'Coffee Break' },
                    { time: '12:30 - 14:00', title: 'Posterior Practical Demo', speaker: 'Dr. Sche' },
                    { time: '14:00 - 15:00', title: 'Lunch' },
                    { time: '15:00 - 20:30', title: 'Practical Session V' },
                    { time: '20:30 - 21:00', title: 'Dinner' },
                    { time: '21:30 - 22:00', title: 'Final Photo Session' }
                ]
            }
        ],
        isFeatured: true
    },
    {
        id: 'dubai-2026',
        slug: 'dubai-implant-masterclass',
        title: 'Advanced Implantology & Bone Grafting',
        subtitle: 'Master complex full-arch rehabilitation and regenerative techniques.',
        location: 'DUBAI',
        venue: 'Grand Hyatt Dubai, United Arab Emirates',
        dates: 'June 12/13/14 2026',
        shortDate: 'Jun 12-14, 2026',
        priceRange: '$3,200',
        registrationPhone: '+971 4 317 1234',
        whatsapp: '+971 50 123 4567',
        thumbnailImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80',
        heroImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&q=80',
        galleryImages: [],
        fullDescription: 'Join us in Dubai for an intensive 3-day masterclass on advanced implantology. This course covers everything from sinus lifts to full-arch immediate loading protocols.',
        whatWillYouLearn: ['Sinus Lift Protocols', 'Guided Bone Regeneration', 'Full Arch Immediate Loading'],
        whatToBring: ['Surgical scrubs'],
        whatWeProvide: ['Surgical kits', 'Practice models', 'Luxury catering'],
        pricingTiers: [{ label: 'Full Course', price: '$3,200', description: 'Inclusive of all materials' }],
        schedule: [],
    },
    {
        id: 'tokyo-2026',
        slug: 'tokyo-aesthetic-veneers',
        title: 'Aesthetic Smile Design: Veneers Mastery',
        subtitle: 'Precision preparation and bonding for the perfect ceramic smile.',
        location: 'TOKYO',
        venue: 'Park Hyatt Tokyo, Japan',
        dates: 'September 08/09/10 2026',
        shortDate: 'Sep 8-10, 2026',
        priceRange: '¥450,000',
        registrationPhone: '+81 3-5322-1234',
        whatsapp: '+81 80 1234 5678',
        thumbnailImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
        heroImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&q=80',
        galleryImages: [],
        fullDescription: 'Discover the secrets of Japanese precision in aesthetic dentistry. This course focuses on minimal preparation veneers and advanced bonding protocols.',
        whatWillYouLearn: ['Digital Smile Design', 'Minimal Prep Protocols', 'Adhesive Cementation'],
        whatToBring: ['Notebook', 'Camera'],
        whatWeProvide: ['Preparation kits', 'Models', 'Interpretation services'],
        pricingTiers: [{ label: 'Full Course', price: '¥450,000', description: '3-day intensive program' }],
        schedule: [],
    }
];
