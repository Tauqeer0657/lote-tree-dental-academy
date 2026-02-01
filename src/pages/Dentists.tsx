import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Linkedin,
    Globe,
    Twitter
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { dentists as dentistsData } from '../data/mockData';
import HeroImg from '../assets/file_000000005d147208a99f2c9387cd92b1.png';

export default function Dentists() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const dentists = dentistsData;
    const isLoading = false;
    const error = null;
    const heroRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start']
    });

    const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
    const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

    const colors = {
        bg: isDark ? 'bg-black' : 'bg-white',
        bgAlt: isDark ? 'bg-zinc-950' : 'bg-white',
        text: isDark ? 'text-white' : 'text-black',
        textSecondary: isDark ? 'text-white/60' : 'text-black/60',
        textMuted: isDark ? 'text-white/40' : 'text-black/40',
        border: isDark ? 'border-white/10' : 'border-black/10',
        accent: isDark ? 'text-white' : 'text-black',
        accentBg: isDark ? 'bg-white/10' : 'bg-black/5',
        cardBg: isDark ? 'bg-black' : 'bg-white',
    };

    if (isLoading) {
        return (
            <div className={`min-h-screen ${colors.bg} flex items-center justify-center`}>
                <div className="flex flex-col items-center gap-4">
                    <div className={`w-12 h-12 border ${isDark ? 'border-white/10 border-t-white' : 'border-black/10 border-t-black'} animate-spin`} />
                    <p className={`text-[11px] uppercase tracking-[0.2em] font-black ${colors.textSecondary}`}>Loading speakers...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className={`min-h-screen ${colors.bg} flex items-center justify-center`}>
                <div className={`${colors.border} border p-16 text-center max-w-md`}>
                    <p className="text-red-500 mb-8 font-black uppercase tracking-wider">Error loading speakers</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-black text-white px-8 py-4 text-[11px] uppercase tracking-[0.2em] font-black"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <main className={`${colors.bg} transition-colors duration-500 mt-0 pt-0`}>
            {/* Minimalist Hero */}
            <section ref={heroRef} className="relative h-screen overflow-hidden flex items-center justify-center text-center">
                {/* Background with Parallax */}
                <motion.div
                    style={{ scale: heroScale, y: heroY }}
                    className="absolute inset-0 z-0"
                >
                    <div className={`absolute inset-0 z-10 ${isDark ? 'bg-black/60' : 'bg-black/20'} `} />
                    <img
                        src={HeroImg}
                        alt="Clinical Excellence"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Content */}
                <div
                    className="relative z-20 px-6 max-w-6xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mb-12"
                    >
                        <span className="text-[11px] font-black uppercase tracking-[0.5em] text-white/80">
                            THE FACULTY OF EXCELLENCE
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="text-6xl md:text-8xl lg:text-9xl font-display font-medium text-white leading-[0.9] mb-12 uppercase tracking-tighter"
                    >
                        CLINICAL
                        <br />
                        MASTERS
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="text-[12px] uppercase tracking-[0.4em] font-black text-white/60 max-w-2xl mx-auto"
                    >
                        Advanced clinical training led by distinguished international dental specialists
                    </motion.p>
                </div>
            </section>

            {/* Dentist Profiles */}
            <section className={`py-32 ${colors.bg}`}>
                <div className="max-w-7xl mx-auto px-6 space-y-48">
                    {dentists?.map((dentist, index) => (
                        <motion.article
                            id={dentist.id}
                            key={dentist.id}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className={`flex flex-col lg:flex-row gap-24 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Image Section - Balanced Size */}
                            <div className="w-full lg:w-1/3 shrink-0">
                                <div className={`relative overflow-hidden group border ${colors.border}`}>
                                    <img
                                        src={dentist.profileImageUrl}
                                        alt={dentist.name}
                                        className="w-full aspect-[4/5] object-cover grayscale transition-all duration-1000 group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-black/5" />
                                </div>
                            </div>

                            {/* Content Section - Balanced Bio */}
                            <div className="flex-1 lg:pt-4">
                                <h3 className={`text-4xl font-display font-medium ${colors.text} uppercase tracking-tight mb-4`}>{dentist.name}</h3>
                                <p className={`text-[11px] font-black uppercase tracking-[0.3em] ${colors.textSecondary} mb-8`}>{dentist.credentials}</p>

                                {/* Specialty */}
                                <div className={`mb-8 text-[12px] font-black uppercase tracking-[0.2em] ${colors.text}`}>
                                    {dentist.specialty}
                                </div>

                                {/* Bio - More readable and theme-aware */}
                                <p className={`text-[14px] ${colors.textSecondary} leading-relaxed uppercase tracking-widest mb-12 max-w-2xl`}>
                                    {dentist.biography}
                                </p>

                                {/* Achievements */}
                                <div className="mb-12">
                                    <h4 className={`text-[11px] font-black uppercase tracking-[0.4em] ${colors.text} mb-6 opacity-60`}>KEY ACHIEVEMENTS</h4>
                                    <ul className="space-y-4">
                                        {dentist.achievements.slice(0, 4).map((achievement, i) => (
                                            <li key={i} className="flex items-start gap-4">
                                                <div className={`mt-2 w-1 h-1 ${isDark ? 'bg-white/40' : 'bg-black/40'} shrink-0`} />
                                                <span className={`text-[12px] uppercase tracking-wider ${colors.textSecondary} leading-relaxed`}>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Topics */}
                                <div className="mb-12">
                                    <h4 className={`text-[11px] font-black uppercase tracking-[0.4em] ${colors.text} mb-6 opacity-60`}>TOPICS COVERED</h4>
                                    <div className="flex flex-wrap gap-4">
                                        {dentist.topicsCovered.map((topic, i) => (
                                            <span
                                                key={i}
                                                className={`border ${colors.border} px-4 py-2 text-[10px] uppercase tracking-[0.2em] ${colors.textSecondary} font-black`}
                                            >
                                                {topic}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="flex items-center gap-8">
                                    {dentist.socialLinks?.twitter && (
                                        <a
                                            href={dentist.socialLinks.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`${colors.textSecondary} hover:${colors.text} transition-colors`}
                                        >
                                            <Twitter className="w-5 h-5" />
                                        </a>
                                    )}
                                    {dentist.socialLinks?.linkedin && (
                                        <a
                                            href={dentist.socialLinks.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`${colors.textSecondary} hover:${colors.text} transition-colors`}
                                        >
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                    )}
                                    {dentist.socialLinks?.researchGate && (
                                        <a
                                            href={dentist.socialLinks.researchGate}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`${colors.textSecondary} hover:${colors.text} transition-colors`}
                                        >
                                            <Globe className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>

            {/* CTA Section - Cinematic Contrast */}
            <section className="relative py-48 bg-black">
                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[11px] font-black uppercase tracking-[0.8em] text-white/40 mb-16">
                            THE FACULTY IS READY
                        </h2>
                        <h2 className="text-4xl md:text-6xl font-display font-medium text-white uppercase tracking-tight mb-8">
                            Ready to Transform Your Practice?
                        </h2>
                        <p className="text-[12px] uppercase tracking-[0.4em] font-black text-white/60 max-w-2xl mx-auto mb-16">
                            Join world-renowned specialists for an intensive journey into clinical mastery.
                        </p>
                        <Link to="/register">
                            <motion.button
                                whileHover={{ scale: 1.05, opacity: 0.9 }}
                                className="px-24 py-8 bg-white text-black font-black uppercase tracking-[0.5em] text-[12px] border border-white transition-all"
                            >
                                REGISTER TODAY
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
