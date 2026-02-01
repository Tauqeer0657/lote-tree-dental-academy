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
    Shield
} from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';
import ThemeToggle from '../../../components/ui/ThemeToggle';
import { dentists as mockDentists, upcomingEvent as mockEvent, reviews as mockReviews } from '../../../data/mockData';
import { formatDate } from '../../../lib/utils';

/**
 * SAMPLE 7J: ROYAL AZURE
 *
 * Design Philosophy:
 * - Royal Blue + Silver color palette
 * - Grand, authoritative design
 * - Full-screen sections with bold typography
 * - Prestigious, institutional healthcare aesthetic
 * - Professional excellence with royal touches
 */

const highlights = [
    { icon: Clock, title: '12 Hours Live', description: 'Comprehensive training program' },
    { icon: MessageCircle, title: 'Live Q&A', description: 'Direct expert interaction' },
    { icon: Award, title: 'Certification', description: 'Prestigious credentials' },
    { icon: Users, title: 'Community', description: '5,000+ elite members' },
    { icon: Video, title: 'Recordings', description: 'Unlimited archive access' },
    { icon: FileCheck, title: 'Resources', description: 'Premium materials' },
];

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Faculty', path: '/dentists' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
];

export default function HomeSample7j() {
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
    const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.15]);

    // Royal Azure Color System
    const colors = {
        bg: isDark ? 'bg-slate-950' : 'bg-white',
        bgAlt: isDark ? 'bg-slate-900' : 'bg-blue-50/30',
        bgCard: isDark ? 'bg-slate-900' : 'bg-white',
        text: isDark ? 'text-white' : 'text-blue-950',
        textSecondary: isDark ? 'text-slate-300' : 'text-slate-600',
        textMuted: isDark ? 'text-slate-400' : 'text-slate-500',
        accent: isDark ? 'text-blue-400' : 'text-blue-700',
        accentBg: isDark ? 'bg-blue-500/10' : 'bg-blue-100',
        accentBorder: isDark ? 'border-blue-500/20' : 'border-blue-200',
        silver: isDark ? 'text-slate-300' : 'text-slate-400',
        primaryGradient: 'from-blue-600 via-blue-700 to-indigo-800',
    };

    return (
        <main className={`${colors.bg} transition-colors duration-500`}>
            {/* Royal Navigation */}
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    isScrolled
                        ? isDark
                            ? 'bg-slate-950/95 backdrop-blur-xl border-b border-blue-500/10'
                            : 'bg-white/95 backdrop-blur-xl border-b border-blue-100 shadow-lg'
                        : 'bg-transparent'
                }`}
            >
                <nav className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
                        <Link to="/" className="flex items-center gap-3">
                            <div className={`w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br ${colors.primaryGradient} shadow-xl shadow-blue-500/30`}>
                                <Shield className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <span className={`font-bold text-xl block leading-none ${colors.text}`}>Royal</span>
                                <span className={`text-xs ${colors.accent} tracking-wider`}>DENTAL INSTITUTE</span>
                            </div>
                        </Link>

                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link key={link.path} to={link.path} className={`px-4 py-2 rounded-lg text-sm font-medium ${colors.textSecondary} hover:text-blue-600 transition-colors`}>
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <div className="flex items-center gap-3">
                            <ThemeToggle />
                            <Link to="/register" className="hidden md:block">
                                <motion.button whileHover={{ scale: 1.02 }} className={`px-6 py-2.5 rounded-lg font-medium text-sm text-white bg-gradient-to-r ${colors.primaryGradient} shadow-lg shadow-blue-500/30`}>
                                    Apply Now
                                </motion.button>
                            </Link>
                            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2">
                                {isMobileMenuOpen ? <X className={`w-6 h-6 ${colors.text}`} /> : <Menu className={`w-6 h-6 ${colors.text}`} />}
                            </button>
                        </div>
                    </div>
                </nav>

                {isMobileMenuOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`md:hidden ${isDark ? 'bg-slate-950' : 'bg-white'} border-t ${isDark ? 'border-slate-800' : 'border-blue-100'}`}>
                        <div className="px-6 py-4 space-y-2">
                            {navLinks.map((link) => (
                                <Link key={link.path} to={link.path} className={`block py-3 ${colors.textSecondary}`} onClick={() => setIsMobileMenuOpen(false)}>{link.name}</Link>
                            ))}
                            <Link to="/register" className="block pt-2">
                                <button className={`w-full py-3 rounded-lg font-medium text-white bg-gradient-to-r ${colors.primaryGradient}`}>Apply Now</button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </motion.header>

            {/* Hero - Grand Full Screen */}
            <section ref={heroRef} className="relative h-screen overflow-hidden">
                <motion.div style={{ scale: heroScale }} className="absolute inset-0">
                    <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-blue-950/80 via-slate-950/70 to-slate-950' : 'bg-gradient-to-b from-blue-900/60 via-blue-950/50 to-blue-950/90'}`} />
                    <img
                        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&h=1080&fit=crop"
                        alt="Royal Dental Institute"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Silver accent lines */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />
                    <div className="absolute bottom-32 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/20 to-transparent" />
                </div>

                <motion.div style={{ opacity: heroOpacity }} className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-500/10 border border-blue-400/20 backdrop-blur-md mb-8"
                    >
                        <Shield className="w-5 h-5 text-blue-300" />
                        <span className="text-blue-200 text-sm font-medium tracking-wider uppercase">
                            {formatDate(mockEvent.date)} • Prestigious Event
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold text-white max-w-5xl leading-[0.95] mb-6"
                    >
                        Excellence in
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-200 to-slate-200">
                            Dental Education
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="text-xl text-blue-100/80 max-w-2xl mb-12"
                    >
                        An exclusive 12-hour program led by 5 distinguished faculty members from premier institutions
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <Link to="/register">
                            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={`inline-flex items-center gap-2 bg-gradient-to-r ${colors.primaryGradient} text-white font-bold px-10 py-5 rounded-lg shadow-2xl shadow-blue-500/40`}>
                                Apply for Admission
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </Link>
                        <motion.button whileHover={{ scale: 1.02 }} className="inline-flex items-center gap-2 px-10 py-5 rounded-lg text-blue-200 font-medium border border-blue-400/30 bg-blue-500/10 backdrop-blur-md">
                            <Play className="w-5 h-5" />
                            View Prospectus
                        </motion.button>
                    </motion.div>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                        <ChevronDown className="w-8 h-8 text-blue-300/50" />
                    </motion.div>
                </motion.div>
            </section>

            {/* Prestige Stats */}
            <section className={`py-16 ${colors.bgAlt} border-y ${isDark ? 'border-blue-500/10' : 'border-blue-100'}`}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: '5', label: 'Distinguished Faculty' },
                            { value: '12', label: 'Hours of Excellence' },
                            { value: '5,000+', label: 'Alumni Worldwide' },
                            { value: '4.9', label: 'Excellence Rating' },
                        ].map((stat, index) => (
                            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center">
                                <div className={`text-4xl font-bold ${colors.accent}`}>{stat.value}</div>
                                <div className={`text-sm ${colors.textMuted} mt-1`}>{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Faculty Section */}
            <section className={`py-24 ${colors.bg}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                        <span className={`inline-block px-4 py-2 rounded-lg text-sm font-medium mb-4 ${colors.accentBg} ${colors.accent} uppercase tracking-wider`}>
                            Distinguished Faculty
                        </span>
                        <h2 className={`text-4xl md:text-5xl font-bold ${colors.text}`}>
                            Learn from the Best
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {mockDentists.slice(0, 3).map((dentist, index) => (
                            <motion.div
                                key={dentist.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className={`group rounded-2xl overflow-hidden ${colors.bgCard} shadow-xl border ${isDark ? 'border-slate-800' : 'border-blue-100'} hover:shadow-2xl transition-all duration-500`}
                            >
                                <div className="relative h-72 overflow-hidden">
                                    <img src={dentist.profileImageUrl} alt={dentist.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-slate-900' : 'from-blue-950'} via-transparent to-transparent`} />
                                </div>
                                <div className="p-6">
                                    <span className={`inline-block px-3 py-1 rounded-lg text-xs font-medium mb-3 ${colors.accentBg} ${colors.accent}`}>
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

            {/* Program Features */}
            <section className={`py-24 ${colors.bgAlt}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`text-4xl md:text-5xl font-bold ${colors.text} text-center mb-16`}>
                        Program Excellence
                    </motion.h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {highlights.map((feature, index) => (
                            <motion.div key={feature.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                                className={`p-8 rounded-2xl border ${isDark ? 'border-slate-800 bg-slate-900/50' : 'border-blue-100 bg-white'} shadow-lg hover:shadow-xl transition-all`}>
                                <div className={`w-14 h-14 rounded-xl ${colors.accentBg} flex items-center justify-center mb-6`}>
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
                    <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`text-4xl md:text-5xl font-bold ${colors.text} text-center mb-16`}>
                        Alumni Testimonials
                    </motion.h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {mockReviews.slice(0, 3).map((review, index) => (
                            <motion.div key={review.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                                className={`p-8 rounded-2xl ${colors.bgCard} shadow-lg border ${isDark ? 'border-slate-800' : 'border-blue-100'}`}>
                                <div className="flex gap-1 mb-4">
                                    {[...Array(review.rating)].map((_, i) => (<Star key={i} className="w-5 h-5 fill-blue-500 text-blue-500" />))}
                                </div>
                                <p className={`${colors.textSecondary} mb-6 text-lg leading-relaxed italic`}>"{review.reviewText}"</p>
                                <div className="flex items-center gap-4">
                                    <img src={review.attendeePhotoUrl} alt={review.attendeeName} className="w-14 h-14 rounded-full object-cover ring-2 ring-blue-500/30" />
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

            {/* Royal CTA */}
            <section className="relative py-32 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.primaryGradient}`} />
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <Shield className="w-16 h-16 text-white/80 mx-auto mb-8" />
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Join the Elite
                        </h2>
                        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                            {formatDate(mockEvent.date)} • {mockEvent.durationHours} Hours • Virtual Campus
                        </p>
                        <Link to="/register">
                            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center gap-3 bg-white text-blue-700 font-bold px-12 py-6 rounded-lg text-xl shadow-2xl">
                                Apply Now — ${mockEvent.basePrice}
                                <ArrowRight className="w-6 h-6" />
                            </motion.button>
                        </Link>
                        <p className="text-white/60 text-sm mt-6">
                            Limited to {mockEvent.maxCapacity} prestigious seats • {mockEvent.maxCapacity - mockEvent.currentRegistrations} remaining
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className={`${isDark ? 'bg-slate-950' : 'bg-blue-950'} border-t ${isDark ? 'border-blue-500/10' : 'border-blue-900'}`}>
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div className="lg:col-span-1">
                            <Link to="/" className="flex items-center gap-3 mb-4">
                                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colors.primaryGradient} flex items-center justify-center`}>
                                    <Shield className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <span className="font-bold text-lg text-white block leading-none">Royal</span>
                                    <span className="text-xs text-blue-300 tracking-wider">DENTAL INSTITUTE</span>
                                </div>
                            </Link>
                            <p className="text-blue-200/60 text-sm mb-6">Excellence in dental education since inception.</p>
                            <div className="flex gap-3">
                                {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                                    <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-blue-500/20 flex items-center justify-center transition-all">
                                        <Icon className="w-4 h-4 text-blue-300" />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-4">Institute</h4>
                            <ul className="space-y-3">
                                {['About', 'Faculty', 'Testimonials', 'Contact'].map((item) => (<li key={item}><Link to="#" className="text-sm text-blue-200/60 hover:text-blue-300 transition-colors">{item}</Link></li>))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-4">Resources</h4>
                            <ul className="space-y-3">
                                {['Program', 'CE Credits', 'FAQ', 'Blog'].map((item) => (<li key={item}><Link to="#" className="text-sm text-blue-200/60 hover:text-blue-300 transition-colors">{item}</Link></li>))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-4">Contact</h4>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-blue-300" /><span className="text-sm text-blue-200/60">admissions@royal.edu</span></li>
                                <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-blue-300" /><span className="text-sm text-blue-200/60">+1-888-ROYAL</span></li>
                                <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-blue-300 mt-0.5" /><span className="text-sm text-blue-200/60">Boston, MA</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-blue-800/30 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-blue-200/40">© {new Date().getFullYear()} Royal Dental Institute. All rights reserved.</p>
                        <div className="flex gap-6">
                            {['Privacy', 'Terms', 'Accreditation'].map((item) => (<Link key={item} to="#" className="text-sm text-blue-200/40 hover:text-blue-300 transition-colors">{item}</Link>))}
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
