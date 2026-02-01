import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    MessageCircle,
    CheckCircle,
    ArrowRight
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { cn } from '../lib/utils';

const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    subject: z.string().min(5, 'Subject must be at least 5 characters'),
    message: z.string().min(20, 'Message must be at least 20 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const heroRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start']
    });

    const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
    const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

    const colors = {
        bg: isDark ? 'bg-black' : 'bg-white',
        bgAlt: isDark ? 'bg-zinc-950' : 'bg-white',
        text: isDark ? 'text-white' : 'text-black',
        textSecondary: isDark ? 'text-white/60' : 'text-black/60',
        textMuted: isDark ? 'text-white/40' : 'text-black/40',
        border: isDark ? 'border-white/10' : 'border-black/10',
        accent: isDark ? 'text-white' : 'text-black',
        accentBg: isDark ? 'bg-white/10' : 'bg-black/5',
        cardBg: isDark ? 'bg-black' : 'bg-white',
        inputBg: isDark ? 'bg-black' : 'bg-white',
        inputBorder: isDark ? 'border-black/10' : 'border-black/20',
        inputFocus: isDark ? 'focus:border-white' : 'focus:border-black',
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema)
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Form submitted:', data);
        setIsSubmitting(false);
        setIsSubmitted(true);
        reset();
    };

    return (
        <main className={`${colors.bg} transition-colors duration-500`}>
            {/* Minimalist Hero */}
            <section ref={heroRef} className="relative h-screen overflow-hidden flex items-center justify-center text-center">
                {/* Background with Parallax */}
                <motion.div
                    style={{ scale: heroScale, y: heroY }}
                    className="absolute inset-0 z-0"
                >
                    <div className={`absolute inset-0 z-10 ${isDark ? 'bg-black/60' : 'bg-black/40'}`} />
                    <img
                        src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1920&h=1080&fit=crop"
                        alt="Contact Us"
                        className="w-full h-full object-cover grayscale"
                    />
                </motion.div>

                {/* Content */}
                <div className="relative z-20 px-6 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mb-12"
                    >
                        <span className="text-[11px] font-black uppercase tracking-[0.5em] text-white/80">
                            GET IN TOUCH
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl lg:text-9xl font-display font-medium text-white leading-[0.9] mb-12 uppercase tracking-tighter"
                    >
                        CONNECT
                        <br />
                        WITH US
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-[12px] uppercase tracking-[0.4em] font-black text-white/60 max-w-2xl mx-auto"
                    >
                        Have questions about the masterclass? We're here to help.
                        Reach out and our team will get back to you shortly.
                    </motion.p>
                </div>
            </section>

            {/* Contact Content */}
            <section className={`py-28 ${colors.bg}`}>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2"
                        >
                            <div className="space-y-8">
                                <div>
                                    <h3 className={`text-xl font-bold ${colors.text} mb-6`}>
                                        Contact Information
                                    </h3>
                                    <div className="space-y-6">
                                        <a
                                            href="mailto:info@lotetree.academy"
                                            className="flex items-start gap-4 group"
                                        >
                                            <div className={`w-12 h-12 rounded-2xl ${colors.accentBg} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                                                <Mail className={`w-5 h-5 ${colors.accent}`} />
                                            </div>
                                            <div>
                                                <p className={`font-medium ${colors.text}`}>Email</p>
                                                <p className={`${colors.textSecondary} group-hover:${colors.accent} transition-colors`}>
                                                    info@lotetree.academy
                                                </p>
                                            </div>
                                        </a>

                                        <a
                                            href="tel:+1-800-DENTIST"
                                            className="flex items-start gap-4 group"
                                        >
                                            <div className={`w-12 h-12 rounded-2xl ${colors.accentBg} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                                                <Phone className={`w-5 h-5 ${colors.accent}`} />
                                            </div>
                                            <div>
                                                <p className={`font-medium ${colors.text}`}>Phone</p>
                                                <p className={`${colors.textSecondary} group-hover:${colors.accent} transition-colors`}>
                                                    +44 7500802149
                                                </p>
                                            </div>
                                        </a>

                                        <div className="flex items-start gap-4">
                                            <div className={`w-12 h-12 rounded-2xl ${colors.accentBg} flex items-center justify-center`}>
                                                <MapPin className={`w-5 h-5 ${colors.accent}`} />
                                            </div>
                                            <div>
                                                <p className={`font-medium ${colors.text}`}>Address</p>
                                                <p className={colors.textSecondary}>
                                                    Sheraton Skyline, Bath Road<br />
                                                    Heathrow, London UB3 5BP
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className={`w-12 h-12 rounded-2xl ${colors.accentBg} flex items-center justify-center`}>
                                                <Clock className={`w-5 h-5 ${colors.accent}`} />
                                            </div>
                                            <div>
                                                <p className={`font-medium ${colors.text}`}>Office Hours</p>
                                                <p className={colors.textSecondary}>
                                                    Mon - Fri: 9:00 AM - 6:00 PM EST<br />
                                                    Sat: 10:00 AM - 2:00 PM EST
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`border ${colors.border} ${isDark ? 'bg-white/5' : 'bg-black/5'} rounded-3xl p-10`}>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className={`w-12 h-12 rounded-2xl ${isDark ? 'bg-white/10' : 'bg-black/10'} flex items-center justify-center`}>
                                            <MessageCircle className={`w-6 h-6 ${colors.accent}`} />
                                        </div>
                                        <h4 className={`text-xl font-black ${colors.text} uppercase tracking-tight`}>Live Chat</h4>
                                    </div>
                                    <p className={`${colors.textSecondary} text-sm mb-8 font-medium uppercase tracking-wide leading-relaxed`}>
                                        Need immediate help? Start a live chat with our support team.
                                    </p>
                                    <button className={`${colors.accent} font-black text-[11px] uppercase tracking-[0.2em] hover:opacity-60 transition-opacity flex items-center gap-2`}>
                                        Start Chat <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-3"
                        >
                            <div className={`${colors.cardBg} rounded-3xl border ${colors.border} p-8`}>
                                {isSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12"
                                    >
                                        <div className={`w-20 h-20 rounded-full ${colors.accentBg} flex items-center justify-center mx-auto mb-6`}>
                                            <CheckCircle className={`w-10 h-10 ${isDark ? 'text-white' : 'text-black'}`} />
                                        </div>
                                        <h3 className={`text-2xl font-bold ${colors.text} mb-3`}>
                                            Message Sent!
                                        </h3>
                                        <p className={`${colors.textSecondary} mb-6`}>
                                            Thank you for reaching out. We'll get back to you within 24 hours.
                                        </p>
                                        <button
                                            onClick={() => setIsSubmitted(false)}
                                            className={`${colors.accent} font-medium hover:underline`}
                                        >
                                            Send another message
                                        </button>
                                    </motion.div>
                                ) : (
                                    <>
                                        <h3 className={`text-2xl font-display font-medium ${colors.text} mb-10 uppercase tracking-tight`}>
                                            Send us a Message
                                        </h3>
                                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                                            <div className="space-y-3">
                                                <label htmlFor="name" className={`block text-[10px] font-black uppercase tracking-[0.3em] ${colors.text}`}>
                                                    Your Name
                                                </label>
                                                <input
                                                    {...register('name')}
                                                    id="name"
                                                    type="text"
                                                    placeholder="John Doe"
                                                    className={cn(
                                                        `w-full px-5 py-4 border ${colors.inputBorder} ${colors.inputBg} ${colors.text} ${colors.inputFocus} focus:outline-none transition-all text-[13px] uppercase tracking-wider ${isDark ? 'placeholder:text-white/20' : 'placeholder:text-black/20'}`,
                                                        errors.name && 'border-error'
                                                    )}
                                                />
                                                {errors.name && (
                                                    <p className="mt-1 text-[10px] uppercase font-black tracking-widest text-red-500">{errors.name.message}</p>
                                                )}
                                            </div>

                                            <div className="space-y-3">
                                                <label htmlFor="email" className={`block text-[10px] font-black uppercase tracking-[0.3em] ${colors.text}`}>
                                                    Email Address
                                                </label>
                                                <input
                                                    {...register('email')}
                                                    id="email"
                                                    type="email"
                                                    placeholder="john@example.com"
                                                    className={cn(
                                                        `w-full px-5 py-4 border ${colors.inputBorder} ${colors.inputBg} ${colors.text} ${colors.inputFocus} focus:outline-none transition-all text-[13px] uppercase tracking-wider ${isDark ? 'placeholder:text-white/20' : 'placeholder:text-black/20'}`,
                                                        errors.email && 'border-error'
                                                    )}
                                                />
                                                {errors.email && (
                                                    <p className="mt-1 text-[10px] uppercase font-black tracking-widest text-red-500">{errors.email.message}</p>
                                                )}
                                            </div>

                                            <div className="space-y-3">
                                                <label htmlFor="subject" className={`block text-[10px] font-black uppercase tracking-[0.3em] ${colors.text}`}>
                                                    Subject
                                                </label>
                                                <input
                                                    {...register('subject')}
                                                    id="subject"
                                                    type="text"
                                                    placeholder="Course Inquiry"
                                                    className={cn(
                                                        `w-full px-5 py-4 border ${colors.inputBorder} ${colors.inputBg} ${colors.text} ${colors.inputFocus} focus:outline-none transition-all text-[13px] uppercase tracking-wider ${isDark ? 'placeholder:text-white/20' : 'placeholder:text-black/20'}`,
                                                        errors.subject && 'border-error'
                                                    )}
                                                />
                                                {errors.subject && (
                                                    <p className="mt-1 text-[10px] uppercase font-black tracking-widest text-red-500">{errors.subject.message}</p>
                                                )}
                                            </div>

                                            <div className="space-y-3">
                                                <label htmlFor="message" className={`block text-[10px] font-black uppercase tracking-[0.3em] ${colors.text}`}>
                                                    Message
                                                </label>
                                                <textarea
                                                    {...register('message')}
                                                    id="message"
                                                    rows={6}
                                                    placeholder="Your message here..."
                                                    className={cn(
                                                        `w-full px-5 py-4 border ${colors.inputBorder} ${colors.inputBg} ${colors.text} ${colors.inputFocus} focus:outline-none transition-all text-[13px] uppercase tracking-wider ${isDark ? 'placeholder:text-white/20' : 'placeholder:text-black/20'} resize-none`,
                                                        errors.message && 'border-error'
                                                    )}
                                                />
                                                {errors.message && (
                                                    <p className="mt-1 text-[10px] uppercase font-black tracking-widest text-red-500">{errors.message.message}</p>
                                                )}
                                            </div>

                                            <motion.button
                                                type="submit"
                                                disabled={isSubmitting}
                                                whileHover={{ opacity: 0.8 }}
                                                className="w-full py-6 bg-black text-white font-black text-[10px] uppercase tracking-[0.4em] flex items-center justify-center gap-4"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <div className="w-4 h-4 border border-white/30 border-t-white animate-spin" />
                                                        SENDING
                                                    </>
                                                ) : (
                                                    <>
                                                        SEND MESSAGE
                                                        <Send className="w-4 h-4" />
                                                    </>
                                                )}
                                            </motion.button>
                                        </form>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-[450px] bg-black relative overflow-hidden border-t border-white/5">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.744824361546!2d-0.4551226233857!3d51.48116347180749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876722d76717f9d%3A0xe5a3c9e69c3a3754!2sSheraton%20Skyline%20Hotel%20London%20Heathrow!5e0!3m2!1sen!2suk!4v1711900000000!5m2!1sen!2suk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale invert opacity-80 contrast-125"
                />
            </section>
        </main>
    );
}
