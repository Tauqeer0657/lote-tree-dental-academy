import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
    ArrowRight,
    Clock,
    Users,
    Award,
    Video,
    MessageCircle,
    FileCheck,
    Calendar,
    Globe,
    Star,
    TrendingUp,
    BarChart3,
    Target,
    Zap,
    CheckCircle,
    Activity,
    Menu,
    X,
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Twitter,
    Instagram
} from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';
import ThemeToggle from '../../../components/ui/ThemeToggle';
import { dentists as mockDentists, upcomingEvent as mockEvent, reviews as mockReviews } from '../../../data/mockData';
import { formatDate } from '../../../lib/utils';

/**
 * SAMPLE 8: CLINICAL DASHBOARD
 *
 * Design Philosophy:
 * - Stats and metrics prominent
 * - Clean structured grids
 * - Professional color palette
 * - Data visualization elements
 * - Clinical, authoritative aesthetic
 */

const keyMetrics = [
    { label: 'Expert Speakers', value: '5', icon: Users, trend: 'Top 1% worldwide' },
    { label: 'Training Hours', value: '12', icon: Clock, trend: 'Intensive program' },
    { label: 'Graduates', value: '5,247', icon: TrendingUp, trend: '+23% this year' },
    { label: 'Satisfaction', value: '98%', icon: Target, trend: 'Verified reviews' },
];

const programDetails = [
    { icon: Clock, label: 'Live Instruction', value: '12 hours' },
    { icon: MessageCircle, label: 'Q&A Sessions', value: '3 hours' },
    { icon: Video, label: 'Recording Access', value: '6 months' },
    { icon: FileCheck, label: 'CE Credits', value: '12 credits' },
    { icon: Award, label: 'Certificate', value: 'Included' },
    { icon: Users, label: 'Max Capacity', value: '500' },
];

const highlights = [
    { icon: Zap, title: 'Latest Techniques', description: 'Cutting-edge procedures and methodologies.' },
    { icon: Target, title: 'Practical Focus', description: 'Actionable skills you can apply immediately.' },
    { icon: Activity, title: 'Case Studies', description: 'Real-world clinical scenarios analyzed.' },
    { icon: TrendingUp, title: 'Career Growth', description: 'Elevate your professional standing.' },
];

// Navigation links
const navLinks = [
    { name: 'Dashboard', path: '/' },
    { name: 'Faculty', path: '/dentists' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Support', path: '/contact' },
];

export default function HomeSample8() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const colors = {
        bg: isDark ? 'bg-slate-950' : 'bg-slate-50',
        card: isDark ? 'bg-slate-900' : 'bg-white',
        cardAlt: isDark ? 'bg-slate-800' : 'bg-slate-100',
        text: isDark ? 'text-white' : 'text-slate-900',
        textSecondary: isDark ? 'text-slate-400' : 'text-slate-600',
        textMuted: isDark ? 'text-slate-500' : 'text-slate-400',
        border: isDark ? 'border-slate-800' : 'border-slate-200',
        accent: isDark ? 'text-emerald-400' : 'text-emerald-600',
        accentBg: isDark ? 'bg-emerald-500/10' : 'bg-emerald-50',
        accentBorder: isDark ? 'border-emerald-500/30' : 'border-emerald-200',
    };

    return (
        <main className={`min-h-screen ${colors.bg} transition-colors duration-500`}>
            {/* Clinical Dashboard Header Bar */}
            <header className={`sticky top-0 z-40 ${colors.card} border-b ${colors.border}`}>
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
                    <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl ${colors.accentBg} flex items-center justify-center`}>
                            <BarChart3 className={`w-5 h-5 ${colors.accent}`} />
                        </div>
                        <div>
                            <Link to="/" className={`font-bold ${colors.text}`}>DentalMaster Pro</Link>
                            <div className={`text-xs ${colors.textMuted}`}>Professional Education Platform</div>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${colors.textSecondary} ${isDark ? 'hover:bg-slate-800' : 'hover:bg-slate-100'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <ThemeToggle />
                        <Link to="/register" className="hidden sm:block">
                            <button className={`px-5 py-2.5 rounded-lg font-medium text-white text-sm ${isDark ? 'bg-emerald-500 hover:bg-emerald-400' : 'bg-emerald-600 hover:bg-emerald-500'} transition-colors`}>
                                Register
                            </button>
                        </Link>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`md:hidden p-2 rounded-lg ${isDark ? 'hover:bg-slate-800' : 'hover:bg-slate-100'}`}
                        >
                            {isMobileMenuOpen ? <X className={`w-5 h-5 ${colors.text}`} /> : <Menu className={`w-5 h-5 ${colors.text}`} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`md:hidden border-t ${colors.border} px-6 py-4 space-y-2`}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`block py-2 px-3 rounded-lg ${colors.textSecondary} ${isDark ? 'hover:bg-slate-800' : 'hover:bg-slate-100'}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/register" className="block pt-2">
                            <button className={`w-full py-3 rounded-lg font-medium text-white ${isDark ? 'bg-emerald-500' : 'bg-emerald-600'}`}>
                                Register Now
                            </button>
                        </Link>
                    </motion.div>
                )}
            </header>

            <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Page Title */}
                <div className="mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 mb-2"
                    >
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors.accentBg} ${colors.accent} border ${colors.accentBorder}`}>
                            Upcoming Event
                        </span>
                        <span className={`text-sm ${colors.textMuted}`}>{formatDate(mockEvent.date)}</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className={`text-3xl md:text-4xl font-bold ${colors.text}`}
                    >
                        Master Class in Modern Dentistry
                    </motion.h1>
                </div>

                {/* Key Metrics Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
                >
                    {keyMetrics.map((metric, index) => (
                        <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.05 }}
                            className={`${colors.card} rounded-xl p-5 border ${colors.border}`}
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div className={`w-10 h-10 rounded-lg ${colors.accentBg} flex items-center justify-center`}>
                                    <metric.icon className={`w-5 h-5 ${colors.accent}`} />
                                </div>
                            </div>
                            <div className={`text-2xl font-bold ${colors.text} mb-1`}>{metric.value}</div>
                            <div className={`text-sm ${colors.textSecondary} mb-1`}>{metric.label}</div>
                            <div className={`text-xs ${colors.accent}`}>{metric.trend}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-3 gap-6 mb-8">
                    {/* Left Column - Speaker Overview */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className={`lg:col-span-2 ${colors.card} rounded-xl border ${colors.border}`}
                    >
                        <div className={`px-6 py-4 border-b ${colors.border} flex items-center justify-between`}>
                            <h2 className={`font-semibold ${colors.text}`}>Faculty Overview</h2>
                            <Link to="/dentists" className={`text-sm ${colors.accent} hover:underline`}>
                                View All →
                            </Link>
                        </div>
                        <div className="p-6">
                            <div className="space-y-4">
                                {mockDentists.slice(0, 4).map((dentist) => (
                                    <div
                                        key={dentist.id}
                                        className={`flex items-center gap-4 p-4 rounded-xl ${colors.cardAlt} hover:opacity-80 transition-opacity cursor-pointer`}
                                    >
                                        <img
                                            src={dentist.profileImageUrl}
                                            alt={dentist.name}
                                            className="w-12 h-12 rounded-xl object-cover"
                                        />
                                        <div className="flex-1 min-w-0">
                                            <div className={`font-medium ${colors.text} truncate`}>{dentist.name}</div>
                                            <div className={`text-sm ${colors.textSecondary} truncate`}>{dentist.specialty}</div>
                                        </div>
                                        <div className="text-right">
                                            <div className={`text-sm font-medium ${colors.accent}`}>{dentist.yearsExperience}+ yrs</div>
                                            <div className={`text-xs ${colors.textMuted}`}>{dentist.institution.split(' ').slice(0, 2).join(' ')}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Program Details */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className={`${colors.card} rounded-xl border ${colors.border}`}
                    >
                        <div className={`px-6 py-4 border-b ${colors.border}`}>
                            <h2 className={`font-semibold ${colors.text}`}>Program Details</h2>
                        </div>
                        <div className="p-6 space-y-4">
                            {programDetails.map((detail) => (
                                <div key={detail.label} className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <detail.icon className={`w-4 h-4 ${colors.textMuted}`} />
                                        <span className={`text-sm ${colors.textSecondary}`}>{detail.label}</span>
                                    </div>
                                    <span className={`text-sm font-medium ${colors.text}`}>{detail.value}</span>
                                </div>
                            ))}
                            <div className={`pt-4 mt-4 border-t ${colors.border}`}>
                                <div className="flex items-center justify-between mb-2">
                                    <span className={`text-sm ${colors.textSecondary}`}>Spots Filled</span>
                                    <span className={`text-sm font-medium ${colors.text}`}>
                                        {mockEvent.currentRegistrations}/{mockEvent.maxCapacity}
                                    </span>
                                </div>
                                <div className={`w-full h-2 rounded-full ${colors.cardAlt}`}>
                                    <div
                                        className={`h-full rounded-full ${isDark ? 'bg-emerald-500' : 'bg-emerald-600'}`}
                                        style={{ width: `${(mockEvent.currentRegistrations / mockEvent.maxCapacity) * 100}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* What You'll Learn */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`${colors.card} rounded-xl border ${colors.border} mb-8`}
                >
                    <div className={`px-6 py-4 border-b ${colors.border}`}>
                        <h2 className={`font-semibold ${colors.text}`}>Learning Outcomes</h2>
                    </div>
                    <div className="p-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {highlights.map((item) => (
                            <div key={item.title} className="flex gap-4">
                                <div className={`w-10 h-10 rounded-lg ${colors.accentBg} flex-shrink-0 flex items-center justify-center`}>
                                    <item.icon className={`w-5 h-5 ${colors.accent}`} />
                                </div>
                                <div>
                                    <div className={`font-medium ${colors.text} mb-1`}>{item.title}</div>
                                    <div className={`text-sm ${colors.textSecondary}`}>{item.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Reviews Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`${colors.card} rounded-xl border ${colors.border} mb-8`}
                >
                    <div className={`px-6 py-4 border-b ${colors.border} flex items-center justify-between`}>
                        <h2 className={`font-semibold ${colors.text}`}>Verified Reviews</h2>
                        <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                            <span className={`font-medium ${colors.text}`}>4.9</span>
                            <span className={colors.textMuted}>(127 reviews)</span>
                        </div>
                    </div>
                    <div className="p-6 grid md:grid-cols-3 gap-6">
                        {mockReviews.slice(0, 3).map((review) => (
                            <div key={review.id} className={`p-5 rounded-xl ${colors.cardAlt}`}>
                                <div className="flex gap-1 mb-3">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                                <p className={`text-sm ${colors.textSecondary} mb-4 line-clamp-3`}>
                                    "{review.reviewText}"
                                </p>
                                <div className="flex items-center gap-3">
                                    <img
                                        src={review.attendeePhotoUrl}
                                        alt={review.attendeeName}
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                    <div>
                                        <div className={`text-sm font-medium ${colors.text}`}>{review.attendeeName}</div>
                                        <div className="flex items-center gap-1">
                                            <CheckCircle className={`w-3 h-3 ${colors.accent}`} />
                                            <span className={`text-xs ${colors.textMuted}`}>Verified</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`rounded-xl p-8 ${isDark ? 'bg-gradient-to-br from-emerald-950 to-slate-900 border border-emerald-500/20' : 'bg-gradient-to-br from-emerald-50 to-slate-50 border border-emerald-200'}`}
                >
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        <div>
                            <h2 className={`text-2xl font-bold ${colors.text} mb-2`}>
                                Ready to Advance Your Career?
                            </h2>
                            <div className="flex flex-wrap items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <Calendar className={`w-4 h-4 ${colors.textMuted}`} />
                                    <span className={`text-sm ${colors.textSecondary}`}>{formatDate(mockEvent.date)}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Globe className={`w-4 h-4 ${colors.textMuted}`} />
                                    <span className={`text-sm ${colors.textSecondary}`}>{mockEvent.platform} Platform</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-right">
                                <div className={`text-3xl font-bold ${colors.text}`}>${mockEvent.basePrice}</div>
                                <div className={`text-sm ${colors.textMuted}`}>Full access</div>
                            </div>
                            <Link to="/register">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all ${
                                        isDark ? 'bg-emerald-500 hover:bg-emerald-400' : 'bg-emerald-600 hover:bg-emerald-500'
                                    }`}
                                >
                                    Register Now
                                    <ArrowRight className="w-5 h-5" />
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Clinical Style Footer */}
            <footer className={`${colors.card} border-t ${colors.border}`}>
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Brand */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`w-10 h-10 rounded-xl ${colors.accentBg} flex items-center justify-center`}>
                                    <BarChart3 className={`w-5 h-5 ${colors.accent}`} />
                                </div>
                                <span className={`font-bold ${colors.text}`}>DentalMaster Pro</span>
                            </div>
                            <p className={`${colors.textSecondary} text-sm mb-4`}>
                                Data-driven dental education for modern professionals.
                            </p>
                            <div className="flex gap-2">
                                {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                                    <a key={i} href="#" className={`w-9 h-9 rounded-lg ${colors.cardAlt} flex items-center justify-center transition-all ${isDark ? 'hover:bg-slate-700' : 'hover:bg-slate-200'}`}>
                                        <Icon className={`w-4 h-4 ${colors.textMuted}`} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Platform */}
                        <div>
                            <h4 className={`font-semibold ${colors.text} mb-4 text-sm`}>Platform</h4>
                            <ul className="space-y-2">
                                {['Dashboard', 'Faculty', 'Courses', 'Resources'].map((item) => (
                                    <li key={item}>
                                        <Link to="#" className={`text-sm ${colors.textSecondary} hover:${colors.accent} transition-colors`}>
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h4 className={`font-semibold ${colors.text} mb-4 text-sm`}>Support</h4>
                            <ul className="space-y-2">
                                {['Help Center', 'CE Credits', 'FAQ', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <Link to="#" className={`text-sm ${colors.textSecondary} hover:${colors.accent} transition-colors`}>
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className={`font-semibold ${colors.text} mb-4 text-sm`}>Contact</h4>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2">
                                    <Mail className={`w-4 h-4 ${colors.textMuted}`} />
                                    <span className={`text-sm ${colors.textSecondary}`}>support@dentalmasterpro.com</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Phone className={`w-4 h-4 ${colors.textMuted}`} />
                                    <span className={`text-sm ${colors.textSecondary}`}>+1-800-PRO</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <MapPin className={`w-4 h-4 ${colors.textMuted}`} />
                                    <span className={`text-sm ${colors.textSecondary}`}>Boston, MA</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className={`mt-8 pt-6 border-t ${colors.border} flex flex-col md:flex-row items-center justify-between gap-4`}>
                        <p className={`text-xs ${colors.textMuted}`}>
                            © {new Date().getFullYear()} DentalMaster Pro. All rights reserved.
                        </p>
                        <div className="flex gap-4">
                            {['Privacy Policy', 'Terms of Service', 'HIPAA'].map((item) => (
                                <Link key={item} to="#" className={`text-xs ${colors.textMuted} hover:${colors.textSecondary} transition-colors`}>
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
