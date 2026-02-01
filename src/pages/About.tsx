import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Clock,
    Users,
    Award,
    Video,
    Calendar,
    MapPin,
    CheckCircle,
    ArrowRight,
    BookOpen,
    Target,
    Zap,
    Shield
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { upcomingEvent } from '../data/mockData';
import { formatDate } from '../lib/utils';

const curriculum = [
    {
        time: '9:00 AM - 10:30 AM',
        title: 'Digital Dentistry Revolution',
        speaker: 'Dr. Aisha Patel',
        topics: ['CAD/CAM Workflow', 'Digital Smile Design', '3D Printing in Dentistry']
    },
    {
        time: '10:45 AM - 12:15 PM',
        title: 'Advanced Implantology',
        speaker: 'Dr. Sarah Mitchell',
        topics: ['Full-Arch Rehabilitation', 'Immediate Loading Protocols', 'Guided Surgery']
    },
    {
        time: '12:15 PM - 1:15 PM',
        title: 'Lunch Break & Networking',
        speaker: '',
        topics: []
    },
    {
        time: '1:15 PM - 2:45 PM',
        title: 'Microscopic Endodontics',
        speaker: 'Dr. James Chen',
        topics: ['Advanced Instrumentation', 'Retreatment Strategies', 'Apical Microsurgery']
    },
    {
        time: '3:00 PM - 4:30 PM',
        title: 'Regenerative Periodontics',
        speaker: 'Dr. Emily Rodriguez',
        topics: ['Growth Factors & PRF', 'Soft Tissue Grafting', 'Bone Regeneration']
    },
    {
        time: '4:45 PM - 6:15 PM',
        title: 'Complex Oral Surgery',
        speaker: 'Dr. Michael Thompson',
        topics: ['Orthognathic Surgery', '3D Surgical Planning', 'TMJ Disorders']
    },
    {
        time: '6:30 PM - 8:00 PM',
        title: 'Panel Discussion & Q&A',
        speaker: 'All Speakers',
        topics: ['Case Presentations', 'Live Q&A', 'Practice Management Tips']
    },
    {
        time: '8:00 PM',
        title: 'Networking Dinner (Optional)',
        speaker: '',
        topics: ['Meet the speakers', 'Network with peers']
    }
];

const whoShouldAttend = [
    { icon: Users, title: 'General Dentists', desc: 'Looking to expand their skill set' },
    { icon: Award, title: 'Specialists', desc: 'Seeking cutting-edge techniques' },
    { icon: BookOpen, title: 'Dental Students', desc: 'Wanting exposure to advanced procedures' },
    { icon: Target, title: 'Practice Owners', desc: 'Aiming to differentiate their practice' },
];

const learningObjectives = [
    'Master the latest digital dentistry workflows and tools',
    'Learn advanced implant placement techniques with minimal complications',
    'Understand microscopic approaches to endodontic treatment',
    'Implement regenerative procedures in your practice',
    'Apply evidence-based protocols for complex cases',
    'Develop strategies for practice growth and patient retention'
];

export default function About() {
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
        text: isDark ? 'text-white' : 'text-slate-900',
        textSecondary: isDark ? 'text-white/70' : 'text-slate-600',
        textMuted: isDark ? 'text-white/50' : 'text-slate-400',
        border: isDark ? 'border-white/10' : 'border-slate-200',
        accent: isDark ? 'text-cyan-400' : 'text-cyan-600',
        accentBg: isDark ? 'bg-cyan-500/10' : 'bg-cyan-50',
        cardBg: isDark ? 'bg-zinc-900' : 'bg-white',
    };

    return (
        <main className={`${colors.bg} transition-colors duration-500`}>
            {/* Full-Screen Cinematic Hero with Parallax */}
            <section ref={heroRef} className="relative h-screen overflow-hidden">
                {/* Background with Parallax */}
                <motion.div
                    style={{ scale: heroScale, y: heroY }}
                    className="absolute inset-0"
                >
                    <div className={`absolute inset-0 z-10 ${isDark ? 'bg-gradient-to-b from-cyan-950/80 via-black/60 to-black' : 'bg-gradient-to-b from-cyan-900/50 via-slate-900/40 to-slate-900/90'}`} />
                    <img
                        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&h=1080&fit=crop"
                        alt="Dental Excellence"
                        className="w-full h-full object-cover"
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
                        <Calendar className="w-4 h-4 text-cyan-400" />
                        <span className="text-white/90 text-sm font-medium">
                            Event Details
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold text-white max-w-5xl leading-[0.95] mb-6"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                            {upcomingEvent.name}
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="text-xl text-white/80 max-w-2xl mb-8"
                    >
                        A comprehensive 12-hour masterclass covering the most in-demand topics
                        in modern dentistry, delivered by world-renowned experts.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 }}
                        className="flex flex-wrap items-center justify-center gap-6 text-white/80"
                    >
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-cyan-400" />
                            <span>{formatDate(upcomingEvent.date)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-cyan-400" />
                            <span>9:00 AM - 9:00 PM EST</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-cyan-400" />
                            <span>Live In-Person Training</span>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Event Format Section */}
            <section className={`py-28 ${colors.bg}`}>
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className={`text-4xl md:text-5xl font-bold ${colors.text} mb-4`}>
                            Event Format & Schedule
                        </h2>
                        <p className={`${colors.textSecondary} text-xl max-w-2xl mx-auto`}>
                            A carefully structured program designed for maximum learning and engagement
                        </p>
                    </motion.div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical line */}
                        <div className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 ${isDark ? 'bg-white/10' : 'bg-slate-200'} -translate-x-1/2`} />

                        <div className="space-y-8">
                            {curriculum.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className={`relative flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Content */}
                                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'} pl-12 md:pl-0`}>
                                        <div className={`${colors.cardBg} rounded-3xl border ${colors.border} p-6 ${item.speaker ? '' : `${colors.accentBg} border-dashed`}`}>
                                            <span className={`text-sm ${colors.accent} font-semibold`}>{item.time}</span>
                                            <h3 className={`text-lg font-bold ${colors.text} mt-1 mb-2`}>{item.title}</h3>
                                            {item.speaker && (
                                                <p className={`${colors.textSecondary} text-sm mb-3`}>by {item.speaker}</p>
                                            )}
                                            {item.topics.length > 0 && (
                                                <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                                    {item.topics.map((topic, i) => (
                                                        <span key={i} className={`text-xs ${colors.bgAlt} px-2 py-1 rounded-lg ${colors.textSecondary}`}>
                                                            {topic}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Dot */}
                                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-4 border-white dark:border-black shadow-md -translate-x-1/2 mt-2 z-10" />

                                    {/* Spacer for alternating layout */}
                                    <div className="hidden md:block flex-1" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Who Should Attend */}
            <section className={`py-28 ${colors.bgAlt}`}>
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className={`text-4xl md:text-5xl font-bold ${colors.text} mb-4`}>
                            Who Should Attend?
                        </h2>
                        <p className={`${colors.textSecondary} text-xl max-w-2xl mx-auto`}>
                            This masterclass is designed for dental professionals at all stages of their career
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whoShouldAttend.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className={`${colors.cardBg} rounded-3xl p-6 text-center border ${colors.border}`}
                            >
                                <div className={`w-14 h-14 rounded-2xl ${colors.accentBg} flex items-center justify-center mx-auto mb-4`}>
                                    <item.icon className={`w-7 h-7 ${colors.accent}`} />
                                </div>
                                <h3 className={`font-semibold ${colors.text} mb-2`}>{item.title}</h3>
                                <p className={`text-sm ${colors.textSecondary}`}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Learning Objectives */}
            <section className={`py-28 ${colors.bg}`} id="ce-credits">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className={`inline-block ${colors.accent} font-semibold text-sm uppercase tracking-wider mb-4`}>
                                Learning Objectives
                            </span>
                            <h2 className={`text-4xl md:text-5xl font-bold ${colors.text} mb-6`}>
                                What You'll Learn
                            </h2>
                            <div className="space-y-4">
                                {learningObjectives.map((objective, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-0.5" />
                                        <span className={colors.textSecondary}>{objective}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className={`${isDark ? 'bg-gradient-to-br from-cyan-950/50 to-blue-950/50' : 'bg-gradient-to-br from-cyan-50 to-blue-50'} rounded-3xl p-8 border ${colors.border}`}>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                                        <Award className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className={`font-bold ${colors.text}`}>CE Credits</h3>
                                        <p className={`text-sm ${colors.textSecondary}`}>Continuing Education</p>
                                    </div>
                                </div>
                                <p className={`${colors.textSecondary} mb-6`}>
                                    Upon completion, receive a certificate of attendance eligible for
                                    up to <span className={`font-semibold ${colors.accent}`}>12 CE credits</span>.
                                    Credits are recognized by major dental associations.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <span className={`${colors.cardBg} px-3 py-1.5 rounded-lg text-sm ${colors.textSecondary} border ${colors.border}`}>ADA CERP</span>
                                    <span className={`${colors.cardBg} px-3 py-1.5 rounded-lg text-sm ${colors.textSecondary} border ${colors.border}`}>AGD PACE</span>
                                    <span className={`${colors.cardBg} px-3 py-1.5 rounded-lg text-sm ${colors.textSecondary} border ${colors.border}`}>State Approved</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What to Bring */}
            <section className={`py-28 ${colors.bgAlt}`}>
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={`text-4xl md:text-5xl font-bold ${colors.text} mb-8`}>
                            What to Bring
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className={`${colors.cardBg} rounded-3xl p-6 border ${colors.border}`}>
                                <Zap className={`w-8 h-8 ${colors.accent} mx-auto mb-3`} />
                                <h4 className={`font-semibold ${colors.text} mb-2`}>Notebook</h4>
                                <p className={`text-sm ${colors.textSecondary}`}>Take notes during the 12-hour live session</p>
                            </div>
                            <div className={`${colors.cardBg} rounded-3xl p-6 border ${colors.border}`}>
                                <Video className={`w-8 h-8 ${colors.accent} mx-auto mb-3`} />
                                <h4 className={`font-semibold ${colors.text} mb-2`}>ID Card</h4>
                                <p className={`text-sm ${colors.textSecondary}`}>Professional ID or registration confirmation</p>
                            </div>
                            <div className={`${colors.cardBg} rounded-3xl p-6 border ${colors.border}`}>
                                <Shield className={`w-8 h-8 ${colors.accent} mx-auto mb-3`} />
                                <h4 className={`font-semibold ${colors.text} mb-2`}>Enthusiasm</h4>
                                <p className={`text-sm ${colors.textSecondary}`}>Come ready to learn and network!</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA - Cinematic */}
            <section className="relative py-32 overflow-hidden">
                <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-cyan-950 via-slate-950 to-black' : 'bg-gradient-to-br from-cyan-600 via-blue-700 to-slate-900'}`} />

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Ready to Transform Your Practice?
                        </h2>
                        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                            Secure your spot today and join thousands of dental professionals
                            who have elevated their skills.
                        </p>
                        <Link to="/register">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-3 bg-white text-cyan-700 font-bold px-10 py-5 rounded-full text-lg shadow-2xl hover:bg-cyan-50 transition-all"
                            >
                                Register Now for $499
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
