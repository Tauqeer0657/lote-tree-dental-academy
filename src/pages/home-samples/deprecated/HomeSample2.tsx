import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Play,
    Clock,
    Users,
    Award,
    Video,
    MessageCircle,
    FileCheck,
    Calendar,
    Globe,
    Star,
    Crown,
    Sparkles,
    Diamond,
    Menu,
    X,
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Twitter,
    Instagram
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import ThemeToggle from '../../../components/ui/ThemeToggle';
import { dentists as mockDentists, upcomingEvent as mockEvent, reviews as mockReviews } from '../../../data/mockData';
import { formatDate } from '../../../lib/utils';

/**
 * SAMPLE 2: LUXURY PREMIUM
 *
 * Design Philosophy:
 * - Rich dark navy/charcoal backgrounds
 * - Gold and warm accent colors
 * - Elegant serif display fonts for headings
 * - Subtle glow effects and premium borders
 * - Layered cards with depth and sophistication
 */

const heroStats = [
    { value: '5+', label: 'Elite Instructors', icon: Crown },
    { value: '12h', label: 'Premium Content', icon: Clock },
    { value: '5K+', label: 'Alumni Network', icon: Users },
    { value: '4.9', label: 'Excellence Rating', icon: Diamond },
];

const highlights = [
    {
        icon: Clock,
        title: 'Exclusive Masterclass',
        description: 'Premium training covering the most advanced techniques in modern dentistry.',
    },
    {
        icon: MessageCircle,
        title: 'Private Q&A Sessions',
        description: 'One-on-one style interaction with our renowned speakers.',
    },
    {
        icon: Award,
        title: 'Prestigious Certificate',
        description: 'Professional certificate and premium CE credits upon completion.',
    },
    {
        icon: Users,
        title: 'Elite Network Access',
        description: 'Join an exclusive community of leading dental professionals.',
    },
    {
        icon: Video,
        title: 'Extended Recording Access',
        description: 'Unlimited access to all session recordings and bonus content.',
    },
    {
        icon: FileCheck,
        title: 'Premium Materials',
        description: 'Quality materials, guides, and exclusive digital resources.',
    },
];

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    }
};

// Navigation links
const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Speakers', path: '/dentists' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
];

export default function HomeSample2() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Luxury theme colors
    const colors = {
        bg: isDark ? 'bg-slate-950' : 'bg-stone-50',
        bgAlt: isDark ? 'bg-slate-900' : 'bg-white',
        bgCard: isDark ? 'bg-slate-900/90' : 'bg-white',
        text: isDark ? 'text-white' : 'text-slate-900',
        textSecondary: isDark ? 'text-slate-300' : 'text-slate-600',
        textMuted: isDark ? 'text-slate-500' : 'text-slate-400',
        border: isDark ? 'border-amber-500/20' : 'border-amber-200',
        gold: isDark ? 'text-amber-400' : 'text-amber-600',
        goldBg: isDark ? 'bg-amber-500/10' : 'bg-amber-50',
        goldGradient: isDark
            ? 'bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400'
            : 'bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600',
    };

    return (
        <main className={`min-h-screen ${colors.bg} transition-colors duration-500`}>
            {/* Luxury Premium Navbar */}
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    isScrolled
                        ? isDark
                            ? 'bg-slate-950/95 backdrop-blur-lg border-b border-amber-500/20 shadow-lg shadow-black/20'
                            : 'bg-white/95 backdrop-blur-lg border-b border-amber-200 shadow-lg'
                        : 'bg-transparent'
                }`}
            >
                <nav className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3">
                            <div className={`w-11 h-11 rounded-full flex items-center justify-center border-2 ${
                                isDark ? 'border-amber-500 bg-amber-500/10' : 'border-amber-600 bg-amber-50'
                            }`}>
                                <Crown className={`w-5 h-5 ${isDark ? 'text-amber-400' : 'text-amber-600'}`} />
                            </div>
                            <span className={`font-semibold text-xl ${colors.text}`} style={{ fontFamily: 'Georgia, serif' }}>
                                DentalMasters
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`text-sm font-medium transition-colors ${colors.textSecondary} hover:${colors.gold}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Right Side */}
                        <div className="flex items-center gap-4">
                            <ThemeToggle />
                            <Link to="/register" className="hidden md:block">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all ${
                                        isDark
                                            ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 shadow-lg shadow-amber-500/20'
                                            : 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg'
                                    }`}
                                >
                                    Enroll Now
                                </motion.button>
                            </Link>
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className={`md:hidden p-2 rounded-full ${isDark ? 'hover:bg-slate-800' : 'hover:bg-amber-50'}`}
                            >
                                {isMobileMenuOpen ? <X className={`w-6 h-6 ${colors.text}`} /> : <Menu className={`w-6 h-6 ${colors.text}`} />}
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`md:hidden border-t ${colors.border} ${isDark ? 'bg-slate-950' : 'bg-white'}`}
                    >
                        <div className="px-6 py-4 space-y-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`block py-2 ${colors.textSecondary}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/register" className="block">
                                <button className={`w-full py-3 rounded-full font-medium text-sm ${
                                    isDark ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900' : 'bg-gradient-to-r from-amber-600 to-amber-700 text-white'
                                }`}>
                                    Enroll Now
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </motion.header>

            {/* Hero Section */}
            <section className={`relative min-h-screen flex items-center pt-20 overflow-hidden ${isDark ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950' : 'bg-gradient-to-br from-stone-100 via-stone-50 to-amber-50/30'}`}>
                {/* Luxury Background Elements */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {/* Golden glow orbs */}
                    <motion.div
                        className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-amber-500/10' : 'bg-amber-200/40'}`}
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 8, repeat: Infinity }}
                    />
                    <motion.div
                        className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl ${isDark ? 'bg-amber-600/10' : 'bg-amber-100/50'}`}
                        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.6, 0.4] }}
                        transition={{ duration: 10, repeat: Infinity }}
                    />

                    {/* Decorative lines */}
                    <div className={`absolute top-0 left-1/2 w-px h-full ${isDark ? 'bg-gradient-to-b from-transparent via-amber-500/20 to-transparent' : 'bg-gradient-to-b from-transparent via-amber-300/40 to-transparent'}`} />
                    <div className={`absolute top-1/2 left-0 w-full h-px ${isDark ? 'bg-gradient-to-r from-transparent via-amber-500/20 to-transparent' : 'bg-gradient-to-r from-transparent via-amber-300/40 to-transparent'}`} />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="text-center"
                    >
                        {/* Premium Badge */}
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-3 mb-10">
                            <div className={`flex items-center gap-2 px-6 py-3 rounded-full border ${isDark ? 'border-amber-500/30 bg-amber-500/10' : 'border-amber-300 bg-amber-50'}`}>
                                <Crown className={`w-5 h-5 ${colors.gold}`} />
                                <span className={`font-medium ${colors.gold}`}>Premium Masterclass</span>
                                <Sparkles className={`w-4 h-4 ${colors.gold}`} />
                            </div>
                        </motion.div>

                        {/* Main Heading - Serif Style */}
                        <motion.h1
                            variants={itemVariants}
                            className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-8 ${colors.text}`}
                            style={{ fontFamily: 'Georgia, serif' }}
                        >
                            The Art of{' '}
                            <span className={`${isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400' : 'text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600'}`}>
                                Excellence
                            </span>
                            <br />
                            in Dentistry
                        </motion.h1>

                        {/* Subheading */}
                        <motion.p
                            variants={itemVariants}
                            className={`text-xl lg:text-2xl ${colors.textSecondary} max-w-3xl mx-auto mb-12 leading-relaxed`}
                        >
                            An exclusive journey with distinguished dental specialists.
                            Elevate your practice to unprecedented heights.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 mb-20">
                            <Link to="/register">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`group inline-flex items-center gap-3 px-10 py-5 rounded-full font-semibold text-lg transition-all duration-300 ${
                                        isDark
                                            ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50'
                                            : 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg shadow-amber-600/30 hover:shadow-amber-600/50'
                                    }`}
                                >
                                    Reserve Your Place
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </Link>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`inline-flex items-center gap-3 px-10 py-5 rounded-full font-medium text-lg border-2 transition-all duration-300 ${
                                    isDark
                                        ? 'border-amber-500/30 text-amber-400 hover:bg-amber-500/10'
                                        : 'border-amber-300 text-amber-700 hover:bg-amber-50'
                                }`}
                            >
                                <Play className="w-5 h-5" />
                                View Preview
                            </motion.button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            variants={containerVariants}
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                        >
                            {heroStats.map((stat) => (
                                <motion.div
                                    key={stat.label}
                                    variants={itemVariants}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className={`relative p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
                                        isDark
                                            ? 'bg-slate-900/50 border-amber-500/20 hover:border-amber-400/40'
                                            : 'bg-white/80 border-amber-200 hover:border-amber-400 hover:shadow-lg'
                                    }`}
                                >
                                    <motion.div whileHover={{ rotate: 10 }}>
                                        <stat.icon className={`w-6 h-6 ${colors.gold} mb-3 mx-auto`} />
                                    </motion.div>
                                    <div className={`text-3xl font-bold ${colors.gold}`}>{stat.value}</div>
                                    <div className={`text-sm ${colors.textMuted} mt-1`}>{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Dentists Section */}
            <section className={`py-28 ${colors.bgAlt}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-center mb-20"
                    >
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 48 }}
                                viewport={{ once: true }}
                                className={`h-px ${isDark ? 'bg-amber-500/50' : 'bg-amber-300'}`}
                            />
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                            >
                                <Crown className={`w-6 h-6 ${colors.gold}`} />
                            </motion.div>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 48 }}
                                viewport={{ once: true }}
                                className={`h-px ${isDark ? 'bg-amber-500/50' : 'bg-amber-300'}`}
                            />
                        </div>
                        <h2 className={`text-4xl lg:text-5xl font-bold ${colors.text} mb-4`} style={{ fontFamily: 'Georgia, serif' }}>
                            Distinguished Faculty
                        </h2>
                        <p className={`${colors.textSecondary} max-w-2xl mx-auto text-lg`}>
                            Renowned specialists who have shaped modern dentistry.
                        </p>
                    </motion.div>

                    {/* Dentist Cards */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {mockDentists.slice(0, 3).map((dentist, index) => (
                            <motion.div
                                key={dentist.id}
                                variants={itemVariants}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className={`group relative rounded-3xl overflow-hidden transition-all duration-500 ${
                                    isDark
                                        ? 'bg-slate-900 border border-amber-500/20 hover:border-amber-400/50'
                                        : 'bg-white border border-amber-100 hover:shadow-2xl hover:shadow-amber-100'
                                }`}
                            >
                                {/* Image */}
                                <div className="relative h-80 overflow-hidden">
                                    <motion.img
                                        src={dentist.profileImageUrl}
                                        alt={dentist.name}
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.08 }}
                                        transition={{ duration: 0.6 }}
                                    />
                                    <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent' : 'bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent'}`} />

                                    {/* Gold Corner Accent */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        className={`absolute top-0 right-0 w-32 h-32 ${isDark ? 'bg-gradient-to-bl from-amber-500/20' : 'bg-gradient-to-bl from-amber-400/30'}`}
                                    />

                                    {/* Experience Badge */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="absolute top-4 right-4"
                                    >
                                        <span className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium ${isDark ? 'bg-amber-500/90 text-slate-900' : 'bg-amber-500 text-white'}`}>
                                            <Award className="w-4 h-4" />
                                            {dentist.yearsExperience}+ Years
                                        </span>
                                    </motion.div>

                                    {/* Name */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>
                                            {dentist.name}
                                        </h3>
                                        <p className="text-amber-300 text-sm mt-1">{dentist.credentials}</p>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className={`mb-4 py-2 px-4 rounded-lg inline-block ${colors.goldBg}`}>
                                        <span className={`text-sm font-medium ${colors.gold}`}>
                                            {dentist.specialty}
                                        </span>
                                    </div>
                                    <p className={`${colors.textSecondary} text-sm mb-4 line-clamp-2`}>
                                        {dentist.biography.substring(0, 100)}...
                                    </p>
                                    <div className={`flex items-center gap-2 text-sm ${colors.textMuted} pt-4 border-t ${colors.border}`}>
                                        <Diamond className="w-4 h-4" />
                                        <span>{dentist.institution}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* View All */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-16"
                    >
                        <Link to="/dentists">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium border-2 transition-all ${
                                    isDark
                                        ? 'border-amber-500/30 text-amber-400 hover:bg-amber-500/10'
                                        : 'border-amber-300 text-amber-700 hover:bg-amber-50'
                                }`}
                            >
                                Meet All Faculty Members
                                <ArrowRight className="w-4 h-4" />
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className={`py-28 ${colors.bg}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-center mb-20"
                    >
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 48 }}
                                viewport={{ once: true }}
                                className={`h-px ${isDark ? 'bg-amber-500/50' : 'bg-amber-300'}`}
                            />
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                            >
                                <Sparkles className={`w-6 h-6 ${colors.gold}`} />
                            </motion.div>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 48 }}
                                viewport={{ once: true }}
                                className={`h-px ${isDark ? 'bg-amber-500/50' : 'bg-amber-300'}`}
                            />
                        </div>
                        <h2 className={`text-4xl lg:text-5xl font-bold ${colors.text} mb-4`} style={{ fontFamily: 'Georgia, serif' }}>
                            Premium Experience
                        </h2>
                        <p className={`${colors.textSecondary} max-w-2xl mx-auto text-lg`}>
                            An unparalleled learning experience crafted for excellence.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {highlights.map((feature) => (
                            <motion.div
                                key={feature.title}
                                variants={itemVariants}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className={`group p-8 rounded-3xl border transition-all duration-300 ${
                                    isDark
                                        ? 'bg-slate-900/50 border-amber-500/20 hover:border-amber-400/40'
                                        : 'bg-white border-amber-100 hover:border-amber-300 hover:shadow-xl'
                                }`}
                            >
                                <motion.div
                                    whileHover={{ rotate: 10, scale: 1.1 }}
                                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                                        isDark
                                            ? 'bg-gradient-to-br from-amber-500/20 to-amber-600/10 group-hover:from-amber-500/30'
                                            : 'bg-gradient-to-br from-amber-100 to-amber-50 group-hover:from-amber-200'
                                    }`}
                                >
                                    <feature.icon className={`w-8 h-8 ${colors.gold}`} />
                                </motion.div>
                                <h3 className={`text-xl font-bold ${colors.text} mb-3`} style={{ fontFamily: 'Georgia, serif' }}>
                                    {feature.title}
                                </h3>
                                <p className={`${colors.textSecondary} leading-relaxed`}>
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className={`py-28 ${colors.bgAlt}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-center mb-20"
                    >
                        <h2 className={`text-4xl lg:text-5xl font-bold ${colors.text} mb-4`} style={{ fontFamily: 'Georgia, serif' }}>
                            Words of Praise
                        </h2>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {mockReviews.slice(0, 3).map((review, index) => (
                            <motion.div
                                key={review.id}
                                variants={itemVariants}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className={`p-8 rounded-3xl border relative ${
                                    isDark
                                        ? 'bg-slate-900/50 border-amber-500/20'
                                        : 'bg-white border-amber-100'
                                }`}
                            >
                                {/* Decorative quote */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`absolute -top-4 left-8 text-7xl ${isDark ? 'text-amber-500/20' : 'text-amber-200'}`}
                                    style={{ fontFamily: 'Georgia, serif' }}
                                >
                                    "
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-1 mb-4"
                                >
                                    {[...Array(review.rating)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.1 + i * 0.05 }}
                                        >
                                            <Star className={`w-5 h-5 fill-amber-400 text-amber-400`} />
                                        </motion.div>
                                    ))}
                                </motion.div>

                                <p className={`${colors.textSecondary} mb-6 leading-relaxed relative z-10`}>
                                    "{review.reviewText}"
                                </p>

                                <div className="flex items-center gap-4">
                                    <motion.img
                                        whileHover={{ scale: 1.1 }}
                                        src={review.attendeePhotoUrl}
                                        alt={review.attendeeName}
                                        className="w-14 h-14 rounded-full object-cover ring-2 ring-amber-400/30"
                                    />
                                    <div>
                                        <div className={`font-semibold ${colors.text}`}>{review.attendeeName}</div>
                                        <div className={`text-sm ${colors.gold}`}>{review.attendeeCredential}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Event Section */}
            <section className={`py-28 relative overflow-hidden ${isDark ? 'bg-gradient-to-br from-amber-950 via-slate-900 to-slate-950' : 'bg-gradient-to-br from-amber-100 via-amber-50 to-stone-100'}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                        >
                            <Crown className={`w-12 h-12 mx-auto mb-6 ${isDark ? 'text-amber-400' : 'text-amber-600'}`} />
                        </motion.div>
                        <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`} style={{ fontFamily: 'Georgia, serif' }}>
                            {mockEvent.name}
                        </h2>
                        <p className={`text-lg max-w-2xl mx-auto mb-12 ${isDark ? 'text-amber-200' : 'text-amber-800'}`}>
                            An exclusive opportunity awaits. Secure your place among the elite.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12"
                    >
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className={`p-6 rounded-2xl ${isDark ? 'bg-slate-900/50 border border-amber-500/30' : 'bg-white/80 border border-amber-200'}`}
                        >
                            <Calendar className={`w-8 h-8 mx-auto mb-3 ${isDark ? 'text-amber-400' : 'text-amber-600'}`} />
                            <h4 className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>Date</h4>
                            <p className={isDark ? 'text-amber-200' : 'text-amber-700'}>{formatDate(mockEvent.date)}</p>
                        </motion.div>
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className={`p-6 rounded-2xl ${isDark ? 'bg-slate-900/50 border border-amber-500/30' : 'bg-white/80 border border-amber-200'}`}
                        >
                            <Clock className={`w-8 h-8 mx-auto mb-3 ${isDark ? 'text-amber-400' : 'text-amber-600'}`} />
                            <h4 className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>Duration</h4>
                            <p className={isDark ? 'text-amber-200' : 'text-amber-700'}>{mockEvent.durationHours} Hours</p>
                        </motion.div>
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className={`p-6 rounded-2xl ${isDark ? 'bg-slate-900/50 border border-amber-500/30' : 'bg-white/80 border border-amber-200'}`}
                        >
                            <Globe className={`w-8 h-8 mx-auto mb-3 ${isDark ? 'text-amber-400' : 'text-amber-600'}`} />
                            <h4 className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>Platform</h4>
                            <p className={isDark ? 'text-amber-200' : 'text-amber-700'}>{mockEvent.platform}</p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <Link to="/register">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`inline-flex items-center gap-3 px-12 py-5 rounded-full font-semibold text-lg transition-all duration-300 ${
                                    isDark
                                        ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 shadow-lg shadow-amber-500/30'
                                        : 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg shadow-amber-600/30'
                                }`}
                            >
                                Secure Your Place
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </Link>
                        <p className={`text-sm mt-4 ${isDark ? 'text-amber-300' : 'text-amber-700'}`}>
                            Limited spots available
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Final CTA */}
            <section className={`py-28 ${colors.bg}`}>
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={`text-4xl lg:text-5xl font-bold ${colors.text} mb-6`} style={{ fontFamily: 'Georgia, serif' }}>
                            Join the Elite
                        </h2>
                        <p className={`${colors.textSecondary} text-xl mb-10`}>
                            Invest in excellence. Transform your practice. Achieve greatness.
                        </p>
                        <Link to="/register">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                className={`inline-flex items-center gap-3 px-12 py-6 rounded-full font-semibold text-xl transition-all ${
                                    isDark
                                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 shadow-2xl shadow-amber-500/30'
                                        : 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-2xl shadow-amber-600/30'
                                }`}
                            >
                                Register for ${mockEvent.basePrice}
                                <ArrowRight className="w-6 h-6" />
                            </motion.button>
                        </Link>
                        <p className={`${colors.textMuted} text-sm mt-6`}>
                            Premium guarantee • Exclusive access • Lifetime value
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Luxury Premium Footer */}
            <footer className={`${isDark ? 'bg-slate-900' : 'bg-stone-100'} border-t ${colors.border}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Brand */}
                        <div className="lg:col-span-1">
                            <Link to="/" className="flex items-center gap-3 mb-4">
                                <div className={`w-11 h-11 rounded-full flex items-center justify-center border-2 ${
                                    isDark ? 'border-amber-500 bg-amber-500/10' : 'border-amber-600 bg-amber-50'
                                }`}>
                                    <Crown className={`w-5 h-5 ${isDark ? 'text-amber-400' : 'text-amber-600'}`} />
                                </div>
                                <span className={`font-semibold text-xl ${colors.text}`} style={{ fontFamily: 'Georgia, serif' }}>
                                    DentalMasters
                                </span>
                            </Link>
                            <p className={`${colors.textSecondary} text-sm mb-6`}>
                                Exclusive dental education from world-renowned practitioners.
                            </p>
                            <div className="flex gap-3">
                                {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                                    <a key={i} href="#" className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors border ${
                                        isDark ? 'border-amber-500/30 hover:bg-amber-500/10' : 'border-amber-200 hover:bg-amber-50'
                                    }`}>
                                        <Icon className={`w-4 h-4 ${colors.gold}`} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className={`font-semibold ${colors.gold} mb-4`} style={{ fontFamily: 'Georgia, serif' }}>Company</h4>
                            <ul className="space-y-3">
                                {['About Us', 'Our Speakers', 'Testimonials', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <Link to="#" className={`text-sm ${colors.textSecondary} hover:${colors.gold} transition-colors`}>
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h4 className={`font-semibold ${colors.gold} mb-4`} style={{ fontFamily: 'Georgia, serif' }}>Resources</h4>
                            <ul className="space-y-3">
                                {['Event Details', 'CE Credits', 'FAQ', 'Blog'].map((item) => (
                                    <li key={item}>
                                        <Link to="#" className={`text-sm ${colors.textSecondary} hover:${colors.gold} transition-colors`}>
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className={`font-semibold ${colors.gold} mb-4`} style={{ fontFamily: 'Georgia, serif' }}>Contact</h4>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <Mail className={`w-4 h-4 ${colors.gold}`} />
                                    <span className={`text-sm ${colors.textSecondary}`}>concierge@dentalmasters.com</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className={`w-4 h-4 ${colors.gold}`} />
                                    <span className={`text-sm ${colors.textSecondary}`}>+1-800-ELITE</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <MapPin className={`w-4 h-4 ${colors.gold} mt-0.5`} />
                                    <span className={`text-sm ${colors.textSecondary}`}>Fifth Avenue, New York, NY</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className={`mt-12 pt-8 border-t ${colors.border} flex flex-col md:flex-row items-center justify-between gap-4`}>
                        <p className={`text-sm ${colors.textMuted}`}>
                            © {new Date().getFullYear()} DentalMasters Elite. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            {['Privacy', 'Terms', 'Refunds'].map((item) => (
                                <Link key={item} to="#" className={`text-sm ${colors.textMuted} hover:${colors.gold} transition-colors`}>
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
