import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    CreditCard,
    Lock,
    Shield,
    Calendar,
    MapPin,
    ArrowLeft,
    CheckCircle,
    AlertCircle
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { cn, formatCurrency, formatDate } from '../lib/utils';
import { paymentsApi } from '../lib/api';
import { upcomingEvent } from '../data/mockData';

interface PricingData {
    basePrice: number;
    extras: { name: string; price: number }[];
    total: number;
}

interface LocationState {
    registration: Record<string, unknown>;
    pricing: PricingData;
}

export default function Payment() {
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state as LocationState | null;
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState('');

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
        inputBg: isDark ? 'bg-zinc-900' : 'bg-white',
        inputBorder: isDark ? 'border-white/10' : 'border-slate-200',
        inputFocus: isDark ? 'focus:border-cyan-400' : 'focus:border-cyan-500',
    };

    const pricing = state?.pricing || { basePrice: upcomingEvent.basePrice, extras: [], total: upcomingEvent.basePrice };

    useEffect(() => {
        if (!state?.registration) {
            navigate('/register');
        }
    }, [state, navigate]);

    const formatCardNumber = (value: string) => {
        const cleaned = value.replace(/\D/g, '');
        const match = cleaned.match(/.{1,4}/g);
        return match ? match.join(' ').substr(0, 19) : '';
    };

    const formatExpiry = (value: string) => {
        const cleaned = value.replace(/\D/g, '');
        if (cleaned.length >= 2) {
            return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`;
        }
        return cleaned;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsProcessing(true);

        try {
            // Create payment intent
            await paymentsApi.createIntent('temp-registration', pricing.total);

            // Simulate payment processing
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // Navigate to success page
            navigate('/success', {
                state: {
                    registration: state?.registration,
                    pricing,
                    paymentConfirmation: {
                        last4: cardNumber.slice(-4),
                        amount: pricing.total,
                        date: new Date().toISOString(),
                    },
                },
            });
        } catch {
            setError('Payment failed. Please check your card details and try again.');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <main className={cn(`min-h-screen ${colors.bgAlt} transition-colors duration-500 py-12 pt-navbar`)}>
            <div className="max-w-5xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 mb-6">
                        <Lock className="w-4 h-4 text-cyan-500" />
                        <span className={`text-sm font-medium ${colors.accent}`}>Secure Checkout</span>
                    </div>
                    <h1 className={`text-4xl md:text-5xl font-bold ${colors.text} mb-4`}>
                        Complete Your Payment
                    </h1>
                    <p className={colors.textSecondary}>
                        Your information is secured with 256-bit SSL encryption
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Payment Form */}
                    <div className="lg:col-span-2">
                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            onSubmit={handleSubmit}
                            className={`${colors.cardBg} rounded-3xl border ${colors.border} p-8`}
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                                    <CreditCard className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h2 className={`font-bold ${colors.text}`}>Payment Details</h2>
                                    <p className={`text-sm ${colors.textSecondary}`}>Enter your card information</p>
                                </div>
                            </div>

                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-start gap-3"
                                >
                                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <p className="text-red-500 text-sm">{error}</p>
                                </motion.div>
                            )}

                            <div className="space-y-5">
                                <div>
                                    <label htmlFor="cardNumber" className={`block text-sm font-medium ${colors.text} mb-2`}>
                                        Card Number
                                    </label>
                                    <div className="relative">
                                        <CreditCard className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${colors.textMuted}`} />
                                        <input
                                            id="cardNumber"
                                            type="text"
                                            value={cardNumber}
                                            onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                                            placeholder="1234 5678 9012 3456"
                                            maxLength={19}
                                            className={`w-full pl-12 pr-4 py-3 rounded-xl border ${colors.inputBorder} ${colors.inputBg} ${colors.text} ${colors.inputFocus} focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all`}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="cardName" className={`block text-sm font-medium ${colors.text} mb-2`}>
                                        Cardholder Name
                                    </label>
                                    <input
                                        id="cardName"
                                        type="text"
                                        value={cardName}
                                        onChange={(e) => setCardName(e.target.value)}
                                        placeholder="John Smith"
                                        className={`w-full px-4 py-3 rounded-xl border ${colors.inputBorder} ${colors.inputBg} ${colors.text} ${colors.inputFocus} focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all`}
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="expiry" className={`block text-sm font-medium ${colors.text} mb-2`}>
                                            Expiry Date
                                        </label>
                                        <input
                                            id="expiry"
                                            type="text"
                                            value={expiry}
                                            onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                                            placeholder="MM/YY"
                                            maxLength={5}
                                            className={`w-full px-4 py-3 rounded-xl border ${colors.inputBorder} ${colors.inputBg} ${colors.text} ${colors.inputFocus} focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all`}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="cvc" className={`block text-sm font-medium ${colors.text} mb-2`}>
                                            CVC
                                        </label>
                                        <input
                                            id="cvc"
                                            type="text"
                                            value={cvc}
                                            onChange={(e) => setCvc(e.target.value.replace(/\D/g, '').slice(0, 4))}
                                            placeholder="123"
                                            maxLength={4}
                                            className={`w-full px-4 py-3 rounded-xl border ${colors.inputBorder} ${colors.inputBg} ${colors.text} ${colors.inputFocus} focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all`}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Security Badge */}
                            <div className={`mt-8 p-4 rounded-2xl ${colors.accentBg} border ${colors.border} flex items-center gap-3`}>
                                <Shield className="w-8 h-8 text-cyan-500" />
                                <div>
                                    <p className={`font-medium ${colors.text} text-sm`}>Secure Payment</p>
                                    <p className={`text-xs ${colors.textSecondary}`}>Your payment info is protected by industry-standard encryption</p>
                                </div>
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isProcessing || !cardNumber.replace(/\s/g, '') || !cardName || !expiry || !cvc}
                                whileHover={{ scale: (isProcessing || !cardNumber.replace(/\s/g, '') || !cardName || !expiry || !cvc) ? 1 : 1.02 }}
                                whileTap={{ scale: (isProcessing || !cardNumber.replace(/\s/g, '') || !cardName || !expiry || !cvc) ? 1 : 0.98 }}
                                className={cn(
                                    'w-full mt-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all flex items-center justify-center gap-2',
                                    (isProcessing || !cardNumber.replace(/\s/g, '') || !cardName || !expiry || !cvc) && 'opacity-50 cursor-not-allowed'
                                )}
                            >
                                {isProcessing ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        Pay {formatCurrency(pricing.total)}
                                        <Lock className="w-4 h-4" />
                                    </>
                                )}
                            </motion.button>

                            <Link
                                to="/register"
                                className={`flex items-center justify-center gap-2 mt-4 ${colors.textSecondary} hover:${colors.text} transition-colors`}
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Back to Registration
                            </Link>

                            {/* Accepted Cards */}
                            <div className="mt-6 pt-6 border-t border-dashed" style={{ borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}>
                                <p className={`text-xs ${colors.textMuted} text-center mb-3`}>Accepted Payment Methods</p>
                                <div className="flex items-center justify-center gap-4">
                                    {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((card) => (
                                        <div key={card} className={`px-3 py-1.5 rounded-lg ${colors.bgAlt} border ${colors.border}`}>
                                            <span className={`text-xs font-medium ${colors.textSecondary}`}>{card}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.form>
                    </div>

                    {/* Order Summary Sidebar */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className={`${colors.cardBg} rounded-3xl border ${colors.border} p-6 sticky top-24`}
                        >
                            <h3 className={`font-bold ${colors.text} mb-6`}>Order Summary</h3>

                            {/* Event Info */}
                            <div className={`${colors.bgAlt} rounded-2xl p-4 mb-6 border ${colors.border}`}>
                                <h4 className={`font-semibold ${colors.text} mb-3`}>{upcomingEvent.name}</h4>
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center gap-2">
                                        <Calendar className={`w-4 h-4 ${colors.accent}`} />
                                        <span className={colors.textSecondary}>{formatDate(upcomingEvent.date)}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className={`w-4 h-4 ${colors.accent}`} />
                                        <span className={colors.textSecondary}>Boston, MA</span>
                                    </div>
                                </div>
                            </div>

                            {/* Pricing Breakdown */}
                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between">
                                    <span className={colors.textSecondary}>Base Registration</span>
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
                                <div className="flex justify-between items-center">
                                    <span className={`font-bold ${colors.text}`}>Total</span>
                                    <span className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                                        {formatCurrency(pricing.total)}
                                    </span>
                                </div>
                            </div>

                            {/* Guarantee */}
                            <div className="mt-6 pt-6 border-t border-dashed" style={{ borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                                    <div>
                                        <p className={`font-medium ${colors.text} text-sm`}>30-Day Guarantee</p>
                                        <p className={`text-xs ${colors.textSecondary}`}>Full refund if you change your mind before the event</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    );
}
