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
    Calendar,
    Globe,
    Star,
    ArrowUpRight,
    Menu,
    X,
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Twitter,
    Instagram,
    Layers
} from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';
import ThemeToggle from '../../../components/ui/ThemeToggle';
import { dentists as mockDentists, upcomingEvent as mockEvent, reviews as mockReviews } from '../../../data/mockData';
import { formatDate } from '../../../lib/utils';

/**
 * SAMPLE 9: SPLIT LAYOUT
 *
 * Design Philosophy:
 * - 50/50 split sections
 * - Contrasting left/right panels
 * - Image on one side, content on other
 * - Strong visual balance
 * - Alternating layout pattern
 */

const highlights = [
    { icon: Clock, title: '12 Hours Live', description: 'Comprehensive hands-on training.' },
    { icon: MessageCircle, title: 'Direct Q&A', description: 'Real-time expert interaction.' },
    { icon: Award, title: 'Certification', description: 'Industry-recognized credentials.' },
    { icon: Users, title: 'Community', description: 'Join 5000+ dental pros.' },
    { icon: Video, title: 'Recordings', description: '6-month replay access.' },
    { icon: FileCheck, title: 'Resources', description: 'Complete learning kit.' },
];

// Navigation links
const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Speakers', path: '/dentists' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
];

export default function HomeSample9() {
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
        bgAccent: isDark ? 'bg-indigo-950' : 'bg-indigo-50',
        text: isDark ? 'text-white' : 'text-slate-900',
        textSecondary: isDark ? 'text-slate-400' : 'text-slate-600',
        textMuted: isDark ? 'text-slate-500' : 'text-slate-400',
        border: isDark ? 'border-slate-800' : 'border-slate-200',
        accent: isDark ? 'text-indigo-400' : 'text-indigo-600',
        accentBg: isDark ? 'bg-indigo-500/10' : 'bg-indigo-50',
    };

    return (
        <main className={`min-h-screen ${colors.bg} transition-colors duration-500`}>
            {/* Split-Inspired Navbar */}
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? `${colors.bg} border-b ${colors.border} shadow-sm backdrop-blur-xl`
                        : 'bg-transparent'
                }`}
            >
                <nav className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-xl ${colors.accentBg} flex items-center justify-center`}>
                                <Layers className={`w-5 h-5 ${colors.accent}`} />
                            </div>
                            <span className={`font-bold text-xl ${isScrolled || colors.text} ${!isScrolled && 'lg:text-white'}`}>
                                DentalMasters
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                        isScrolled
                                            ? `${colors.textSecondary} hover:${colors.text}`
                                            : 'text-white/80 hover:text-white hover:bg-white/10'
                                    }`}
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
                                    className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${
                                        isDark
                                            ? 'bg-indigo-500 text-white hover:bg-indigo-400'
                                            : 'bg-indigo-600 text-white hover:bg-indigo-500'
                                    }`}
                                >
                                    Register
                                </motion.button>
                            </Link>
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className={`md:hidden p-2 rounded-lg ${isScrolled ? (isDark ? 'hover:bg-slate-800' : 'hover:bg-slate-100') : 'hover:bg-white/10'}`}
                            >
                                {isMobileMenuOpen
                                    ? <X className={`w-6 h-6 ${isScrolled ? colors.text : 'text-white'}`} />
                                    : <Menu className={`w-6 h-6 ${isScrolled ? colors.text : 'text-white'}`} />}
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
                                    className={`block py-2 px-4 rounded-lg ${colors.textSecondary} ${isDark ? 'hover:bg-slate-800' : 'hover:bg-slate-100'}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/register" className="block pt-2">
                                <button className={`w-full py-3 rounded-xl font-medium text-white ${isDark ? 'bg-indigo-500' : 'bg-indigo-600'}`}>
                                    Register Now
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </motion.header>

            {/* Hero Split Section */}
            <section className="min-h-screen flex flex-col lg:flex-row">
                {/* Left Panel - Content */}
                <div className={`lg:w-1/2 flex items-center p-8 lg:p-16 xl:p-24 ${colors.bg}`}>
                    <div className="max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${colors.accentBg} ${colors.accent} text-sm font-medium mb-8`}
                        >
                            <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                            {formatDate(mockEvent.date)}
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className={`text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] ${colors.text} mb-6`}
                        >
                            Elevate Your{' '}
                            <span className={colors.accent}>Dental</span>{' '}
                            Practice
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className={`text-xl ${colors.textSecondary} mb-10`}
                        >
                            Join 5 world-class specialists for 12 hours of immersive,
                            hands-on training designed to transform your practice.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link to="/register">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all ${
                                        isDark ? 'bg-indigo-500 hover:bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-500'
                                    }`}
                                >
                                    Register Now
                                    <ArrowRight className="w-5 h-5" />
                                </motion.button>
                            </Link>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium border-2 transition-all ${colors.border} ${colors.text} hover:${colors.accentBg}`}
                            >
                                <Play className="w-5 h-5" />
                                Watch Preview
                            </motion.button>
                        </motion.div>

                        {/* Stats Row */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className={`flex gap-8 mt-12 pt-12 border-t ${colors.border}`}
                        >
                            {[
                                { value: '5', label: 'Experts' },
                                { value: '12h', label: 'Training' },
                                { value: '5K+', label: 'Alumni' },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <div className={`text-3xl font-bold ${colors.accent}`}>{stat.value}</div>
                                    <div className={`text-sm ${colors.textMuted}`}>{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Right Panel - Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="lg:w-1/2 relative min-h-[400px] lg:min-h-screen"
                >
                    <img
                        src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&h=1600&fit=crop"
                        alt="Dental Excellence"
                        className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 ${isDark ? 'bg-indigo-950/30' : 'bg-indigo-600/10'}`} />
                </motion.div>
            </section>

            {/* Speakers Split Section (Reversed) */}
            <section className="flex flex-col lg:flex-row-reverse">
                {/* Right Panel - Content */}
                <div className={`lg:w-1/2 flex items-center p-8 lg:p-16 xl:p-24 ${colors.bgAlt}`}>
                    <div className="w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <span className={`text-sm font-semibold uppercase tracking-widest ${colors.accent} mb-4 block`}>
                                Meet the Experts
                            </span>
                            <h2 className={`text-4xl lg:text-5xl font-bold ${colors.text}`}>
                                Learn from the Best
                            </h2>
                        </motion.div>

                        <div className="space-y-4">
                            {mockDentists.slice(0, 4).map((dentist, index) => (
                                <motion.div
                                    key={dentist.id}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`group flex items-center gap-4 p-4 rounded-2xl ${colors.bg} border ${colors.border} cursor-pointer hover:shadow-lg transition-all`}
                                >
                                    <img
                                        src={dentist.profileImageUrl}
                                        alt={dentist.name}
                                        className="w-16 h-16 rounded-xl object-cover"
                                    />
                                    <div className="flex-1">
                                        <h3 className={`font-semibold ${colors.text}`}>{dentist.name}</h3>
                                        <p className={`text-sm ${colors.textSecondary}`}>{dentist.specialty}</p>
                                    </div>
                                    <ArrowUpRight className={`w-5 h-5 ${colors.textMuted} group-hover:${colors.accent} transition-colors`} />
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="mt-8"
                        >
                            <Link to="/dentists" className={`inline-flex items-center gap-2 ${colors.accent} font-medium hover:underline`}>
                                View All Speakers
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Left Panel - Image Grid */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:w-1/2 grid grid-cols-2 gap-4 p-4"
                >
                    {mockDentists.slice(0, 4).map((dentist) => (
                        <div key={dentist.id} className="relative aspect-square rounded-2xl overflow-hidden">
                            <img
                                src={dentist.profileImageUrl}
                                alt={dentist.name}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-4 left-4">
                                <div className="text-white font-semibold">{dentist.name.split(' ')[1]}</div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </section>

            {/* Features Full Width */}
            <section className={`py-24 ${colors.bg}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className={`text-4xl lg:text-5xl font-bold ${colors.text}`}>
                            What's Included
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
                                className={`p-8 rounded-2xl border ${colors.border} ${colors.bgAlt}`}
                            >
                                <div className={`w-14 h-14 rounded-xl ${colors.accentBg} flex items-center justify-center mb-6`}>
                                    <feature.icon className={`w-7 h-7 ${colors.accent}`} />
                                </div>
                                <h3 className={`text-xl font-semibold ${colors.text} mb-2`}>{feature.title}</h3>
                                <p className={colors.textSecondary}>{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Split */}
            <section className="flex flex-col lg:flex-row">
                {/* Left - Featured Testimonial */}
                <div className={`lg:w-1/2 flex items-center p-8 lg:p-16 xl:p-24 ${isDark ? 'bg-indigo-950' : 'bg-indigo-600'}`}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex gap-1 mb-6">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                            ))}
                        </div>
                        <blockquote className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-8">
                            "{mockReviews[0].reviewText}"
                        </blockquote>
                        <div className="flex items-center gap-4">
                            <img
                                src={mockReviews[0].attendeePhotoUrl}
                                alt={mockReviews[0].attendeeName}
                                className="w-14 h-14 rounded-full object-cover ring-4 ring-white/20"
                            />
                            <div>
                                <div className="font-semibold text-white">{mockReviews[0].attendeeName}</div>
                                <div className="text-white/70">{mockReviews[0].attendeeCredential}</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right - More Reviews */}
                <div className={`lg:w-1/2 p-8 lg:p-16 xl:p-24 ${colors.bgAlt}`}>
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className={`text-xl font-semibold ${colors.text} mb-8`}
                    >
                        More Reviews
                    </motion.h3>
                    <div className="space-y-6">
                        {mockReviews.slice(1, 4).map((review) => (
                            <motion.div
                                key={review.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`p-6 rounded-2xl ${colors.bg} border ${colors.border}`}
                            >
                                <div className="flex gap-1 mb-3">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                                <p className={`${colors.textSecondary} mb-4 line-clamp-2`}>
                                    "{review.reviewText}"
                                </p>
                                <div className={`font-medium text-sm ${colors.text}`}>{review.attendeeName}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Split */}
            <section className="flex flex-col lg:flex-row-reverse">
                {/* Right - Content */}
                <div className={`lg:w-1/2 flex items-center p-8 lg:p-16 xl:p-24 ${colors.bg}`}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={`text-4xl lg:text-5xl font-bold ${colors.text} mb-6`}>
                            Ready to Transform Your Practice?
                        </h2>
                        <p className={`text-xl ${colors.textSecondary} mb-8`}>
                            Join thousands of dental professionals who have elevated their skills with our masterclass.
                        </p>

                        <div className="space-y-4 mb-10">
                            <div className="flex items-center gap-4">
                                <Calendar className={`w-5 h-5 ${colors.accent}`} />
                                <span className={colors.textSecondary}>{formatDate(mockEvent.date)}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Clock className={`w-5 h-5 ${colors.accent}`} />
                                <span className={colors.textSecondary}>{mockEvent.durationHours} Hours Live Training</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Globe className={`w-5 h-5 ${colors.accent}`} />
                                <span className={colors.textSecondary}>{mockEvent.platform} Platform</span>
                            </div>
                        </div>

                        <Link to="/register">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`inline-flex items-center gap-3 px-10 py-5 rounded-xl font-semibold text-white text-lg transition-all ${
                                    isDark ? 'bg-indigo-500 hover:bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-500'
                                }`}
                            >
                                Register Now — ${mockEvent.basePrice}
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </Link>
                        <p className={`text-sm ${colors.textMuted} mt-4`}>
                            {mockEvent.maxCapacity - mockEvent.currentRegistrations} spots remaining
                        </p>
                    </motion.div>
                </div>

                {/* Left - Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:w-1/2 relative min-h-[400px] lg:min-h-[600px]"
                >
                    <img
                        src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1200&h=800&fit=crop"
                        alt="Modern Dentistry"
                        className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 ${isDark ? 'bg-indigo-950/40' : 'bg-indigo-600/20'}`} />
                </motion.div>
            </section>

            {/* Split Footer */}
            <footer className="flex flex-col lg:flex-row">
                {/* Left Panel - Brand */}
                <div className={`lg:w-1/2 p-8 lg:p-16 ${isDark ? 'bg-indigo-950' : 'bg-indigo-600'}`}>
                    <div className="max-w-md">
                        <Link to="/" className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                                <Layers className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-bold text-xl text-white">DentalMasters</span>
                        </Link>
                        <p className="text-white/70 mb-8">
                            Split-panel dental education designed for visual impact and maximum learning retention.
                        </p>
                        <div className="flex gap-3">
                            {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all">
                                    <Icon className="w-4 h-4 text-white" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Panel - Links & Contact */}
                <div className={`lg:w-1/2 p-8 lg:p-16 ${colors.bgAlt}`}>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className={`font-semibold ${colors.text} mb-4`}>Company</h4>
                            <ul className="space-y-2">
                                {['About', 'Speakers', 'Reviews'].map((item) => (
                                    <li key={item}>
                                        <Link to="#" className={`text-sm ${colors.textSecondary} hover:${colors.accent} transition-colors`}>
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className={`font-semibold ${colors.text} mb-4`}>Resources</h4>
                            <ul className="space-y-2">
                                {['FAQ', 'CE Credits', 'Blog'].map((item) => (
                                    <li key={item}>
                                        <Link to="#" className={`text-sm ${colors.textSecondary} hover:${colors.accent} transition-colors`}>
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <h4 className={`font-semibold ${colors.text} mb-4`}>Contact</h4>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2">
                                    <Mail className={`w-4 h-4 ${colors.accent}`} />
                                    <span className={`text-sm ${colors.textSecondary}`}>split@dentalmasters.com</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Phone className={`w-4 h-4 ${colors.accent}`} />
                                    <span className={`text-sm ${colors.textSecondary}`}>+1-800-SPLIT</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <MapPin className={`w-4 h-4 ${colors.accent}`} />
                                    <span className={`text-sm ${colors.textSecondary}`}>Austin, TX</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className={`mt-8 pt-6 border-t ${colors.border}`}>
                        <p className={`text-sm ${colors.textMuted}`}>
                            © {new Date().getFullYear()} DentalMasters. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </main>
    );
}
