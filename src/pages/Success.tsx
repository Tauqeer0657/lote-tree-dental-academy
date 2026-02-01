import { useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    CheckCircle,
    Download,
    Calendar,
    MapPin,
    Clock,
    Mail,
    Phone,
    ArrowRight,
    CalendarCheck,
    FileText,
    Users,
    Sparkles
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { formatCurrency, formatDate } from '../lib/utils';
import { upcomingEvent } from '../data/mockData';
import Invoice from '../components/Invoice';

interface LocationState {
    registration: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        dentalPracticeName?: string;
        surgeryAddress?: string;
    };
    pricing: {
        basePrice: number;
        extras: { name: string; price: number }[];
        total: number;
    };
    paymentConfirmation: {
        last4: string;
        amount: number;
        date: string;
    };
}

const nextSteps = [
    {
        icon: Mail,
        title: 'Check Your Email',
        description: 'A confirmation email with your ticket and event details has been sent.',
    },
    {
        icon: CalendarCheck,
        title: 'Add to Calendar',
        description: 'Don\'t forget to add the event to your calendar to get reminders.',
    },
    {
        icon: FileText,
        title: 'Review Materials',
        description: 'Pre-event materials and reading list will be shared 1 week before.',
    },
    {
        icon: Users,
        title: 'Join Community',
        description: 'Connect with other attendees in our exclusive LinkedIn group.',
    },
];

export default function Success() {
    const location = useLocation();
    const navigate = useNavigate();
    const state = location.state as LocationState | null;
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const colors = {
        bg: isDark ? 'bg-black' : 'bg-white',
        bgAlt: isDark ? 'bg-zinc-950' : 'bg-zinc-100',
        text: isDark ? 'text-white' : 'text-slate-900',
        textSecondary: isDark ? 'text-white/70' : 'text-slate-600',
        textMuted: isDark ? 'text-white/50' : 'text-slate-400',
        border: isDark ? 'border-white/10' : 'border-slate-200',
        accent: isDark ? 'text-cyan-400' : 'text-cyan-600',
        accentBg: isDark ? 'bg-cyan-500/10' : 'bg-cyan-50',
        cardBg: isDark ? 'bg-zinc-900' : 'bg-white',
    };

    useEffect(() => {
        if (!state?.paymentConfirmation) {
            navigate('/register');
        }
    }, [state, navigate]);

    const handlePrint = () => {
        window.print();
    };

    if (!state) {
        return null;
    }

    const { registration, pricing, paymentConfirmation } = state;
    const confirmationNumber = `DAM-${Date.now().toString(36).toUpperCase()}`;

    return (
        <main className={`min-h-screen ${colors.bgAlt} transition-colors duration-500`}>
            {/* Success Hero */}
            <section className="relative py-20 overflow-hidden">
                <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-cyan-950/50 via-black to-black' : 'bg-gradient-to-br from-cyan-50 via-white to-white'}`} />

                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 rounded-full bg-cyan-500/30"
                            initial={{
                                x: `${20 + i * 15}%`,
                                y: '100%',
                                opacity: 0,
                            }}
                            animate={{
                                y: '-100%',
                                opacity: [0, 1, 1, 0],
                            }}
                            transition={{
                                duration: 4 + i,
                                repeat: Infinity,
                                delay: i * 0.5,
                            }}
                        />
                    ))}
                </div>

                <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
                    {/* Animated Checkmark */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', damping: 15, stiffness: 200 }}
                        className="relative mx-auto mb-8"
                    >
                        <div className="w-28 h-28 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto shadow-2xl shadow-cyan-500/30">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.3, type: 'spring' }}
                            >
                                <CheckCircle className="w-14 h-14 text-white" />
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center shadow-lg"
                        >
                            <Sparkles className="w-5 h-5 text-white" />
                        </motion.div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className={`text-4xl md:text-5xl font-bold ${colors.text} mb-4`}
                    >
                        Registration Complete!
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className={`text-xl ${colors.textSecondary} mb-6`}
                    >
                        Thank you, {registration.firstName}! Your spot has been secured.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${colors.accentBg} border ${colors.border}`}
                    >
                        <span className={colors.textSecondary}>Confirmation #:</span>
                        <span className={`font-mono font-bold ${colors.accent}`}>{confirmationNumber}</span>
                    </motion.div>
                </div>
            </section>

            {/* Order Details */}
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Event Info Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className={`${colors.cardBg} rounded-3xl border ${colors.border} p-6`}
                        >
                            <h3 className={`font-bold ${colors.text} mb-4`}>Event Details</h3>
                            <h4 className={`text-lg font-semibold ${colors.text} mb-4`}>{upcomingEvent.name}</h4>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-xl ${colors.accentBg} flex items-center justify-center`}>
                                        <Calendar className={`w-5 h-5 ${colors.accent}`} />
                                    </div>
                                    <div>
                                        <p className={`text-sm ${colors.textMuted}`}>Date</p>
                                        <p className={colors.text}>{formatDate(upcomingEvent.date)}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-xl ${colors.accentBg} flex items-center justify-center`}>
                                        <Clock className={`w-5 h-5 ${colors.accent}`} />
                                    </div>
                                    <div>
                                        <p className={`text-sm ${colors.textMuted}`}>Time</p>
                                        <p className={colors.text}>9:00 AM - 6:15 PM EST</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-xl ${colors.accentBg} flex items-center justify-center`}>
                                        <MapPin className={`w-5 h-5 ${colors.accent}`} />
                                    </div>
                                    <div>
                                        <p className={`text-sm ${colors.textMuted}`}>Location</p>
                                        <p className={colors.text}>Boston, MA</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Payment Info Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className={`${colors.cardBg} rounded-3xl border ${colors.border} p-6`}
                        >
                            <h3 className={`font-bold ${colors.text} mb-4`}>Payment Summary</h3>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between">
                                    <span className={colors.textSecondary}>Registration</span>
                                    <span className={colors.text}>{formatCurrency(pricing.basePrice)}</span>
                                </div>
                                {pricing.extras.map((extra) => (
                                    <div key={extra.name} className="flex justify-between text-sm">
                                        <span className={colors.textSecondary}>{extra.name}</span>
                                        <span className={colors.text}>{formatCurrency(extra.price)}</span>
                                    </div>
                                ))}
                            </div>

                            <div className={`pt-4 border-t ${colors.border}`}>
                                <div className="flex justify-between items-center mb-4">
                                    <span className={`font-bold ${colors.text}`}>Total Paid</span>
                                    <span className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                                        {formatCurrency(pricing.total)}
                                    </span>
                                </div>
                                <div className={`text-sm ${colors.textSecondary}`}>
                                    <p>Card ending in •••• {paymentConfirmation.last4}</p>
                                    <p>{new Date(paymentConfirmation.date).toLocaleDateString()}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
                    >
                        <motion.button
                            onClick={handlePrint}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold ${colors.cardBg} border ${colors.border} ${colors.text} hover:border-cyan-500/50 transition-all`}
                        >
                            <Download className="w-5 h-5" />
                            Download Invoice
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all"
                        >
                            <Calendar className="w-5 h-5" />
                            Add to Calendar
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* What's Next Section */}
            <section className={`py-20 ${colors.bg}`}>
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className={`text-3xl md:text-4xl font-bold ${colors.text} mb-4`}>What's Next?</h2>
                        <p className={colors.textSecondary}>Here's what you should do before the event</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {nextSteps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className={`${colors.cardBg} rounded-3xl border ${colors.border} p-6 flex items-start gap-4`}
                            >
                                <div className={`w-12 h-12 rounded-2xl ${colors.accentBg} flex items-center justify-center flex-shrink-0`}>
                                    <step.icon className={`w-6 h-6 ${colors.accent}`} />
                                </div>
                                <div>
                                    <h3 className={`font-semibold ${colors.text} mb-1`}>{step.title}</h3>
                                    <p className={`text-sm ${colors.textSecondary}`}>{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Info */}
            <section className={`py-16 ${colors.bgAlt}`}>
                <div className="max-w-2xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className={`text-xl font-bold ${colors.text} mb-4`}>Questions?</h3>
                        <p className={`${colors.textSecondary} mb-6`}>Our team is here to help</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a href="mailto:info@lotetree.academy" className={`flex items-center gap-2 ${colors.accent} hover:underline`}>
                                <Mail className="w-5 h-5" />
                                info@lotetree.academy
                            </a>
                            <a href="tel:+18003368847" className={`flex items-center gap-2 ${colors.accent} hover:underline`}>
                                <Phone className="w-5 h-5" />
                                +1-800-DENTIST
                            </a>
                        </div>
                        <Link to="/">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`mt-8 flex items-center gap-2 mx-auto px-6 py-3 rounded-full font-medium ${colors.text} ${colors.cardBg} border ${colors.border} hover:border-cyan-500/50 transition-all`}
                            >
                                Return to Homepage
                                <ArrowRight className="w-4 h-4" />
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>
            {/* Hidden Invoice for Printing */}
            <div className="hidden print:block bg-white">
                <Invoice
                    registration={registration}
                    pricing={pricing}
                    paymentConfirmation={paymentConfirmation}
                    confirmationNumber={confirmationNumber}
                />
            </div>

            <style>{`
                @media print {
                    /* Reset defaults */
                    html, body {
                        margin: 0 !important;
                        padding: 0 !important;
                        height: auto !important;
                        background: white !important;
                    }

                    /* Hide specific layout elements that shouldn't print */
                    nav, 
                    footer, 
                    #root > nav, 
                    #root > footer,
                    main > section,
                    .hidden-print {
                        display: none !important;
                    }

                    /* Ensure the print block is the only thing shown */
                    .print\\:block {
                        display: block !important;
                        position: relative !important;
                        width: 100% !important;
                        margin: 0 !important;
                        padding: 0 !important;
                    }

                    @page {
                        size: A4;
                        margin: 1cm;
                    }

                    #invoice-content {
                        border: none !important;
                        box-shadow: none !important;
                        max-width: 100% !important;
                        width: 100% !important;
                        padding: 0 !important;
                        margin: 0 !important;
                    }
                }
            `}</style>
        </main>
    );
}
