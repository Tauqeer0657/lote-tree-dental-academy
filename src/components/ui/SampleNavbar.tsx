import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Dentists', path: '/dentists' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
];

interface SampleNavbarProps {
    variant?: 'default' | 'transparent' | 'glass';
}

export default function SampleNavbar({ variant = 'default' }: SampleNavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const getNavStyles = () => {
        if (variant === 'glass') {
            return isScrolled
                ? isDark
                    ? 'bg-slate-900/80 backdrop-blur-xl border-b border-white/10'
                    : 'bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm'
                : 'bg-transparent';
        }
        if (variant === 'transparent') {
            return isScrolled
                ? isDark
                    ? 'bg-slate-950/95 backdrop-blur-lg shadow-lg'
                    : 'bg-white/95 backdrop-blur-lg shadow-md'
                : 'bg-transparent';
        }
        // default
        return isScrolled
            ? isDark
                ? 'bg-slate-900 shadow-lg'
                : 'bg-white shadow-md'
            : isDark
                ? 'bg-slate-950/50 backdrop-blur-sm'
                : 'bg-white/50 backdrop-blur-sm';
    };

    const textColor = isDark ? 'text-white' : 'text-slate-900';
    const textSecondary = isDark ? 'text-slate-300' : 'text-slate-600';
    const hoverBg = isDark ? 'hover:bg-white/10' : 'hover:bg-slate-100';

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getNavStyles()}`}
            >
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}>
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3">
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                                    isDark
                                        ? 'bg-gradient-to-br from-violet-500 to-fuchsia-500'
                                        : 'bg-gradient-to-br from-sky-500 to-sky-600'
                                }`}
                            >
                                <span className="text-white font-bold text-lg">D</span>
                            </motion.div>
                            <span className={`font-semibold text-xl ${textColor}`}>
                                DentalMasters
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${textSecondary} ${hoverBg}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Right Side */}
                        <div className="flex items-center gap-4">
                            <ThemeToggle />

                            <Link to="/register" className="hidden md:block">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`px-6 py-2.5 rounded-xl font-semibold text-sm text-white transition-all ${
                                        isDark
                                            ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-400 hover:to-fuchsia-400'
                                            : 'bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500'
                                    }`}
                                >
                                    Register Now
                                </motion.button>
                            </Link>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className={`md:hidden p-2 rounded-lg ${hoverBg} transition-colors`}
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? (
                                    <X className={`w-6 h-6 ${textColor}`} />
                                ) : (
                                    <Menu className={`w-6 h-6 ${textColor}`} />
                                )}
                            </button>
                        </div>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className={`fixed top-0 right-0 bottom-0 w-80 z-50 shadow-2xl md:hidden ${
                            isDark ? 'bg-slate-900' : 'bg-white'
                        }`}
                    >
                        <div className="p-6">
                            <div className="flex justify-end mb-8">
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`p-2 rounded-lg ${hoverBg} transition-colors`}
                                >
                                    <X className={`w-6 h-6 ${textColor}`} />
                                </button>
                            </div>

                            <div className="flex flex-col gap-2">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.path}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            to={link.path}
                                            className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${textSecondary} ${hoverBg}`}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="mt-8"
                            >
                                <Link to="/register" className="block">
                                    <button className={`w-full py-3 rounded-xl font-semibold text-white ${
                                        isDark
                                            ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500'
                                            : 'bg-gradient-to-r from-sky-500 to-sky-600'
                                    }`}>
                                        Register Now
                                    </button>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
