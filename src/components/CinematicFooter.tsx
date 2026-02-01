import { Link } from 'react-router-dom';
import { Film, Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function CinematicFooter() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <footer className={`relative ${isDark ? 'bg-black border-t border-white/5' : 'bg-white border-t border-black/5'}`}>
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="flex items-center gap-3 mb-4">
                            <div className={`w-10 h-10 rounded-xl ${isDark ? 'bg-white/10' : 'bg-black/5'} flex items-center justify-center`}>
                                <Film className={`w-5 h-5 ${isDark ? 'text-white' : 'text-black'}`} />
                            </div>
                            <span className={`font-bold text-xl ${isDark ? 'text-white' : 'text-black'}`}>Lote Tree Dental Academy</span>
                        </Link>
                        <p className={`${isDark ? 'text-white/60' : 'text-black/60'} text-sm mb-6`}>
                            Cinematic dental education for the modern practitioner.
                        </p>
                        <div className="flex gap-3">
                            {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all border border-white/5">
                                    <Icon className={`w-4 h-4 ${isDark ? 'text-white/80' : 'text-black/80'}`} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-black'} mb-4`}>Company</h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'About Us', path: '/about' },
                                { name: 'Speakers', path: '/dentists' },
                                { name: 'FAQ', path: '/faq' },
                                { name: 'Contact', path: '/contact' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link to={item.path} className={`text-sm ${isDark ? 'text-white/60' : 'text-black/60'} hover:${isDark ? 'text-white' : 'text-black'} transition-colors`}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-black'} mb-4`}>Resources</h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'Event Details', path: '/about' },
                                { name: 'CE Credits', path: '/about#ce-credits' },
                                { name: 'FAQ', path: '/faq' },
                                { name: 'Register', path: '/register' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link to={item.path} className={`text-sm ${isDark ? 'text-white/60' : 'text-black/60'} hover:${isDark ? 'text-white' : 'text-black'} transition-colors`}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-black'} mb-4`}>Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <Mail className={`w-4 h-4 ${isDark ? 'text-white/40' : 'text-black/40'}`} />
                                <span className={`text-sm ${isDark ? 'text-white/60' : 'text-black/60'}`}>info@lotetree.academy</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className={`w-4 h-4 ${isDark ? 'text-white/40' : 'text-black/40'}`} />
                                <span className={`text-sm ${isDark ? 'text-white/60' : 'text-black/60'}`}>+44 7500802149</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className={`w-4 h-4 ${isDark ? 'text-white/40' : 'text-black/40'} mt-0.5`} />
                                <span className={`text-sm ${isDark ? 'text-white/60' : 'text-black/60'}`}>Sheraton Skyline, Bath Road, Heathrow, London UB3 5BP</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={`mt-12 pt-8 border-t ${isDark ? 'border-white/10' : 'border-black/10'} flex flex-col md:flex-row items-center justify-between gap-4`}>
                    <p className={`text-sm ${isDark ? 'text-white/40' : 'text-black/40'}`}>
                        © {new Date().getFullYear()} Lote Tree Dental Academy. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        {['Privacy', 'Terms', 'Credits'].map((item) => (
                            <Link key={item} to="#" className={`text-sm ${isDark ? 'text-white/40' : 'text-black/40'} hover:${isDark ? 'text-white' : 'text-black'} transition-colors`}>
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
