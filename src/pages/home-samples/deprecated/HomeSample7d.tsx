import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
    ArrowRight,
    Play,
    Clock,
    Users,
    Award,
    Video,
    MessageCircle,
    FileCheck,
    Star,
    ChevronDown,
    Menu,
    X,
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Twitter,
    Instagram,
    Heart
} from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';
import ThemeToggle from '../../../components/ui/ThemeToggle';
import { dentists as mockDentists, upcomingEvent as mockEvent, reviews as mockReviews } from '../../../data/mockData';
import { formatDate } from '../../../lib/utils';

/**
 * SAMPLE 7D: ROSE CLINICAL
 *
 * Design Philosophy:
 * - Soft Purple + Rose + White color palette
 * - Center-stage focus with prominent centered content
 * - Elegant, soft, and caring aesthetic
 * - Rounded shapes and gentle gradients
 * - Premium but warm healthcare feel
 */

const highlights = [
    { icon: Clock, title: '12 Hours Live', description: 'Complete immersive training experience.' },
    { icon: MessageCircle, title: 'Live Q&A', description: 'Real-time expert interaction.' },
    { icon: Award, title: 'Certification', description: 'Industry-recognized credentials.' },
    { icon: Users, title: 'Community', description: 'Join 5000+ professionals.' },
    { icon: Video, title: 'Recordings', description: 'Unlimited playback access.' },
    { icon: FileCheck, title: 'Resources', description: 'Complete learning materials.' },
];

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Speakers', path: '/dentists' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
];

// Reusable animation config
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
};

export default function HomeSample7d() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const heroRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start']
    });

    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
    const contentY = useTransform(scrollYProgress, [0, 1], [0, -50]);

    // Rose Clinical Color System
    const colors = {
        bg: isDark ? 'bg-slate-950' : 'bg-white',
        bgAlt: isDark ? 'bg-slate-900' : 'bg-rose-50/30',
        bgCard: isDark ? 'bg-slate-900' : 'bg-white',
        text: isDark ? 'text-white' : 'text-slate-900',
        textSecondary: isDark ? 'text-slate-300' : 'text-slate-600',
        textMuted: isDark ? 'text-slate-400' : 'text-slate-500',
        accent: isDark ? 'text-rose-400' : 'text-rose-600',
        accentBg: isDark ? 'bg-rose-500/10' : 'bg-rose-100',
        accentBorder: isDark ? 'border-rose-500/20' : 'border-rose-200',
        purple: isDark ? 'text-purple-400' : 'text-purple-600',
        purpleBg: isDark ? 'bg-purple-500/10' : 'bg-purple-100',
        primaryGradient: 'from-rose-500 via-pink-500 to-purple-500',
    };

    return (
        <main className={`${colors.bg} transition-colors duration-500`}>
            {/* Navigation */}
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    isScrolled
                        ? isDark
                            ? 'bg-slate-950/95 backdrop-blur-xl border-b border-rose-500/10'
                            : 'bg-white/95 backdrop-blur-xl border-b border-rose-100 shadow-lg shadow-rose-500/5'
                        : 'bg-transparent'
                }`}
            >
                <nav className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
                        <Link to="/" className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center bg-gradient-to-br ${colors.primaryGradient} shadow-lg shadow-rose-500/30`}>
                                <Heart className="w-5 h-5 text-white" />
                            </div>
                            <span className={`font-bold text-xl ${colors.text}`}>
                                CareSmile
                            </span>
                        </Link>

                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${colors.textSecondary} ${isDark ? 'hover:bg-rose-500/10 hover:text-rose-400' : 'hover:bg-rose-50 hover:text-rose-600'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <div className="flex items-center gap-3">
                            <ThemeToggle />
                            <Link to="/register" className="hidden md:block">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`px-6 py-2.5 rounded-full font-medium text-sm text-white bg-gradient-to-r ${colors.primaryGradient} shadow-lg shadow-rose-500/30`}
                                >
                                    Register
                                </motion.button>
                            </Link>
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className={`md:hidden p-2 rounded-xl ${isDark ? 'hover:bg-slate-800' : 'hover:bg-rose-50'}`}
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen
                                    ? <X className={`w-6 h-6 ${colors.text}`} />
                                    : <Menu className={`w-6 h-6 ${colors.text}`} />}
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`md:hidden border-t ${isDark ? 'bg-slate-950/98 border-slate-800' : 'bg-white/98 border-rose-100'} backdrop-blur-xl`}
                    >
                        <div className="px-6 py-4 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`block py-3 px-4 rounded-xl ${colors.textSecondary} ${isDark ? 'hover:bg-slate-800' : 'hover:bg-rose-50'}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/register" className="block pt-2">
                                <button className={`w-full py-3 rounded-full font-medium text-white bg-gradient-to-r ${colors.primaryGradient}`}>
                                    Register Now
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </motion.header>

            {/* Hero - Center Stage */}
            <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background with Parallax */}
                <motion.div style={{ scale: heroScale }} className="absolute inset-0">
                    <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-slate-950/80 via-rose-950/30 to-slate-950' : 'bg-gradient-to-b from-white/60 via-rose-100/40 to-white'}`} />
                    <img
                        src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1920&h=1080&fit=crop"
                        alt="Gentle dental care"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Decorative blobs */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className={`absolute top-20 left-10 w-64 h-64 rounded-full ${isDark ? 'bg-rose-500/5' : 'bg-rose-200/30'} blur-3xl`} />
                    <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full ${isDark ? 'bg-purple-500/5' : 'bg-purple-200/30'} blur-3xl`} />
                </div>

                {/* Centered Content */}
                <motion.div
                    style={{ y: contentY }}
                    className="relative z-10 text-center px-6 max-w-4xl mx-auto"
                >
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.3 }}
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full ${isDark ? 'bg-rose-500/10 border border-rose-500/20' : 'bg-white/80 border border-rose-200'} backdrop-blur-lg mb-8`}
                    >
                        <Heart className={`w-4 h-4 ${colors.accent}`} />
                        <span className={`text-sm font-medium ${colors.accent}`}>
                            Caring Education • {formatDate(mockEvent.date)}
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.5 }}
                        className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}
                    >
                        Where Expertise
                        <br />
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${colors.primaryGradient}`}>
                            Meets Compassion
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.7 }}
                        className={`text-lg md:text-xl ${isDark ? 'text-slate-300' : 'text-slate-600'} mb-10 max-w-2xl mx-auto`}
                    >
                        A nurturing 12-hour masterclass designed to elevate your clinical skills while embracing patient-centered care philosophy.
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.9 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <Link to="/register">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`inline-flex items-center gap-2 px-10 py-5 rounded-full font-semibold text-white bg-gradient-to-r ${colors.primaryGradient} shadow-2xl shadow-rose-500/30 hover:shadow-rose-500/50 transition-all`}
                            >
                                Begin Your Journey
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </Link>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            className={`inline-flex items-center gap-2 px-10 py-5 rounded-full font-medium ${isDark ? 'bg-white/10 text-white border border-white/20' : 'bg-white/80 text-rose-700 border border-rose-200'} backdrop-blur-lg hover:bg-white/20 transition-all`}
                        >
                            <Play className="w-5 h-5" />
                            Watch Preview
                        </motion.button>
                    </motion.div>

                    {/* Center Stage Image Card */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.1 }}
                        className="mt-16 relative mx-auto max-w-md"
                    >
                        <div className={`absolute -inset-4 rounded-[2rem] bg-gradient-to-r ${colors.primaryGradient} opacity-20 blur-2xl`} />
                        <div className={`relative rounded-3xl overflow-hidden shadow-2xl border-4 ${isDark ? 'border-slate-800' : 'border-white'}`}>
                            <img
                                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500&h=350&fit=crop"
                                alt="Caring dental professional"
                                className="w-full h-[250px] object-cover"
                            />
                            <div className={`absolute bottom-0 left-0 right-0 p-4 ${isDark ? 'bg-gradient-to-t from-slate-900' : 'bg-gradient-to-t from-white'}`}>
                                <div className="flex items-center justify-center gap-6">
                                    <div className="text-center">
                                        <div className={`text-2xl font-bold ${colors.accent}`}>5</div>
                                        <div className={`text-xs ${colors.textMuted}`}>Experts</div>
                                    </div>
                                    <div className={`w-px h-8 ${isDark ? 'bg-slate-700' : 'bg-rose-200'}`} />
                                    <div className="text-center">
                                        <div className={`text-2xl font-bold ${colors.accent}`}>12h</div>
                                        <div className={`text-xs ${colors.textMuted}`}>Content</div>
                                    </div>
                                    <div className={`w-px h-8 ${isDark ? 'bg-slate-700' : 'bg-rose-200'}`} />
                                    <div className="text-center">
                                        <div className={`text-2xl font-bold ${colors.accent}`}>5K+</div>
                                        <div className={`text-xs ${colors.textMuted}`}>Alumni</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                        <ChevronDown className={`w-8 h-8 ${colors.textMuted}`} />
                    </motion.div>
                </motion.div>
            </section>

            {/* Speakers - Elegant Cards */}
            <section className={`py-24 ${colors.bgAlt}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-center mb-16"
                    >
                        <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${colors.accentBg} ${colors.accent}`}>
                            Compassionate Leaders
                        </span>
                        <h2 className={`text-4xl md:text-5xl font-bold ${colors.text}`}>
                            Meet Our Caring Experts
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {mockDentists.slice(0, 3).map((dentist, index) => (
                            <motion.div
                                key={dentist.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className={`group text-center ${colors.bgCard} rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border ${isDark ? 'border-slate-800' : 'border-rose-100'}`}
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={dentist.profileImageUrl}
                                        alt={dentist.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-slate-900' : 'from-white'} to-transparent`} />
                                </div>
                                <div className="p-6 -mt-12 relative">
                                    <div className={`w-20 h-20 mx-auto rounded-full overflow-hidden border-4 ${isDark ? 'border-slate-900' : 'border-white'} shadow-xl mb-4`}>
                                        <img
                                            src={dentist.profileImageUrl}
                                            alt={dentist.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${colors.accentBg} ${colors.accent}`}>
                                        {dentist.specialty.split('&')[0].trim()}
                                    </span>
                                    <h3 className={`text-xl font-bold ${colors.text} mb-1`}>{dentist.name}</h3>
                                    <p className={`${colors.textMuted} text-sm mb-1`}>{dentist.credentials}</p>
                                    <p className={`${colors.accent} text-sm`}>{dentist.institution}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features - Soft Cards */}
            <section className={`py-24 ${colors.bg}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`text-4xl md:text-5xl font-bold ${colors.text} text-center mb-16`}
                    >
                        A Nurturing Experience
                    </motion.h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {highlights.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-8 rounded-3xl border ${isDark ? 'border-slate-800 bg-slate-900/50' : 'border-rose-100 bg-rose-50/30'} hover:shadow-xl hover:shadow-rose-500/5 transition-all`}
                            >
                                <div className={`w-14 h-14 rounded-2xl ${colors.accentBg} flex items-center justify-center mb-6`}>
                                    <feature.icon className={`w-7 h-7 ${colors.accent}`} />
                                </div>
                                <h3 className={`text-xl font-bold ${colors.text} mb-3`}>{feature.title}</h3>
                                <p className={colors.textSecondary}>{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className={`py-24 ${colors.bgAlt}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`text-4xl md:text-5xl font-bold ${colors.text} text-center mb-16`}
                    >
                        Heartfelt Reviews
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {mockReviews.slice(0, 3).map((review, index) => (
                            <motion.div
                                key={review.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-8 rounded-3xl ${colors.bgCard} shadow-lg border ${isDark ? 'border-slate-800' : 'border-rose-100'}`}
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-rose-400 text-rose-400" />
                                    ))}
                                </div>
                                <p className={`${colors.textSecondary} mb-6 text-lg leading-relaxed italic`}>
                                    "{review.reviewText}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={review.attendeePhotoUrl}
                                        alt={review.attendeeName}
                                        className="w-14 h-14 rounded-full object-cover ring-2 ring-rose-500/30"
                                    />
                                    <div>
                                        <div className={`font-semibold ${colors.text}`}>{review.attendeeName}</div>
                                        <div className={`text-sm ${colors.textMuted}`}>{review.attendeeCredential}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${isDark ? 'from-rose-950 via-slate-950 to-purple-950' : 'from-rose-500 via-pink-500 to-purple-600'}`} />

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Heart className="w-16 h-16 text-white/80 mx-auto mb-8" />
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Care Starts Here
                        </h2>
                        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                            {formatDate(mockEvent.date)} • {mockEvent.durationHours} Hours • Virtual
                        </p>
                        <Link to="/register">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-3 bg-white text-rose-600 font-bold px-10 py-5 rounded-full text-lg shadow-2xl hover:bg-rose-50 transition-all"
                            >
                                Join with Love — ${mockEvent.basePrice}
                                <Heart className="w-5 h-5" />
                            </motion.button>
                        </Link>
                        <p className="text-white/60 text-sm mt-6">
                            {mockEvent.maxCapacity - mockEvent.currentRegistrations} seats remaining
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className={`${isDark ? 'bg-slate-950' : 'bg-slate-900'}`}>
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div className="lg:col-span-1">
                            <Link to="/" className="flex items-center gap-3 mb-4">
                                <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${colors.primaryGradient} flex items-center justify-center`}>
                                    <Heart className="w-5 h-5 text-white" />
                                </div>
                                <span className="font-bold text-xl text-white">CareSmile</span>
                            </Link>
                            <p className="text-white/60 text-sm mb-6">
                                Compassionate dental education for caring practitioners.
                            </p>
                            <div className="flex gap-3">
                                {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                                    <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-rose-500/20 flex items-center justify-center transition-all">
                                        <Icon className="w-4 h-4 text-rose-400" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold text-white mb-4">Company</h4>
                            <ul className="space-y-3">
                                {['About Us', 'Speakers', 'Testimonials', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <Link to="#" className="text-sm text-white/60 hover:text-rose-400 transition-colors">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-white mb-4">Resources</h4>
                            <ul className="space-y-3">
                                {['Event Details', 'CE Credits', 'FAQ', 'Blog'].map((item) => (
                                    <li key={item}>
                                        <Link to="#" className="text-sm text-white/60 hover:text-rose-400 transition-colors">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-white mb-4">Contact</h4>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <Mail className="w-4 h-4 text-rose-400" />
                                    <span className="text-sm text-white/60">care@caresmile.com</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className="w-4 h-4 text-rose-400" />
                                    <span className="text-sm text-white/60">+1-888-CARE</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <MapPin className="w-4 h-4 text-rose-400 mt-0.5" />
                                    <span className="text-sm text-white/60">Austin, TX</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-white/40">
                            © {new Date().getFullYear()} CareSmile. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            {['Privacy', 'Terms', 'Cookies'].map((item) => (
                                <Link key={item} to="#" className="text-sm text-white/40 hover:text-rose-400 transition-colors">
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
