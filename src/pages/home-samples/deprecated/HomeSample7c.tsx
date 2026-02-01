import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
    ArrowRight,
    Clock,
    Users,
    Award,
    Video,
    MessageCircle,
    FileCheck,
    Star,
    Menu,
    X,
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Twitter,
    Instagram,
    Leaf
} from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';
import ThemeToggle from '../../../components/ui/ThemeToggle';
import { dentists as mockDentists, upcomingEvent as mockEvent, reviews as mockReviews } from '../../../data/mockData';
import { formatDate } from '../../../lib/utils';

/**
 * SAMPLE 7C: FRESH MINT
 *
 * Design Philosophy:
 * - Mint + Sage + White color palette
 * - Asymmetric grid layout with offset columns
 * - Nature-inspired, fresh healthcare aesthetic
 * - Organic shapes and soft transitions
 * - Clean, breathable whitespace
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

// Animation variants for reusability
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

export default function HomeSample7c() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Fresh Mint Color System
    const colors = {
        // Backgrounds
        bg: isDark ? 'bg-slate-950' : 'bg-white',
        bgAlt: isDark ? 'bg-slate-900' : 'bg-emerald-50/30',
        bgCard: isDark ? 'bg-slate-900' : 'bg-white',

        // Text
        text: isDark ? 'text-white' : 'text-slate-900',
        textSecondary: isDark ? 'text-slate-300' : 'text-slate-600',
        textMuted: isDark ? 'text-slate-400' : 'text-slate-500',

        // Accents
        accent: isDark ? 'text-emerald-400' : 'text-emerald-600',
        accentBg: isDark ? 'bg-emerald-500/10' : 'bg-emerald-100',
        accentBorder: isDark ? 'border-emerald-500/20' : 'border-emerald-200',

        // Gradients
        primaryGradient: 'from-emerald-500 to-teal-500',
        heroGradient: isDark
            ? 'from-slate-950 via-emerald-950/20 to-slate-950'
            : 'from-white via-emerald-50 to-white',
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
                            ? 'bg-slate-950/95 backdrop-blur-xl border-b border-emerald-500/10'
                            : 'bg-white/95 backdrop-blur-xl border-b border-emerald-100 shadow-lg shadow-emerald-500/5'
                        : 'bg-transparent'
                }`}
            >
                <nav className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center bg-gradient-to-br ${colors.primaryGradient} shadow-lg shadow-emerald-500/30`}>
                                <Leaf className="w-5 h-5 text-white" />
                            </div>
                            <span className={`font-bold text-xl ${colors.text}`}>
                                FreshDental
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${colors.textSecondary} ${isDark ? 'hover:bg-emerald-500/10 hover:text-emerald-400' : 'hover:bg-emerald-50 hover:text-emerald-600'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Right Actions */}
                        <div className="flex items-center gap-3">
                            <ThemeToggle />
                            <Link to="/register" className="hidden md:block">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`px-6 py-2.5 rounded-full font-medium text-sm text-white bg-gradient-to-r ${colors.primaryGradient} shadow-lg shadow-emerald-500/30 hover:shadow-xl transition-all`}
                                >
                                    Register
                                </motion.button>
                            </Link>
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className={`md:hidden p-2 rounded-xl ${isDark ? 'hover:bg-slate-800' : 'hover:bg-emerald-50'}`}
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
                        exit={{ opacity: 0, y: -10 }}
                        className={`md:hidden border-t ${isDark ? 'bg-slate-950/98 border-slate-800' : 'bg-white/98 border-emerald-100'} backdrop-blur-xl`}
                    >
                        <div className="px-6 py-4 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`block py-3 px-4 rounded-xl ${colors.textSecondary} ${isDark ? 'hover:bg-slate-800' : 'hover:bg-emerald-50'}`}
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

            {/* Hero - Asymmetric Grid Layout */}
            <section className={`relative min-h-screen overflow-hidden pt-24 pb-16 bg-gradient-to-b ${colors.heroGradient}`}>
                {/* Decorative Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className={`absolute -top-40 -right-40 w-96 h-96 rounded-full ${isDark ? 'bg-emerald-500/5' : 'bg-emerald-200/30'} blur-3xl`} />
                    <div className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full ${isDark ? 'bg-teal-500/5' : 'bg-teal-200/30'} blur-3xl`} />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Asymmetric Grid */}
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">
                        {/* Left Column - Content (spans 5 cols) */}
                        <div className="lg:col-span-5 order-2 lg:order-1">
                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                animate="visible"
                            >
                                <motion.div
                                    variants={fadeInUp}
                                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${colors.accentBg} border ${colors.accentBorder} mb-6`}
                                >
                                    <Leaf className={`w-4 h-4 ${colors.accent}`} />
                                    <span className={`text-sm font-medium ${colors.accent}`}>
                                        {formatDate(mockEvent.date)}
                                    </span>
                                </motion.div>

                                <motion.h1
                                    variants={fadeInUp}
                                    className={`text-4xl md:text-5xl lg:text-6xl font-bold ${colors.text} leading-[1.1] mb-6`}
                                >
                                    A Fresh Approach to
                                    <span className={`block text-transparent bg-clip-text bg-gradient-to-r ${colors.primaryGradient}`}>
                                        Dental Mastery
                                    </span>
                                </motion.h1>

                                <motion.p
                                    variants={fadeInUp}
                                    className={`text-lg ${colors.textSecondary} mb-8 max-w-md`}
                                >
                                    Experience 12 hours of transformative learning with 5 world-class dental specialists in our refreshing virtual environment.
                                </motion.p>

                                <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                                    <Link to="/register">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r ${colors.primaryGradient} shadow-xl shadow-emerald-500/30 hover:shadow-2xl transition-all`}
                                        >
                                            Start Fresh
                                            <ArrowRight className="w-5 h-5" />
                                        </motion.button>
                                    </Link>
                                </motion.div>

                                {/* Quick Stats */}
                                <motion.div variants={fadeInUp} className="mt-12 grid grid-cols-3 gap-6">
                                    {[
                                        { value: '5', label: 'Experts' },
                                        { value: '12h', label: 'Content' },
                                        { value: '5K+', label: 'Alumni' },
                                    ].map((stat) => (
                                        <div key={stat.label}>
                                            <div className={`text-2xl font-bold ${colors.accent}`}>{stat.value}</div>
                                            <div className={`text-sm ${colors.textMuted}`}>{stat.label}</div>
                                        </div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Right Column - Asymmetric Images (spans 7 cols) */}
                        <div className="lg:col-span-7 order-1 lg:order-2">
                            <div className="grid grid-cols-12 gap-4">
                                {/* Main Image - Large */}
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="col-span-8 row-span-2"
                                >
                                    <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                                        <img
                                            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=1000&fit=crop"
                                            alt="Modern dental care"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-emerald-950/50' : 'from-emerald-900/30'} to-transparent`} />
                                    </div>
                                </motion.div>

                                {/* Secondary Image - Top Right */}
                                <motion.div
                                    initial={{ opacity: 0, y: -30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="col-span-4"
                                >
                                    <div className="relative h-[190px] lg:h-[240px] rounded-2xl overflow-hidden shadow-xl">
                                        <img
                                            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop"
                                            alt="Dental technology"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </motion.div>

                                {/* Tertiary Image - Bottom Right */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 }}
                                    className="col-span-4"
                                >
                                    <div className={`relative h-[190px] lg:h-[240px] rounded-2xl overflow-hidden ${isDark ? 'bg-emerald-500/10' : 'bg-emerald-100'} flex items-center justify-center shadow-xl`}>
                                        <div className="text-center p-4">
                                            <div className={`text-3xl font-bold ${colors.accent}`}>4.9★</div>
                                            <div className={`text-sm ${colors.textMuted} mt-1`}>Average Rating</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Speakers Section - Offset Grid */}
            <section className={`py-24 ${colors.bgAlt}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="mb-16"
                    >
                        <motion.span
                            variants={fadeInUp}
                            className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${colors.accentBg} ${colors.accent}`}
                        >
                            Your Instructors
                        </motion.span>
                        <motion.h2
                            variants={fadeInUp}
                            className={`text-4xl md:text-5xl font-bold ${colors.text}`}
                        >
                            Meet Our Experts
                        </motion.h2>
                    </motion.div>

                    {/* Offset Grid Layout */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mockDentists.slice(0, 3).map((dentist, index) => (
                            <motion.div
                                key={dentist.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className={`${index === 1 ? 'lg:mt-12' : ''}`}
                            >
                                <div className={`group rounded-3xl overflow-hidden ${colors.bgCard} shadow-xl hover:shadow-2xl transition-all duration-500 border ${isDark ? 'border-slate-800' : 'border-emerald-100'}`}>
                                    <div className="relative h-72 overflow-hidden">
                                        <img
                                            src={dentist.profileImageUrl}
                                            alt={dentist.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                    </div>
                                    <div className="p-6">
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${colors.accentBg} ${colors.accent}`}>
                                            {dentist.specialty.split('&')[0].trim()}
                                        </span>
                                        <h3 className={`text-xl font-bold ${colors.text} mb-1`}>{dentist.name}</h3>
                                        <p className={`${colors.textMuted} text-sm mb-1`}>{dentist.credentials}</p>
                                        <p className={`${colors.accent} text-sm`}>{dentist.institution}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features - Clean Cards */}
            <section className={`py-24 ${colors.bg}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="text-center mb-16"
                    >
                        <motion.h2
                            variants={fadeInUp}
                            className={`text-4xl md:text-5xl font-bold ${colors.text}`}
                        >
                            What's Included
                        </motion.h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {highlights.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-8 rounded-3xl border ${isDark ? 'border-slate-800 bg-slate-900/50' : 'border-emerald-100 bg-emerald-50/30'} hover:shadow-xl transition-all`}
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
                        What Dentists Say
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {mockReviews.slice(0, 3).map((review, index) => (
                            <motion.div
                                key={review.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-8 rounded-3xl ${colors.bgCard} shadow-lg border ${isDark ? 'border-slate-800' : 'border-emerald-100'}`}
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                                <p className={`${colors.textSecondary} mb-6 text-lg leading-relaxed`}>
                                    "{review.reviewText}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={review.attendeePhotoUrl}
                                        alt={review.attendeeName}
                                        className="w-14 h-14 rounded-full object-cover ring-2 ring-emerald-500/30"
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
                <div className={`absolute inset-0 bg-gradient-to-br ${isDark ? 'from-emerald-950 via-slate-950 to-teal-950' : 'from-emerald-500 via-emerald-600 to-teal-600'}`} />

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Ready for a Fresh Start?
                        </h2>
                        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                            {formatDate(mockEvent.date)} • {mockEvent.durationHours} Hours • Virtual
                        </p>
                        <Link to="/register">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-3 bg-white text-emerald-700 font-bold px-10 py-5 rounded-full text-lg shadow-2xl hover:bg-emerald-50 transition-all"
                            >
                                Register Now — ${mockEvent.basePrice}
                                <ArrowRight className="w-5 h-5" />
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
                                    <Leaf className="w-5 h-5 text-white" />
                                </div>
                                <span className="font-bold text-xl text-white">FreshDental</span>
                            </Link>
                            <p className="text-white/60 text-sm mb-6">
                                A fresh approach to dental continuing education.
                            </p>
                            <div className="flex gap-3">
                                {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                                    <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-emerald-500/20 flex items-center justify-center transition-all">
                                        <Icon className="w-4 h-4 text-emerald-400" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold text-white mb-4">Company</h4>
                            <ul className="space-y-3">
                                {['About Us', 'Speakers', 'Testimonials', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <Link to="#" className="text-sm text-white/60 hover:text-emerald-400 transition-colors">
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
                                        <Link to="#" className="text-sm text-white/60 hover:text-emerald-400 transition-colors">
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
                                    <Mail className="w-4 h-4 text-emerald-400" />
                                    <span className="text-sm text-white/60">hello@freshdental.com</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className="w-4 h-4 text-emerald-400" />
                                    <span className="text-sm text-white/60">+1-888-FRESH</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <MapPin className="w-4 h-4 text-emerald-400 mt-0.5" />
                                    <span className="text-sm text-white/60">Portland, OR</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-white/40">
                            © {new Date().getFullYear()} FreshDental. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            {['Privacy', 'Terms', 'Cookies'].map((item) => (
                                <Link key={item} to="#" className="text-sm text-white/40 hover:text-emerald-400 transition-colors">
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
