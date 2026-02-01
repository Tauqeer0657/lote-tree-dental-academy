import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from './ui/ThemeToggle';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Speakers', path: '/dentists' },
    { name: 'Events', path: '/events' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
];

export default function CinematicNavbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const colors = {
        text: isDark ? 'text-white' : 'text-black',
        textSecondary: isDark ? 'text-white/70' : 'text-black/70',
        accent: isDark ? 'text-white' : 'text-black',
    };

    return (
        <>
            <motion.header
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? isDark
                        ? 'bg-black/95 backdrop-blur-md border-b border-white/5'
                        : 'bg-white/95 backdrop-blur-md border-b border-black/5'
                    : 'bg-transparent'
                    }`}
            >
                <nav className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3">
                            <span className={`font-display font-medium text-2xl tracking-[0.2em] uppercase ${isScrolled ? colors.text : 'text-white'}`}>
                                #LoteTreeAcademy
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`px-4 py-2 text-[11px] uppercase tracking-[0.2em] font-medium transition-all ${location.pathname === link.path
                                        ? isScrolled ? colors.text : 'text-white'
                                        : isScrolled
                                            ? `${colors.textSecondary} hover:${colors.text}`
                                            : 'text-white/60 hover:text-white'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Right Side */}
                        <div className="flex items-center gap-6">
                            <ThemeToggle />
                            <Link to="/register" className="hidden md:block">
                                <motion.button
                                    whileHover={{ opacity: 0.8 }}
                                    className={`px-8 py-3 font-medium text-[11px] uppercase tracking-[0.2em] transition-all border ${isScrolled
                                        ? isDark
                                            ? 'bg-white text-black border-white'
                                            : 'bg-black text-white border-black'
                                        : 'bg-white text-black border-white'
                                        }`}
                                >
                                    Register
                                </motion.button>
                            </Link>
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className={`md:hidden p-2 ${isScrolled ? colors.text : 'text-white'}`}
                            >
                                {isMobileMenuOpen
                                    ? <X className="w-6 h-6" />
                                    : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className={`md:hidden border-t ${isDark ? 'bg-black border-white/5' : 'bg-white border-black/5'}`}
                        >
                            <div className="px-6 py-8 space-y-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className={`block py-2 text-[11px] uppercase tracking-[0.2em] font-medium ${location.pathname === link.path
                                            ? colors.text
                                            : colors.textSecondary
                                            }`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Link to="/register" className="block pt-4">
                                    <button className={`w-full py-4 text-[11px] uppercase tracking-[0.2em] font-medium border ${isDark ? 'bg-white text-black border-white' : 'bg-black text-white border-black'}`}>
                                        Register Now
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>
        </>
    );
}
