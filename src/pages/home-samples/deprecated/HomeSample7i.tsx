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
    Minus
} from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';
import ThemeToggle from '../../../components/ui/ThemeToggle';
import { dentists as mockDentists, upcomingEvent as mockEvent, reviews as mockReviews } from '../../../data/mockData';
import { formatDate } from '../../../lib/utils';

/**
 * SAMPLE 7I: ZEN MINIMAL
 *
 * Design Philosophy:
 * - Slate + Stone + White color palette
 * - Ultra-minimalist design with maximum whitespace
 * - Serene, calm, and focused aesthetic
 * - Typography-first with clean lines
 * - Peaceful, mindful healthcare feel
 */

const highlights = [
    { icon: Clock, title: '12 Hours', description: 'Complete training' },
    { icon: MessageCircle, title: 'Live Q&A', description: 'Expert access' },
    { icon: Award, title: 'Certified', description: 'CE credits' },
    { icon: Users, title: '5,000+', description: 'Community' },
    { icon: Video, title: 'On-Demand', description: 'Lifetime access' },
    { icon: FileCheck, title: 'Materials', description: 'Full resources' },
];

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Speakers', path: '/dentists' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
];

export default function HomeSample7i() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Zen Minimal Color System
    const colors = {
        bg: isDark ? 'bg-stone-950' : 'bg-stone-50',
        bgAlt: isDark ? 'bg-stone-900' : 'bg-white',
        bgCard: isDark ? 'bg-stone-900' : 'bg-white',
        text: isDark ? 'text-stone-100' : 'text-stone-900',
        textSecondary: isDark ? 'text-stone-400' : 'text-stone-600',
        textMuted: isDark ? 'text-stone-500' : 'text-stone-500',
        accent: isDark ? 'text-stone-300' : 'text-stone-700',
        accentBg: isDark ? 'bg-stone-800' : 'bg-stone-100',
        border: isDark ? 'border-stone-800' : 'border-stone-200',
    };

    return (
        <main className={`${colors.bg} transition-colors duration-500`}>
            {/* Ultra-Minimal Navigation */}
            <motion.header
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    isScrolled
                        ? isDark
                            ? 'bg-stone-950/95 backdrop-blur-xl'
                            : 'bg-stone-50/95 backdrop-blur-xl'
                        : 'bg-transparent'
                }`}
            >
                <nav className="max-w-6xl mx-auto px-8">
                    <div className={`flex items-center justify-between border-b ${colors.border} transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
                        <Link to="/" className={`text-lg font-medium tracking-wide ${colors.text}`}>
                            ZenDental
                        </Link>

                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link key={link.path} to={link.path} className={`text-sm ${colors.textSecondary} hover:${colors.text} transition-colors`}>
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <div className="flex items-center gap-4">
                            <ThemeToggle />
                            <Link to="/register" className="hidden md:block">
                                <span className={`text-sm ${colors.text} underline underline-offset-4 hover:no-underline transition-all`}>
                                    Register
                                </span>
                            </Link>
                            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden">
                                {isMobileMenuOpen ? <X className={`w-5 h-5 ${colors.text}`} /> : <Menu className={`w-5 h-5 ${colors.text}`} />}
                            </button>
                        </div>
                    </div>
                </nav>

                {isMobileMenuOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`md:hidden ${isDark ? 'bg-stone-950' : 'bg-stone-50'}`}>
                        <div className="px-8 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link key={link.path} to={link.path} className={`block ${colors.textSecondary}`} onClick={() => setIsMobileMenuOpen(false)}>
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/register" className={`block pt-4 ${colors.text} underline underline-offset-4`}>
                                Register
                            </Link>
                        </div>
                    </motion.div>
                )}
            </motion.header>

            {/* Hero - Ultra Minimal */}
            <section className={`min-h-screen flex items-center ${colors.bgAlt}`}>
                <div className="max-w-6xl mx-auto px-8 py-32">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        {/* Content */}
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                            <p className={`text-sm ${colors.textMuted} mb-6 tracking-wider uppercase`}>
                                {formatDate(mockEvent.date)}
                            </p>

                            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-light ${colors.text} leading-[1.15] mb-8`}>
                                The art of
                                <br />
                                <span className="font-medium">mindful dentistry</span>
                            </h1>

                            <div className={`w-16 h-px ${isDark ? 'bg-stone-700' : 'bg-stone-300'} mb-8`} />

                            <p className={`text-lg ${colors.textSecondary} mb-12 max-w-md leading-relaxed`}>
                                A 12-hour immersive learning experience with 5 thoughtful educators.
                            </p>

                            <Link to="/register">
                                <motion.button
                                    whileHover={{ x: 5 }}
                                    className={`group inline-flex items-center gap-4 ${colors.text}`}
                                >
                                    <span className="text-sm tracking-wide">Begin your journey</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </Link>
                        </motion.div>

                        {/* Minimal Image */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="relative"
                        >
                            <div className="aspect-[4/5] rounded-sm overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=750&fit=crop"
                                    alt="Peaceful dental care"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats - Minimal Line */}
            <section className={`py-16 border-y ${colors.border} ${colors.bg}`}>
                <div className="max-w-6xl mx-auto px-8">
                    <div className="flex flex-wrap justify-between gap-8">
                        {[
                            { value: '5', label: 'Speakers' },
                            { value: '12', label: 'Hours' },
                            { value: '5,000+', label: 'Attendees' },
                            { value: '4.9', label: 'Rating' },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className={`text-2xl font-light ${colors.text}`}>{stat.value}</div>
                                <div className={`text-xs ${colors.textMuted} uppercase tracking-wider mt-1`}>{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Speakers - Clean List */}
            <section className={`py-24 ${colors.bgAlt}`}>
                <div className="max-w-6xl mx-auto px-8">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16">
                        <p className={`text-sm ${colors.textMuted} uppercase tracking-wider mb-4`}>Educators</p>
                        <h2 className={`text-3xl md:text-4xl font-light ${colors.text}`}>Our speakers</h2>
                    </motion.div>

                    <div className="space-y-0">
                        {mockDentists.slice(0, 3).map((dentist, index) => (
                            <motion.div
                                key={dentist.id}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`group flex items-center gap-8 py-8 border-b ${colors.border} cursor-pointer`}
                            >
                                <span className={`text-sm ${colors.textMuted} w-8`}>{String(index + 1).padStart(2, '0')}</span>
                                <img
                                    src={dentist.profileImageUrl}
                                    alt={dentist.name}
                                    className="w-16 h-16 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all"
                                />
                                <div className="flex-1">
                                    <h3 className={`text-lg font-medium ${colors.text} group-hover:underline`}>{dentist.name}</h3>
                                    <p className={`text-sm ${colors.textSecondary}`}>{dentist.specialty.split('&')[0].trim()}</p>
                                </div>
                                <ArrowRight className={`w-4 h-4 ${colors.textMuted} opacity-0 group-hover:opacity-100 transition-all`} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features - Minimal Grid */}
            <section className={`py-24 ${colors.bg}`}>
                <div className="max-w-6xl mx-auto px-8">
                    <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className={`text-3xl md:text-4xl font-light ${colors.text} mb-16`}>
                        What's included
                    </motion.h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {highlights.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <feature.icon className={`w-5 h-5 ${colors.textMuted} mb-4`} />
                                <h3 className={`text-lg font-medium ${colors.text} mb-2`}>{feature.title}</h3>
                                <p className={`text-sm ${colors.textSecondary}`}>{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials - Quote Style */}
            <section className={`py-24 ${colors.bgAlt}`}>
                <div className="max-w-4xl mx-auto px-8">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                        {mockReviews.slice(0, 1).map((review) => (
                            <div key={review.id} className="text-center">
                                <div className="flex justify-center gap-1 mb-8">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className={`w-4 h-4 ${isDark ? 'fill-stone-400 text-stone-400' : 'fill-stone-600 text-stone-600'}`} />
                                    ))}
                                </div>
                                <blockquote className={`text-2xl md:text-3xl font-light ${colors.text} leading-relaxed mb-8`}>
                                    "{review.reviewText}"
                                </blockquote>
                                <div className="flex items-center justify-center gap-4">
                                    <img src={review.attendeePhotoUrl} alt={review.attendeeName} className="w-12 h-12 rounded-full object-cover grayscale" />
                                    <div className="text-left">
                                        <div className={`text-sm font-medium ${colors.text}`}>{review.attendeeName}</div>
                                        <div className={`text-xs ${colors.textMuted}`}>{review.attendeeCredential}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA - Minimal */}
            <section className={`py-32 ${colors.bg}`}>
                <div className="max-w-4xl mx-auto px-8 text-center">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                        <Minus className={`w-8 h-8 ${colors.textMuted} mx-auto mb-8`} />
                        <h2 className={`text-3xl md:text-5xl font-light ${colors.text} mb-6`}>
                            Find your calm
                        </h2>
                        <p className={`${colors.textSecondary} mb-12`}>
                            {formatDate(mockEvent.date)} · {mockEvent.durationHours} hours · ${mockEvent.basePrice}
                        </p>
                        <Link to="/register">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                className={`px-12 py-4 border ${colors.border} ${colors.text} hover:${isDark ? 'bg-stone-800' : 'bg-stone-100'} transition-all`}
                            >
                                Register now
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Footer - Minimal */}
            <footer className={`border-t ${colors.border} ${colors.bg}`}>
                <div className="max-w-6xl mx-auto px-8 py-12">
                    <div className="flex flex-col md:flex-row items-start justify-between gap-8">
                        <div>
                            <span className={`text-lg font-medium ${colors.text}`}>ZenDental</span>
                            <p className={`text-sm ${colors.textMuted} mt-2`}>Mindful education</p>
                        </div>
                        <div className="flex gap-12">
                            <div>
                                <h4 className={`text-xs ${colors.textMuted} uppercase tracking-wider mb-4`}>Company</h4>
                                <ul className="space-y-2">
                                    {['About', 'Speakers', 'Contact'].map((item) => (
                                        <li key={item}><Link to="#" className={`text-sm ${colors.textSecondary}`}>{item}</Link></li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className={`text-xs ${colors.textMuted} uppercase tracking-wider mb-4`}>Contact</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2"><Mail className={`w-3 h-3 ${colors.textMuted}`} /><span className={`text-sm ${colors.textSecondary}`}>hello@zen.com</span></li>
                                    <li className="flex items-center gap-2"><Phone className={`w-3 h-3 ${colors.textMuted}`} /><span className={`text-sm ${colors.textSecondary}`}>+1-888-ZEN</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className={`w-8 h-8 rounded-full border ${colors.border} flex items-center justify-center`}>
                                    <Icon className={`w-3 h-3 ${colors.textMuted}`} />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className={`mt-12 pt-8 border-t ${colors.border} flex items-center justify-between`}>
                        <p className={`text-xs ${colors.textMuted}`}>© {new Date().getFullYear()} ZenDental</p>
                        <div className="flex gap-6">
                            {['Privacy', 'Terms'].map((item) => (<Link key={item} to="#" className={`text-xs ${colors.textMuted}`}>{item}</Link>))}
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
