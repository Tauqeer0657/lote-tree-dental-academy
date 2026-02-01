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
    Linkedin,
    Twitter,
    Instagram,
    Snowflake,
    TrendingUp,
    BarChart3,
    Target
} from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';
import ThemeToggle from '../../../components/ui/ThemeToggle';
import { dentists as mockDentists, upcomingEvent as mockEvent, reviews as mockReviews } from '../../../data/mockData';
import { formatDate } from '../../../lib/utils';

/**
 * SAMPLE 7F: ARCTIC PRO
 *
 * Design Philosophy:
 * - Ice Blue + Steel Gray color palette
 * - Dashboard/data-focused layout
 * - Clinical, professional, data-driven aesthetic
 * - Sharp lines and precise metrics
 * - Modern medical technology feel
 */

const highlights = [
    { icon: Clock, title: '12 Hours', description: 'Comprehensive training' },
    { icon: MessageCircle, title: 'Live Q&A', description: 'Direct expert access' },
    { icon: Award, title: 'CE Credits', description: 'Certified education' },
    { icon: Users, title: '5,000+', description: 'Trained practitioners' },
    { icon: Video, title: 'On-Demand', description: 'Lifetime access' },
    { icon: FileCheck, title: 'Materials', description: 'Full resources' },
];

const stats = [
    { icon: TrendingUp, value: '98%', label: 'Satisfaction Rate' },
    { icon: BarChart3, value: '5,000+', label: 'Dentists Trained' },
    { icon: Target, value: '12', label: 'CE Credit Hours' },
    { icon: Award, value: '4.9/5', label: 'Average Rating' },
];

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Speakers', path: '/dentists' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
];

export default function HomeSample7f() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Arctic Pro Color System
    const colors = {
        bg: isDark ? 'bg-slate-950' : 'bg-slate-50',
        bgAlt: isDark ? 'bg-slate-900' : 'bg-white',
        bgCard: isDark ? 'bg-slate-900' : 'bg-white',
        text: isDark ? 'text-white' : 'text-slate-900',
        textSecondary: isDark ? 'text-slate-300' : 'text-slate-600',
        textMuted: isDark ? 'text-slate-400' : 'text-slate-500',
        accent: isDark ? 'text-sky-400' : 'text-sky-600',
        accentBg: isDark ? 'bg-sky-500/10' : 'bg-sky-100',
        accentBorder: isDark ? 'border-sky-500/20' : 'border-sky-200',
        steel: isDark ? 'text-slate-300' : 'text-slate-700',
        primaryGradient: 'from-sky-500 via-blue-500 to-indigo-500',
    };

    return (
        <main className={`${colors.bg} transition-colors duration-500`}>
            {/* Clean Professional Navigation */}
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? isDark
                            ? 'bg-slate-950/95 backdrop-blur-xl border-b border-slate-800'
                            : 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm'
                        : 'bg-transparent'
                }`}
            >
                <nav className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}>
                        <Link to="/" className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${colors.primaryGradient}`}>
                                <Snowflake className="w-5 h-5 text-white" />
                            </div>
                            <span className={`font-bold text-xl ${colors.text}`}>DentalPro</span>
                        </Link>

                        <div className="hidden md:flex items-center gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`text-sm font-medium transition-colors ${colors.textSecondary} hover:${colors.accent}`}
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
                                    className={`px-5 py-2 rounded-lg font-medium text-sm text-white bg-gradient-to-r ${colors.primaryGradient}`}
                                >
                                    Register Now
                                </motion.button>
                            </Link>
                            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 rounded-lg">
                                {isMobileMenuOpen ? <X className={`w-6 h-6 ${colors.text}`} /> : <Menu className={`w-6 h-6 ${colors.text}`} />}
                            </button>
                        </div>
                    </div>
                </nav>

                {isMobileMenuOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`md:hidden ${isDark ? 'bg-slate-950' : 'bg-white'} border-t ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                        <div className="px-6 py-4 space-y-2">
                            {navLinks.map((link) => (
                                <Link key={link.path} to={link.path} className={`block py-3 ${colors.textSecondary}`} onClick={() => setIsMobileMenuOpen(false)}>{link.name}</Link>
                            ))}
                            <Link to="/register" className="block pt-2">
                                <button className={`w-full py-3 rounded-lg font-medium text-white bg-gradient-to-r ${colors.primaryGradient}`}>Register</button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </motion.header>

            {/* Hero - Dashboard Style */}
            <section className={`pt-28 pb-16 ${colors.bgAlt}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                            <span className={`inline-block px-3 py-1 rounded-md text-xs font-medium mb-4 ${colors.accentBg} ${colors.accent} uppercase tracking-wider`}>
                                Live Virtual Event
                            </span>
                        </motion.div>
                        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className={`text-4xl md:text-5xl lg:text-6xl font-bold ${colors.text} mb-4`}>
                            Data-Driven
                            <span className={`block text-transparent bg-clip-text bg-gradient-to-r ${colors.primaryGradient}`}>
                                Dental Excellence
                            </span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className={`text-lg ${colors.textSecondary} max-w-2xl mx-auto mb-8`}>
                            {formatDate(mockEvent.date)} • Evidence-based learning from 5 industry leaders
                        </motion.p>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                            <Link to="/register">
                                <motion.button whileHover={{ scale: 1.02 }} className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white bg-gradient-to-r ${colors.primaryGradient} shadow-lg`}>
                                    Secure Your Spot
                                    <ArrowRight className="w-5 h-5" />
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Dashboard Stats Grid */}
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {stats.map((stat) => (
                            <div key={stat.label} className={`p-6 rounded-xl ${colors.bgCard} border ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                                <div className={`w-10 h-10 rounded-lg ${colors.accentBg} flex items-center justify-center mb-4`}>
                                    <stat.icon className={`w-5 h-5 ${colors.accent}`} />
                                </div>
                                <div className={`text-2xl font-bold ${colors.text}`}>{stat.value}</div>
                                <div className={`text-sm ${colors.textMuted}`}>{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Featured Image Section */}
            <section className={`py-16 ${colors.bg}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-2xl overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1400&h=500&fit=crop"
                            alt="Modern dental technology"
                            className="w-full h-[400px] object-cover"
                        />
                        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-r from-slate-950/90 to-slate-950/20' : 'bg-gradient-to-r from-slate-900/80 to-transparent'}`} />
                        <div className="absolute inset-0 flex items-center p-12">
                            <div className="max-w-lg">
                                <h3 className="text-3xl font-bold text-white mb-4">Precision Meets Innovation</h3>
                                <p className="text-white/80 mb-6">Master cutting-edge techniques backed by clinical research and real-world data.</p>
                                <div className="flex gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-sky-400">12h</div>
                                        <div className="text-xs text-white/60">Content</div>
                                    </div>
                                    <div className={`w-px h-12 ${isDark ? 'bg-white/20' : 'bg-white/30'}`} />
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-sky-400">5</div>
                                        <div className="text-xs text-white/60">Experts</div>
                                    </div>
                                    <div className={`w-px h-12 ${isDark ? 'bg-white/20' : 'bg-white/30'}`} />
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-sky-400">CE</div>
                                        <div className="text-xs text-white/60">Certified</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Speakers - Clean Grid */}
            <section className={`py-20 ${colors.bgAlt}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-end justify-between mb-12">
                        <div>
                            <span className={`text-sm font-medium ${colors.accent} uppercase tracking-wider`}>Expert Faculty</span>
                            <h2 className={`text-3xl md:text-4xl font-bold ${colors.text} mt-2`}>Industry Leaders</h2>
                        </div>
                        <Link to="/dentists" className={`hidden md:flex items-center gap-2 ${colors.accent} font-medium`}>
                            View All <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mockDentists.slice(0, 3).map((dentist, index) => (
                            <motion.div
                                key={dentist.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`${colors.bgCard} rounded-xl overflow-hidden border ${isDark ? 'border-slate-800' : 'border-slate-200'} hover:shadow-lg transition-all`}
                            >
                                <div className="flex items-center gap-4 p-6">
                                    <img src={dentist.profileImageUrl} alt={dentist.name} className="w-16 h-16 rounded-xl object-cover" />
                                    <div>
                                        <h3 className={`font-bold ${colors.text}`}>{dentist.name}</h3>
                                        <p className={`text-sm ${colors.textMuted}`}>{dentist.credentials}</p>
                                        <span className={`inline-block px-2 py-0.5 rounded text-xs mt-2 ${colors.accentBg} ${colors.accent}`}>
                                            {dentist.specialty.split('&')[0].trim()}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features - Compact Cards */}
            <section className={`py-20 ${colors.bg}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`text-3xl md:text-4xl font-bold ${colors.text} text-center mb-12`}>
                        Program Features
                    </motion.h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {highlights.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className={`flex items-center gap-4 p-5 rounded-xl ${colors.bgCard} border ${isDark ? 'border-slate-800' : 'border-slate-200'}`}
                            >
                                <div className={`w-12 h-12 rounded-lg ${colors.accentBg} flex items-center justify-center flex-shrink-0`}>
                                    <feature.icon className={`w-6 h-6 ${colors.accent}`} />
                                </div>
                                <div>
                                    <h3 className={`font-semibold ${colors.text}`}>{feature.title}</h3>
                                    <p className={`text-sm ${colors.textMuted}`}>{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className={`py-20 ${colors.bgAlt}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`text-3xl md:text-4xl font-bold ${colors.text} text-center mb-12`}>
                        Verified Reviews
                    </motion.h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {mockReviews.slice(0, 3).map((review, index) => (
                            <motion.div
                                key={review.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-6 rounded-xl ${colors.bgCard} border ${isDark ? 'border-slate-800' : 'border-slate-200'}`}
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-sky-500 text-sky-500" />
                                    ))}
                                </div>
                                <p className={`${colors.textSecondary} mb-4 text-sm leading-relaxed`}>"{review.reviewText}"</p>
                                <div className="flex items-center gap-3">
                                    <img src={review.attendeePhotoUrl} alt={review.attendeeName} className="w-10 h-10 rounded-lg object-cover" />
                                    <div>
                                        <div className={`text-sm font-semibold ${colors.text}`}>{review.attendeeName}</div>
                                        <div className={`text-xs ${colors.textMuted}`}>{review.attendeeCredential}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-20 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.primaryGradient}`} />
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Ready to Level Up?</h2>
                        <p className="text-lg text-white/80 mb-8">{formatDate(mockEvent.date)} • {mockEvent.durationHours} CE Hours • ${mockEvent.basePrice}</p>
                        <Link to="/register">
                            <motion.button whileHover={{ scale: 1.02 }} className="inline-flex items-center gap-2 bg-white text-sky-600 font-bold px-8 py-4 rounded-lg shadow-xl">
                                Register Now <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className={`${isDark ? 'bg-slate-950' : 'bg-slate-900'} py-12`}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="col-span-2 md:col-span-1">
                            <Link to="/" className="flex items-center gap-2 mb-4">
                                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${colors.primaryGradient} flex items-center justify-center`}>
                                    <Snowflake className="w-4 h-4 text-white" />
                                </div>
                                <span className="font-bold text-white">DentalPro</span>
                            </Link>
                            <p className="text-white/50 text-sm">Data-driven dental education.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-3 text-sm">Company</h4>
                            <ul className="space-y-2">
                                {['About', 'Speakers', 'Contact'].map((item) => (
                                    <li key={item}><Link to="#" className="text-sm text-white/50 hover:text-sky-400">{item}</Link></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-3 text-sm">Resources</h4>
                            <ul className="space-y-2">
                                {['FAQ', 'CE Credits', 'Blog'].map((item) => (
                                    <li key={item}><Link to="#" className="text-sm text-white/50 hover:text-sky-400">{item}</Link></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-3 text-sm">Contact</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2"><Mail className="w-3 h-3 text-sky-400" /><span className="text-sm text-white/50">pro@dentalpro.com</span></li>
                                <li className="flex items-center gap-2"><Phone className="w-3 h-3 text-sky-400" /><span className="text-sm text-white/50">+1-888-PRO</span></li>
                            </ul>
                            <div className="flex gap-2 mt-4">
                                {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                                    <a key={i} href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-sky-500/20 flex items-center justify-center">
                                        <Icon className="w-3 h-3 text-sky-400" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-xs text-white/30">© {new Date().getFullYear()} DentalPro</p>
                        <div className="flex gap-4">
                            {['Privacy', 'Terms'].map((item) => (
                                <Link key={item} to="#" className="text-xs text-white/30 hover:text-sky-400">{item}</Link>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
