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
    MapPin,
    Linkedin,
    Twitter,
    Instagram,
    Image,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';
import ThemeToggle from '../../../components/ui/ThemeToggle';
import { dentists as mockDentists, upcomingEvent as mockEvent, reviews as mockReviews } from '../../../data/mockData';
import { formatDate } from '../../../lib/utils';

/**
 * SAMPLE 7G: GALLERY SHOWCASE
 *
 * Design Philosophy:
 * - Slate + Violet color palette
 * - Gallery/portfolio layout showcasing work
 * - Visual-heavy design with image grids
 * - Artistic, creative healthcare aesthetic
 * - Showcase of transformations and results
 */

const highlights = [
    { icon: Clock, title: '12 Hours Live', description: 'Full training experience' },
    { icon: MessageCircle, title: 'Live Q&A', description: 'Expert interaction' },
    { icon: Award, title: 'Certification', description: 'Accredited credits' },
    { icon: Users, title: 'Community', description: '5000+ members' },
    { icon: Video, title: 'Recordings', description: 'Lifetime access' },
    { icon: FileCheck, title: 'Resources', description: 'Complete materials' },
];

const galleryImages = [
    'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1445527815219-ecbfec67492e?w=600&h=400&fit=crop',
];

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Speakers', path: '/dentists' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
];

export default function HomeSample7g() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Gallery Color System
    const colors = {
        bg: isDark ? 'bg-slate-950' : 'bg-slate-50',
        bgAlt: isDark ? 'bg-slate-900' : 'bg-white',
        bgCard: isDark ? 'bg-slate-900' : 'bg-white',
        text: isDark ? 'text-white' : 'text-slate-900',
        textSecondary: isDark ? 'text-slate-300' : 'text-slate-600',
        textMuted: isDark ? 'text-slate-400' : 'text-slate-500',
        accent: isDark ? 'text-violet-400' : 'text-violet-600',
        accentBg: isDark ? 'bg-violet-500/10' : 'bg-violet-100',
        accentBorder: isDark ? 'border-violet-500/20' : 'border-violet-200',
        primaryGradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
    };

    const nextSlide = () => setActiveSlide((prev) => (prev + 1) % galleryImages.length);
    const prevSlide = () => setActiveSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

    return (
        <main className={`${colors.bg} transition-colors duration-500`}>
            {/* Navigation */}
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? isDark
                            ? 'bg-slate-950/95 backdrop-blur-xl border-b border-violet-500/10'
                            : 'bg-white/95 backdrop-blur-xl border-b border-violet-100 shadow-sm'
                        : 'bg-transparent'
                }`}
            >
                <nav className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
                        <Link to="/" className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center bg-gradient-to-br ${colors.primaryGradient}`}>
                                <Image className="w-5 h-5 text-white" />
                            </div>
                            <span className={`font-bold text-xl ${colors.text}`}>SmileGallery</span>
                        </Link>

                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link key={link.path} to={link.path} className={`px-4 py-2 rounded-xl text-sm font-medium ${colors.textSecondary} hover:${colors.accent} transition-colors`}>
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <div className="flex items-center gap-3">
                            <ThemeToggle />
                            <Link to="/register" className="hidden md:block">
                                <motion.button whileHover={{ scale: 1.02 }} className={`px-6 py-2.5 rounded-full font-medium text-sm text-white bg-gradient-to-r ${colors.primaryGradient}`}>
                                    Register
                                </motion.button>
                            </Link>
                            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 rounded-xl">
                                {isMobileMenuOpen ? <X className={`w-6 h-6 ${colors.text}`} /> : <Menu className={`w-6 h-6 ${colors.text}`} />}
                            </button>
                        </div>
                    </div>
                </nav>

                {isMobileMenuOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`md:hidden ${isDark ? 'bg-slate-950' : 'bg-white'} border-t ${isDark ? 'border-slate-800' : 'border-violet-100'}`}>
                        <div className="px-6 py-4 space-y-2">
                            {navLinks.map((link) => (
                                <Link key={link.path} to={link.path} className={`block py-3 px-4 rounded-xl ${colors.textSecondary}`} onClick={() => setIsMobileMenuOpen(false)}>{link.name}</Link>
                            ))}
                            <Link to="/register" className="block pt-2">
                                <button className={`w-full py-3 rounded-full font-medium text-white bg-gradient-to-r ${colors.primaryGradient}`}>Register</button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </motion.header>

            {/* Hero - Large Gallery Slider */}
            <section className={`pt-24 pb-16 ${colors.bgAlt}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Gallery Slider */}
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="relative mb-12">
                        <div className="relative h-[50vh] md:h-[60vh] rounded-3xl overflow-hidden">
                            {galleryImages.map((img, index) => (
                                <motion.img
                                    key={img}
                                    src={img}
                                    alt={`Gallery ${index + 1}`}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: index === activeSlide ? 1 : 0 }}
                                    transition={{ duration: 0.5 }}
                                />
                            ))}
                            <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30' : 'bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/20'}`} />

                            {/* Slider Controls */}
                            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all">
                                <ChevronLeft className="w-6 h-6 text-white" />
                            </button>
                            <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all">
                                <ChevronRight className="w-6 h-6 text-white" />
                            </button>

                            {/* Dots */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                                {galleryImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveSlide(index)}
                                        className={`w-2 h-2 rounded-full transition-all ${index === activeSlide ? 'w-8 bg-white' : 'bg-white/50'}`}
                                    />
                                ))}
                            </div>

                            {/* Hero Content Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                                <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 bg-violet-500/20 text-violet-200 backdrop-blur-md`}>
                                    {formatDate(mockEvent.date)}
                                </span>
                                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                                    Showcase Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-fuchsia-300">Artistry</span>
                                </h1>
                                <p className="text-white/80 mb-6 max-w-xl">12 hours of visual mastery with 5 world-class dental artists</p>
                                <Link to="/register">
                                    <motion.button whileHover={{ scale: 1.02 }} className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r ${colors.primaryGradient}`}>
                                        Join the Gallery <ArrowRight className="w-5 h-5" />
                                    </motion.button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Thumbnail Strip */}
                    <div className="flex gap-4 overflow-x-auto pb-4">
                        {galleryImages.map((img, index) => (
                            <button
                                key={img}
                                onClick={() => setActiveSlide(index)}
                                className={`flex-none w-24 h-16 rounded-xl overflow-hidden border-2 transition-all ${index === activeSlide ? 'border-violet-500 scale-105' : 'border-transparent opacity-60'}`}
                            >
                                <img src={img} alt={`Thumb ${index + 1}`} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className={`py-12 ${colors.bg}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { value: '5', label: 'Master Artists' },
                            { value: '12h', label: 'Of Content' },
                            { value: '5K+', label: 'Trained' },
                            { value: '4.9★', label: 'Rating' },
                        ].map((stat, index) => (
                            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center">
                                <div className={`text-3xl font-bold ${colors.accent}`}>{stat.value}</div>
                                <div className={`text-sm ${colors.textMuted}`}>{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Speakers - Gallery Cards */}
            <section className={`py-20 ${colors.bgAlt}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                        <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${colors.accentBg} ${colors.accent}`}>Featured Artists</span>
                        <h2 className={`text-4xl md:text-5xl font-bold ${colors.text}`}>The Masters</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {mockDentists.slice(0, 3).map((dentist, index) => (
                            <motion.div
                                key={dentist.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className={`rounded-3xl overflow-hidden ${colors.bgCard} shadow-xl border ${isDark ? 'border-slate-800' : 'border-violet-100'}`}>
                                    <div className="relative h-80 overflow-hidden">
                                        <img src={dentist.profileImageUrl} alt={dentist.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 bg-violet-500/30 text-violet-200 backdrop-blur-md`}>
                                                {dentist.specialty.split('&')[0].trim()}
                                            </span>
                                            <h3 className="text-xl font-bold text-white">{dentist.name}</h3>
                                            <p className="text-white/70 text-sm">{dentist.institution}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image Masonry Grid */}
            <section className={`py-20 ${colors.bg}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`text-4xl md:text-5xl font-bold ${colors.text} text-center mb-12`}>
                        Visual Excellence
                    </motion.h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {galleryImages.map((img, index) => (
                            <motion.div
                                key={img}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`rounded-2xl overflow-hidden ${index % 3 === 0 ? 'row-span-2' : ''}`}
                            >
                                <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className={`py-20 ${colors.bgAlt}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {highlights.map((feature, index) => (
                            <motion.div key={feature.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                                className={`p-8 rounded-3xl border ${isDark ? 'border-slate-800 bg-slate-900/50' : 'border-violet-100 bg-white'} shadow-lg`}>
                                <div className={`w-14 h-14 rounded-2xl ${colors.accentBg} flex items-center justify-center mb-6`}>
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
            <section className={`py-20 ${colors.bg}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`text-4xl font-bold ${colors.text} text-center mb-12`}>
                        Artist Reviews
                    </motion.h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {mockReviews.slice(0, 3).map((review, index) => (
                            <motion.div key={review.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                                className={`p-8 rounded-3xl ${colors.bgCard} shadow-lg border ${isDark ? 'border-slate-800' : 'border-violet-100'}`}>
                                <div className="flex gap-1 mb-4">
                                    {[...Array(review.rating)].map((_, i) => (<Star key={i} className="w-5 h-5 fill-violet-500 text-violet-500" />))}
                                </div>
                                <p className={`${colors.textSecondary} mb-6 leading-relaxed`}>"{review.reviewText}"</p>
                                <div className="flex items-center gap-4">
                                    <img src={review.attendeePhotoUrl} alt={review.attendeeName} className="w-12 h-12 rounded-full object-cover ring-2 ring-violet-500/30" />
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

            {/* CTA */}
            <section className="relative py-24 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.primaryGradient}`} />
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <Image className="w-16 h-16 text-white/80 mx-auto mb-8" />
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Create Your Masterpiece</h2>
                        <p className="text-xl text-white/80 mb-8">{formatDate(mockEvent.date)} • {mockEvent.durationHours} Hours • Virtual</p>
                        <Link to="/register">
                            <motion.button whileHover={{ scale: 1.02 }} className="inline-flex items-center gap-3 bg-white text-violet-600 font-bold px-10 py-5 rounded-full text-lg shadow-2xl">
                                Join the Gallery — ${mockEvent.basePrice} <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </Link>
                        <p className="text-white/60 text-sm mt-6">{mockEvent.maxCapacity - mockEvent.currentRegistrations} seats remaining</p>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className={`${isDark ? 'bg-slate-950' : 'bg-slate-900'}`}>
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div>
                            <Link to="/" className="flex items-center gap-3 mb-4">
                                <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${colors.primaryGradient} flex items-center justify-center`}>
                                    <Image className="w-5 h-5 text-white" />
                                </div>
                                <span className="font-bold text-xl text-white">SmileGallery</span>
                            </Link>
                            <p className="text-white/60 text-sm mb-6">Where dental artistry meets education.</p>
                            <div className="flex gap-3">
                                {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                                    <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-violet-500/20 flex items-center justify-center">
                                        <Icon className="w-4 h-4 text-violet-400" />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-4">Company</h4>
                            <ul className="space-y-3">
                                {['About', 'Artists', 'Reviews', 'Contact'].map((item) => (<li key={item}><Link to="#" className="text-sm text-white/60 hover:text-violet-400">{item}</Link></li>))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-4">Resources</h4>
                            <ul className="space-y-3">
                                {['Event', 'CE Credits', 'FAQ', 'Blog'].map((item) => (<li key={item}><Link to="#" className="text-sm text-white/60 hover:text-violet-400">{item}</Link></li>))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-4">Contact</h4>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-violet-400" /><span className="text-sm text-white/60">art@smilegallery.com</span></li>
                                <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-violet-400" /><span className="text-sm text-white/60">+1-888-ART</span></li>
                                <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-violet-400" /><span className="text-sm text-white/60">Los Angeles, CA</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-white/40">© {new Date().getFullYear()} SmileGallery. All rights reserved.</p>
                        <div className="flex gap-6">
                            {['Privacy', 'Terms', 'Cookies'].map((item) => (<Link key={item} to="#" className="text-sm text-white/40 hover:text-violet-400">{item}</Link>))}
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
