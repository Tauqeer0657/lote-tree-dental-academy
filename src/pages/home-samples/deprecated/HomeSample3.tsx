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
    Zap,
    Layers,
    Sparkles,
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
 * SAMPLE 3: GLASSMORPHISM
 *
 * Design Philosophy:
 * - Frosted glass effect cards with backdrop-blur
 * - Vibrant gradient mesh backgrounds
 * - Layered floating elements with depth
 * - Semi-transparent overlays
 * - Neon glow accents in dark mode
 */

const heroStats = [
    { value: '5+', label: 'Expert Speakers', icon: Users },
    { value: '12h', label: 'Live Content', icon: Clock },
    { value: '5K+', label: 'Graduates', icon: Award },
    { value: '4.9', label: 'Rating', icon: Star },
];

const highlights = [
    { icon: Clock, title: 'Live Training', description: 'Comprehensive hands-on training with real-time interaction.' },
    { icon: MessageCircle, title: 'Direct Q&A', description: 'Get your questions answered by leading experts.' },
    { icon: Award, title: 'Certificate', description: 'Professional certification with CE credits.' },
    { icon: Users, title: 'Network', description: 'Connect with thousands of dental professionals.' },
    { icon: Video, title: 'Recordings', description: 'Extended access to all session recordings.' },
    { icon: FileCheck, title: 'Materials', description: 'Complete guides, templates, and resources.' },
];

// Navigation links
const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Speakers', path: '/dentists' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
];

export default function HomeSample3() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const colors = {
        text: isDark ? 'text-white' : 'text-slate-900',
        textSecondary: isDark ? 'text-white/70' : 'text-slate-600',
        textMuted: isDark ? 'text-white/50' : 'text-slate-400',
        glass: isDark
            ? 'bg-white/5 backdrop-blur-xl border-white/10'
            : 'bg-white/60 backdrop-blur-xl border-white/50',
        glassHover: isDark
            ? 'hover:bg-white/10 hover:border-white/20'
            : 'hover:bg-white/80 hover:border-white/80',
        accent: isDark ? 'text-violet-400' : 'text-violet-600',
        accentBg: isDark ? 'bg-violet-500/20' : 'bg-violet-100',
    };

    return (
        <main className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-slate-950' : 'bg-slate-100'}`}>
            {/* Glassmorphism Navbar */}
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    isScrolled
                        ? `${colors.glass} border-b shadow-lg ${isDark ? 'shadow-violet-500/5' : 'shadow-violet-200/20'}`
                        : 'bg-transparent'
                }`}
            >
                <nav className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDark ? 'bg-gradient-to-br from-violet-500 to-fuchsia-500' : 'bg-gradient-to-br from-violet-600 to-fuchsia-600'}`}>
                                <Sparkles className="w-5 h-5 text-white" />
                            </div>
                            <span className={`font-bold text-xl ${colors.text}`}>
                                DentalMasters
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${colors.textSecondary} hover:${colors.text} ${isDark ? 'hover:bg-white/10' : 'hover:bg-white/60'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Right Side */}
                        <div className="flex items-center gap-3">
                            <ThemeToggle />
                            <Link to="/register" className="hidden md:block">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    className={`px-5 py-2.5 rounded-xl font-medium text-sm text-white transition-all ${isDark ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/25' : 'bg-gradient-to-r from-violet-600 to-fuchsia-600 shadow-lg shadow-violet-600/25'}`}
                                >
                                    Register
                                </motion.button>
                            </Link>
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className={`md:hidden p-2 rounded-xl ${isDark ? 'hover:bg-white/10' : 'hover:bg-white/60'}`}
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
                        className={`md:hidden ${colors.glass} border-t ${isDark ? 'border-white/10' : 'border-white/50'}`}
                    >
                        <div className="px-6 py-4 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`block py-2 px-3 rounded-lg ${colors.textSecondary} ${isDark ? 'hover:bg-white/10' : 'hover:bg-white/60'}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/register" className="block pt-2">
                                <button className={`w-full py-3 rounded-xl font-medium text-white ${isDark ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500' : 'bg-gradient-to-r from-violet-600 to-fuchsia-600'}`}>
                                    Register Now
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </motion.header>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
                {/* Animated Gradient Mesh Background */}
                <div className="absolute inset-0">
                    {isDark ? (
                        <>
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-slate-950 to-fuchsia-950" />
                            <motion.div
                                className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-violet-600/30 blur-[120px]"
                                animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
                                transition={{ duration: 20, repeat: Infinity }}
                            />
                            <motion.div
                                className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-fuchsia-600/30 blur-[100px]"
                                animate={{ x: [0, -80, 0], y: [0, -60, 0] }}
                                transition={{ duration: 15, repeat: Infinity }}
                            />
                            <motion.div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-cyan-500/20 blur-[80px]"
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ duration: 10, repeat: Infinity }}
                            />
                        </>
                    ) : (
                        <>
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-100 via-white to-fuchsia-100" />
                            <motion.div
                                className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-violet-300/50 blur-[120px]"
                                animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
                                transition={{ duration: 20, repeat: Infinity }}
                            />
                            <motion.div
                                className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-fuchsia-300/50 blur-[100px]"
                                animate={{ x: [0, -80, 0], y: [0, -60, 0] }}
                                transition={{ duration: 15, repeat: Infinity }}
                            />
                            <motion.div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-cyan-200/50 blur-[80px]"
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ duration: 10, repeat: Infinity }}
                            />
                        </>
                    )}
                </div>

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
                    <div className="text-center">
                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full mb-10 ${colors.glass} border`}
                        >
                            <motion.span
                                className={`w-2 h-2 rounded-full ${isDark ? 'bg-cyan-400' : 'bg-violet-500'}`}
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                            <span className={colors.textSecondary}>
                                Next Event: {formatDate(mockEvent.date)}
                            </span>
                            <Sparkles className={`w-4 h-4 ${colors.accent}`} />
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-8 ${colors.text}`}
                        >
                            Master the{' '}
                            <span className={`${isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400' : 'text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600'}`}>
                                Future
                            </span>
                            <br />
                            of Dentistry
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className={`text-xl lg:text-2xl max-w-3xl mx-auto mb-12 ${colors.textSecondary}`}
                        >
                            Join 5 world-renowned specialists in an immersive 12-hour live masterclass
                            designed to transform your practice.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap justify-center gap-4 mb-20"
                        >
                            <Link to="/register">
                                <motion.button
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`group inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                                        isDark
                                            ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-violet-500/30'
                                            : 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-600/30'
                                    }`}
                                >
                                    Get Started
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </Link>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-medium text-lg border transition-all duration-300 ${colors.glass} ${colors.glassHover}`}
                            >
                                <Play className={`w-5 h-5 ${colors.accent}`} />
                                <span className={colors.text}>Watch Demo</span>
                            </motion.button>
                        </motion.div>

                        {/* Stats - Glass Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
                        >
                            {heroStats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className={`p-6 rounded-3xl border transition-all duration-300 ${colors.glass} ${colors.glassHover}`}
                                >
                                    <stat.icon className={`w-6 h-6 ${colors.accent} mx-auto mb-3`} />
                                    <div className={`text-3xl font-bold mb-1 ${colors.text}`}>{stat.value}</div>
                                    <div className={`text-sm ${colors.textMuted}`}>{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                    className={`absolute top-32 left-10 w-20 h-20 rounded-2xl border ${colors.glass}`}
                    animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                >
                    <div className="w-full h-full flex items-center justify-center">
                        <Layers className={`w-8 h-8 ${colors.accent}`} />
                    </div>
                </motion.div>
                <motion.div
                    className={`absolute bottom-32 right-10 w-16 h-16 rounded-full border ${colors.glass}`}
                    animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                >
                    <div className="w-full h-full flex items-center justify-center">
                        <Zap className={`w-6 h-6 ${isDark ? 'text-cyan-400' : 'text-fuchsia-500'}`} />
                    </div>
                </motion.div>
            </section>

            {/* Dentists Section */}
            <section className={`py-28 relative ${isDark ? 'bg-slate-950/50' : 'bg-white/50'}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className={`inline-block text-sm font-semibold uppercase tracking-widest ${colors.accent} mb-4`}>
                            Meet the Experts
                        </span>
                        <h2 className={`text-4xl lg:text-5xl font-bold ${colors.text}`}>
                            World-Class Instructors
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mockDentists.slice(0, 3).map((dentist, index) => (
                            <motion.div
                                key={dentist.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className={`group rounded-3xl overflow-hidden border transition-all duration-500 ${colors.glass} ${colors.glassHover}`}
                            >
                                {/* Image */}
                                <div className="relative h-72 overflow-hidden">
                                    <motion.img
                                        src={dentist.profileImageUrl}
                                        alt={dentist.name}
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-slate-950 via-slate-950/50' : 'from-slate-900/80 via-slate-900/20'} to-transparent`} />

                                    {/* Badges */}
                                    <div className="absolute top-4 left-4">
                                        <span className={`px-4 py-2 rounded-full text-sm font-medium ${colors.glass} border ${colors.text}`}>
                                            {dentist.specialty.split('&')[0].trim()}
                                        </span>
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <span className={`px-4 py-2 rounded-full text-sm font-medium ${isDark ? 'bg-violet-500/80' : 'bg-violet-600/90'} text-white`}>
                                            {dentist.yearsExperience}+ yrs
                                        </span>
                                    </div>

                                    {/* Name */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-xl font-bold text-white">{dentist.name}</h3>
                                        <p className={isDark ? 'text-violet-300' : 'text-violet-200'}>{dentist.credentials}</p>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <p className={`text-sm mb-4 line-clamp-2 ${colors.textSecondary}`}>
                                        {dentist.biography.substring(0, 100)}...
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {dentist.topicsCovered.slice(0, 2).map((topic) => (
                                            <span key={topic} className={`px-3 py-1 rounded-full text-xs ${colors.accentBg} ${colors.accent}`}>
                                                {topic}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <Link to="/dentists">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                className={`inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-medium border transition-all ${colors.glass} ${colors.glassHover} ${colors.text}`}
                            >
                                View All Speakers
                                <ArrowRight className="w-4 h-4" />
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-28 relative overflow-hidden">
                <div className="absolute inset-0">
                    {isDark ? (
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-violet-950/50 to-slate-900" />
                    ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-fuchsia-50" />
                    )}
                </div>

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className={`inline-block text-sm font-semibold uppercase tracking-widest ${colors.accent} mb-4`}>
                            What's Included
                        </span>
                        <h2 className={`text-4xl lg:text-5xl font-bold ${colors.text}`}>
                            Premium Features
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {highlights.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                className={`group p-8 rounded-3xl border transition-all duration-300 ${colors.glass} ${colors.glassHover}`}
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${colors.accentBg} group-hover:scale-110`}>
                                    <feature.icon className={`w-7 h-7 ${colors.accent}`} />
                                </div>
                                <h3 className={`text-xl font-semibold mb-3 ${colors.text}`}>{feature.title}</h3>
                                <p className={colors.textSecondary}>{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className={`py-28 ${isDark ? 'bg-slate-950/50' : 'bg-white/50'}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className={`text-4xl lg:text-5xl font-bold ${colors.text}`}>
                            Loved by Professionals
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {mockReviews.slice(0, 3).map((review, index) => (
                            <motion.div
                                key={review.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-8 rounded-3xl border ${colors.glass}`}
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className={`w-5 h-5 fill-amber-400 text-amber-400`} />
                                    ))}
                                </div>
                                <p className={`${colors.textSecondary} mb-6 leading-relaxed`}>
                                    "{review.reviewText}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={review.attendeePhotoUrl}
                                        alt={review.attendeeName}
                                        className={`w-12 h-12 rounded-full object-cover ring-2 ${isDark ? 'ring-violet-500/50' : 'ring-violet-300'}`}
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

            {/* Event CTA */}
            <section className="py-28 relative overflow-hidden">
                <div className="absolute inset-0">
                    {isDark ? (
                        <>
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-fuchsia-950 to-slate-950" />
                            <motion.div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-violet-500/20 blur-[150px]"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 8, repeat: Infinity }}
                            />
                        </>
                    ) : (
                        <>
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500" />
                        </>
                    )}
                </div>

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                            {mockEvent.name}
                        </h2>
                        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-12">
                            Secure your spot in this transformative experience.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12"
                    >
                        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                            <Calendar className="w-8 h-8 text-white/80 mx-auto mb-3" />
                            <h4 className="font-semibold text-white mb-1">Date</h4>
                            <p className="text-white/80">{formatDate(mockEvent.date)}</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                            <Clock className="w-8 h-8 text-white/80 mx-auto mb-3" />
                            <h4 className="font-semibold text-white mb-1">Duration</h4>
                            <p className="text-white/80">{mockEvent.durationHours} Hours</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                            <Globe className="w-8 h-8 text-white/80 mx-auto mb-3" />
                            <h4 className="font-semibold text-white mb-1">Platform</h4>
                            <p className="text-white/80">{mockEvent.platform}</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <Link to="/register">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-3 bg-white text-violet-600 font-semibold px-12 py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
                            >
                                Register Now - ${mockEvent.basePrice}
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </Link>
                        <p className="text-white/60 text-sm mt-4">
                            {mockEvent.maxCapacity - mockEvent.currentRegistrations} spots remaining
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Final CTA */}
            <section className={`py-28 ${isDark ? 'bg-slate-950' : 'bg-slate-100'}`}>
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={`text-4xl lg:text-5xl font-bold ${colors.text} mb-6`}>
                            Ready to Level Up?
                        </h2>
                        <p className={`${colors.textSecondary} text-xl mb-10 max-w-2xl mx-auto`}>
                            Join thousands of dental professionals who have transformed their careers.
                        </p>
                        <Link to="/register">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                className={`inline-flex items-center gap-3 px-12 py-6 rounded-2xl font-semibold text-xl text-white transition-all ${
                                    isDark
                                        ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/30'
                                        : 'bg-gradient-to-r from-violet-600 to-fuchsia-600 shadow-lg shadow-violet-600/30'
                                }`}
                            >
                                Start Your Journey
                                <ArrowRight className="w-6 h-6" />
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Glassmorphism Footer */}
            <footer className={`relative ${isDark ? 'bg-slate-900' : 'bg-white/80'} backdrop-blur-xl border-t ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Brand */}
                        <div className="lg:col-span-1">
                            <Link to="/" className="flex items-center gap-3 mb-4">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDark ? 'bg-gradient-to-br from-violet-500 to-fuchsia-500' : 'bg-gradient-to-br from-violet-600 to-fuchsia-600'}`}>
                                    <Sparkles className="w-5 h-5 text-white" />
                                </div>
                                <span className={`font-bold text-xl ${colors.text}`}>DentalMasters</span>
                            </Link>
                            <p className={`${colors.textSecondary} text-sm mb-6`}>
                                Next-generation dental education with cutting-edge techniques.
                            </p>
                            <div className="flex gap-3">
                                {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                                    <a key={i} href="#" className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isDark ? 'bg-white/5 hover:bg-white/10 border border-white/10' : 'bg-white hover:bg-violet-50 border border-slate-200'}`}>
                                        <Icon className={`w-4 h-4 ${colors.accent}`} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className={`font-semibold ${colors.text} mb-4`}>Company</h4>
                            <ul className="space-y-3">
                                {['About Us', 'Speakers', 'Testimonials', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <Link to="#" className={`text-sm ${colors.textSecondary} hover:${colors.accent} transition-colors`}>
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
                                {['Event Details', 'CE Credits', 'FAQ', 'Blog'].map((item) => (
                                    <li key={item}>
                                        <Link to="#" className={`text-sm ${colors.textSecondary} hover:${colors.accent} transition-colors`}>
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
                                    <Mail className={`w-4 h-4 ${colors.accent}`} />
                                    <span className={`text-sm ${colors.textSecondary}`}>hello@dentalmasters.io</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className={`w-4 h-4 ${colors.accent}`} />
                                    <span className={`text-sm ${colors.textSecondary}`}>+1-888-DENTAL</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <MapPin className={`w-4 h-4 ${colors.accent} mt-0.5`} />
                                    <span className={`text-sm ${colors.textSecondary}`}>Innovation District, SF, CA</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className={`mt-12 pt-8 border-t ${isDark ? 'border-white/10' : 'border-slate-200'} flex flex-col md:flex-row items-center justify-between gap-4`}>
                        <p className={`text-sm ${colors.textMuted}`}>
                            © {new Date().getFullYear()} DentalMasters. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            {['Privacy', 'Terms', 'Cookies'].map((item) => (
                                <Link key={item} to="#" className={`text-sm ${colors.textMuted} hover:${colors.accent} transition-colors`}>
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
