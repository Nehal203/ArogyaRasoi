import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf, Phone, MessageCircle } from 'lucide-react';
import logo from "../assets/logo.png";


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { path: '/', label: 'હોમ' },
        { path: '/about', label: 'અમારા વિશે' },
        { path: '/recipes', label: 'રેસીપિસ' },
        { path: '/authors', label: 'લેખકો' },
        { path: '/videos', label: 'વિડિઓઝ' },
        { path: '/testimonials', label: 'ટેસ્ટીમોનીઅલસ' },
        { path: '/workshop', label: 'વર્કશોપ' },
        { path: '/contact', label: 'કોનટેક્ટ' }
    ];

    const whatsappNumber = "+919876543210";
    const whatsappMessage = "નમસ્તે! મને આરોગ્ય રસોઇની સ્વસ્થ વાનગીઓ અને વર્કશોપમાં રસ છે.";

    return (
        <header className="bg-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <Link to="/" className="flex items-center space-x-2">
                        <img src={logo} alt="logo" className="w-[120px]" />
                    </Link>

                    <nav className="hidden lg:flex space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`font-medium transition-colors duration-200 hover:text-green-600 hover:underline ${location.pathname === item.path
                                    ? 'text-green-600 border-b-2 border-green-600 pb-1'
                                    : 'text-gray-700'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden lg:flex items-center space-x-4">
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200 flex items-center space-x-2"
                        >
                            <MessageCircle className="h-4 w-4" />
                            <span>WhatsApp</span>
                        </a>
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden text-gray-700"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {isMenuOpen && (
                    <nav className="lg:hidden border-t border-gray-200 py-4">
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`font-medium transition-colors duration-200 hover:text-green-600 ${location.pathname === item.path ? 'text-green-600' : 'text-gray-700'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <a
                                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200 flex items-center justify-center space-x-2 w-fit"
                            >
                                <MessageCircle className="h-4 w-4" />
                                <span>WhatsApp</span>
                            </a>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;