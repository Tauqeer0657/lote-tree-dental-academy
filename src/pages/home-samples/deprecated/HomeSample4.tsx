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
    Leaf,
    Heart,
    Flower2,
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
 * SAMPLE 4: ORGANIC NATURE
 *
 * Design Philosophy:
 * - Fluid blob shapes as section backgrounds
 * - Wave dividers between sections
 * - Soft, nature-inspired colors (teal, coral, sage)
 * - Rounded cards and buttons
 * - Gentle, flowing animations
 */

const heroStats = [
    { value: '5+', label: 'Expert Dentists', icon: Users },
    { value: '12h', label: 'Live Training', icon: Clock },
    { value: '5K+', label: 'Graduates', icon: Award },
    { value: '4.9', label: 'Rating', icon: Star },
];

const highlights = [
    { icon: Clock, title: 'Nurturing Education', description: 'Comprehensive training designed for deep learning and growth.' },
    { icon: MessageCircle, title: 'Supportive Q&A Sessions', description: 'Personalized guidance from caring expert mentors.' },
    { icon: Award, title: 'Achievement Certificate', description: 'Beautiful certificate celebrating your accomplishment.' },
    { icon: Users, title: 'Caring Community', description: 'Join a supportive network of dental professionals.' },
    { icon: Video, title: 'Flexible Access', description: 'Extended recording access to learn at your own pace.' },
    { icon: FileCheck, title: 'Resource Kit', description: 'Thoughtfully curated materials and guides.' },
];

// Wave SVG component
const WaveDivider = ({ flip = false, isDark = false }: { flip?: boolean; isDark?: boolean }) => (
    <div className={`absolute left-0 right-0 overflow-hidden ${flip ? 'top-0 rotate-180' : 'bottom-0'}`} style={{ height: '100px' }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
            <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                fill={isDark ? '#0f172a' : '#ffffff'}
            />
        </svg>
    </div>
);

// Navigation links
const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Experts', path: '/dentists' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
];

export default function HomeSample4() {
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
        bg: isDark ? 'bg-slate-900' : 'bg-white',
        bgAlt: isDark ? 'bg-slate-950' : 'bg-teal-50/50',
        bgCard: isDark ? 'bg-slate-800' : 'bg-white',
        text: isDark ? 'text-white' : 'text-slate-800',
        textSecondary: isDark ? 'text-slate-300' : 'text-slate-600',
        textMuted: isDark ? 'text-slate-400' : 'text-slate-400',
        teal: isDark ? 'text-teal-400' : 'text-teal-600',
        tealBg: isDark ? 'bg-teal-400/10' : 'bg-teal-50',
        coral: isDark ? 'text-rose-400' : 'text-rose-500',
        border: isDark ? 'border-slate-700' : 'border-teal-100',
    };

    return (
        <main className={`min-h-screen overflow-hidden ${colors.bg} transition-colors duration-500`}>
            {/* Organic Nature Navbar */}
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    isScrolled
                        ? isDark
                            ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg'
                            : 'bg-white/95 backdrop-blur-lg shadow-lg shadow-teal-100/20'
                        : 'bg-transparent'
                }`}
            >
                <nav className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3">
                            <div className={`w-11 h-11 rounded-full flex items-center justify-center ${isDark ? 'bg-teal-400/20' : 'bg-teal-100'}`}>
                                <Leaf className={`w-5 h-5 ${colors.teal}`} />
                            </div>
                            <span className={`font-semibold text-xl ${colors.text}`}>
                                DentalMasters
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${colors.textSecondary} hover:${colors.teal} ${isDark ? 'hover:bg-teal-400/10' : 'hover:bg-teal-50'}`}
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
                                    className={`px-6 py-2.5 rounded-full font-medium text-sm text-white transition-all ${isDark ? 'bg-gradient-to-r from-teal-500 to-emerald-500 shadow-lg shadow-teal-500/25' : 'bg-gradient-to-r from-teal-600 to-emerald-600 shadow-lg shadow-teal-600/25'}`}
                                >
                                    Join Us
                                </motion.button>
                            </Link>
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className={`md:hidden p-2 rounded-full ${isDark ? 'hover:bg-slate-800' : 'hover:bg-teal-50'}`}
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
                        className={`md:hidden border-t ${colors.border} ${isDark ? 'bg-slate-900' : 'bg-white'}`}
                    >
                        <div className="px-6 py-4 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`block py-2 px-4 rounded-full ${colors.textSecondary} ${isDark ? 'hover:bg-teal-400/10' : 'hover:bg-teal-50'}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/register" className="block pt-2">
                                <button className={`w-full py-3 rounded-full font-medium text-white ${isDark ? 'bg-gradient-to-r from-teal-500 to-emerald-500' : 'bg-gradient-to-r from-teal-600 to-emerald-600'}`}>
                                    Join Us
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </motion.header>

            {/* Hero Section */}
            <section className={`relative min-h-screen flex items-center pt-20 ${isDark ? 'bg-slate-900' : 'bg-gradient-to-br from-teal-50 via-white to-rose-50'}`}>
                {/* Organic Blob Backgrounds */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        className={`absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full ${isDark ? 'bg-teal-500/10' : 'bg-teal-200/40'}`}
                        style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
                        animate={{
                            borderRadius: ['60% 40% 30% 70% / 60% 30% 70% 40%', '30% 60% 70% 40% / 50% 60% 30% 60%', '60% 40% 30% 70% / 60% 30% 70% 40%'],
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.div
                        className={`absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full ${isDark ? 'bg-rose-500/10' : 'bg-rose-200/30'}`}
                        style={{ borderRadius: '40% 60% 60% 40% / 40% 50% 50% 60%' }}
                        animate={{
                            borderRadius: ['40% 60% 60% 40% / 40% 50% 50% 60%', '60% 40% 30% 70% / 60% 30% 70% 40%', '40% 60% 60% 40% / 40% 50% 50% 60%'],
                        }}
                        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.div
                        className={`absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full ${isDark ? 'bg-emerald-500/10' : 'bg-emerald-100/50'}`}
                        style={{ borderRadius: '50% 50% 40% 60% / 40% 60% 40% 60%' }}
                        animate={{
                            scale: [1, 1.2, 1],
                            x: [0, 30, 0],
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <div>
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8 ${colors.tealBg} border ${colors.border}`}
                            >
                                <Leaf className={`w-4 h-4 ${colors.teal}`} />
                                <span className={`text-sm font-medium ${colors.teal}`}>
                                    Nurture Your Career • {formatDate(mockEvent.date)}
                                </span>
                            </motion.div>

                            {/* Headline */}
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className={`text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 ${colors.text}`}
                            >
                                Grow Your{' '}
                                <span className={`${isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400' : 'text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600'}`}>
                                    Dental
                                </span>{' '}
                                Practice
                                <motion.span
                                    className="inline-block ml-3"
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                >
                                    <Flower2 className={`w-12 h-12 ${colors.coral}`} />
                                </motion.span>
                            </motion.h1>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className={`text-lg lg:text-xl ${colors.textSecondary} max-w-lg mb-10 leading-relaxed`}
                            >
                                Join our nurturing 12-hour masterclass where world-class specialists
                                guide you through the art of modern dentistry with care and expertise.
                            </motion.p>

                            {/* CTAs */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-wrap gap-4"
                            >
                                <Link to="/register">
                                    <motion.button
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 ${
                                            isDark
                                                ? 'bg-gradient-to-r from-teal-500 to-emerald-500 shadow-lg shadow-teal-500/30'
                                                : 'bg-gradient-to-r from-teal-600 to-emerald-600 shadow-lg shadow-teal-600/30'
                                        }`}
                                    >
                                        Begin Your Journey
                                        <ArrowRight className="w-5 h-5" />
                                    </motion.button>
                                </Link>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium border-2 transition-all ${
                                        isDark
                                            ? 'border-slate-600 text-slate-300 hover:border-teal-400 hover:text-teal-400'
                                            : 'border-teal-200 text-teal-700 hover:border-teal-400 hover:bg-teal-50'
                                    }`}
                                >
                                    <Play className="w-5 h-5" />
                                    Watch Preview
                                </motion.button>
                            </motion.div>
                        </div>

                        {/* Right - Stats in Organic Layout */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="grid grid-cols-2 gap-5"
                        >
                            {heroStats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className={`relative p-6 rounded-3xl border transition-all duration-500 ${colors.bgCard} ${colors.border} hover:shadow-xl`}
                                    style={{ borderRadius: index % 2 === 0 ? '40% 60% 30% 70% / 40% 35% 65% 60%' : '60% 40% 70% 30% / 35% 40% 60% 65%' }}
                                >
                                    <div className={`w-12 h-12 rounded-full ${colors.tealBg} flex items-center justify-center mb-4`}>
                                        <stat.icon className={`w-6 h-6 ${colors.teal}`} />
                                    </div>
                                    <div className={`text-3xl font-bold ${colors.text} mb-1`}>{stat.value}</div>
                                    <div className={`text-sm ${colors.textMuted}`}>{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Wave Divider */}
                <WaveDivider isDark={!isDark} />
            </section>

            {/* Dentists Section */}
            <section className={`relative py-28 ${colors.bgAlt}`}>
                <WaveDivider flip isDark={isDark} />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className={`inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest ${colors.teal} mb-4`}>
                            <Heart className="w-4 h-4" />
                            Our Caring Experts
                        </span>
                        <h2 className={`text-4xl lg:text-5xl font-bold ${colors.text}`}>
                            Mentors Who Care
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mockDentists.slice(0, 3).map((dentist, index) => (
                            <motion.div
                                key={dentist.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                whileHover={{ y: -10 }}
                                className={`group rounded-[2.5rem] overflow-hidden border transition-all duration-500 ${colors.bgCard} ${colors.border} hover:shadow-2xl`}
                            >
                                <div className="relative h-72 overflow-hidden">
                                    <motion.img
                                        src={dentist.profileImageUrl}
                                        alt={dentist.name}
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.08 }}
                                        transition={{ duration: 0.6 }}
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-slate-800 via-slate-800/40' : 'from-slate-900/70 via-slate-900/20'} to-transparent`} />

                                    <div className="absolute top-4 right-4">
                                        <span className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm ${isDark ? 'bg-teal-500/80 text-white' : 'bg-teal-500 text-white'}`}>
                                            {dentist.yearsExperience}+ Years
                                        </span>
                                    </div>

                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-xl font-bold text-white">{dentist.name}</h3>
                                        <p className={isDark ? 'text-teal-300' : 'text-teal-200'}>{dentist.credentials}</p>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${colors.tealBg} ${colors.teal}`}>
                                        {dentist.specialty}
                                    </div>
                                    <p className={`text-sm mb-4 line-clamp-2 ${colors.textSecondary}`}>
                                        {dentist.biography.substring(0, 100)}...
                                    </p>
                                    <div className={`flex items-center gap-2 text-sm ${colors.textMuted}`}>
                                        <Leaf className="w-4 h-4" />
                                        <span>{dentist.institution}</span>
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
                                className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium border-2 transition-all ${
                                    isDark
                                        ? 'border-slate-600 text-slate-300 hover:border-teal-400 hover:text-teal-400'
                                        : 'border-teal-300 text-teal-700 hover:bg-teal-50 hover:border-teal-400'
                                }`}
                            >
                                Meet All Mentors
                                <ArrowRight className="w-4 h-4" />
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className={`relative py-28 ${colors.bg}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className={`inline-block text-sm font-semibold uppercase tracking-widest ${colors.teal} mb-4`}>
                            What Blooms for You
                        </span>
                        <h2 className={`text-4xl lg:text-5xl font-bold ${colors.text}`}>
                            A Garden of Knowledge
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
                                className={`group p-8 rounded-[2rem] border transition-all duration-300 ${colors.bgCard} ${colors.border} hover:shadow-xl`}
                            >
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${colors.tealBg}`}>
                                    <feature.icon className={`w-8 h-8 ${colors.teal}`} />
                                </div>
                                <h3 className={`text-xl font-semibold mb-3 ${colors.text}`}>{feature.title}</h3>
                                <p className={colors.textSecondary}>{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className={`relative py-28 ${colors.bgAlt}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className={`text-4xl lg:text-5xl font-bold ${colors.text}`}>
                            Growing Together
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
                                className={`p-8 rounded-[2rem] border ${colors.bgCard} ${colors.border}`}
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                                <p className={`${colors.textSecondary} mb-6 leading-relaxed`}>
                                    "{review.reviewText}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={review.attendeePhotoUrl}
                                        alt={review.attendeeName}
                                        className="w-14 h-14 rounded-full object-cover ring-2 ring-teal-200"
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
            <section className={`py-28 relative overflow-hidden ${isDark ? 'bg-gradient-to-br from-teal-900 via-emerald-900 to-slate-900' : 'bg-gradient-to-br from-teal-500 via-emerald-500 to-teal-600'}`}>
                {/* Organic blobs */}
                <motion.div
                    className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white/10 blur-3xl"
                    animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white/10 blur-3xl"
                    animate={{ x: [0, -30, 0], y: [0, -50, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Flower2 className="w-12 h-12 text-white/80 mx-auto mb-6" />
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                            {mockEvent.name}
                        </h2>
                        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-12">
                            Plant the seeds of your success. Join us for a transformative experience.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12"
                    >
                        <div className="bg-white/10 backdrop-blur-sm rounded-[1.5rem] p-6 border border-white/20">
                            <Calendar className="w-8 h-8 text-white/80 mx-auto mb-3" />
                            <h4 className="font-semibold text-white mb-1">Date</h4>
                            <p className="text-white/80">{formatDate(mockEvent.date)}</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-[1.5rem] p-6 border border-white/20">
                            <Clock className="w-8 h-8 text-white/80 mx-auto mb-3" />
                            <h4 className="font-semibold text-white mb-1">Duration</h4>
                            <p className="text-white/80">{mockEvent.durationHours} Hours</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-[1.5rem] p-6 border border-white/20">
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
                                className="inline-flex items-center gap-3 bg-white text-teal-700 font-semibold px-12 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all"
                            >
                                Nurture Your Growth - ${mockEvent.basePrice}
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
            <section className={`py-28 ${colors.bg}`}>
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={`text-4xl lg:text-5xl font-bold ${colors.text} mb-6`}>
                            Ready to Flourish?
                        </h2>
                        <p className={`${colors.textSecondary} text-xl mb-10 max-w-2xl mx-auto`}>
                            Join our nurturing community and watch your practice bloom.
                        </p>
                        <Link to="/register">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                className={`inline-flex items-center gap-3 px-12 py-6 rounded-full font-semibold text-xl text-white transition-all ${
                                    isDark
                                        ? 'bg-gradient-to-r from-teal-500 to-emerald-500 shadow-lg shadow-teal-500/30'
                                        : 'bg-gradient-to-r from-teal-600 to-emerald-600 shadow-lg shadow-teal-600/30'
                                }`}
                            >
                                Start Growing Today
                                <ArrowRight className="w-6 h-6" />
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Organic Nature Footer */}
            <footer className={`${isDark ? 'bg-slate-950' : 'bg-teal-50'} border-t ${colors.border}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Brand */}
                        <div className="lg:col-span-1">
                            <Link to="/" className="flex items-center gap-3 mb-4">
                                <div className={`w-11 h-11 rounded-full flex items-center justify-center ${isDark ? 'bg-teal-400/20' : 'bg-teal-100'}`}>
                                    <Leaf className={`w-5 h-5 ${colors.teal}`} />
                                </div>
                                <span className={`font-semibold text-xl ${colors.text}`}>DentalMasters</span>
                            </Link>
                            <p className={`${colors.textSecondary} text-sm mb-6`}>
                                Nurturing dental professionals with holistic education and care.
                            </p>
                            <div className="flex gap-3">
                                {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                                    <a key={i} href="#" className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isDark ? 'bg-teal-400/10 hover:bg-teal-400/20' : 'bg-white hover:bg-teal-100'}`}>
                                        <Icon className={`w-4 h-4 ${colors.teal}`} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className={`font-semibold ${colors.text} mb-4`}>Company</h4>
                            <ul className="space-y-3">
                                {['About Us', 'Our Experts', 'Testimonials', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <Link to="#" className={`text-sm ${colors.textSecondary} hover:${colors.teal} transition-colors`}>
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
                                        <Link to="#" className={`text-sm ${colors.textSecondary} hover:${colors.teal} transition-colors`}>
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
                                    <Mail className={`w-4 h-4 ${colors.teal}`} />
                                    <span className={`text-sm ${colors.textSecondary}`}>care@dentalmasters.com</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className={`w-4 h-4 ${colors.teal}`} />
                                    <span className={`text-sm ${colors.textSecondary}`}>+1-877-CARE</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <MapPin className={`w-4 h-4 ${colors.teal} mt-0.5`} />
                                    <span className={`text-sm ${colors.textSecondary}`}>Green Valley, Portland, OR</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className={`mt-12 pt-8 border-t ${colors.border} flex flex-col md:flex-row items-center justify-between gap-4`}>
                        <p className={`text-sm ${colors.textMuted}`}>
                            © {new Date().getFullYear()} DentalMasters. Nurturing growth.
                        </p>
                        <div className="flex gap-6">
                            {['Privacy', 'Terms', 'Sustainability'].map((item) => (
                                <Link key={item} to="#" className={`text-sm ${colors.textMuted} hover:${colors.teal} transition-colors`}>
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
