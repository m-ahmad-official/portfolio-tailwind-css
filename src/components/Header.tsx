"use client";
import { useState } from "react";
export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };
    return (
        <>
            <header className="w-full py-10 px-[9%] bg-[#05161a] flex justify-between items-center">
                <h3 className="text-[2.5rem] text-white font-semibold cursor-default">Portfolio</h3>
                <div className="sm:hidden" onClick={toggleMenu}>
                    <i className="bx bx-menu text-[3.6rem] text-white"></i>
                </div>

                <nav className={`hidden sm:flex gap-16`}>
                    <a href="/" className="text-[1.7rem] text-white font-medium hover:text-[#01c38d] transition-all duration-300">Home</a>
                    <a href="/about" className="text-[1.7rem] text-white font-medium hover:text-[#01c38d] transition-all duration-300">About</a>
                    <a href="/services" className="text-[1.7rem] text-white font-medium hover:text-[#01c38d] transition-all duration-300">Services</a>
                    <a href="/projects" className="text-[1.7rem] text-white font-medium hover:text-[#01c38d] transition-all duration-300">Projects</a>
                    <a href="/contact" className="text-[1.7rem] text-white font-medium hover:text-[#01c38d] transition-all duration-300">Contact</a>
                </nav>
            </header>

            {menuOpen && (
                <div className="fixed inset-0 bg-[#05161a] z-10 flex flex-col items-center justify-center">
                    <button
                        onClick={closeMenu}
                        className="absolute top-7 right-16 text-white text-[3.4rem]">
                        &#10006;
                    </button>
                    <nav className="flex flex-col items-center gap-10">
                        <a href="/" onClick={closeMenu} className="text-[2rem] text-white font-medium hover:text-[#01c38d] transition-all duration-300">Home</a>
                        <a href="/about" onClick={closeMenu} className="text-[2rem] text-white font-medium hover:text-[#01c38d] transition-all duration-300">About</a>
                        <a href="/services" onClick={closeMenu} className="text-[2rem] text-white font-medium hover:text-[#01c38d] transition-all duration-300">Services</a>
                        <a href="/projects" onClick={closeMenu} className="text-[2rem] text-white font-medium hover:text-[#01c38d] transition-all duration-300">Projects</a>
                        <a href="/contact" onClick={closeMenu} className="text-[2rem] text-white font-medium hover:text-[#01c38d] transition-all duration-300">Contact</a>
                    </nav>
                </div>
            )}</>
    )
}