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
    Minus,
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
 * SAMPLE 5: EDITORIAL BOLD
 *
 * Design Philosophy:
 * - Oversized, impactful headlines (120px+)
 * - Editorial magazine-style layout
 * - Black and white base with accent color
 * - Minimal imagery, text-focused
 * - Dramatic spacing and scale contrast
 */

const heroStats = [
    { value: '5+', label: 'Speakers' },
    { value: 'Live', label: 'Training' },
    { value: '5K+', label: 'Alumni' },
    { value: 'Top', label: 'Rated' },
];

const highlights = [
    { icon: Clock, title: 'Intensive Training', description: 'Focused, expert-led live sessions.' },
    { icon: MessageCircle, title: 'Direct Access', description: 'Real-time Q&A with world-class specialists.' },
    { icon: Award, title: 'Certification', description: 'Industry-recognized credentials upon completion.' },
    { icon: Users, title: 'Community', description: 'Join thousands of ambitious practitioners.' },
    { icon: Video, title: 'Recordings', description: 'Full access to session recordings.' },
    { icon: FileCheck, title: 'Resources', description: 'Comprehensive learning materials.' },
];

// Navigation links
const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'SPEAKERS', path: '/dentists' },
    { name: 'ABOUT', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'CONTACT', path: '/contact' },
];

export default function HomeSample5() {
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
        bg: isDark ? 'bg-black' : 'bg-white',
        bgAlt: isDark ? 'bg-zinc-950' : 'bg-zinc-50',
        text: isDark ? 'text-white' : 'text-black',
        textSecondary: isDark ? 'text-zinc-400' : 'text-zinc-600',
        textMuted: isDark ? 'text-zinc-600' : 'text-zinc-400',
        accent: isDark ? 'text-red-500' : 'text-red-600',
        accentBg: isDark ? 'bg-red-500' : 'bg-red-600',
        border: isDark ? 'border-zinc-800' : 'border-zinc-200',
    };

    return (
        <main className={`min-h-screen ${colors.bg} transition-colors duration-500`}>
            {/* Editorial Bold Navbar */}
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? isDark
                            ? 'bg-black border-b border-zinc-800'
                            : 'bg-white border-b border-zinc-200'
                        : 'bg-transparent'
                }`}
            >
                <nav className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2">
                            <span className={`font-black text-xl uppercase tracking-tight ${colors.text}`}>DENTAL</span>
                            <span className={`font-black text-xl uppercase tracking-tight ${colors.accent}`}>MASTERS</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`text-xs font-bold uppercase tracking-[0.2em] transition-colors ${colors.textSecondary} hover:${colors.text}`}
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
                                    className={`px-6 py-2.5 font-black uppercase text-xs tracking-wider text-white transition-all ${colors.accentBg}`}
                                >
                                    Register
                                </motion.button>
                            </Link>
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className={`md:hidden p-2 ${isDark ? 'hover:bg-zinc-900' : 'hover:bg-zinc-100'}`}
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
                        className={`md:hidden border-t ${colors.border} ${isDark ? 'bg-black' : 'bg-white'}`}
                    >
                        <div className="px-6 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`block py-2 text-sm font-bold uppercase tracking-[0.2em] ${colors.textSecondary}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/register" className="block pt-4">
                                <button className={`w-full py-3 font-black uppercase tracking-wider text-white ${colors.accentBg}`}>
                                    Register Now
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </motion.header>

            {/* Hero Section - Editorial Style */}
            <section className={`min-h-screen flex items-center ${colors.bg}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
                    <div className="grid lg:grid-cols-12 gap-8 items-end">
                        {/* Left - Large Typography */}
                        <div className="lg:col-span-8">
                            {/* Category Tag */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-4 mb-8"
                            >
                                <span className={`text-sm font-mono uppercase tracking-[0.3em] ${colors.accent}`}>
                                    Dental Excellence
                                </span>
                                <span className={`w-16 h-px ${colors.accentBg}`} />
                            </motion.div>

                            {/* Massive Headline */}
                            <motion.h1
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className={`text-[80px] md:text-[120px] lg:text-[160px] font-black leading-[0.85] tracking-tighter ${colors.text}`}
                            >
                                MASTER
                                <br />
                                <span className={colors.accent}>CLASS</span>
                            </motion.h1>

                            {/* Subline */}
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className={`text-xl lg:text-2xl mt-8 max-w-xl ${colors.textSecondary}`}
                            >
                                World-renowned dentists. Live intensive training.
                                One transformative experience.
                            </motion.p>

                            {/* CTAs */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-wrap gap-4 mt-12"
                            >
                                <Link to="/register">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`inline-flex items-center gap-2 px-8 py-4 text-white font-bold uppercase tracking-wider transition-all ${colors.accentBg} hover:opacity-90`}
                                    >
                                        Register Now
                                        <ArrowRight className="w-5 h-5" />
                                    </motion.button>
                                </Link>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`inline-flex items-center gap-2 px-8 py-4 font-bold uppercase tracking-wider border-2 transition-all ${
                                        isDark ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'
                                    }`}
                                >
                                    <Play className="w-5 h-5" />
                                    Watch
                                </motion.button>
                            </motion.div>
                        </div>

                        {/* Right - Stats Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="lg:col-span-4"
                        >
                            <div className={`border-l-2 ${colors.border} pl-8`}>
                                <div className={`text-sm font-mono uppercase tracking-[0.2em] mb-8 ${colors.textMuted}`}>
                                    Event Details
                                </div>
                                <div className="space-y-8">
                                    {heroStats.map((stat) => (
                                        <div key={stat.label}>
                                            <div className={`text-5xl font-black ${colors.text}`}>{stat.value}</div>
                                            <div className={`text-sm font-mono uppercase tracking-wider mt-1 ${colors.textMuted}`}>
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className={`mt-8 pt-8 border-t ${colors.border}`}>
                                    <div className={`text-sm ${colors.textSecondary}`}>
                                        {formatDate(mockEvent.date)}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Horizontal Divider */}
            <div className={`max-w-7xl mx-auto px-6 lg:px-8`}>
                <div className={`h-px w-full ${isDark ? 'bg-zinc-800' : 'bg-zinc-200'}`} />
            </div>

            {/* Speakers Section - Editorial Grid */}
            <section className={`py-28 ${colors.bg}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className={`text-sm font-mono uppercase tracking-[0.3em] ${colors.accent}`}>01</span>
                            <span className={`w-16 h-px ${colors.accentBg}`} />
                        </div>
                        <h2 className={`text-6xl md:text-8xl font-black tracking-tight ${colors.text}`}>
                            THE
                            <br />
                            SPEAKERS
                        </h2>
                    </motion.div>

                    {/* Speaker List - Editorial Style */}
                    <div className="space-y-0">
                        {mockDentists.slice(0, 5).map((dentist, index) => (
                            <motion.div
                                key={dentist.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`group py-10 border-t ${colors.border} flex flex-col md:flex-row md:items-center gap-6 cursor-pointer transition-colors ${
                                    isDark ? 'hover:bg-zinc-950' : 'hover:bg-zinc-50'
                                }`}
                            >
                                <div className={`text-4xl font-mono ${colors.textMuted} w-20`}>
                                    0{index + 1}
                                </div>
                                <div className="flex-1">
                                    <h3 className={`text-3xl md:text-4xl font-black ${colors.text} group-hover:${colors.accent} transition-colors`}>
                                        {dentist.name}
                                    </h3>
                                    <p className={`${colors.textSecondary} mt-2`}>
                                        {dentist.specialty}
                                    </p>
                                </div>
                                <div className={`${colors.textMuted} font-mono text-sm uppercase`}>
                                    {dentist.yearsExperience}+ Years Experience
                                </div>
                                <ArrowRight className={`w-6 h-6 ${colors.textMuted} group-hover:translate-x-2 transition-transform`} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className={`py-28 ${colors.bgAlt}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className={`text-sm font-mono uppercase tracking-[0.3em] ${colors.accent}`}>02</span>
                            <span className={`w-16 h-px ${colors.accentBg}`} />
                        </div>
                        <h2 className={`text-6xl md:text-8xl font-black tracking-tight ${colors.text}`}>
                            WHAT YOU
                            <br />
                            GET
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
                        {highlights.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-8 border ${colors.border} ${index === 0 ? 'lg:border-l-0' : ''}`}
                            >
                                <feature.icon className={`w-8 h-8 ${colors.accent} mb-6`} />
                                <h3 className={`text-xl font-black uppercase tracking-wider mb-3 ${colors.text}`}>
                                    {feature.title}
                                </h3>
                                <p className={colors.textSecondary}>{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className={`py-28 ${colors.bg}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className={`text-sm font-mono uppercase tracking-[0.3em] ${colors.accent}`}>03</span>
                            <span className={`w-16 h-px ${colors.accentBg}`} />
                        </div>
                        <h2 className={`text-6xl md:text-8xl font-black tracking-tight ${colors.text}`}>
                            REVIEWS
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {mockReviews.slice(0, 3).map((review, index) => (
                            <motion.div
                                key={review.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`border-t-4 ${isDark ? 'border-red-500' : 'border-red-600'} pt-8`}
                            >
                                <div className="flex gap-1 mb-6">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-current text-red-500" />
                                    ))}
                                </div>
                                <p className={`${colors.textSecondary} mb-8 text-lg leading-relaxed`}>
                                    "{review.reviewText}"
                                </p>
                                <div>
                                    <div className={`font-black uppercase tracking-wider ${colors.text}`}>
                                        {review.attendeeName}
                                    </div>
                                    <div className={`text-sm ${colors.textMuted} mt-1`}>
                                        {review.attendeeCredential}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Event CTA */}
            <section className={`py-28 ${isDark ? 'bg-red-500' : 'bg-red-600'}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-6xl md:text-8xl font-black tracking-tight text-white leading-[0.9]">
                                SECURE
                                <br />
                                YOUR
                                <br />
                                SPOT
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="space-y-6 mb-10">
                                <div className="flex items-center gap-4 text-white/90">
                                    <Calendar className="w-6 h-6" />
                                    <span className="text-xl">{formatDate(mockEvent.date)}</span>
                                </div>
                                <div className="flex items-center gap-4 text-white/90">
                                    <Clock className="w-6 h-6" />
                                    <span className="text-xl">{mockEvent.durationHours} Hours Live</span>
                                </div>
                                <div className="flex items-center gap-4 text-white/90">
                                    <Globe className="w-6 h-6" />
                                    <span className="text-xl">{mockEvent.platform} Platform</span>
                                </div>
                            </div>

                            <Link to="/register">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center gap-3 bg-white text-red-600 font-black uppercase tracking-wider px-10 py-5 hover:bg-black hover:text-white transition-all"
                                >
                                    Register Now — ${mockEvent.basePrice}
                                    <ArrowRight className="w-5 h-5" />
                                </motion.button>
                            </Link>
                            <p className="text-white/70 text-sm mt-4 font-mono">
                                {mockEvent.maxCapacity - mockEvent.currentRegistrations} SPOTS REMAINING
                            </p>
                        </motion.div>
                    </div>
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
                        <Minus className={`w-16 h-1 mx-auto mb-12 ${colors.accent}`} />
                        <h2 className={`text-5xl md:text-7xl font-black tracking-tight ${colors.text} mb-8`}>
                            DON'T WAIT
                        </h2>
                        <p className={`${colors.textSecondary} text-xl mb-12 max-w-xl mx-auto`}>
                            Join thousands of dental professionals who have transformed their practice.
                        </p>
                        <Link to="/register">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                className={`inline-flex items-center gap-3 px-12 py-5 font-black uppercase tracking-wider text-white transition-all ${colors.accentBg}`}
                            >
                                Register Today
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Editorial Bold Footer */}
            <footer className={`${isDark ? 'bg-zinc-950' : 'bg-zinc-100'} border-t ${colors.border}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Brand */}
                        <div className="lg:col-span-1">
                            <Link to="/" className="flex items-center gap-2 mb-4">
                                <span className={`font-black text-xl uppercase tracking-tight ${colors.text}`}>DENTAL</span>
                                <span className={`font-black text-xl uppercase tracking-tight ${colors.accent}`}>MASTERS</span>
                            </Link>
                            <p className={`${colors.textSecondary} text-sm mb-6`}>
                                Bold dental education for ambitious practitioners.
                            </p>
                            <div className="flex gap-3">
                                {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                                    <a key={i} href="#" className={`w-10 h-10 flex items-center justify-center transition-all border ${colors.border} ${isDark ? 'hover:bg-zinc-800' : 'hover:bg-white'}`}>
                                        <Icon className={`w-4 h-4 ${colors.textMuted}`} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className={`font-black uppercase tracking-[0.2em] text-xs ${colors.accent} mb-4`}>Company</h4>
                            <ul className="space-y-3">
                                {['About Us', 'Speakers', 'Testimonials', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <Link to="#" className={`text-sm ${colors.textSecondary} hover:${colors.text} transition-colors`}>
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h4 className={`font-black uppercase tracking-[0.2em] text-xs ${colors.accent} mb-4`}>Resources</h4>
                            <ul className="space-y-3">
                                {['Event Details', 'CE Credits', 'FAQ', 'Blog'].map((item) => (
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
                            <h4 className={`font-black uppercase tracking-[0.2em] text-xs ${colors.accent} mb-4`}>Contact</h4>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <Mail className={`w-4 h-4 ${colors.accent}`} />
                                    <span className={`text-sm ${colors.textSecondary}`}>hello@dentalmasters.com</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className={`w-4 h-4 ${colors.accent}`} />
                                    <span className={`text-sm ${colors.textSecondary}`}>+1-800-BOLD</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <MapPin className={`w-4 h-4 ${colors.accent} mt-0.5`} />
                                    <span className={`text-sm ${colors.textSecondary}`}>SoHo, New York, NY</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className={`mt-12 pt-8 border-t ${colors.border} flex flex-col md:flex-row items-center justify-between gap-4`}>
                        <p className={`text-sm ${colors.textMuted}`}>
                            © {new Date().getFullYear()} DENTALMASTERS. ALL RIGHTS RESERVED.
                        </p>
                        <div className="flex gap-6">
                            {['Privacy', 'Terms', 'Legal'].map((item) => (
                                <Link key={item} to="#" className={`text-xs font-bold uppercase tracking-[0.2em] ${colors.textMuted} hover:${colors.accent} transition-colors`}>
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
