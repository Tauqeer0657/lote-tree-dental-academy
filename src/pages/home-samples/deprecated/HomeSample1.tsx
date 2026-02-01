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
    CheckCircle,
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
 * SAMPLE 1: ELEGANT MINIMALIST
 *
 * Design Philosophy:
 * - Clean white spaces with structured grids
 * - Subtle geometric accents and thin line decorations
 * - Asymmetric layouts for visual interest
 * - Soft shadows and gentle hover animations
 * - Muted color palette with strategic accent pops
 */

// Hero statistics data
const heroStats = [
    { value: '5+', label: 'Expert Dentists', icon: Users },
    { value: '12h', label: 'Live Training', icon: Clock },
    { value: '5K+', label: 'Trained', icon: Award },
    { value: '4.9', label: 'Rating', icon: Star },
];

// Feature highlights data
const highlights = [
    {
        icon: Clock,
        title: 'Live Instruction',
        description: 'Comprehensive training with the latest techniques in modern dentistry.',
    },
    {
        icon: MessageCircle,
        title: 'Interactive Q&A',
        description: 'Direct access to ask questions and get personalized answers.',
    },
    {
        icon: Award,
        title: 'Certificate of Completion',
        description: 'Professional certificate and CE credits upon completion.',
    },
    {
        icon: Users,
        title: 'Networking',
        description: 'Connect with fellow dental professionals worldwide.',
    },
    {
        icon: Video,
        title: 'Recorded Access',
        description: 'Extended access to recordings for review at your pace.',
    },
    {
        icon: FileCheck,
        title: 'Workshop Materials',
        description: 'Comprehensive guides and templates to implement learnings.',
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
    { name: 'Dentists', path: '/dentists' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
];

export default function HomeSample1() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Theme-aware color classes
    const colors = {
        bg: isDark ? 'bg-slate-950' : 'bg-white',
        bgAlt: isDark ? 'bg-slate-900' : 'bg-slate-50',
        bgCard: isDark ? 'bg-slate-900/80' : 'bg-white',
        text: isDark ? 'text-white' : 'text-slate-900',
        textSecondary: isDark ? 'text-slate-400' : 'text-slate-600',
        textMuted: isDark ? 'text-slate-500' : 'text-slate-400',
        border: isDark ? 'border-slate-800' : 'border-slate-200',
        accent: isDark ? 'text-sky-400' : 'text-sky-600',
        accentBg: isDark ? 'bg-sky-500/10' : 'bg-sky-50',
    };

    return (
        <main className={`min-h-screen ${colors.bg} transition-colors duration-500`}>
            {/* Elegant Minimalist Navbar */}
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? isDark
                            ? 'bg-slate-950/95 backdrop-blur-md shadow-lg shadow-black/10'
                            : 'bg-white/95 backdrop-blur-md shadow-lg shadow-slate-200/50'
                        : 'bg-transparent'
                }`}
            >
                <nav className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                isDark ? 'bg-sky-500/20' : 'bg-sky-100'
                            }`}>
                                <span className={`font-bold text-lg ${isDark ? 'text-sky-400' : 'text-sky-600'}`}>D</span>
                            </div>
                            <span className={`font-semibold text-xl ${colors.text}`}>DentalMasters</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`text-sm font-medium transition-colors ${colors.textSecondary} hover:${colors.text}`}
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
                                    className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all ${
                                        isDark
                                            ? 'bg-sky-500 text-white hover:bg-sky-400'
                                            : 'bg-slate-900 text-white hover:bg-slate-800'
                                    }`}
                                >
                                    Register
                                </motion.button>
                            </Link>
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className={`md:hidden p-2 rounded-lg ${isDark ? 'hover:bg-slate-800' : 'hover:bg-slate-100'}`}
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
                                <button className={`w-full py-3 rounded-lg font-medium text-white ${
                                    isDark ? 'bg-sky-500' : 'bg-slate-900'
                                }`}>
                                    Register Now
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </motion.header>

            {/* Hero Section */}
            <section className={`relative min-h-screen flex items-center pt-20 ${colors.bg}`}>
                {/* Geometric Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Subtle grid pattern */}
                    <div
                        className={`absolute inset-0 opacity-[0.03] ${isDark ? 'opacity-[0.05]' : ''}`}
                        style={{
                            backgroundImage: `linear-gradient(${isDark ? '#fff' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#fff' : '#000'} 1px, transparent 1px)`,
                            backgroundSize: '60px 60px'
                        }}
                    />

                    {/* Floating geometric shapes */}
                    <motion.div
                        className={`absolute top-20 left-[10%] w-64 h-64 rounded-full ${isDark ? 'bg-sky-500/5' : 'bg-sky-100/50'}`}
                        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.div
                        className={`absolute bottom-20 right-[15%] w-80 h-80 ${isDark ? 'bg-emerald-500/5' : 'bg-emerald-100/30'}`}
                        style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                    />
                    <motion.div
                        className={`absolute top-1/3 right-[5%] w-40 h-40 border-2 ${isDark ? 'border-slate-700' : 'border-slate-200'} rounded-2xl`}
                        animate={{ rotate: [0, 90, 0], scale: [1, 1.1, 1] }}
                        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                    />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                        >
                            {/* Badge */}
                            <motion.div
                                variants={itemVariants}
                                className={`inline-flex items-center gap-2 ${colors.accentBg} border ${colors.border} rounded-full px-4 py-2 mb-8`}
                            >
                                <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-sky-400' : 'bg-sky-500'} animate-pulse`} />
                                <span className={`text-sm font-medium ${colors.textSecondary}`}>
                                    Next Event: {formatDate(mockEvent.date)}
                                </span>
                            </motion.div>

                            {/* Headline */}
                            <motion.h1
                                variants={itemVariants}
                                className={`text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 ${colors.text}`}
                            >
                                Learn from the{' '}
                                <span className={`${isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400' : 'text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-emerald-600'}`}>
                                    Best
                                </span>{' '}
                                Dentists
                            </motion.h1>

                            {/* Description */}
                            <motion.p
                                variants={itemVariants}
                                className={`text-lg lg:text-xl ${colors.textSecondary} max-w-lg mb-10 leading-relaxed`}
                            >
                                Join our exclusive live masterclass and transform your dental practice
                                with cutting-edge techniques from renowned specialists.
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                                <Link to="/register">
                                    <motion.button
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 ${
                                            isDark
                                                ? 'bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 shadow-lg shadow-sky-500/25'
                                                : 'bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-500 hover:to-sky-600 shadow-lg shadow-sky-600/25'
                                        }`}
                                    >
                                        Register Now
                                        <ArrowRight className="w-5 h-5" />
                                    </motion.button>
                                </Link>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium border-2 transition-all duration-300 ${
                                        isDark
                                            ? 'border-slate-700 text-slate-300 hover:border-sky-500 hover:text-sky-400'
                                            : 'border-slate-200 text-slate-700 hover:border-sky-500 hover:text-sky-600'
                                    }`}
                                >
                                    <Play className="w-5 h-5" />
                                    Watch Preview
                                </motion.button>
                            </motion.div>
                        </motion.div>

                        {/* Right - Stats Grid */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                            className="grid grid-cols-2 gap-4"
                        >
                            {heroStats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    variants={itemVariants}
                                    initial="rest"
                                    whileHover="hover"
                                    animate="rest"
                                    custom={index}
                                    className={`${colors.bgCard} rounded-2xl p-6 border ${colors.border} backdrop-blur-sm transition-all duration-300 ${
                                        isDark ? 'hover:border-sky-500/50' : 'hover:border-sky-300 hover:shadow-lg'
                                    }`}
                                >
                                    <motion.div
                                        whileHover={{ rotate: 10, scale: 1.1 }}
                                        className={`w-12 h-12 rounded-xl ${colors.accentBg} flex items-center justify-center mb-4`}
                                    >
                                        <stat.icon className={`w-6 h-6 ${colors.accent}`} />
                                    </motion.div>
                                    <div className={`text-3xl font-bold mb-1 ${colors.text}`}>{stat.value}</div>
                                    <div className={`text-sm ${colors.textMuted}`}>{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Dentists Section */}
            <section className={`py-24 ${colors.bgAlt}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className={`inline-block text-sm font-semibold uppercase tracking-widest ${colors.accent} mb-4`}>
                            Meet Your Instructors
                        </span>
                        <h2 className={`text-4xl lg:text-5xl font-bold ${colors.text} mb-4`}>
                            Expert Dental Professionals
                        </h2>
                        <p className={`${colors.textSecondary} max-w-2xl mx-auto text-lg`}>
                            Learn from pioneers in their respective fields with decades of combined experience.
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
                                transition={{ duration: 0.3 }}
                                className={`group ${colors.bgCard} rounded-3xl overflow-hidden border ${colors.border} transition-all duration-500 ${
                                    isDark ? 'hover:border-sky-500/30' : 'hover:shadow-2xl hover:shadow-sky-100'
                                }`}
                            >
                                {/* Image */}
                                <div className="relative h-72 overflow-hidden">
                                    <motion.img
                                        src={dentist.profileImageUrl}
                                        alt={dentist.name}
                                        className="w-full h-full object-cover object-center"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-slate-900 via-slate-900/50' : 'from-slate-900/80 via-slate-900/20'} to-transparent`} />

                                    {/* Badges */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="absolute top-4 left-4 flex gap-2"
                                    >
                                        <span className={`${isDark ? 'bg-sky-500/90' : 'bg-sky-600/90'} text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm`}>
                                            {dentist.specialty.split('&')[0].trim()}
                                        </span>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 + 0.1 }}
                                        className="absolute top-4 right-4"
                                    >
                                        <span className={`${isDark ? 'bg-emerald-500/90' : 'bg-emerald-600/90'} text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm`}>
                                            {dentist.yearsExperience}+ Years
                                        </span>
                                    </motion.div>

                                    {/* Name Overlay */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-xl font-bold text-white mb-1">{dentist.name}</h3>
                                        <p className="text-white/80 text-sm">{dentist.credentials}</p>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <p className={`${colors.textSecondary} text-sm mb-4 line-clamp-2`}>
                                        {dentist.biography.substring(0, 120)}...
                                    </p>

                                    {/* Topics */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {dentist.topicsCovered.slice(0, 2).map((topic) => (
                                            <motion.span
                                                key={topic}
                                                whileHover={{ scale: 1.05 }}
                                                className={`${colors.accentBg} ${colors.accent} text-xs px-3 py-1 rounded-full`}
                                            >
                                                {topic}
                                            </motion.span>
                                        ))}
                                    </div>

                                    {/* Institution */}
                                    <div className={`flex items-center gap-2 text-sm ${colors.textMuted}`}>
                                        <Award className="w-4 h-4" />
                                        <span className="truncate">{dentist.institution}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* View All Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <Link to="/dentists">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium border-2 transition-all duration-300 ${
                                    isDark
                                        ? 'border-slate-700 text-slate-300 hover:border-sky-500 hover:text-sky-400'
                                        : 'border-slate-200 text-slate-700 hover:border-sky-500 hover:text-sky-600'
                                }`}
                            >
                                View All Speakers
                                <ArrowRight className="w-4 h-4" />
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Features/Highlights Section */}
            <section className={`py-24 ${colors.bg}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-center mb-16"
                    >
                        <span className={`inline-block text-sm font-semibold uppercase tracking-widest ${colors.accent} mb-4`}>
                            What You'll Get
                        </span>
                        <h2 className={`text-4xl lg:text-5xl font-bold ${colors.text} mb-4`}>
                            Complete Learning Experience
                        </h2>
                        <p className={`${colors.textSecondary} max-w-2xl mx-auto text-lg`}>
                            Everything you need for an immersive educational experience.
                        </p>
                    </motion.div>

                    {/* Features Grid */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {highlights.map((feature) => (
                            <motion.div
                                key={feature.title}
                                variants={itemVariants}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className={`group p-8 rounded-2xl border ${colors.border} ${colors.bgCard} transition-all duration-300 ${
                                    isDark ? 'hover:border-sky-500/30' : 'hover:shadow-xl hover:border-sky-200'
                                }`}
                            >
                                <motion.div
                                    whileHover={{ rotate: 10, scale: 1.1 }}
                                    className={`w-14 h-14 rounded-2xl ${colors.accentBg} flex items-center justify-center mb-6 transition-transform duration-300`}
                                >
                                    <feature.icon className={`w-7 h-7 ${colors.accent}`} />
                                </motion.div>
                                <h3 className={`text-xl font-semibold ${colors.text} mb-3`}>
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
            <section className={`py-24 ${colors.bgAlt}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-center mb-16"
                    >
                        <span className={`inline-block text-sm font-semibold uppercase tracking-widest ${colors.accent} mb-4`}>
                            Testimonials
                        </span>
                        <h2 className={`text-4xl lg:text-5xl font-bold ${colors.text} mb-4`}>
                            What Attendees Say
                        </h2>
                    </motion.div>

                    {/* Testimonial Cards */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {mockReviews.slice(0, 3).map((review, index) => (
                            <motion.div
                                key={review.id}
                                variants={itemVariants}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className={`p-8 rounded-3xl border ${colors.border} ${colors.bgCard} relative`}
                            >
                                {/* Quote Mark */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`absolute top-6 right-6 text-6xl font-serif ${isDark ? 'text-sky-500/20' : 'text-sky-200'}`}
                                >
                                    "
                                </motion.div>

                                {/* Stars */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: index * 0.1 + 0.1 }}
                                    className="flex gap-1 mb-4"
                                >
                                    {[...Array(review.rating)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.1 + i * 0.05 }}
                                        >
                                            <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {/* Review Text */}
                                <p className={`${colors.textSecondary} mb-6 leading-relaxed relative z-10`}>
                                    "{review.reviewText}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    <motion.img
                                        whileHover={{ scale: 1.1 }}
                                        src={review.attendeePhotoUrl}
                                        alt={review.attendeeName}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <div className={`font-semibold ${colors.text}`}>{review.attendeeName}</div>
                                        <div className={`text-sm ${colors.textMuted}`}>{review.attendeeCredential}</div>
                                    </div>
                                    {review.verified && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            <CheckCircle className={`w-5 h-5 ml-auto ${isDark ? 'text-emerald-400' : 'text-emerald-500'}`} />
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Event Countdown Section */}
            <section className={`py-24 ${isDark ? 'bg-gradient-to-br from-sky-950 via-slate-900 to-emerald-950' : 'bg-gradient-to-br from-sky-600 via-sky-700 to-emerald-700'}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block text-sm font-semibold uppercase tracking-widest text-sky-200 mb-4">
                            Mark Your Calendar
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                            {mockEvent.name}
                        </h2>
                        <p className="text-sky-100 max-w-2xl mx-auto mb-12 text-lg">
                            Don't miss this opportunity to learn from the best.
                        </p>
                    </motion.div>

                    {/* Event Info Cards */}
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
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                        >
                            <Calendar className="w-8 h-8 text-sky-200 mx-auto mb-3" />
                            <h4 className="font-semibold text-white mb-1">Date</h4>
                            <p className="text-sky-100">{formatDate(mockEvent.date)}</p>
                        </motion.div>
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                        >
                            <Clock className="w-8 h-8 text-sky-200 mx-auto mb-3" />
                            <h4 className="font-semibold text-white mb-1">Duration</h4>
                            <p className="text-sky-100">{mockEvent.durationHours} Hours Live</p>
                        </motion.div>
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                        >
                            <Globe className="w-8 h-8 text-sky-200 mx-auto mb-3" />
                            <h4 className="font-semibold text-white mb-1">Platform</h4>
                            <p className="text-sky-100">{mockEvent.platform}</p>
                        </motion.div>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <Link to="/register">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 bg-white text-sky-700 font-semibold px-10 py-5 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                            >
                                Secure Your Spot
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </Link>
                        <p className="text-sky-200 text-sm mt-4">
                            {mockEvent.maxCapacity - mockEvent.currentRegistrations} spots remaining
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className={`py-24 ${colors.bg}`}>
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={`text-4xl lg:text-5xl font-bold ${colors.text} mb-6`}>
                            Ready to Transform Your Practice?
                        </h2>
                        <p className={`${colors.textSecondary} text-lg mb-10 max-w-2xl mx-auto`}>
                            Join thousands of dental professionals who have elevated their skills
                            through our masterclass.
                        </p>
                        <Link to="/register">
                            <motion.button
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className={`inline-flex items-center gap-2 px-10 py-5 rounded-xl font-semibold text-lg text-white transition-all duration-300 ${
                                    isDark
                                        ? 'bg-gradient-to-r from-sky-500 to-emerald-500 shadow-lg shadow-sky-500/25'
                                        : 'bg-gradient-to-r from-sky-600 to-emerald-600 shadow-lg shadow-sky-600/25'
                                }`}
                            >
                                Register Now for ${mockEvent.basePrice}
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </Link>
                        <p className={`${colors.textMuted} text-sm mt-4`}>
                            30-day money-back guarantee • Instant access confirmed
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Elegant Minimalist Footer */}
            <footer className={`${isDark ? 'bg-slate-900' : 'bg-slate-50'} border-t ${colors.border}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Brand */}
                        <div className="lg:col-span-1">
                            <Link to="/" className="flex items-center gap-3 mb-4">
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                    isDark ? 'bg-sky-500/20' : 'bg-sky-100'
                                }`}>
                                    <span className={`font-bold text-lg ${isDark ? 'text-sky-400' : 'text-sky-600'}`}>D</span>
                                </div>
                                <span className={`font-semibold text-xl ${colors.text}`}>DentalMasters</span>
                            </Link>
                            <p className={`${colors.textSecondary} text-sm mb-6`}>
                                Premium dental education from industry-leading practitioners.
                            </p>
                            <div className="flex gap-3">
                                {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                                    <a key={i} href="#" className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                                        isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-white hover:bg-slate-100'
                                    }`}>
                                        <Icon className={`w-4 h-4 ${colors.textMuted}`} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className={`font-semibold ${colors.text} mb-4`}>Quick Links</h4>
                            <ul className="space-y-3">
                                {['About Us', 'Our Dentists', 'FAQ', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className={`text-sm ${colors.textSecondary} hover:${colors.text} transition-colors`}>
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h4 className={`font-semibold ${colors.text} mb-4`}>Resources</h4>
                            <ul className="space-y-3">
                                {['Event Details', 'CE Credits', 'Past Events', 'Blog'].map((item) => (
                                    <li key={item}>
                                        <Link to="#" className={`text-sm ${colors.textSecondary} hover:${colors.text} transition-colors`}>
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className={`font-semibold ${colors.text} mb-4`}>Contact</h4>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <Mail className={`w-4 h-4 ${isDark ? 'text-sky-400' : 'text-sky-600'}`} />
                                    <span className={`text-sm ${colors.textSecondary}`}>info@lotetree.academy</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className={`w-4 h-4 ${isDark ? 'text-sky-400' : 'text-sky-600'}`} />
                                    <span className={`text-sm ${colors.textSecondary}`}>+1-800-DENTIST</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <MapPin className={`w-4 h-4 ${isDark ? 'text-sky-400' : 'text-sky-600'} mt-0.5`} />
                                    <span className={`text-sm ${colors.textSecondary}`}>123 Medical Center Dr, Boston, MA</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className={`mt-12 pt-8 border-t ${colors.border} flex flex-col md:flex-row items-center justify-between gap-4`}>
                        <p className={`text-sm ${colors.textMuted}`}>
                            © {new Date().getFullYear()} DentalMasters. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map((item) => (
                                <Link key={item} to="#" className={`text-sm ${colors.textMuted} hover:${colors.text} transition-colors`}>
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
