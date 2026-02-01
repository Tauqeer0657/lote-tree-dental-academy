import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
    Star,
    Menu,
    X,
    Mail,
    Phone,
    Linkedin,
    Twitter,
    Instagram,
    Cpu,
    Scan,
    Zap,
    Layers,
    Monitor,
    Wifi
} from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';
import ThemeToggle from '../../../components/ui/ThemeToggle';
import { dentists as mockDentists, upcomingEvent as mockEvent, reviews as mockReviews } from '../../../data/mockData';
import { formatDate } from '../../../lib/utils';

/**
 * SAMPLE 7H: TECHNOLOGY FOCUS
 *
 * Design Philosophy:
 * - Cyan + Electric Blue color palette
 * - Tech-forward design with digital elements
 * - Animated backgrounds and tech patterns
 * - Innovation-focused healthcare aesthetic
 * - Futuristic, cutting-edge medical feel
 */

const techFeatures = [
    { icon: Scan, title: '3D Imaging Workshop', description: 'Advanced scanning techniques' },
    { icon: Cpu, title: 'AI Diagnostics', description: 'Machine learning in dentistry' },
    { icon: Layers, title: 'CAD/CAM Design', description: 'Digital restoration mastery' },
    { icon: Monitor, title: 'Virtual Planning', description: 'Implant simulation' },
    { icon: Zap, title: 'Live Demos', description: 'Real-time technology use' },
    { icon: Wifi, title: 'Cloud Integration', description: 'Connected workflows' },
];

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Speakers', path: '/dentists' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
];

export default function HomeSample7h() {
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

    const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);

    // Technology Color System
    const colors = {
        bg: isDark ? 'bg-slate-950' : 'bg-slate-100',
        bgAlt: isDark ? 'bg-slate-900' : 'bg-white',
        bgCard: isDark ? 'bg-slate-900' : 'bg-white',
        text: isDark ? 'text-white' : 'text-slate-900',
        textSecondary: isDark ? 'text-slate-300' : 'text-slate-600',
        textMuted: isDark ? 'text-slate-400' : 'text-slate-500',
        accent: isDark ? 'text-cyan-400' : 'text-cyan-600',
        accentBg: isDark ? 'bg-cyan-500/10' : 'bg-cyan-100',
        accentBorder: isDark ? 'border-cyan-500/20' : 'border-cyan-200',
        primaryGradient: 'from-cyan-400 via-blue-500 to-indigo-600',
    };

    return (
        <main className={`${colors.bg} transition-colors duration-500 overflow-hidden`}>
            {/* Tech Navigation */}
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? isDark
                            ? 'bg-slate-950/90 backdrop-blur-xl border-b border-cyan-500/20'
                            : 'bg-white/90 backdrop-blur-xl border-b border-cyan-100 shadow-lg shadow-cyan-500/5'
                        : 'bg-transparent'
                }`}
            >
                <nav className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}>
                        <Link to="/" className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${colors.primaryGradient} shadow-lg shadow-cyan-500/30`}>
                                <Cpu className="w-5 h-5 text-white" />
                            </div>
                            <span className={`font-bold text-xl ${colors.text}`}>DentaTech</span>
                        </Link>

                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link key={link.path} to={link.path} className={`px-4 py-2 rounded-lg text-sm font-medium ${colors.textSecondary} hover:text-cyan-400 transition-colors`}>
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <div className="flex items-center gap-3">
                            <ThemeToggle />
                            <Link to="/register" className="hidden md:block">
                                <motion.button whileHover={{ scale: 1.02 }} className={`px-5 py-2.5 rounded-lg font-medium text-sm text-white bg-gradient-to-r ${colors.primaryGradient}`}>
                                    Register
                                </motion.button>
                            </Link>
                            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2">
                                {isMobileMenuOpen ? <X className={`w-6 h-6 ${colors.text}`} /> : <Menu className={`w-6 h-6 ${colors.text}`} />}
                            </button>
                        </div>
                    </div>
                </nav>

                {isMobileMenuOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`md:hidden ${isDark ? 'bg-slate-950' : 'bg-white'} border-t ${isDark ? 'border-slate-800' : 'border-cyan-100'}`}>
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

            {/* Hero - Tech-Forward with Animated Background */}
            <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
                {/* Animated Tech Grid Background */}
                <motion.div style={{ y: bgY }} className="absolute inset-0">
                    <div className={`absolute inset-0 ${isDark ? 'opacity-30' : 'opacity-10'}`}>
                        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className={colors.accent} />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid)" />
                        </svg>
                    </div>
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/20 blur-[100px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-500/20 blur-[100px]" />
                </motion.div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${colors.accentBg} border ${colors.accentBorder} mb-6`}>
                                <Zap className={`w-4 h-4 ${colors.accent}`} />
                                <span className={`text-sm font-medium ${colors.accent}`}>
                                    Tech Summit • {formatDate(mockEvent.date)}
                                </span>
                            </div>

                            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${colors.text} leading-[1.1] mb-6`}>
                                The Future of
                                <span className={`block text-transparent bg-clip-text bg-gradient-to-r ${colors.primaryGradient}`}>
                                    Digital Dentistry
                                </span>
                            </h1>

                            <p className={`text-lg ${colors.textSecondary} mb-8 max-w-md`}>
                                12 hours of cutting-edge technology training with 5 industry-leading digital dentistry innovators.
                            </p>

                            <div className="flex flex-wrap gap-4 mb-12">
                                <Link to="/register">
                                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r ${colors.primaryGradient} shadow-xl shadow-cyan-500/30`}>
                                        <Zap className="w-5 h-5" />
                                        Access Technology
                                    </motion.button>
                                </Link>
                            </div>

                            {/* Tech Stats */}
                            <div className="grid grid-cols-4 gap-6">
                                {[
                                    { value: '5', label: 'Tech Experts' },
                                    { value: '12h', label: 'Content' },
                                    { value: '20+', label: 'Tech Demos' },
                                    { value: 'CE', label: 'Certified' },
                                ].map((stat) => (
                                    <div key={stat.label} className="text-center">
                                        <div className={`text-2xl font-bold ${colors.accent}`}>{stat.value}</div>
                                        <div className={`text-xs ${colors.textMuted}`}>{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Tech Visual */}
                        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="relative">
                            <div className={`absolute -inset-4 rounded-3xl bg-gradient-to-br ${colors.primaryGradient} opacity-20 blur-2xl`} />
                            <div className={`relative rounded-3xl overflow-hidden border-2 ${isDark ? 'border-cyan-500/30' : 'border-cyan-200'} shadow-2xl`}>
                                <img
                                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop"
                                    alt="Dental Technology"
                                    className="w-full h-[400px] object-cover"
                                />
                                {/* Tech Overlay */}
                                <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent' : 'bg-gradient-to-t from-slate-900/80 via-transparent to-transparent'}`} />
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <div className="flex items-center gap-4">
                                        <div className={`p-3 rounded-xl ${isDark ? 'bg-cyan-500/20' : 'bg-cyan-100'} backdrop-blur-md`}>
                                            <Scan className="w-6 h-6 text-cyan-400" />
                                        </div>
                                        <div>
                                            <div className="text-white font-semibold">3D Scanning Live Demo</div>
                                            <div className="text-cyan-300/80 text-sm">Powered by AI</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Technology Features */}
            <section className={`py-24 ${colors.bgAlt}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                        <span className={`inline-block px-4 py-2 rounded-lg text-sm font-medium mb-4 ${colors.accentBg} ${colors.accent} uppercase tracking-wider`}>
                            Technology Modules
                        </span>
                        <h2 className={`text-4xl md:text-5xl font-bold ${colors.text}`}>
                            Cutting-Edge Curriculum
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {techFeatures.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`group p-6 rounded-2xl border ${isDark ? 'border-slate-800 bg-slate-900/50' : 'border-cyan-100 bg-white'} hover:border-cyan-500/50 transition-all duration-300`}
                            >
                                <div className={`w-14 h-14 rounded-xl ${colors.accentBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    <feature.icon className={`w-7 h-7 ${colors.accent}`} />
                                </div>
                                <h3 className={`text-lg font-bold ${colors.text} mb-2`}>{feature.title}</h3>
                                <p className={colors.textSecondary}>{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Speakers - Tech Style */}
            <section className={`py-24 ${colors.bg}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-end justify-between mb-12">
                        <div>
                            <span className={`text-sm font-medium ${colors.accent} uppercase tracking-wider`}>Tech Leaders</span>
                            <h2 className={`text-3xl md:text-4xl font-bold ${colors.text} mt-2`}>Innovation Speakers</h2>
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {mockDentists.slice(0, 3).map((dentist, index) => (
                            <motion.div
                                key={dentist.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`group ${colors.bgCard} rounded-2xl overflow-hidden border ${isDark ? 'border-slate-800' : 'border-cyan-100'} hover:border-cyan-500/50 transition-all`}
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img src={dentist.profileImageUrl} alt={dentist.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-slate-900' : 'from-slate-800'} to-transparent`} />
                                </div>
                                <div className="p-6 -mt-16 relative">
                                    <span className={`inline-block px-3 py-1 rounded-lg text-xs font-medium mb-3 ${colors.accentBg} ${colors.accent}`}>
                                        {dentist.specialty.split('&')[0].trim()}
                                    </span>
                                    <h3 className={`text-lg font-bold ${colors.text}`}>{dentist.name}</h3>
                                    <p className={`text-sm ${colors.textMuted}`}>{dentist.institution}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className={`py-24 ${colors.bgAlt}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`text-3xl md:text-4xl font-bold ${colors.text} text-center mb-12`}>
                        Tech User Reviews
                    </motion.h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {mockReviews.slice(0, 3).map((review, index) => (
                            <motion.div key={review.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                                className={`p-6 rounded-2xl ${colors.bgCard} border ${isDark ? 'border-slate-800' : 'border-cyan-100'}`}>
                                <div className="flex gap-1 mb-4">
                                    {[...Array(review.rating)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-cyan-500 text-cyan-500" />))}
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
            <section className="relative py-24 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.primaryGradient}`} />
                <div className="absolute inset-0 opacity-30">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.3" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#cta-grid)" />
                    </svg>
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <Cpu className="w-16 h-16 text-white/80 mx-auto mb-8" />
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Upgrade Your Practice</h2>
                        <p className="text-xl text-white/80 mb-8">{formatDate(mockEvent.date)} • {mockEvent.durationHours} Hours • ${mockEvent.basePrice}</p>
                        <Link to="/register">
                            <motion.button whileHover={{ scale: 1.02 }} className="inline-flex items-center gap-2 bg-white text-cyan-600 font-bold px-10 py-5 rounded-xl text-lg shadow-2xl">
                                <Zap className="w-5 h-5" />
                                Get Tech Access
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
                                    <Cpu className="w-4 h-4 text-white" />
                                </div>
                                <span className="font-bold text-white">DentaTech</span>
                            </Link>
                            <p className="text-white/50 text-sm">Dental technology education.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-3 text-sm">Company</h4>
                            <ul className="space-y-2">
                                {['About', 'Speakers', 'Contact'].map((item) => (<li key={item}><Link to="#" className="text-sm text-white/50 hover:text-cyan-400">{item}</Link></li>))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-3 text-sm">Resources</h4>
                            <ul className="space-y-2">
                                {['FAQ', 'CE Credits', 'Blog'].map((item) => (<li key={item}><Link to="#" className="text-sm text-white/50 hover:text-cyan-400">{item}</Link></li>))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-3 text-sm">Contact</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2"><Mail className="w-3 h-3 text-cyan-400" /><span className="text-sm text-white/50">tech@dentatech.com</span></li>
                                <li className="flex items-center gap-2"><Phone className="w-3 h-3 text-cyan-400" /><span className="text-sm text-white/50">+1-888-TECH</span></li>
                            </ul>
                            <div className="flex gap-2 mt-4">
                                {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                                    <a key={i} href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-cyan-500/20 flex items-center justify-center">
                                        <Icon className="w-3 h-3 text-cyan-400" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-xs text-white/30">© {new Date().getFullYear()} DentaTech</p>
                        <div className="flex gap-4">
                            {['Privacy', 'Terms'].map((item) => (<Link key={item} to="#" className="text-xs text-white/30 hover:text-cyan-400">{item}</Link>))}
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
