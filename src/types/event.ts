export interface PricingTier {
    label: string;
    price: string;
    description: string;
}

export interface ScheduleItem {
    time: string;
    title: string;
    description?: string;
    topics?: string[];
    speaker?: string;
}

export interface ScheduleDay {
    dayNumber: number;
    title: string;
    items: ScheduleItem[];
}

export interface EventSection {
    title: string;
    items: string[];
}

export interface Event {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    location: string;
    venue: string;
    dates: string;
    shortDate: string;
    priceRange: string;
    registrationPhone: string;
    whatsapp: string;
    fullDescription: string;
    thumbnailImage: string;
    heroImage: string;
    galleryImages: string[];
    pricingTiers: PricingTier[];
    multiDayPricing?: {
        [days: number]: number;
    };
    schedule: ScheduleDay[];
    whatWillYouLearn: string[];
    whatToBring: string[];
    whatWeProvide: string[];
    isFeatured?: boolean;
}
