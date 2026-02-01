import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
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
    Sparkles,
    Rocket,
    Heart,
    Smile,
    Menu,
    X,
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Twitter,
    Instagram,
    Zap
} from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';
import ThemeToggle from '../../../components/ui/ThemeToggle';
import { dentists as mockDentists, upcomingEvent as mockEvent, reviews as mockReviews } from '../../../data/mockData';
import { formatDate } from '../../../lib/utils';

/**
 * SAMPLE 10: PLAYFUL GRADIENT
 *
 * Design Philosophy:
 * - Vibrant gradient backgrounds
 * - Playful illustrations/icons
 * - Rounded, friendly shapes
 * - Fun micro-interactions
 * - Energetic, approachable design
 */

const heroStats = [
    { value: '5', label: 'Experts', icon: Users, color: 'from-pink-500 to-rose-500' },
    { value: '12h', label: 'Content', icon: Clock, color: 'from-purple-500 to-indigo-500' },
    { value: '5K+', label: 'Alumni', icon: Heart, color: 'from-orange-500 to-red-500' },
    { value: '4.9', label: 'Rating', icon: Star, color: 'from-cyan-500 to-blue-500' },
];

const highlights = [
    { icon: Clock, title: '12 Hours of Fun Learning', description: 'Engaging, interactive training sessions.', color: 'from-pink-500 to-rose-500' },
    { icon: MessageCircle, title: 'Live Chat & Q&A', description: 'Connect with experts in real-time.', color: 'from-purple-500 to-indigo-500' },
    { icon: Award, title: 'Cool Certificate', description: 'Show off your new skills!', color: 'from-amber-500 to-orange-500' },
    { icon: Users, title: 'Awesome Community', description: 'Make friends with fellow dentists.', color: 'from-emerald-500 to-teal-500' },
    { icon: Video, title: 'Replay Anytime', description: '6 months of unlimited access.', color: 'from-blue-500 to-cyan-500' },
    { icon: FileCheck, title: 'Goodies Included', description: 'Templates, guides, and more.', color: 'from-fuchsia-500 to-pink-500' },
];

// Navigation links
const navLinks = [
    { name: 'Home', path: '/', emoji: '🏠' },
    { name: 'Speakers', path: '/dentists', emoji: '⭐' },
    { name: 'About', path: '/about', emoji: '💡' },
    { name: 'FAQ', path: '/faq', emoji: '❓' },
    { name: 'Contact', path: '/contact', emoji: '📬' },
];

export default function HomeSample10() {
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
        bg: isDark ? 'bg-slate-950' : 'bg-white',
        bgAlt: isDark ? 'bg-slate-900' : 'bg-slate-50',
        text: isDark ? 'text-white' : 'text-slate-900',
        textSecondary: isDark ? 'text-slate-300' : 'text-slate-600',
        textMuted: isDark ? 'text-slate-400' : 'text-slate-400',
        border: isDark ? 'border-slate-800' : 'border-slate-200',
    };

    return (
        <main className={`min-h-screen ${colors.bg} transition-colors duration-500 overflow-hidden`}>
            {/* Playful Gradient Navbar */}
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? `${colors.bg} border-b ${colors.border} shadow-lg backdrop-blur-xl`
                        : 'bg-transparent'
                }`}
            >
                <nav className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
                        {/* Fun Logo */}
                        <Link to="/" className="flex items-center gap-3">
                            <motion.div
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                                className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 flex items-center justify-center"
                            >
                                <Zap className="w-5 h-5 text-white" />
                            </motion.div>
                            <span className={`font-bold text-xl ${colors.text}`}>
                                DentalFun
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`group px-4 py-2 rounded-full text-sm font-medium transition-all ${colors.textSecondary} hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-purple-500/10`}
                                >
                                    <span className="opacity-0 group-hover:opacity-100 mr-1 transition-opacity">{link.emoji}</span>
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Right Side */}
                        <div className="flex items-center gap-3">
                            <motion.div whileHover={{ scale: 1.1, rotate: 10 }}>
                                <ThemeToggle />
                            </motion.div>
                            <Link to="/register" className="hidden md:block">
                                <motion.button
                                    whileHover={{ scale: 1.05, rotate: 2 }}
                                    className="px-5 py-2.5 rounded-full font-bold text-sm text-white bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 shadow-lg shadow-purple-500/30"
                                >
                                    Join the Fun! 🎉
                                </motion.button>
                            </Link>
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className={`md:hidden p-2 rounded-full ${isDark ? 'hover:bg-white/10' : 'hover:bg-slate-100'}`}
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
                        className={`md:hidden border-t ${colors.border} ${colors.bg} backdrop-blur-xl`}
                    >
                        <div className="px-6 py-4 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`flex items-center gap-2 py-2 px-4 rounded-xl ${colors.textSecondary} ${isDark ? 'hover:bg-white/10' : 'hover:bg-slate-100'}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <span>{link.emoji}</span>
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/register" className="block pt-2">
                                <button className="w-full py-3 rounded-full font-bold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
                                    Join the Fun! 🎉
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </motion.header>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center">
                {/* Fun Background */}
                <div className="absolute inset-0 overflow-hidden">
                    {isDark ? (
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/50 to-slate-950" />
                    ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50" />
                    )}

                    {/* Floating Shapes */}
                    <motion.div
                        className={`absolute top-20 left-10 w-32 h-32 rounded-full ${isDark ? 'bg-pink-500/20' : 'bg-pink-300/40'}`}
                        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                        transition={{ duration: 5, repeat: Infinity }}
                    />
                    <motion.div
                        className={`absolute top-40 right-20 w-24 h-24 rounded-3xl ${isDark ? 'bg-purple-500/20' : 'bg-purple-300/40'}`}
                        animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
                        transition={{ duration: 6, repeat: Infinity }}
                    />
                    <motion.div
                        className={`absolute bottom-32 left-1/4 w-40 h-40 rounded-full ${isDark ? 'bg-cyan-500/20' : 'bg-cyan-300/40'}`}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 8, repeat: Infinity }}
                    />
                    <motion.div
                        className={`absolute bottom-20 right-1/3 w-20 h-20 rounded-2xl ${isDark ? 'bg-orange-500/20' : 'bg-orange-300/40'}`}
                        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
                        transition={{ duration: 7, repeat: Infinity }}
                    />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
                    <div className="text-center">
                        {/* Fun Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium mb-8"
                        >
                            <motion.span
                                animate={{ rotate: [0, 20, -20, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Sparkles className="w-5 h-5" />
                            </motion.span>
                            Get Ready to Level Up! • {formatDate(mockEvent.date)}
                            <motion.span
                                animate={{ rotate: [0, -20, 20, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Rocket className="w-5 h-5" />
                            </motion.span>
                        </motion.div>

                        {/* Headline with Gradient */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-6 ${colors.text}`}
                        >
                            The Most{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
                                Exciting
                            </span>
                            <br />
                            Dental Workshop
                            <motion.span
                                className="inline-block ml-4"
                                animate={{ rotate: [0, 15, -15, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <Smile className={`w-12 h-12 md:w-16 md:h-16 ${isDark ? 'text-yellow-400' : 'text-yellow-500'}`} />
                            </motion.span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className={`text-xl lg:text-2xl ${colors.textSecondary} max-w-2xl mx-auto mb-12`}
                        >
                            Learn, laugh, and level up with 5 amazing experts in this super fun 12-hour masterclass!
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap justify-center gap-4 mb-16"
                        >
                            <Link to="/register">
                                <motion.button
                                    whileHover={{ scale: 1.05, rotate: 1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-xl text-white bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/40 transition-all"
                                >
                                    Let's Go!
                                    <motion.span
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                    >
                                        <ArrowRight className="w-6 h-6" />
                                    </motion.span>
                                </motion.button>
                            </Link>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-xl border-2 transition-all ${
                                    isDark ? 'border-white/30 text-white hover:bg-white/10' : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                                }`}
                            >
                                <Play className="w-6 h-6" />
                                Sneak Peek
                            </motion.button>
                        </motion.div>

                        {/* Stats Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
                        >
                            {heroStats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    whileHover={{ y: -8, rotate: 2 }}
                                    className={`p-6 rounded-3xl ${colors.bgAlt} border ${colors.border} backdrop-blur-sm`}
                                >
                                    <div className={`w-12 h-12 rounded-2xl mx-auto mb-3 flex items-center justify-center bg-gradient-to-r ${stat.color}`}>
                                        <stat.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className={`text-3xl font-bold ${colors.text}`}>{stat.value}</div>
                                    <div className={`text-sm ${colors.textMuted}`}>{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Speakers Section */}
            <section className={`py-28 ${colors.bgAlt}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className={`text-4xl lg:text-5xl font-bold ${colors.text} mb-4`}>
                            Your Dream Team
                            <span className="inline-block ml-2">✨</span>
                        </h2>
                        <p className={`${colors.textSecondary} text-xl`}>
                            5 incredible experts ready to share their secrets!
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mockDentists.slice(0, 3).map((dentist, index) => (
                            <motion.div
                                key={dentist.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                whileHover={{ y: -10, rotate: 1 }}
                                className={`group relative rounded-[2rem] overflow-hidden ${colors.bg} border ${colors.border} shadow-xl`}
                            >
                                <div className="relative h-72 overflow-hidden">
                                    <motion.img
                                        src={dentist.profileImageUrl}
                                        alt={dentist.name}
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                                    {/* Fun Badge */}
                                    <motion.div
                                        className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${
                                            index === 0 ? 'from-pink-500 to-rose-500' :
                                            index === 1 ? 'from-purple-500 to-indigo-500' :
                                            'from-cyan-500 to-blue-500'
                                        }`}
                                        animate={{ rotate: [0, 5, -5, 0] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                    >
                                        {dentist.yearsExperience}+ Years ⭐
                                    </motion.div>

                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-xl font-bold text-white">{dentist.name}</h3>
                                        <p className="text-white/80">{dentist.credentials}</p>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 bg-gradient-to-r ${
                                        index === 0 ? 'from-pink-500/20 to-rose-500/20 text-pink-600' :
                                        index === 1 ? 'from-purple-500/20 to-indigo-500/20 text-purple-600' :
                                        'from-cyan-500/20 to-blue-500/20 text-cyan-600'
                                    } ${isDark ? 'text-white' : ''}`}>
                                        {dentist.specialty}
                                    </div>
                                    <p className={`text-sm ${colors.textSecondary} line-clamp-2`}>
                                        {dentist.biography.substring(0, 80)}...
                                    </p>
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
                                whileHover={{ scale: 1.05 }}
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-pink-500 to-purple-500"
                            >
                                Meet Everyone
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Features with Fun Cards */}
            <section className={`py-28 ${colors.bg}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className={`text-4xl lg:text-5xl font-bold ${colors.text}`}>
                            All the Good Stuff 🎁
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
                                whileHover={{ y: -8, rotate: 1 }}
                                className={`p-8 rounded-3xl border transition-all ${colors.border} ${colors.bgAlt}`}
                            >
                                <motion.div
                                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-r ${feature.color}`}
                                    whileHover={{ rotate: 10, scale: 1.1 }}
                                >
                                    <feature.icon className="w-8 h-8 text-white" />
                                </motion.div>
                                <h3 className={`text-xl font-bold ${colors.text} mb-2`}>{feature.title}</h3>
                                <p className={colors.textSecondary}>{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className={`py-28 ${colors.bgAlt}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className={`text-4xl lg:text-5xl font-bold ${colors.text}`}>
                            Happy Dentists 😊
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
                                whileHover={{ y: -5 }}
                                className={`p-8 rounded-3xl ${colors.bg} border ${colors.border}`}
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: i * 0.1 }}
                                        >
                                            ⭐
                                        </motion.span>
                                    ))}
                                </div>
                                <p className={`${colors.textSecondary} mb-6 leading-relaxed`}>
                                    "{review.reviewText}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={review.attendeePhotoUrl}
                                        alt={review.attendeeName}
                                        className="w-12 h-12 rounded-full object-cover ring-4 ring-pink-500/30"
                                    />
                                    <div>
                                        <div className={`font-bold ${colors.text}`}>{review.attendeeName}</div>
                                        <div className={`text-sm ${colors.textMuted}`}>{review.attendeeCredential}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500" />

                {/* Floating shapes */}
                <motion.div
                    className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/10"
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-10 right-10 w-32 h-32 rounded-3xl bg-white/10"
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                />

                <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="inline-block mb-6"
                        >
                            <Rocket className="w-16 h-16 text-white" />
                        </motion.div>
                        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                            Ready for Takeoff?
                        </h2>
                        <p className="text-white/80 text-xl mb-8 max-w-2xl mx-auto">
                            {formatDate(mockEvent.date)} • {mockEvent.durationHours} Hours • Virtual Fun!
                        </p>
                        <Link to="/register">
                            <motion.button
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-3 bg-white text-purple-600 font-bold px-12 py-6 rounded-full text-xl shadow-2xl hover:shadow-3xl transition-all"
                            >
                                Count Me In! — ${mockEvent.basePrice}
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                >
                                    🚀
                                </motion.span>
                            </motion.button>
                        </Link>
                        <p className="text-white/60 text-sm mt-6">
                            Only {mockEvent.maxCapacity - mockEvent.currentRegistrations} spots left! 🔥
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Playful Rainbow Footer */}
            <footer className={`${colors.bg} relative overflow-hidden`}>
                {/* Fun gradient top border */}
                <div className="h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Brand */}
                        <div className="lg:col-span-1">
                            <Link to="/" className="flex items-center gap-3 mb-4">
                                <motion.div
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                    className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 flex items-center justify-center"
                                >
                                    <Zap className="w-5 h-5 text-white" />
                                </motion.div>
                                <span className={`font-bold text-xl ${colors.text}`}>DentalFun</span>
                            </Link>
                            <p className={`${colors.textSecondary} text-sm mb-6`}>
                                Making dental education super fun and engaging! 🎉
                            </p>
                            <div className="flex gap-3">
                                {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                                    <motion.a
                                        key={i}
                                        href="#"
                                        whileHover={{ scale: 1.2, rotate: 10 }}
                                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all bg-gradient-to-r ${
                                            i === 0 ? 'from-pink-500 to-rose-500' :
                                            i === 1 ? 'from-purple-500 to-indigo-500' :
                                            'from-cyan-500 to-blue-500'
                                        }`}
                                    >
                                        <Icon className="w-4 h-4 text-white" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className={`font-bold ${colors.text} mb-4`}>Explore 💫</h4>
                            <ul className="space-y-2">
                                {['About Us', 'Speakers', 'Reviews', 'Blog'].map((item) => (
                                    <li key={item}>
                                        <Link to="#" className={`text-sm ${colors.textSecondary} hover:text-pink-500 transition-colors`}>
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h4 className={`font-bold ${colors.text} mb-4`}>Help 🌟</h4>
                            <ul className="space-y-2">
                                {['FAQ', 'CE Credits', 'Support', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <Link to="#" className={`text-sm ${colors.textSecondary} hover:text-purple-500 transition-colors`}>
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className={`font-bold ${colors.text} mb-4`}>Say Hi! 👋</h4>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center">
                                        <Mail className="w-4 h-4 text-white" />
                                    </div>
                                    <span className={`text-sm ${colors.textSecondary}`}>fun@dentalfun.com</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
                                        <Phone className="w-4 h-4 text-white" />
                                    </div>
                                    <span className={`text-sm ${colors.textSecondary}`}>+1-800-FUN</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                                        <MapPin className="w-4 h-4 text-white" />
                                    </div>
                                    <span className={`text-sm ${colors.textSecondary}`}>Miami, FL</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className={`mt-12 pt-6 border-t ${colors.border} flex flex-col md:flex-row items-center justify-between gap-4`}>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className={`text-sm ${colors.textMuted}`}
                        >
                            © {new Date().getFullYear()} DentalFun. Made with 💖 for amazing dentists!
                        </motion.p>
                        <div className="flex gap-4">
                            {['Privacy', 'Terms', 'Cookies'].map((item) => (
                                <Link key={item} to="#" className={`text-sm ${colors.textMuted} hover:text-pink-500 transition-colors`}>
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
