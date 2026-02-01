import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
    ChevronDown,
    HelpCircle,
    Search,
    MessageCircle,
    ArrowRight
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const faqData = [
    {
        category: 'Registration',
        questions: [
            {
                question: 'How do I register for the masterclass?',
                answer: 'You can register online through our secure registration portal. Simply click the "Register Now" button and follow the step-by-step process. You\'ll need to provide your professional details and payment information.'
            },
            {
                question: 'What payment methods are accepted?',
                answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. For group registrations, we also offer invoice options.'
            },
            {
                question: 'Can I get a refund if I can\'t attend?',
                answer: 'Yes, we offer full refunds up to 30 days before the event. Refunds between 30-14 days receive 50% back. Unfortunately, we cannot offer refunds within 14 days of the event, but you can transfer your registration to a colleague.'
            },
            {
                question: 'Are there group discounts available?',
                answer: 'Yes! We offer 15% off for groups of 3-5, and 25% off for groups of 6 or more. Contact us at info@lotetree.academy for group registration assistance.'
            }
        ]
    },
    {
        category: 'Event Details',
        questions: [
            {
                question: 'Where is the masterclass held?',
                answer: 'The masterclass is held at the Grand Medical Convention Center, 123 Medical Center Drive, Boston, MA 02115. Free parking is available for all attendees.'
            },
            {
                question: 'What does the registration fee include?',
                answer: 'Your registration includes access to all sessions, course materials, CE credits certificate, networking lunch, coffee breaks, and access to our online resource library for 1 year.'
            },
            {
                question: 'Is lunch provided?',
                answer: 'Yes! A catered networking lunch is included in your registration. Please let us know about any dietary restrictions during registration.'
            },
            {
                question: 'What time does the event start and end?',
                answer: 'Registration opens at 8:00 AM. The first session begins at 9:00 AM, and the final panel discussion concludes at approximately 6:15 PM. An optional networking dinner follows.'
            }
        ]
    },
    {
        category: 'CE Credits',
        questions: [
            {
                question: 'How many CE credits will I receive?',
                answer: 'Attendees can earn up to 12 CE credits. Credits are distributed based on session attendance and verified through our sign-in system.'
            },
            {
                question: 'Which dental associations recognize these credits?',
                answer: 'Our CE credits are recognized by ADA CERP, AGD PACE, and approved by most state dental boards. Contact us if you need verification for a specific state.'
            },
            {
                question: 'When will I receive my CE certificate?',
                answer: 'Digital certificates are emailed within 48 hours of event completion. You can also download them directly from your account dashboard.'
            }
        ]
    },
    {
        category: 'Technical',
        questions: [
            {
                question: 'Is there WiFi available at the venue?',
                answer: 'Yes, complimentary high-speed WiFi is available throughout the venue. Login details will be provided at check-in.'
            },
            {
                question: 'Can I access the materials after the event?',
                answer: 'Absolutely! All registered attendees receive 1-year access to our online resource library, including session recordings, presentation slides, and additional learning materials.'
            },
            {
                question: 'What should I bring?',
                answer: 'We recommend bringing a notebook, business cards for networking, and comfortable attire. All course materials will be provided.'
            }
        ]
    }
];

interface FAQItemProps {
    faq: { question: string; answer: string };
    isOpen: boolean;
    onClick: () => void;
    colors: Record<string, string>;
    isDark: boolean;
}

function FAQItem({ faq, isOpen, onClick, colors, isDark }: FAQItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${colors.cardBg} rounded-3xl border ${colors.border} overflow-hidden`}
        >
            <button
                onClick={onClick}
                className={`w-full px-6 py-5 flex items-center justify-between hover:${isDark ? 'bg-zinc-800' : 'bg-slate-50'} transition-colors`}
            >
                <span className={`font-medium ${colors.text} text-left pr-4`}>{faq.question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ChevronDown className={`w-5 h-5 ${colors.textSecondary}`} />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className={`px-6 pb-5 ${colors.textSecondary}`}>
                            {faq.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function FAQ() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [openIndex, setOpenIndex] = useState<string | null>(null);
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const heroRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start']
    });

    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
    const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

    const colors = {
        bg: isDark ? 'bg-black' : 'bg-white',
        bgAlt: isDark ? 'bg-zinc-950' : 'bg-zinc-100',
        text: isDark ? 'text-white' : 'text-black',
        textSecondary: isDark ? 'text-white/70' : 'text-black/70',
        textMuted: isDark ? 'text-white/50' : 'text-black/50',
        border: isDark ? 'border-white/10' : 'border-black/10',
        accent: isDark ? 'text-white' : 'text-black',
        accentBg: isDark ? 'bg-white/10' : 'bg-black/5',
        cardBg: isDark ? 'bg-zinc-900' : 'bg-white',
        inputBg: isDark ? 'bg-zinc-900' : 'bg-white',
        inputBorder: isDark ? 'border-white/10' : 'border-black/10',
    };

    const categories = ['all', ...faqData.map(c => c.category)];

    const filteredFAQs = faqData
        .filter(category => activeCategory === 'all' || category.category === activeCategory)
        .map(category => ({
            ...category,
            questions: category.questions.filter(
                q =>
                    q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    q.answer.toLowerCase().includes(searchQuery.toLowerCase())
            )
        }))
        .filter(category => category.questions.length > 0);

    return (
        <main className={`${colors.bg} transition-colors duration-500`}>
            {/* Full-Screen Cinematic Hero with Parallax */}
            <section ref={heroRef} className="relative h-screen overflow-hidden">
                {/* Background with Parallax */}
                <motion.div
                    style={{ scale: heroScale, y: heroY }}
                    className="absolute inset-0"
                >
                    <div className={`absolute inset-0 z-10 ${isDark ? 'bg-black/40' : 'bg-black/20'}`} />
                    <img
                        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&h=1080&fit=crop"
                        alt="FAQ"
                        className="w-full h-full object-cover grayscale"
                    />
                </motion.div>

                {/* Content */}
                <motion.div
                    style={{ opacity: heroOpacity }}
                    className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
                    >
                        <HelpCircle className="w-4 h-4 text-white/80" />
                        <span className="text-white/90 text-sm font-medium">
                            Need Help?
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black text-white max-w-5xl leading-[0.95] mb-6 uppercase tracking-tighter"
                    >
                        Frequently Asked Questions
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="text-xl text-white/80 max-w-2xl mb-10"
                    >
                        Find answers to common questions about registration,
                        event details, CE credits, and more.
                    </motion.p>

                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 }}
                        className="max-w-xl w-full"
                    >
                        <div className="relative">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                            <input
                                type="text"
                                placeholder="Search for answers..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-14 pr-6 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-colors"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* FAQ Content */}
            <section className={`py-28 ${colors.bg}`}>
                <div className="max-w-4xl mx-auto px-6">
                    {/* Category Tabs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-3 justify-center mb-12"
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all ${activeCategory === category
                                        ? 'bg-black text-white dark:bg-white dark:text-black shadow-lg'
                                        : `${colors.bgAlt} ${colors.textSecondary} border ${colors.border} hover:border-black/50 dark:hover:border-white/50`
                                    }`}
                            >
                                {category === 'all' ? 'All Topics' : category}
                            </button>
                        ))}
                    </motion.div>

                    {/* FAQ Items */}
                    <div className="space-y-4">
                        {filteredFAQs.length > 0 ? (
                            filteredFAQs.map((category) =>
                                category.questions.map((faq, index) => (
                                    <FAQItem
                                        key={`${category.category}-${index}`}
                                        faq={faq}
                                        isOpen={openIndex === `${category.category}-${index}`}
                                        onClick={() =>
                                            setOpenIndex(
                                                openIndex === `${category.category}-${index}`
                                                    ? null
                                                    : `${category.category}-${index}`
                                            )
                                        }
                                        colors={colors}
                                        isDark={isDark}
                                    />
                                ))
                            )
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className={`text-center py-16 ${colors.cardBg} rounded-3xl border ${colors.border}`}
                            >
                                <HelpCircle className={`w-12 h-12 ${colors.textMuted} mx-auto mb-4`} />
                                <p className={colors.textSecondary}>
                                    No results found for "{searchQuery}"
                                </p>
                                <button
                                    onClick={() => {
                                        setSearchQuery('');
                                        setActiveCategory('all');
                                    }}
                                    className={`${colors.accent} mt-3 font-medium hover:underline`}
                                >
                                    Clear search
                                </button>
                            </motion.div>
                        )}
                    </div>
                </div>
            </section>

            {/* Still Have Questions CTA */}
            <section className="relative py-40 overflow-hidden border-t border-white/5 bg-black">
                <div className="absolute inset-0 bg-black" />
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white,transparent_70%)]" />

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <MessageCircle className="w-16 h-16 text-white opacity-20 mx-auto mb-10" />
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
                            Still Have Questions?
                        </h2>
                        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                            Our team is here to help. Reach out and we'll get back
                            to you within 24 hours.
                        </p>
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-3 bg-white text-black font-black uppercase tracking-widest px-10 py-5 rounded-full text-[11px] shadow-2xl hover:bg-zinc-100 transition-all border border-black/5"
                            >
                                Contact Us
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
