import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { events } from '../data/eventsData';

export default function Events() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const colors = {
        bg: isDark ? 'bg-black' : 'bg-white',
        bgAlt: isDark ? 'bg-zinc-950' : 'bg-white',
        text: isDark ? 'text-white' : 'text-black',
        textSecondary: isDark ? 'text-white/60' : 'text-black/60',
        textMuted: isDark ? 'text-white/40' : 'text-black/40',
        border: isDark ? 'border-white/10' : 'border-black/10',
        accent: isDark ? 'text-white' : 'text-black',
        accentBg: isDark ? 'bg-white/10' : 'bg-black/5',
        card: isDark ? 'bg-black' : 'bg-white',
    };

    const featuredEvent = events.find(e => e.isFeatured) || events[0];
    const otherEvents = events.filter(e => e.id !== featuredEvent.id);

    return (
        <main className={`${colors.bg} min-h-screen transition-colors duration-500`}>
            {/* Cinematic Hero */}
            <section className="relative pt-64 pb-48 px-6 bg-black">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mb-16"
                    >
                        <span className="text-[11px] font-black uppercase tracking-[0.8em] text-white/40">
                            THE MASTERCLASS SERIES
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-9xl font-display font-medium text-white mb-16 uppercase tracking-tight leading-none"
                    >
                        UPCOMING
                        <br />
                        COURSES
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-[12px] uppercase tracking-[0.4em] font-black text-white/60 max-w-2xl mx-auto"
                    >
                        Join world-renowned specialists for intensive hands-on courses designed to elevate your clinical skills.
                    </motion.p>
                </div>
            </section>

            {/* Featured Event - Minimalist */}
            <section className={`px-6 py-48 ${colors.bg}`}>
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="grid lg:grid-cols-2 gap-24 items-center"
                    >
                        <div className="relative h-[600px] overflow-hidden border border-white/10 group">
                            <img
                                src={featuredEvent.heroImage}
                                alt={featuredEvent.title}
                                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20" />
                            <div className="absolute top-10 left-10">
                                <span className="bg-white text-black px-6 py-3 text-[10px] font-black uppercase tracking-[0.3em]">
                                    FEATURED COURSE
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center">
                            <div className="flex flex-wrap gap-12 mb-12">
                                <div className={`flex items-center gap-4 ${colors.textMuted} text-[11px] font-black uppercase tracking-[0.2em]`}>
                                    <Calendar className="w-4 h-4" />
                                    {featuredEvent.shortDate}
                                </div>
                                <div className={`flex items-center gap-4 ${colors.textMuted} text-[11px] font-black uppercase tracking-[0.2em]`}>
                                    <MapPin className="w-4 h-4" />
                                    {featuredEvent.location}
                                </div>
                            </div>

                            <h2 className={`text-4xl md:text-5xl font-display font-medium ${colors.text} mb-10 uppercase tracking-tight leading-tight`}>
                                {featuredEvent.title}
                            </h2>

                            <p className={`text-[14px] ${colors.textSecondary} mb-12 uppercase tracking-widest leading-relaxed`}>
                                {featuredEvent.subtitle}
                            </p>

                            <div className="flex flex-wrap items-center gap-12">
                                <Link to={`/events/${featuredEvent.slug}`}>
                                    <motion.button
                                        whileHover={{ opacity: 0.8 }}
                                        className={`px-16 py-6 font-black uppercase tracking-[0.4em] border text-[11px] ${isDark
                                            ? 'bg-white text-black border-white'
                                            : 'bg-black text-white border-black'
                                            }`}
                                    >
                                        VIEW DETAILS
                                    </motion.button>
                                </Link>
                                <div className="text-[11px] font-black uppercase tracking-widest">
                                    <span className={`${colors.textMuted} mr-4`}>FROM</span>
                                    <span className={colors.text}>{featuredEvent.priceRange.split('-')[0]}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Events Grid - Minimalist */}
            <section className="py-32 px-6 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-[11px] font-black uppercase tracking-[0.6em] text-white/40 mb-10">
                            CURATED SESSIONS
                        </h2>
                        <h3 className="text-5xl md:text-7xl font-display font-medium text-white uppercase tracking-tight">
                            MORE
                            <br />
                            MASTERCLASSES
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
                        {otherEvents.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link to={`/events/${event.slug}`} className="group block">
                                    <div className="relative h-80 overflow-hidden border border-white/10 mb-10 bg-zinc-900">
                                        <img
                                            src={event.thumbnailImage}
                                            alt={event.title}
                                            className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/10" />
                                        <div className="absolute top-6 right-6">
                                            <div className="bg-white text-black px-4 py-2 text-[9px] font-black uppercase tracking-[0.2em]">
                                                {event.location}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-8 overflow-hidden h-1 w-12 bg-black/5">
                                        <div className="h-full w-0 group-hover:w-full bg-black transition-all duration-700" />
                                    </div>

                                    <div className={`flex items-center gap-3 ${colors.textSecondary} text-[9px] font-black uppercase tracking-[0.3em] mb-4`}>
                                        <Calendar className="w-3 h-3" />
                                        {event.shortDate}
                                    </div>

                                    <h3 className="text-2xl font-display font-medium text-white mb-6 uppercase tracking-tight leading-snug group-hover:opacity-70 transition-colors">
                                        {event.title}
                                    </h3>

                                    <p className="text-[12px] uppercase tracking-wider text-white/60 mb-8 line-clamp-2">
                                        {event.subtitle}
                                    </p>

                                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                                        <span className="text-[11px] font-black uppercase tracking-widest text-white">{event.priceRange}</span>
                                        <div
                                            className="text-[10px] font-black uppercase tracking-[0.3em] text-white border-b border-white/0 transition-all"
                                        >
                                            LEARN MORE
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main >
    );
}
