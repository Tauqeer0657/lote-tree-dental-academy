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
    Sun
} from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';
import ThemeToggle from '../../../components/ui/ThemeToggle';
import { dentists as mockDentists, upcomingEvent as mockEvent, reviews as mockReviews } from '../../../data/mockData';
import { formatDate } from '../../../lib/utils';

/**
 * SAMPLE 7E: WARM TRUST
 *
 * Design Philosophy:
 * - Warm Beige + Terracotta + Cream color palette
 * - Horizontal flow layout with scrolling sections
 * - Welcoming, home-like healthcare aesthetic
 * - Soft shadows and warm tones
 * - Trust-building, approachable feel
 */

const highlights = [
    { icon: Clock, title: '12 Hours Live', description: 'Complete immersive training.' },
    { icon: MessageCircle, title: 'Live Q&A', description: 'Real-time interaction.' },
    { icon: Award, title: 'Certification', description: 'Recognized credentials.' },
    { icon: Users, title: 'Community', description: 'Join 5000+ pros.' },
    { icon: Video, title: 'Recordings', description: 'Unlimited access.' },
    { icon: FileCheck, title: 'Resources', description: 'Full materials.' },
];

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Speakers', path: '/dentists' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
];

export default function HomeSample7e() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Warm Trust Color System
    const colors = {
        bg: isDark ? 'bg-stone-950' : 'bg-amber-50/30',
        bgAlt: isDark ? 'bg-stone-900' : 'bg-white',
        bgCard: isDark ? 'bg-stone-900' : 'bg-white',
        text: isDark ? 'text-white' : 'text-stone-900',
        textSecondary: isDark ? 'text-stone-300' : 'text-stone-600',
        textMuted: isDark ? 'text-stone-400' : 'text-stone-500',
        accent: isDark ? 'text-amber-400' : 'text-amber-700',
        accentBg: isDark ? 'bg-amber-500/10' : 'bg-amber-100',
        accentBorder: isDark ? 'border-amber-500/20' : 'border-amber-200',
        terracotta: isDark ? 'text-orange-400' : 'text-orange-700',
        terracottaBg: isDark ? 'bg-orange-500/10' : 'bg-orange-100',
        primaryGradient: 'from-amber-500 via-orange-500 to-red-500',
    };

    return (
        <main className={`${colors.bg} transition-colors duration-500`}>
            {/* Warm Navigation */}
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    isScrolled
                        ? isDark
                            ? 'bg-stone-950/95 backdrop-blur-xl border-b border-amber-500/10'
                            : 'bg-white/95 backdrop-blur-xl border-b border-amber-200 shadow-lg shadow-amber-500/5'
                        : 'bg-transparent'
                }`}
            >
                <nav className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
                        <Link to="/" className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center bg-gradient-to-br ${colors.primaryGradient} shadow-lg shadow-amber-500/30`}>
                                <Sun className="w-5 h-5 text-white" />
                            </div>
                            <span className={`font-bold text-xl ${colors.text}`}>
                                WarmSmile
                            </span>
                        </Link>

                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${colors.textSecondary} ${isDark ? 'hover:bg-amber-500/10 hover:text-amber-400' : 'hover:bg-amber-50 hover:text-amber-700'}`}
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
                                    whileTap={{ scale: 0.98 }}
                                    className={`px-6 py-2.5 rounded-full font-medium text-sm text-white bg-gradient-to-r ${colors.primaryGradient} shadow-lg shadow-amber-500/30`}
                                >
                                    Register
                                </motion.button>
                            </Link>
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className={`md:hidden p-2 rounded-xl ${isDark ? 'hover:bg-stone-800' : 'hover:bg-amber-50'}`}
                            >
                                {isMobileMenuOpen ? <X className={`w-6 h-6 ${colors.text}`} /> : <Menu className={`w-6 h-6 ${colors.text}`} />}
                            </button>
                        </div>
                    </div>
                </nav>

                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`md:hidden border-t ${isDark ? 'bg-stone-950/98 border-stone-800' : 'bg-white/98 border-amber-100'} backdrop-blur-xl`}
                    >
                        <div className="px-6 py-4 space-y-2">
                            {navLinks.map((link) => (
                                <Link key={link.path} to={link.path} className={`block py-3 px-4 rounded-xl ${colors.textSecondary}`} onClick={() => setIsMobileMenuOpen(false)}>
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/register" className="block pt-2">
                                <button className={`w-full py-3 rounded-full font-medium text-white bg-gradient-to-r ${colors.primaryGradient}`}>Register Now</button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </motion.header>

            {/* Hero - Horizontal Flow */}
            <section className={`min-h-screen pt-24 pb-16 ${colors.bgAlt}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
                        {/* Content */}
                        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${colors.accentBg} border ${colors.accentBorder} mb-6`}>
                                <Sun className={`w-4 h-4 ${colors.accent}`} />
                                <span className={`text-sm font-medium ${colors.accent}`}>
                                    {formatDate(mockEvent.date)}
                                </span>
                            </div>

                            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${colors.text} leading-[1.1] mb-6`}>
                                Learn in a
                                <span className={`block text-transparent bg-clip-text bg-gradient-to-r ${colors.primaryGradient}`}>
                                    Welcoming Space
                                </span>
                            </h1>

                            <p className={`text-lg ${colors.textSecondary} mb-8 max-w-md`}>
                                Join our warm, supportive community for 12 hours of transformative dental education with 5 caring experts.
                            </p>

                            <div className="flex flex-wrap gap-4 mb-12">
                                <Link to="/register">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r ${colors.primaryGradient} shadow-xl shadow-amber-500/30`}
                                    >
                                        Join the Family
                                        <ArrowRight className="w-5 h-5" />
                                    </motion.button>
                                </Link>
                            </div>

                            {/* Stats Row */}
                            <div className="flex gap-8">
                                {[
                                    { value: '5', label: 'Experts' },
                                    { value: '12h', label: 'Content' },
                                    { value: '5K+', label: 'Alumni' },
                                    { value: '4.9★', label: 'Rating' },
                                ].map((stat) => (
                                    <div key={stat.label}>
                                        <div className={`text-2xl font-bold ${colors.accent}`}>{stat.value}</div>
                                        <div className={`text-sm ${colors.textMuted}`}>{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Warm Image Collage */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="relative"
                        >
                            <div className={`absolute -inset-4 rounded-[2rem] ${isDark ? 'bg-gradient-to-br from-amber-500/10 to-orange-500/10' : 'bg-gradient-to-br from-amber-200/50 to-orange-200/50'} blur-2xl`} />
                            <div className="relative grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <img
                                        src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop"
                                        alt="Warm dental care"
                                        className="rounded-2xl w-full h-48 object-cover shadow-xl"
                                    />
                                    <div className={`p-6 rounded-2xl ${isDark ? 'bg-stone-800' : 'bg-amber-100'}`}>
                                        <div className={`text-3xl font-bold ${colors.accent}`}>4.9★</div>
                                        <div className={`text-sm ${colors.textMuted}`}>Average Rating</div>
                                    </div>
                                </div>
                                <div className="space-y-4 pt-8">
                                    <div className={`p-6 rounded-2xl ${isDark ? 'bg-orange-500/10 border border-orange-500/20' : 'bg-orange-100'}`}>
                                        <div className={`text-3xl font-bold ${colors.terracotta}`}>5,000+</div>
                                        <div className={`text-sm ${colors.textMuted}`}>Happy Alumni</div>
                                    </div>
                                    <img
                                        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=350&fit=crop"
                                        alt="Welcoming environment"
                                        className="rounded-2xl w-full h-56 object-cover shadow-xl"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Speakers - Horizontal Scroll Cards */}
            <section className={`py-24 ${colors.bg}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${colors.accentBg} ${colors.accent}`}>
                            Your Mentors
                        </span>
                        <h2 className={`text-4xl md:text-5xl font-bold ${colors.text}`}>
                            Warm, Caring Experts
                        </h2>
                    </motion.div>

                    {/* Horizontal Scrolling Cards */}
                    <div className="flex overflow-x-auto gap-6 pb-6 -mx-6 px-6 snap-x snap-mandatory scrollbar-hide">
                        {mockDentists.map((dentist, index) => (
                            <motion.div
                                key={dentist.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex-none w-[280px] md:w-[320px] snap-center"
                            >
                                <div className={`rounded-3xl overflow-hidden ${colors.bgCard} shadow-xl border ${isDark ? 'border-stone-800' : 'border-amber-100'}`}>
                                    <div className="relative h-64 overflow-hidden">
                                        <img src={dentist.profileImageUrl} alt={dentist.name} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                    </div>
                                    <div className="p-6">
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${colors.accentBg} ${colors.accent}`}>
                                            {dentist.specialty.split('&')[0].trim()}
                                        </span>
                                        <h3 className={`text-lg font-bold ${colors.text} mb-1`}>{dentist.name}</h3>
                                        <p className={`${colors.textMuted} text-sm`}>{dentist.institution}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className={`py-24 ${colors.bgAlt}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`text-4xl md:text-5xl font-bold ${colors.text} text-center mb-16`}
                    >
                        What's Included
                    </motion.h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {highlights.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-8 rounded-3xl border ${isDark ? 'border-stone-800 bg-stone-900/50' : 'border-amber-100 bg-white'} shadow-lg`}
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
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`text-4xl md:text-5xl font-bold ${colors.text} text-center mb-16`}
                    >
                        From Our Family
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {mockReviews.slice(0, 3).map((review, index) => (
                            <motion.div
                                key={review.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-8 rounded-3xl ${colors.bgCard} shadow-lg border ${isDark ? 'border-stone-800' : 'border-amber-100'}`}
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                                    ))}
                                </div>
                                <p className={`${colors.textSecondary} mb-6 text-lg leading-relaxed`}>"{review.reviewText}"</p>
                                <div className="flex items-center gap-4">
                                    <img src={review.attendeePhotoUrl} alt={review.attendeeName} className="w-14 h-14 rounded-full object-cover ring-2 ring-amber-500/30" />
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

            {/* CTA */}
            <section className="relative py-24 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${isDark ? 'from-amber-950 via-stone-950 to-orange-950' : 'from-amber-500 via-orange-500 to-red-500'}`} />

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <Sun className="w-16 h-16 text-white/80 mx-auto mb-8" />
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Welcome Home</h2>
                        <p className="text-xl text-white/80 mb-8">{formatDate(mockEvent.date)} • {mockEvent.durationHours} Hours • Virtual</p>
                        <Link to="/register">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-3 bg-white text-amber-700 font-bold px-10 py-5 rounded-full text-lg shadow-2xl"
                            >
                                Join the Family — ${mockEvent.basePrice}
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </Link>
                        <p className="text-white/60 text-sm mt-6">{mockEvent.maxCapacity - mockEvent.currentRegistrations} seats remaining</p>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className={`${isDark ? 'bg-stone-950' : 'bg-stone-900'}`}>
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div>
                            <Link to="/" className="flex items-center gap-3 mb-4">
                                <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${colors.primaryGradient} flex items-center justify-center`}>
                                    <Sun className="w-5 h-5 text-white" />
                                </div>
                                <span className="font-bold text-xl text-white">WarmSmile</span>
                            </Link>
                            <p className="text-white/60 text-sm mb-6">Welcoming dental education for caring practitioners.</p>
                            <div className="flex gap-3">
                                {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                                    <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-amber-500/20 flex items-center justify-center">
                                        <Icon className="w-4 h-4 text-amber-400" />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-4">Company</h4>
                            <ul className="space-y-3">
                                {['About', 'Speakers', 'Reviews', 'Contact'].map((item) => (
                                    <li key={item}><Link to="#" className="text-sm text-white/60 hover:text-amber-400">{item}</Link></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-4">Resources</h4>
                            <ul className="space-y-3">
                                {['Event Details', 'CE Credits', 'FAQ', 'Blog'].map((item) => (
                                    <li key={item}><Link to="#" className="text-sm text-white/60 hover:text-amber-400">{item}</Link></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-4">Contact</h4>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-amber-400" /><span className="text-sm text-white/60">hello@warmsmile.com</span></li>
                                <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-amber-400" /><span className="text-sm text-white/60">+1-888-WARM</span></li>
                                <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-amber-400" /><span className="text-sm text-white/60">Denver, CO</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-white/40">© {new Date().getFullYear()} WarmSmile. All rights reserved.</p>
                        <div className="flex gap-6">
                            {['Privacy', 'Terms', 'Cookies'].map((item) => (
                                <Link key={item} to="#" className="text-sm text-white/40 hover:text-amber-400">{item}</Link>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
