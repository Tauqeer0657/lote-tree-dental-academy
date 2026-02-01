import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
    Clock,
    Users,
    Award,
    Video,
    MessageCircle,
    FileCheck,
    ChevronDown,
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { dentists as mockDentists, reviews as mockReviews } from '../../data/mockData';
import HeroImg from '../../assets/hero-cinematic.png';

/**
 * SAMPLE 7: CINEMATIC IMMERSIVE
 *
 * Design Philosophy:
 * - Full-viewport hero section
 * - Scroll-triggered animations
 * - Parallax background layers
 * - Full-bleed images and sections
 * - Cinematic, story-driven layout
 */

const highlights = [
    { icon: Clock, title: 'Advanced Training', description: 'Comprehensive clinical development program.' },
    { icon: MessageCircle, title: 'Expert Interaction', description: 'Direct engagement with leading specialists.' },
    { icon: Award, title: 'Clinical Protocol', description: 'Standardized recognition of clinical mastery.' },
    { icon: Users, title: 'Professional Network', description: 'Connect with a global community of specialists.' },
    { icon: Video, title: 'Clinical Gallery', description: 'Documented patient transformations.' },
    { icon: FileCheck, title: 'Clinical Resources', description: 'Evidence-based documentation and case studies.' },
];

export default function HomeSample7() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const heroRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start']
    });

    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
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
    };

    return (
        <main className={`${colors.bg} transition-colors duration-500`}>
            {/* Hero - Full Screen Minimalist */}
            <section ref={heroRef} className="relative h-screen overflow-hidden flex items-center justify-center">
                {/* Background with Parallax */}
                <motion.div
                    style={{ scale: heroScale, y: heroY }}
                    className="absolute inset-0 z-0"
                >
                    <div className={`absolute inset-0 ${isDark ? 'bg-black/40' : 'bg-black/10'}`} />
                    <img
                        src={HeroImg}
                        alt="Dental Excellence"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Content */}
                <motion.div
                    style={{ opacity: heroOpacity }}
                    className="relative z-10 flex flex-col justify-center items-center text-center px-6"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mb-12"
                    >
                        <span className="text-[11px] uppercase tracking-[0.5em] font-bold text-white/80">
                            The New Era of Dental Mastery
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-white max-w-7xl leading-[0.9] mb-12 uppercase tracking-tight"
                    >
                        TRANSFORM
                        <br />
                        PRACTICE
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="text-[13px] uppercase tracking-[0.3em] font-medium text-white/70 max-w-2xl mb-16"
                    >
                        Advanced clinical training led by distinguished international dental specialists
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 }}
                    >
                        <Link to="/register">
                            <motion.button
                                whileHover={{ opacity: 0.8 }}
                                className="bg-white text-black font-bold text-[11px] uppercase tracking-[0.4em] px-16 py-6 border border-white transition-all"
                            >
                                Get Started
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <ChevronDown className="w-8 h-8 text-white/50" />
                    </motion.div>
                </motion.div>
            </section>

            {/* Institution Section - Minimalist */}
            <section className={`py-32 relative overflow-hidden ${colors.bg}`}>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className={`text-[11px] font-black uppercase tracking-[0.6em] ${colors.text} mb-10`}>
                                OUR INSTITUTION
                            </h2>
                            <h3 className={`text-5xl md:text-7xl font-display font-medium ${colors.text} mb-12 leading-[1.1] uppercase tracking-tight`}>
                                CLINICAL
                                <br />
                                MASTERY
                            </h3>

                            <p className={`text-[15px] ${colors.textSecondary} leading-relaxed mb-16 max-w-xl`}>
                                Lote Tree Dental Academy is dedicated to the advancement of clinical proficiency through
                                intensive workshops that redefine professional education.
                            </p>

                            <div className="space-y-12">
                                {[
                                    { title: 'Hands-on Workshops', desc: 'Practical, manual dexterity training in real-world scenarios.' },
                                    { title: 'Live Mentorship', desc: 'Direct access to internationally recognized clinical experts.' },
                                    { title: 'Global Standards', desc: 'Curriculum designed for excellence across international borders.' }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="flex gap-8"
                                    >
                                        <div className={`mt-1.5 w-1 h-8 ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
                                        <div>
                                            <h4 className={`text-[12px] font-black uppercase tracking-[0.2em] ${colors.text} mb-3`}>{item.title}</h4>
                                            <p className={`text-[13px] ${colors.textSecondary} leading-relaxed uppercase tracking-wider`}>{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Main Card - Sharp and Minimalist */}
                            <div className="relative p-16 border border-black/5 bg-white shadow-sm overflow-hidden transition-all duration-500">
                                <div className="relative z-10 space-y-16">
                                    <div className={`p-16 border ${colors.border} ${colors.bgAlt} transition-all`}>
                                        <div className={`text-8xl font-display font-black ${colors.text} mb-4 tracking-tighter`}>
                                            07
                                        </div>
                                        <div className={`text-[10px] uppercase tracking-[0.5em] font-black ${colors.textMuted}`}>
                                            YEARS OF CLINICAL EXCELLENCE
                                        </div>
                                    </div>

                                    <div className="h-[1px] bg-black/5" />

                                    <div className="grid grid-cols-2 gap-8">
                                        <div className={`p-10 border ${colors.border} ${colors.bgAlt}`}>
                                            <div className={`text-4xl font-display font-black ${colors.text} mb-2 uppercase tracking-tight`}>3 Day</div>
                                            <div className={`text-[9px] uppercase tracking-[0.3em] font-black ${colors.textMuted}`}>Immersion</div>
                                        </div>
                                        <div className={`p-10 border ${colors.border} ${colors.bgAlt}`}>
                                            <div className={`text-4xl font-display font-black ${colors.text} mb-2 uppercase tracking-tight`}>100%</div>
                                            <div className={`text-[9px] uppercase tracking-[0.3em] font-black ${colors.textMuted}`}>Clinical Focus</div>
                                        </div>
                                    </div>

                                    <div className="pt-8">
                                        <Link to="/register">
                                            <button className="w-full bg-black text-white font-black uppercase tracking-[0.4em] text-[11px] py-6 border border-black transition-all hover:bg-black/80">
                                                Join the Academy
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Director Section - Minimalist */}
            <section className={`py-32 relative overflow-hidden ${colors.bgAlt}`}>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        {/* Image Column */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="relative max-w-sm mx-auto lg:mx-0"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden border border-black/10">
                                <img
                                    src="/src/assets/Santosh-Patil-img.jpg"
                                    alt="Dr. Santosh Patil - Director"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-black/10" />
                            </div>

                            <div className="absolute -bottom-8 -right-8 bg-black text-white p-10 shadow-sm">
                                <div className="text-4xl font-display font-black tracking-tighter uppercase">20+ Yrs</div>
                                <div className="text-[9px] uppercase tracking-[0.4em] font-black opacity-60">GLOBAL MENTOR</div>
                            </div>
                        </motion.div>

                        {/* Content Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="mb-10">
                                <span className={`text-[11px] font-black uppercase tracking-[0.4em] ${colors.textSecondary}`}>
                                    DIRECTOR'S PROFILE
                                </span>
                            </div>

                            <h2 className={`text-5xl md:text-6xl font-display font-medium ${colors.text} mb-12 uppercase tracking-tight`}>
                                LEADERSHIP IN
                                <br />
                                EXCELLENCE
                            </h2>

                            <div className="space-y-10">
                                <div>
                                    <h3 className={`text-2xl font-display font-medium ${colors.text} uppercase tracking-tight`}>Dr. Santosh Patil</h3>
                                    <p className={`text-[11px] font-black uppercase tracking-[0.3em] ${colors.textSecondary} mt-2`}>Director & Lead Faculty</p>
                                </div>

                                <p className={`text-2xl ${colors.text} leading-[1.4] font-display italic border-l-[1px] ${isDark ? 'border-white/10' : 'border-black/10'} pl-10 py-4`}>
                                    "We bridge the critical gap between academic theory and clinical mastery, empowering you to transform patient lives."
                                </p>

                                <p className={`text-[14px] ${colors.textSecondary} leading-relaxed uppercase tracking-wider`}>
                                    Passionate General Dentist with Special interest in: Restorative dentistry, Navigated Implant Dentistry & Orthodontics, Laser & PhotoBio Modulation Therapy, Clinical Hypnosis & Facial Acupuncture, Integrative Medicine & Digital Dental Photography
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Speakers - Minimalist Cards */}
            <section className={`py-32 ${colors.bg}`}>
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-24"
                    >
                        <h2 className={`text-[11px] font-black uppercase tracking-[0.6em] ${colors.text} mb-10`}>
                            THE FACULTY
                        </h2>
                        <h3 className={`text-5xl md:text-7xl font-display font-medium ${colors.text} uppercase tracking-tight`}>
                            MEET THE
                            <br />
                            MASTERS
                        </h3>
                    </motion.div>

                    {/* Horizontal Scroll Cards - Sharp and B&W */}
                    <div className="flex overflow-x-auto gap-12 pb-12 -mx-6 px-6 snap-x snap-mandatory scrollbar-hide">
                        {mockDentists.map((dentist, index) => (
                            <motion.div
                                key={dentist.id}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex-none w-[320px] md:w-[420px] snap-center"
                            >
                                <div className="relative h-[550px] overflow-hidden group cursor-pointer border border-black/5 bg-white">
                                    <img
                                        src={dentist.profileImageUrl}
                                        alt={dentist.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-black/20" />

                                    <div className={`absolute bottom-0 left-0 right-0 p-6 md:p-8 backdrop-blur-[2px] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 min-h-[130px] md:min-h-[140px] flex flex-col justify-center bg-gradient-to-t ${isDark ? 'from-black/80 to-transparent' : 'from-white/80 to-transparent'}`}>
                                        <h3 className={`text-xl font-display font-medium ${colors.text} uppercase tracking-tight`}>{dentist.name}</h3>
                                        <p className={`text-[10px] font-black uppercase tracking-[0.3em] ${colors.textSecondary} mt-2 mb-3 line-clamp-1`}>{dentist.credentials}</p>
                                        <p className={`text-[11px] uppercase tracking-[0.1em] font-medium ${colors.textSecondary}`}>{dentist.institution}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Full Width Image Break - Dramatic B&W */}
            <section className="relative h-[80vh] overflow-hidden">
                <div className="absolute inset-0 bg-black/30 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&h=800&fit=crop"
                    alt="Dental Technology"
                    className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center px-6"
                    >
                        <h2 className="text-5xl md:text-8xl font-display font-medium text-white mb-10 uppercase tracking-tight">
                            TRANSFORMING
                            <br />
                            THE CLINIC
                        </h2>
                        <p className="text-[12px] uppercase tracking-[0.5em] font-black text-white/70">
                            CUTTING-EDGE TECHNIQUE MEETS ARTISTRY
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Features - Grid */}
            <section className={`py-32 ${colors.bg}`}>
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-24"
                    >
                        <h2 className={`text-[11px] font-black uppercase tracking-[0.6em] ${colors.text} mb-10`}>
                            THE EXPERIENCE
                        </h2>
                        <h3 className={`text-5xl md:text-7xl font-display font-medium ${colors.text} uppercase tracking-tight`}>
                            PROGRAM
                            <br />
                            PILLARS
                        </h3>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
                        {highlights.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <div className={`mb-8 overflow-hidden h-2 w-12 ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>
                                    <div className={`h-full w-0 group-hover:w-full ${isDark ? 'bg-white' : 'bg-black'} transition-all duration-700`} />
                                </div>
                                <h3 className={`text-[13px] font-black uppercase tracking-[0.3em] ${colors.text} mb-5`}>{feature.title}</h3>
                                <p className={`text-[13px] uppercase tracking-wider ${colors.textSecondary} leading-relaxed`}>{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials - Minimalist */}
            <section className={`py-32 ${isDark ? 'bg-zinc-950' : 'bg-white'}`}>
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-24"
                    >
                        <h2 className={`text-[11px] font-black uppercase tracking-[0.6em] ${colors.text} mb-10`}>
                            TESTIMONIALS
                        </h2>
                        <h3 className={`text-5xl md:text-7xl font-display font-medium ${colors.text} uppercase tracking-tight`}>
                            VOICES OF
                            <br />
                            EXCELLENCE
                        </h3>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {mockReviews.slice(0, 3).map((review, index) => (
                            <motion.div
                                key={review.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-10 border ${colors.border} ${colors.bgAlt}`}
                            >
                                <p className={`text-[14px] uppercase tracking-wider ${colors.text} leading-relaxed mb-10`}>
                                    "{review.reviewText}"
                                </p>
                                <div className="flex items-center gap-6">
                                    <img
                                        src={review.attendeePhotoUrl}
                                        alt={review.attendeeName}
                                        className="w-12 h-12 object-cover grayscale"
                                    />
                                    <div>
                                        <div className={`text-[11px] font-black uppercase tracking-[0.1em] ${colors.text}`}>{review.attendeeName}</div>
                                        <div className={`text-[9px] uppercase tracking-[0.2em] ${colors.textSecondary} mt-1`}>{review.attendeeCredential}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA - Minimalist Final Section */}
            <section className="relative py-48 overflow-hidden bg-black">
                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[11px] font-black uppercase tracking-[0.8em] text-white/40 mb-16">
                            THE JOURNEY BEGINS
                        </h2>
                        <h2 className="text-6xl md:text-9xl font-display font-medium text-white mb-20 uppercase tracking-tighter">
                            SECURE YOUR
                            <br />
                            LEGACY
                        </h2>
                        <Link to="/register">
                            <motion.button
                                whileHover={{ opacity: 0.8 }}
                                className="bg-white text-black font-black uppercase tracking-[0.5em] text-[12px] px-24 py-8 border border-white transition-all"
                            >
                                REGISTER NOW
                            </motion.button>
                        </Link>
                        <p className="text-[10px] uppercase tracking-[0.3em] font-black text-white/30 mt-12">
                            LIMITED CAPACITY • APRIL 24-26, 2026
                        </p>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
