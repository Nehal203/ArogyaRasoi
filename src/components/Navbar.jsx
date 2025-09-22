import React, { useState, useEffect } from "react";
import { Search, ShoppingCart, User, Headphones, Mail, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
    const [showSticky, setShowSticky] = useState(false);
    const location = useLocation();


    const NavbarContent = () => (
        <>
           
            <nav className="bg-green-500 flex justify-between items-center px-6 py-4 text-white relative">
                <Link to="/">
                    <img src={logo} alt="logo" className="w-[120px]" />
                </Link>
                <ul className="flex space-x-8 font-medium text-white">
                    <li><Link to="/" className="hover:text-orange-500 transition">Home</Link></li>
                    <li><Link to="/" className="hover:text-orange-500 transition">About</Link></li>
                    <li><Link to="/" className="hover:text-orange-500 transition">Recipes</Link></li>
                    <li><Link to="/" className="hover:text-orange-500 transition">Authors</Link></li>
                    <li><Link to="/" className="hover:text-orange-500 transition">Videos</Link></li>
                    <li><Link to="/" className="hover:text-orange-500 transition">Testimonials</Link></li>
                    <li><Link to="/" className="hover:text-orange-500 transition">Workshops / Events</Link></li>
                    <li><Link to="/" className="hover:text-orange-500 transition">Contact</Link></li>
                </ul>
            </nav>
        </>
    );
    return (
        <>
            <header className="text-white">
                <NavbarContent />
            </header>

            {showSticky && (
                <header className="fixed top-0 left-0 w-full z-50 shadow-lg transition-transform duration-500">
                    <NavbarContent />
                </header>
            )}
        </>
    );
};

export default Navbar;
