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
    Grid3X3,
    Trophy,
    Menu,
    X,
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Twitter,
    Instagram
} from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import ThemeToggle from '../../../components/ui/ThemeToggle';
import { dentists as mockDentists, upcomingEvent as mockEvent, reviews as mockReviews } from '../../../data/mockData';
import { formatDate } from '../../../lib/utils';

/**
 * SAMPLE 6: BENTO GRID
 *
 * Design Philosophy:
 * - Japanese bento-box inspired layout
 * - Cards of varying sizes in grid
 * - Interactive hover reveals
 * - Clean gaps and alignment
 * - Modular, organized aesthetic
 */

const heroStats = [
    { value: '5', label: 'Experts', icon: Users },
    { value: '12h', label: 'Duration', icon: Clock },
    { value: '5000+', label: 'Alumni', icon: Trophy },
    { value: '4.9', label: 'Rating', icon: Star },
];

const highlights = [
    { icon: Clock, title: '12 Hours Live', description: 'Intensive expert-led training.' },
    { icon: MessageCircle, title: 'Q&A Sessions', description: 'Direct expert interaction.' },
    { icon: Award, title: 'Certification', description: 'Industry credentials.' },
    { icon: Users, title: 'Network', description: 'Professional community.' },
    { icon: Video, title: 'Recordings', description: '6-month access.' },
    { icon: FileCheck, title: 'Materials', description: 'Complete resources.' },
];

// Navigation links
const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Speakers', path: '/dentists' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
];

export default function HomeSample6() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const colors = {
        bg: isDark ? 'bg-zinc-950' : 'bg-zinc-100',
        card: isDark ? 'bg-zinc-900' : 'bg-white',
        cardHover: isDark ? 'hover:bg-zinc-800' : 'hover:bg-zinc-50',
        text: isDark ? 'text-white' : 'text-zinc-900',
        textSecondary: isDark ? 'text-zinc-400' : 'text-zinc-600',
        textMuted: isDark ? 'text-zinc-500' : 'text-zinc-400',
        border: isDark ? 'border-zinc-800' : 'border-zinc-200',
        accent: isDark ? 'text-blue-400' : 'text-blue-600',
        accentBg: isDark ? 'bg-blue-500/10' : 'bg-blue-50',
    };

    return (
        <main className={`min-h-screen ${colors.bg} transition-colors duration-500 p-4 md:p-6`}>
            {/* Bento-Style Navbar */}
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-7xl mx-auto mb-6"
            >
                <div className={`${colors.card} rounded-2xl px-6 py-4 flex items-center justify-between`}>
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl ${colors.accentBg} flex items-center justify-center`}>
                            <Grid3X3 className={`w-5 h-5 ${colors.accent}`} />
                        </div>
                        <span className={`font-bold text-lg ${colors.text}`}>DentalMasters</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${colors.textSecondary} ${colors.cardHover} hover:${colors.text}`}
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
                                className={`px-5 py-2.5 rounded-xl font-medium text-sm text-white transition-all ${isDark ? 'bg-blue-500 hover:bg-blue-400' : 'bg-blue-600 hover:bg-blue-500'}`}
                            >
                                Register
                            </motion.button>
                        </Link>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`md:hidden p-2 rounded-xl ${colors.cardHover}`}
                        >
                            {isMobileMenuOpen ? <X className={`w-6 h-6 ${colors.text}`} /> : <Menu className={`w-6 h-6 ${colors.text}`} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`${colors.card} rounded-2xl mt-2 p-4 md:hidden`}
                    >
                        <div className="space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`block py-2 px-4 rounded-xl ${colors.textSecondary} ${colors.cardHover}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/register" className="block pt-2">
                                <button className={`w-full py-3 rounded-xl font-medium text-white ${isDark ? 'bg-blue-500' : 'bg-blue-600'}`}>
                                    Register Now
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </motion.header>

            {/* Hero Bento Grid */}
            <section className="max-w-7xl mx-auto mb-6">
                <div className="grid grid-cols-12 gap-4 md:gap-6">
                    {/* Main Hero Card - Large */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`col-span-12 lg:col-span-8 ${colors.card} rounded-3xl p-8 md:p-12 min-h-[400px] md:min-h-[500px] flex flex-col justify-between relative overflow-hidden`}
                    >
                        {/* Background Pattern */}
                        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
                            <Grid3X3 className="w-full h-full" />
                        </div>

                        <div className="relative z-10">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${colors.accentBg} ${colors.accent} text-sm font-medium mb-6`}
                            >
                                <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                                Live Event • {formatDate(mockEvent.date)}
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className={`text-4xl md:text-5xl lg:text-6xl font-bold ${colors.text} mb-4`}
                            >
                                Master Modern
                                <br />
                                <span className={colors.accent}>Dentistry</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className={`text-lg ${colors.textSecondary} max-w-lg`}
                            >
                                Join 5 world-renowned specialists for 12 hours of transformative learning.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="relative z-10 flex flex-wrap gap-4"
                        >
                            <Link to="/register">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white transition-all ${
                                        isDark ? 'bg-blue-500 hover:bg-blue-400' : 'bg-blue-600 hover:bg-blue-500'
                                    }`}
                                >
                                    Register Now
                                    <ArrowRight className="w-5 h-5" />
                                </motion.button>
                            </Link>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                className={`inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-medium border-2 transition-all ${colors.border} ${colors.text} ${colors.cardHover}`}
                            >
                                <Play className="w-5 h-5" />
                                Preview
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Stats Column - 4 small cards */}
                    <div className="col-span-12 lg:col-span-4 grid grid-cols-2 gap-4 md:gap-6">
                        {heroStats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className={`${colors.card} rounded-3xl p-6 flex flex-col justify-between min-h-[120px] transition-all ${colors.cardHover} cursor-pointer`}
                            >
                                <stat.icon className={`w-6 h-6 ${colors.accent}`} />
                                <div>
                                    <div className={`text-3xl font-bold ${colors.text}`}>{stat.value}</div>
                                    <div className={`text-sm ${colors.textMuted}`}>{stat.label}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dentists Bento Grid */}
            <section className="max-w-7xl mx-auto mb-6">
                {/* Section Label */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className={`${colors.card} rounded-2xl px-6 py-4 mb-4 md:mb-6 inline-flex items-center gap-3`}
                >
                    <Users className={`w-5 h-5 ${colors.accent}`} />
                    <span className={`font-semibold ${colors.text}`}>Meet the Speakers</span>
                </motion.div>

                <div className="grid grid-cols-12 gap-4 md:gap-6">
                    {/* Featured Dentist - Large */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.01 }}
                        className={`col-span-12 md:col-span-6 ${colors.card} rounded-3xl overflow-hidden min-h-[400px] relative group cursor-pointer`}
                    >
                        <img
                            src={mockDentists[0].profileImageUrl}
                            alt={mockDentists[0].name}
                            className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-500/80 text-white mb-3`}>
                                Featured
                            </span>
                            <h3 className="text-2xl font-bold text-white">{mockDentists[0].name}</h3>
                            <p className="text-white/80">{mockDentists[0].specialty}</p>
                        </div>
                    </motion.div>

                    {/* Remaining Dentists - 2x2 Grid */}
                    <div className="col-span-12 md:col-span-6 grid grid-cols-2 gap-4 md:gap-6">
                        {mockDentists.slice(1, 5).map((dentist, index) => (
                            <motion.div
                                key={dentist.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className={`${colors.card} rounded-3xl overflow-hidden min-h-[190px] relative group cursor-pointer`}
                            >
                                <img
                                    src={dentist.profileImageUrl}
                                    alt={dentist.name}
                                    className="w-full h-full object-cover absolute inset-0 group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h3 className="font-bold text-white text-sm">{dentist.name}</h3>
                                    <p className="text-white/70 text-xs truncate">{dentist.specialty.split('&')[0]}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Bento Grid */}
            <section className="max-w-7xl mx-auto mb-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className={`${colors.card} rounded-2xl px-6 py-4 mb-4 md:mb-6 inline-flex items-center gap-3`}
                >
                    <Award className={`w-5 h-5 ${colors.accent}`} />
                    <span className={`font-semibold ${colors.text}`}>What's Included</span>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                    {highlights.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.02, y: -4 }}
                            className={`${colors.card} rounded-3xl p-6 flex flex-col transition-all ${colors.cardHover} cursor-pointer`}
                        >
                            <div className={`w-12 h-12 rounded-2xl ${colors.accentBg} flex items-center justify-center mb-4`}>
                                <feature.icon className={`w-6 h-6 ${colors.accent}`} />
                            </div>
                            <h3 className={`font-semibold ${colors.text} mb-1 text-sm`}>{feature.title}</h3>
                            <p className={`text-xs ${colors.textMuted}`}>{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Testimonials Bento */}
            <section className="max-w-7xl mx-auto mb-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className={`${colors.card} rounded-2xl px-6 py-4 mb-4 md:mb-6 inline-flex items-center gap-3`}
                >
                    <Star className={`w-5 h-5 ${colors.accent}`} />
                    <span className={`font-semibold ${colors.text}`}>Reviews</span>
                </motion.div>

                <div className="grid grid-cols-12 gap-4 md:gap-6">
                    {mockReviews.slice(0, 3).map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`col-span-12 md:col-span-4 ${colors.card} rounded-3xl p-6 ${colors.cardHover} transition-all`}
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <p className={`${colors.textSecondary} mb-6 text-sm leading-relaxed line-clamp-4`}>
                                "{review.reviewText}"
                            </p>
                            <div className="flex items-center gap-3">
                                <img
                                    src={review.attendeePhotoUrl}
                                    alt={review.attendeeName}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <div className={`font-medium text-sm ${colors.text}`}>{review.attendeeName}</div>
                                    <div className={`text-xs ${colors.textMuted}`}>{review.attendeeCredential}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Bento */}
            <section className="max-w-7xl mx-auto">
                <div className="grid grid-cols-12 gap-4 md:gap-6">
                    {/* Event Details Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`col-span-12 lg:col-span-4 ${colors.card} rounded-3xl p-8`}
                    >
                        <h3 className={`text-xl font-bold ${colors.text} mb-6`}>Event Details</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-xl ${colors.accentBg} flex items-center justify-center`}>
                                    <Calendar className={`w-5 h-5 ${colors.accent}`} />
                                </div>
                                <div>
                                    <div className={`text-sm ${colors.textMuted}`}>Date</div>
                                    <div className={`font-medium ${colors.text}`}>{formatDate(mockEvent.date)}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-xl ${colors.accentBg} flex items-center justify-center`}>
                                    <Clock className={`w-5 h-5 ${colors.accent}`} />
                                </div>
                                <div>
                                    <div className={`text-sm ${colors.textMuted}`}>Duration</div>
                                    <div className={`font-medium ${colors.text}`}>{mockEvent.durationHours} Hours</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-xl ${colors.accentBg} flex items-center justify-center`}>
                                    <Globe className={`w-5 h-5 ${colors.accent}`} />
                                </div>
                                <div>
                                    <div className={`text-sm ${colors.textMuted}`}>Platform</div>
                                    <div className={`font-medium ${colors.text}`}>{mockEvent.platform}</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Main CTA Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={`col-span-12 lg:col-span-8 rounded-3xl p-8 md:p-12 flex flex-col justify-between min-h-[300px] ${
                            isDark ? 'bg-gradient-to-br from-blue-600 to-blue-800' : 'bg-gradient-to-br from-blue-500 to-blue-700'
                        }`}
                    >
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Ready to Transform Your Practice?
                            </h2>
                            <p className="text-white/80 text-lg max-w-lg">
                                Join thousands of dental professionals who have elevated their skills.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4 items-center">
                            <Link to="/register">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-8 py-4 rounded-2xl hover:bg-blue-50 transition-all"
                                >
                                    Register Now — ${mockEvent.basePrice}
                                    <ArrowRight className="w-5 h-5" />
                                </motion.button>
                            </Link>
                            <span className="text-white/70 text-sm">
                                {mockEvent.maxCapacity - mockEvent.currentRegistrations} spots left
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>
            {/* Bento-Style Footer */}
            <section className="max-w-7xl mx-auto mt-6">
                <div className="grid grid-cols-12 gap-4 md:gap-6">
                    {/* Brand Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`col-span-12 md:col-span-4 ${colors.card} rounded-3xl p-8`}
                    >
                        <Link to="/" className="flex items-center gap-3 mb-4">
                            <div className={`w-10 h-10 rounded-xl ${colors.accentBg} flex items-center justify-center`}>
                                <Grid3X3 className={`w-5 h-5 ${colors.accent}`} />
                            </div>
                            <span className={`font-bold text-lg ${colors.text}`}>DentalMasters</span>
                        </Link>
                        <p className={`${colors.textSecondary} text-sm mb-6`}>
                            Modular dental education designed for the modern practitioner.
                        </p>
                        <div className="flex gap-3">
                            {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className={`w-10 h-10 rounded-xl ${colors.accentBg} flex items-center justify-center transition-all ${colors.cardHover}`}>
                                    <Icon className={`w-4 h-4 ${colors.accent}`} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Links Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={`col-span-6 md:col-span-2 ${colors.card} rounded-3xl p-6`}
                    >
                        <h4 className={`font-semibold ${colors.text} mb-4 text-sm`}>Company</h4>
                        <ul className="space-y-2">
                            {['About', 'Speakers', 'Reviews'].map((item) => (
                                <li key={item}>
                                    <Link to="#" className={`text-sm ${colors.textSecondary} hover:${colors.text} transition-colors`}>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={`col-span-6 md:col-span-2 ${colors.card} rounded-3xl p-6`}
                    >
                        <h4 className={`font-semibold ${colors.text} mb-4 text-sm`}>Resources</h4>
                        <ul className="space-y-2">
                            {['FAQ', 'CE Credits', 'Blog'].map((item) => (
                                <li key={item}>
                                    <Link to="#" className={`text-sm ${colors.textSecondary} hover:${colors.text} transition-colors`}>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className={`col-span-12 md:col-span-4 ${colors.card} rounded-3xl p-6`}
                    >
                        <h4 className={`font-semibold ${colors.text} mb-4 text-sm`}>Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <Mail className={`w-4 h-4 ${colors.accent}`} />
                                <span className={`text-sm ${colors.textSecondary}`}>hello@dentalmasters.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className={`w-4 h-4 ${colors.accent}`} />
                                <span className={`text-sm ${colors.textSecondary}`}>+1-800-BENTO</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <MapPin className={`w-4 h-4 ${colors.accent}`} />
                                <span className={`text-sm ${colors.textSecondary}`}>Tokyo, Japan</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className={`${colors.card} rounded-2xl px-6 py-4 mt-4 md:mt-6 flex flex-col md:flex-row items-center justify-between gap-4`}
                >
                    <p className={`text-sm ${colors.textMuted}`}>
                        © {new Date().getFullYear()} DentalMasters. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        {['Privacy', 'Terms', 'Cookies'].map((item) => (
                            <Link key={item} to="#" className={`text-sm ${colors.textMuted} hover:${colors.text} transition-colors`}>
                                {item}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
