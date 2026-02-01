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
    Crown
} from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';
import ThemeToggle from '../../../components/ui/ThemeToggle';
import { dentists as mockDentists, upcomingEvent as mockEvent, reviews as mockReviews } from '../../../data/mockData';
import { formatDate } from '../../../lib/utils';

/**
 * SAMPLE 7B: MIDNIGHT ELITE
 *
 * Design Philosophy:
 * - Navy + Gold + Cream color palette
 * - Dark luxury aesthetic
 * - Stacked full-width cinematic sections
 * - Premium, exclusive feel
 * - Elegant gold accents
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

export default function HomeSample7b() {
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

    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

    // Midnight Elite Color Palette
    const colors = {
        bg: isDark ? 'bg-slate-950' : 'bg-slate-900',
        bgCard: isDark ? 'bg-slate-900' : 'bg-slate-800',
        bgAlt: isDark ? 'bg-black' : 'bg-slate-950',
        text: 'text-white',
        textSecondary: 'text-slate-300',
        textMuted: 'text-slate-400',
        border: 'border-slate-700/50',
        accent: 'text-amber-400',
        accentBg: 'bg-amber-500/10',
        gold: 'text-amber-400',
        goldBg: 'bg-amber-400',
    };

    return (
        <main className={`${colors.bg} transition-colors duration-500`}>
            {/* Navbar */}
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    isScrolled
                        ? 'bg-slate-950/95 backdrop-blur-xl border-b border-amber-500/10'
                        : 'bg-transparent'
                }`}
            >
                <nav className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
                        <Link to="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg shadow-amber-500/30">
                                <Crown className="w-5 h-5 text-slate-900" />
                            </div>
                            <span className="font-bold text-xl text-white">
                                DentalElite
                            </span>
                        </Link>

                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-amber-400 hover:bg-amber-500/10 transition-all"
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
                                    className="px-6 py-2.5 rounded-lg font-medium text-sm text-slate-900 bg-gradient-to-r from-amber-400 to-amber-500 shadow-lg shadow-amber-500/30 hover:shadow-xl transition-all"
                                >
                                    Register
                                </motion.button>
                            </Link>
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden p-2 rounded-lg hover:bg-slate-800"
                            >
                                {isMobileMenuOpen
                                    ? <X className="w-6 h-6 text-white" />
                                    : <Menu className="w-6 h-6 text-white" />}
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden bg-slate-950/98 border-t border-slate-800 backdrop-blur-xl"
                    >
                        <div className="px-6 py-4 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="block py-3 px-4 rounded-lg text-slate-300 hover:bg-slate-800"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/register" className="block pt-2">
                                <button className="w-full py-3 rounded-lg font-medium text-slate-900 bg-gradient-to-r from-amber-400 to-amber-500">
                                    Register Now
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </motion.header>

            {/* Hero - Full Screen Cinematic */}
            <section ref={heroRef} className="relative h-screen overflow-hidden">
                <motion.div style={{ scale: heroScale }} className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/60 to-slate-950" />
                    <img
                        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&h=1080&fit=crop"
                        alt="Dental Excellence"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Gold Accent Lines */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
                </div>

                <motion.div
                    style={{ opacity: heroOpacity }}
                    className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-amber-500/10 border border-amber-500/30 mb-8"
                    >
                        <Crown className="w-5 h-5 text-amber-400" />
                        <span className="text-amber-300 text-sm font-medium uppercase tracking-wider">
                            Exclusive Event • {formatDate(mockEvent.date)}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold text-white max-w-5xl leading-[0.95] mb-6"
                    >
                        The Pinnacle of
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                            Dental Excellence
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="text-xl text-slate-300 max-w-2xl mb-12"
                    >
                        An exclusive 12-hour masterclass with the world's most distinguished dental authorities
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <Link to="/register">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-bold px-10 py-5 rounded-lg shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all"
                            >
                                Secure Your Place
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </Link>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            className="inline-flex items-center gap-2 px-10 py-5 rounded-lg text-amber-400 font-medium border border-amber-500/30 hover:bg-amber-500/10 transition-all"
                        >
                            <Play className="w-5 h-5" />
                            Watch Preview
                        </motion.button>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
                >
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                        <ChevronDown className="w-8 h-8 text-amber-400/50" />
                    </motion.div>
                </motion.div>
            </section>

            {/* Stats Bar */}
            <section className="py-12 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-y border-amber-500/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: '5', label: 'Distinguished Speakers' },
                            { value: '12', label: 'Hours of Mastery' },
                            { value: '5,000+', label: 'Elite Alumni' },
                            { value: '4.9', label: 'Excellence Rating' },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-amber-400">{stat.value}</div>
                                <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Speakers Section */}
            <section className={`py-28 ${colors.bgAlt}`}>
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 rounded-lg text-sm font-medium mb-4 bg-amber-500/10 text-amber-400 border border-amber-500/20">
                            The Masters
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Distinguished Faculty
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mockDentists.slice(0, 3).map((dentist, index) => (
                            <motion.div
                                key={dentist.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative rounded-xl overflow-hidden bg-slate-900 border border-amber-500/10 hover:border-amber-500/30 transition-all duration-500"
                            >
                                <div className="relative h-80 overflow-hidden">
                                    <img
                                        src={dentist.profileImageUrl}
                                        alt={dentist.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent" />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <span className="inline-block px-3 py-1 rounded text-xs font-medium mb-3 bg-amber-500/20 text-amber-400 border border-amber-500/20">
                                        {dentist.specialty.split('&')[0].trim()}
                                    </span>
                                    <h3 className="text-xl font-bold text-white mb-1">{dentist.name}</h3>
                                    <p className="text-slate-400 text-sm mb-1">{dentist.credentials}</p>
                                    <p className="text-amber-400/80 text-sm">{dentist.institution}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className={`py-28 ${colors.bg}`}>
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            The Elite Experience
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
                                className="p-8 rounded-xl border border-amber-500/10 bg-slate-900/50 hover:border-amber-500/30 transition-all"
                            >
                                <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/20">
                                    <feature.icon className="w-7 h-7 text-amber-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-slate-400">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className={`py-28 ${colors.bgAlt}`}>
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Words from the Elite
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
                                className="p-8 rounded-xl bg-slate-900 border border-amber-500/10"
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                                <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                                    "{review.reviewText}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={review.attendeePhotoUrl}
                                        alt={review.attendeeName}
                                        className="w-14 h-14 rounded-lg object-cover ring-2 ring-amber-500/30"
                                    />
                                    <div>
                                        <div className="font-semibold text-white">{review.attendeeName}</div>
                                        <div className="text-sm text-slate-400">{review.attendeeCredential}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-950 via-slate-950 to-slate-900" />
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_50%)]" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Crown className="w-16 h-16 text-amber-400 mx-auto mb-8" />
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Join the Elite
                        </h2>
                        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                            {formatDate(mockEvent.date)} • {mockEvent.durationHours} Hours • Exclusive Virtual Access
                        </p>
                        <Link to="/register">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-bold px-12 py-6 rounded-lg text-xl shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all"
                            >
                                Register Now — ${mockEvent.basePrice}
                                <ArrowRight className="w-6 h-6" />
                            </motion.button>
                        </Link>
                        <p className="text-slate-400 text-sm mt-6">
                            Limited to {mockEvent.maxCapacity} exclusive seats • {mockEvent.maxCapacity - mockEvent.currentRegistrations} remaining
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black border-t border-amber-500/10">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div className="lg:col-span-1">
                            <Link to="/" className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                                    <Crown className="w-5 h-5 text-slate-900" />
                                </div>
                                <span className="font-bold text-xl text-white">DentalElite</span>
                            </Link>
                            <p className="text-slate-400 text-sm mb-6">
                                Excellence in dental education for distinguished practitioners.
                            </p>
                            <div className="flex gap-3">
                                {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                                    <a key={i} href="#" className="w-10 h-10 rounded-lg bg-slate-900 hover:bg-amber-500/20 border border-amber-500/10 flex items-center justify-center transition-all">
                                        <Icon className="w-4 h-4 text-amber-400" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold text-white mb-4">Company</h4>
                            <ul className="space-y-3">
                                {['About Us', 'Faculty', 'Testimonials', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <Link to="#" className="text-sm text-slate-400 hover:text-amber-400 transition-colors">
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
                                        <Link to="#" className="text-sm text-slate-400 hover:text-amber-400 transition-colors">
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
                                    <Mail className="w-4 h-4 text-amber-400" />
                                    <span className="text-sm text-slate-400">concierge@dentalelite.com</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className="w-4 h-4 text-amber-400" />
                                    <span className="text-sm text-slate-400">+1-888-ELITE-DT</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <MapPin className="w-4 h-4 text-amber-400 mt-0.5" />
                                    <span className="text-sm text-slate-400">New York, NY</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-slate-500">
                            © {new Date().getFullYear()} DentalElite. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            {['Privacy', 'Terms', 'Cookies'].map((item) => (
                                <Link key={item} to="#" className="text-sm text-slate-500 hover:text-amber-400 transition-colors">
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
