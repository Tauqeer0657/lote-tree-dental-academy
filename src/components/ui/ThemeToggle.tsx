import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface ThemeToggleProps {
    className?: string;
}

export default function ThemeToggle({ className = '' }: ThemeToggleProps) {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            className={`relative w-14 h-7 rounded-full p-1 transition-colors duration-300 ${
                theme === 'dark'
                    ? 'bg-slate-700'
                    : 'bg-primary-100'
            } ${className}`}
            whileTap={{ scale: 0.95 }}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            <motion.div
                className={`w-5 h-5 rounded-full flex items-center justify-center ${
                    theme === 'dark'
                        ? 'bg-slate-900'
                        : 'bg-white shadow-md'
                }`}
                animate={{ x: theme === 'dark' ? 28 : 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            >
                {theme === 'dark' ? (
                    <Moon className="w-3 h-3 text-yellow-400" />
                ) : (
                    <Sun className="w-3 h-3 text-amber-500" />
                )}
            </motion.div>
        </motion.button>
    );
}
