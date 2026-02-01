import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
    Calendar,
    MapPin,
    CheckCircle,
    ArrowLeft,
    Users,
    Zap,
    Shield,
    Info
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { events } from '../data/eventsData';
import { cn } from '../lib/utils';

export default function EventDetail() {
    const { eventSlug } = useParams();
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [activeDay, setActiveDay] = useState(1);

    const event = events.find(e => e.slug === eventSlug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [eventSlug]);

    if (!event) {
        return (
            <div className="h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Event not found</h1>
                    <Link to="/events" className="text-cyan-500 font-bold">Back to Events</Link>
                </div>
            </div>
        );
    }

    const colors = {
        bg: isDark ? 'bg-black' : 'bg-white',
        bgAlt: isDark ? 'bg-zinc-950' : 'bg-zinc-100',
        text: isDark ? 'text-white' : 'text-black',
        textSecondary: isDark ? 'text-white/70' : 'text-black/70',
        border: isDark ? 'border-white/10' : 'border-black/10',
        accent: isDark ? 'text-white' : 'text-black',
        accentBg: isDark ? 'bg-white/10' : 'bg-black/5',
        card: isDark ? 'bg-zinc-900' : 'bg-white',
    };

    return (
        <main className={`${colors.bg} min-h-screen transition-colors duration-500`}>
            {/* Hero Section */}
            <section className="relative min-h-[85vh] lg:min-h-[800px] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={event.heroImage}
                        alt={event.title}
                        className="w-full h-full object-cover grayscale"
                    />
                    <div className={`absolute inset-0 ${isDark ? 'bg-black/60' : 'bg-black/20'}`} />
                </div>

                <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-start pb-32 pt-26">
                    <Link to="/events" className="inline-flex items-center gap-2 text-white hover:text-white/80 mb-8 transition-colors text-[11px] uppercase tracking-widest font-black">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Events
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <div className="flex gap-3 mb-6">
                            <span className="bg-white text-black px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] uppercase">
                                Hands-On Masterclass
                            </span>
                            <span className="bg-white/10 backdrop-blur border border-white/20 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                                {event.location}
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] uppercase tracking-tighter">
                            {event.title}
                        </h1>
                        <p className="text-xl text-white/80 max-w-2xl mb-10 leading-relaxed font-medium uppercase tracking-wide text-[14px]">
                            {event.subtitle}
                        </p>

                        <div className="flex flex-wrap gap-8 text-white/90 border-t border-white/10 pt-10">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                                    <Calendar className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-white/40 uppercase font-black tracking-[0.2em]">Dates</p>
                                    <p className="font-bold text-white uppercase tracking-wider">{event.dates}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                                    <MapPin className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-white/40 uppercase font-black tracking-[0.2em]">Venue</p>
                                    <p className="font-bold text-white uppercase tracking-wider">{event.location}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Event Overview & Info Bar */}
            <section className={`py-12 border-b ${colors.border}`}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <h2 className={`text-3xl font-bold ${colors.text} mb-6`}>Course Overview</h2>
                            <p className={`${colors.textSecondary} text-lg leading-relaxed mb-8`}>
                                {event.fullDescription}
                            </p>

                            {/* Key Aspects Grid */}
                            <div className="grid md:grid-cols-3 gap-6 mb-12">
                                <div className={`p-6 rounded-3xl ${colors.bgAlt} border ${colors.border}`}>
                                    <Zap className={`w-8 h-8 ${colors.accent} mb-4`} />
                                    <h4 className={`font-bold ${colors.text} mb-2`}>60% Practice</h4>
                                    <p className={`text-sm ${colors.textSecondary}`}>Heavy focus on hands-on practical skills.</p>
                                </div>
                                <div className={`p-6 rounded-3xl ${colors.bgAlt} border ${colors.border}`}>
                                    <Users className={`w-8 h-8 ${colors.accent} mb-4`} />
                                    <h4 className={`font-bold ${colors.text} mb-2`}>Individual Focus</h4>
                                    <p className={`text-sm ${colors.textSecondary}`}>Small groups with personalized feedback.</p>
                                </div>
                                <div className={`p-6 rounded-3xl ${colors.bgAlt} border ${colors.border}`}>
                                    <Shield className={`w-8 h-8 ${colors.accent} mb-4`} />
                                    <h4 className={`font-bold ${colors.text} mb-2`}>Certified</h4>
                                    <p className={`text-sm ${colors.textSecondary}`}>Get an industry recognized completion certificate.</p>
                                </div>
                            </div>

                            {/* Learning Objectives */}
                            <div className="mb-12">
                                <h3 className={`text-2xl font-bold ${colors.text} mb-6`}>What You'll Learn</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {event.whatWillYouLearn.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-4">
                                            <CheckCircle className={`w-5 h-5 ${isDark ? 'text-white' : 'text-black'} mt-0.5 flex-shrink-0`} />
                                            <span className={`${colors.textSecondary} font-medium`}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Pricing Card */}
                            <div className={`${colors.card} rounded-[2rem] p-8 border ${colors.border} shadow-xl sticky top-24`}>
                                <h3 className={`text-2xl font-bold ${colors.text} mb-6`}>Registration Fee</h3>
                                <div className="space-y-4 mb-8">
                                    {event.pricingTiers.map((tier, idx) => (
                                        <div key={idx} className={`p-4 rounded-2xl border ${colors.border}`}>
                                            <div className="flex justify-between items-center mb-1">
                                                <span className={`font-bold ${colors.text}`}>{tier.label}</span>
                                                <span className={`${colors.accent} font-black text-lg`}>{tier.price}</span>
                                            </div>
                                            <p className={`text-xs ${colors.textSecondary}`}>{tier.description}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-4">
                                    <Link
                                        to="/register"
                                        state={{ event, selectedDays: '3' }}
                                        className="w-full flex items-center justify-center gap-3 bg-black text-white dark:bg-white dark:text-black font-black uppercase tracking-[0.2em] text-[11px] py-6 rounded-2xl transition-all shadow-xl hover:opacity-80"
                                    >
                                        Register Now
                                    </Link>
                                    <div className="text-center">
                                        <p className={`text-xs ${colors.textSecondary} mb-1`}>Questions? Call Us</p>
                                        <p className={`font-bold ${colors.text}`}>{event.registrationPhone}</p>
                                    </div>
                                </div>

                                <div className={`mt-8 pt-6 border-t ${colors.border} space-y-4`}>
                                    <div className="flex items-center gap-3">
                                        <Info className={`w-4 h-4 ${colors.accent}`} />
                                        <span className={`text-xs ${colors.textSecondary}`}>Limited spots available for 2026.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Content & Schedule */}
            {event.schedule && event.schedule.length > 0 && (
                <section className={`py-28 ${colors.bg}`}>
                    <div className="max-w-6xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-20"
                        >
                            <h2 className={`text-4xl md:text-5xl font-bold ${colors.text} mb-4`}>
                                Event Format & Schedule
                            </h2>
                            <p className={`${colors.textSecondary} text-xl max-w-2xl mx-auto`}>
                                A carefully structured program designed for maximum learning and engagement
                            </p>
                        </motion.div>

                        {/* Day Selector Section */}
                        <div className="mb-12">
                            <div className="flex items-center justify-center gap-4 mb-10">
                                <div className={`w-12 h-px ${isDark ? 'bg-white/20' : 'bg-black/20'}`} />
                                <span className={`text-[10px] font-black uppercase tracking-[0.4em] ${isDark ? 'text-white/40' : 'text-black/40'}`}>Course Timeline</span>
                                <div className={`w-12 h-px ${isDark ? 'bg-white/20' : 'bg-black/20'}`} />
                            </div>

                            <div className="max-w-md mx-auto p-1.5 bg-zinc-900/50 backdrop-blur-xl border border-white/5 shadow-2xl">
                                <div className="flex gap-1 overflow-x-auto no-scrollbar relative">
                                    {event.schedule.map((day) => (
                                        <button
                                            key={day.dayNumber}
                                            onClick={() => setActiveDay(day.dayNumber)}
                                            className={cn(
                                                "relative flex-1 px-8 py-5 font-black transition-all duration-300 whitespace-nowrap z-10 text-[11px] uppercase tracking-widest",
                                                activeDay === day.dayNumber
                                                    ? "text-black dark:text-white"
                                                    : `${colors.textSecondary} hover:text-black dark:hover:text-white`
                                            )}
                                        >
                                            <span className="relative z-10">Day {day.dayNumber}</span>
                                            {activeDay === day.dayNumber && (
                                                <motion.div
                                                    layoutId="activeDayTab"
                                                    className="absolute inset-0 bg-white dark:bg-zinc-800 shadow-xl"
                                                    transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                                                />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Selected Day Heading */}
                        <motion.div
                            key={`heading-${activeDay}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center mb-16"
                        >
                            <h3 className={`text-2xl md:text-3xl font-black ${colors.text} uppercase tracking-tight`}>
                                {event.schedule.find(d => d.dayNumber === activeDay)?.title}
                            </h3>
                            <div className={`w-24 h-1 ${isDark ? 'bg-white' : 'bg-black'} mx-auto mt-6 rounded-full opacity-20`} />
                        </motion.div>

                        {/* Timeline - Filtered by activeDay */}
                        <div className="relative">
                            {/* Vertical line with gradient */}
                            <div className={`absolute left-4 md:left-1/2 top-4 bottom-4 w-px ${isDark ? 'bg-gradient-to-b from-transparent via-white/20 to-transparent' : 'bg-gradient-to-b from-transparent via-black/20 to-transparent'} -translate-x-1/2`} />

                            <div className="space-y-12">
                                {event.schedule
                                    .find(day => day.dayNumber === activeDay)
                                    ?.items.map((item, index) => (
                                        <motion.div
                                            key={`${activeDay}-${index}`}
                                            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                            className={`relative flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                        >
                                            {/* Content */}
                                            <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'} pl-12 md:pl-0`}>
                                                <div className={`${colors.card} border ${colors.border} p-10 transition-all duration-500 group ${item.speaker ? 'hover:border-black/50 dark:hover:border-white/50' : `${colors.accentBg} border-dashed`}`}>
                                                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                                        <span className={`text-[10px] ${colors.accentBg} ${colors.accent} px-3 py-1 rounded-full font-black uppercase tracking-widest`}>
                                                            Day {activeDay}
                                                        </span>
                                                        <span className={`text-sm font-bold ${colors.textSecondary} flex items-center gap-2`}>
                                                            <div className={`w-1.5 h-1.5 rounded-full ${colors.accent}`} />
                                                            {item.time}
                                                        </span>
                                                    </div>
                                                    <h3 className={`text-xl font-bold ${colors.text} mb-3 group-hover:${colors.accent} transition-colors`}>{item.title}</h3>
                                                    {item.speaker && (
                                                        <div className={`flex items-center gap-2 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                                            <div className={`w-6 h-6 rounded-lg ${isDark ? 'bg-white/10' : 'bg-black/5'} flex items-center justify-center`}>
                                                                <Users className={`w-3 h-3 ${isDark ? 'text-white' : 'text-black'}`} />
                                                            </div>
                                                            <p className={`${colors.textSecondary} text-sm font-medium`}>Specialist: {item.speaker}</p>
                                                        </div>
                                                    )}
                                                    {item.topics && item.topics.length > 0 && (
                                                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                                            {item.topics.map((topic, i) => (
                                                                <span key={i} className={`text-[10px] ${isDark ? 'bg-black/40' : 'bg-white'} px-3 py-1.5 rounded-xl border ${colors.border} ${colors.textSecondary} font-medium`}>
                                                                    {topic}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Dot with pulse */}
                                            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-8 z-10">
                                                <div className="relative">
                                                    <div className={`w-4 h-4 ${isDark ? 'bg-white' : 'bg-black'} rounded-full border-4 ${isDark ? 'border-black' : 'border-white'} shadow-lg`} />
                                                    <div className={`absolute inset-0 w-4 h-4 ${isDark ? 'bg-white' : 'bg-black'} rounded-full animate-ping opacity-20`} />
                                                </div>
                                            </div>

                                            {/* Spacer for alternating layout */}
                                            <div className="hidden md:block flex-1" />
                                        </motion.div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Provided & Required */}
            {((event.whatWeProvide && event.whatWeProvide.length > 0) || (event.whatToBring && event.whatToBring.length > 0)) && (
                <section className={`py-20 px-6 ${colors.bg}`}>
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12">
                            {event.whatWeProvide && event.whatWeProvide.length > 0 && (
                                <div className={`${colors.bgAlt} p-10 rounded-[3rem] border ${colors.border}`}>
                                    <h3 className={`text-2xl font-display font-medium ${colors.text} mb-8 flex items-center gap-3 uppercase tracking-tighter`}>
                                        <Zap className={`${isDark ? 'text-white' : 'text-black'}`} /> What We Provide
                                    </h3>
                                    <ul className="space-y-4">
                                        {event.whatWeProvide.map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-4">
                                                <div className={`w-2.5 h-2.5 ${isDark ? 'bg-white' : 'bg-black'} rounded-sm opacity-20`} />
                                                <span className={colors.textSecondary}>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {event.whatToBring && event.whatToBring.length > 0 && (
                                <div className={`${colors.bgAlt} p-10 rounded-[3rem] border ${colors.border}`}>
                                    <h3 className={`text-2xl font-display font-medium ${colors.text} mb-8 flex items-center gap-3 uppercase tracking-tighter`}>
                                        <Shield className={`${isDark ? 'text-white' : 'text-black'}`} /> What to Bring
                                    </h3>
                                    <ul className="space-y-4">
                                        {event.whatToBring.map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-4">
                                                <div className={`w-2.5 h-2.5 ${isDark ? 'bg-white' : 'bg-black'} rounded-sm opacity-20`} />
                                                <span className={colors.textSecondary}>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* Gallery Section */}
            {event.galleryImages.length > 0 && (
                <section className={`py-20 px-6 ${colors.bgAlt}`}>
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className={`text-4xl font-bold ${colors.text} mb-4`}>Prior Event Excellence</h2>
                            <p className={colors.textSecondary}>Glimpses into the high-quality training environment</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {event.galleryImages.map((img, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.02, rotate: -1 }}
                                    className="aspect-square rounded-3xl overflow-hidden border border-white/10"
                                >
                                    <img src={img} alt="Tutor Teaching" className="w-full h-full object-cover" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Final CTA */}
            <section className="py-48 px-6 relative overflow-hidden">
                <div className={`absolute inset-0 ${isDark ? 'bg-black' : 'bg-white'} border-t ${colors.border}`} />
                <div className={`absolute inset-0 opacity-10 ${isDark ? 'bg-[radial-gradient(circle_at_center,white,transparent_70%)]' : 'bg-[radial-gradient(circle_at_center,black,transparent_70%)]'}`} />
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h2 className={`${isDark ? 'text-white' : 'text-black'} text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter`}>Ready to Elevate Your Restorative Skills?</h2>
                    <p className={`${isDark ? 'text-white/60' : 'text-black/60'} text-xl mb-16 uppercase tracking-widest font-medium`}>
                        Join us in {event.location} for this legendary program.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8">
                        <Link
                            to="/register"
                            state={{ event, selectedDays: '3' }}
                            className={`${isDark ? 'bg-white text-black' : 'bg-black text-white'} px-16 py-7 font-black uppercase tracking-[0.4em] text-[12px] shadow-2xl hover:opacity-90 transition-all`}
                        >
                            Register Now
                        </Link>
                        <Link to="/contact" className={`${isDark ? 'bg-white/5 text-white border-white/10' : 'bg-black/5 text-black border-black/10'} border backdrop-blur px-16 py-7 font-black uppercase tracking-[0.4em] text-[12px] hover:bg-white/10 transition-all`}>
                            Enquire Now
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
