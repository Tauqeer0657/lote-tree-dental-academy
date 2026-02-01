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
    Sparkles
} from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';
import ThemeToggle from '../../../components/ui/ThemeToggle';
import { dentists as mockDentists, upcomingEvent as mockEvent, reviews as mockReviews } from '../../../data/mockData';
import { formatDate } from '../../../lib/utils';

/**
 * SAMPLE 7A: OCEAN WELLNESS
 *
 * Design Philosophy:
 * - Teal + Coral + White color palette
 * - Split 50/50 hero layout (image left, content right)
 * - Welcoming, spa-like healthcare aesthetic
 * - Soft gradients and rounded elements
 * - Premium but approachable feel
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

export default function HomeSample7a() {
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

    const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);

    // Ocean Wellness Color Palette
    const colors = {
        bg: isDark ? 'bg-slate-950' : 'bg-white',
        bgAlt: isDark ? 'bg-slate-900' : 'bg-teal-50/50',
        text: isDark ? 'text-white' : 'text-slate-900',
        textSecondary: isDark ? 'text-slate-300' : 'text-slate-600',
        textMuted: isDark ? 'text-slate-400' : 'text-slate-500',
        border: isDark ? 'border-slate-800' : 'border-teal-100',
        accent: isDark ? 'text-teal-400' : 'text-teal-600',
        accentBg: isDark ? 'bg-teal-500/10' : 'bg-teal-100',
        coral: isDark ? 'text-coral-400' : 'text-coral-500',
        coralBg: isDark ? 'bg-coral-500/10' : 'bg-coral-50',
    };

    return (
        <main className={`${colors.bg} transition-colors duration-500`}>
            {/* Navbar */}
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    isScrolled
                        ? isDark
                            ? 'bg-slate-950/95 backdrop-blur-xl border-b border-slate-800'
                            : 'bg-white/95 backdrop-blur-xl border-b border-teal-100 shadow-lg shadow-teal-500/5'
                        : 'bg-transparent'
                }`}
            >
                <nav className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
                        <Link to="/" className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center bg-gradient-to-br from-teal-500 to-teal-600 shadow-lg shadow-teal-500/30`}>
                                <Sparkles className="w-5 h-5 text-white" />
                            </div>
                            <span className={`font-bold text-xl ${colors.text}`}>
                                DentalWellness
                            </span>
                        </Link>

                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${colors.textSecondary} hover:${colors.text} ${isDark ? 'hover:bg-slate-800' : 'hover:bg-teal-50'}`}
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
                                    className="px-6 py-2.5 rounded-full font-medium text-sm text-white bg-gradient-to-r from-teal-500 to-teal-600 shadow-lg shadow-teal-500/30 hover:shadow-xl transition-all"
                                >
                                    Register
                                </motion.button>
                            </Link>
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className={`md:hidden p-2 rounded-xl ${isDark ? 'hover:bg-slate-800' : 'hover:bg-teal-50'}`}
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
                        className={`md:hidden border-t ${isDark ? 'bg-slate-950/98 border-slate-800' : 'bg-white/98 border-teal-100'} backdrop-blur-xl`}
                    >
                        <div className="px-6 py-4 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`block py-3 px-4 rounded-xl ${colors.textSecondary} ${isDark ? 'hover:bg-slate-800' : 'hover:bg-teal-50'}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/register" className="block pt-2">
                                <button className="w-full py-3 rounded-full font-medium text-white bg-gradient-to-r from-teal-500 to-teal-600">
                                    Register Now
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </motion.header>

            {/* Hero - Split 50/50 Layout */}
            <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-20">
                {/* Background Gradient */}
                <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950/30' : 'bg-gradient-to-br from-white via-teal-50/30 to-coral-50/20'}`} />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left - Image */}
                        <motion.div
                            style={{ y: heroY }}
                            className="relative order-2 lg:order-1"
                        >
                            <div className="relative">
                                <div className={`absolute -inset-4 rounded-[2.5rem] ${isDark ? 'bg-gradient-to-br from-teal-500/20 to-coral-500/20' : 'bg-gradient-to-br from-teal-200/50 to-coral-200/50'} blur-2xl`} />
                                <img
                                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=900&fit=crop"
                                    alt="Dental Excellence"
                                    className="relative rounded-[2rem] w-full h-[500px] lg:h-[600px] object-cover shadow-2xl"
                                />
                                {/* Floating Badge */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1 }}
                                    className={`absolute -bottom-6 -right-6 px-6 py-4 rounded-2xl shadow-xl ${isDark ? 'bg-slate-900 border border-slate-700' : 'bg-white border border-teal-100'}`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                                            <Award className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <div className={`text-2xl font-bold ${colors.text}`}>5,000+</div>
                                            <div className={`text-sm ${colors.textMuted}`}>Dentists Trained</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Right - Content */}
                        <div className="order-1 lg:order-2">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${isDark ? 'bg-teal-500/10 border border-teal-500/20' : 'bg-teal-100 border border-teal-200'} mb-6`}
                            >
                                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                                <span className={`text-sm font-medium ${isDark ? 'text-teal-400' : 'text-teal-700'}`}>
                                    Live Event • {formatDate(mockEvent.date)}
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className={`text-4xl md:text-5xl lg:text-6xl font-bold ${colors.text} leading-[1.1] mb-6`}
                            >
                                Elevate Your
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-teal-600 to-coral-500">
                                    Dental Practice
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className={`text-lg ${colors.textSecondary} mb-8 max-w-lg`}
                            >
                                Join 5 world-renowned specialists for a transformative 12-hour learning journey. Master cutting-edge techniques in a welcoming, supportive environment.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9 }}
                                className="flex flex-wrap gap-4"
                            >
                                <Link to="/register">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-teal-500 to-teal-600 shadow-xl shadow-teal-500/30 hover:shadow-2xl transition-all"
                                    >
                                        Join the Journey
                                        <ArrowRight className="w-5 h-5" />
                                    </motion.button>
                                </Link>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium border-2 ${isDark ? 'border-slate-700 text-white hover:bg-slate-800' : 'border-teal-200 text-teal-700 hover:bg-teal-50'} transition-all`}
                                >
                                    <Play className="w-5 h-5" />
                                    Watch Preview
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                        <ChevronDown className={`w-8 h-8 ${colors.textMuted}`} />
                    </motion.div>
                </motion.div>
            </section>

            {/* Stats Bar */}
            <section className={`py-12 ${colors.bgAlt}`}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: '5', label: 'Expert Speakers' },
                            { value: '12', label: 'Hours of Content' },
                            { value: '5,000+', label: 'Dentists Trained' },
                            { value: '4.9', label: 'Average Rating' },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className={`text-3xl md:text-4xl font-bold ${colors.accent}`}>{stat.value}</div>
                                <div className={`text-sm ${colors.textMuted} mt-1`}>{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Speakers Section */}
            <section className={`py-24 ${colors.bg}`}>
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${isDark ? 'bg-teal-500/10 text-teal-400' : 'bg-teal-100 text-teal-700'}`}>
                            Meet Your Mentors
                        </span>
                        <h2 className={`text-4xl md:text-5xl font-bold ${colors.text}`}>
                            World-Class Speakers
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mockDentists.slice(0, 3).map((dentist, index) => (
                            <motion.div
                                key={dentist.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`group relative rounded-3xl overflow-hidden ${isDark ? 'bg-slate-900' : 'bg-white'} shadow-xl hover:shadow-2xl transition-all duration-500`}
                            >
                                <div className="relative h-72 overflow-hidden">
                                    <img
                                        src={dentist.profileImageUrl}
                                        alt={dentist.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                </div>
                                <div className="p-6">
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${isDark ? 'bg-teal-500/20 text-teal-400' : 'bg-teal-100 text-teal-700'}`}>
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

            {/* Features Section */}
            <section className={`py-24 ${colors.bgAlt}`}>
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className={`text-4xl md:text-5xl font-bold ${colors.text}`}>
                            What You'll Experience
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
                                className={`p-8 rounded-3xl border ${colors.border} ${isDark ? 'bg-slate-900/50' : 'bg-white'} hover:shadow-xl transition-all`}
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
            <section className={`py-24 ${colors.bg}`}>
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className={`text-4xl md:text-5xl font-bold ${colors.text}`}>
                            Loved by Dentists
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
                                className={`p-8 rounded-3xl ${isDark ? 'bg-slate-900' : 'bg-teal-50/50'}`}
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
                                        className="w-14 h-14 rounded-full object-cover ring-2 ring-teal-500/30"
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
                <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-teal-950 via-slate-950 to-slate-900' : 'bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700'}`} />
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Ready to Transform?
                        </h2>
                        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                            {formatDate(mockEvent.date)} • {mockEvent.durationHours} Hours • Virtual
                        </p>
                        <Link to="/register">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-3 bg-white text-teal-700 font-bold px-10 py-5 rounded-full text-lg shadow-2xl hover:bg-teal-50 transition-all"
                            >
                                Register Now — ${mockEvent.basePrice}
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </Link>
                        <p className="text-white/60 text-sm mt-6">
                            Only {mockEvent.maxCapacity - mockEvent.currentRegistrations} seats remaining
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
                                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                                    <Sparkles className="w-5 h-5 text-white" />
                                </div>
                                <span className="font-bold text-xl text-white">DentalWellness</span>
                            </Link>
                            <p className="text-white/60 text-sm mb-6">
                                Premium dental education for modern practitioners.
                            </p>
                            <div className="flex gap-3">
                                {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                                    <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-teal-500/20 flex items-center justify-center transition-all">
                                        <Icon className="w-4 h-4 text-teal-400" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold text-white mb-4">Company</h4>
                            <ul className="space-y-3">
                                {['About Us', 'Speakers', 'Testimonials', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <Link to="#" className="text-sm text-white/60 hover:text-teal-400 transition-colors">
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
                                        <Link to="#" className="text-sm text-white/60 hover:text-teal-400 transition-colors">
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
                                    <Mail className="w-4 h-4 text-teal-400" />
                                    <span className="text-sm text-white/60">hello@dentalwellness.com</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className="w-4 h-4 text-teal-400" />
                                    <span className="text-sm text-white/60">+1-888-WELLNESS</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <MapPin className="w-4 h-4 text-teal-400 mt-0.5" />
                                    <span className="text-sm text-white/60">San Francisco, CA</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-white/40">
                            © {new Date().getFullYear()} DentalWellness. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            {['Privacy', 'Terms', 'Cookies'].map((item) => (
                                <Link key={item} to="#" className="text-sm text-white/40 hover:text-teal-400 transition-colors">
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
