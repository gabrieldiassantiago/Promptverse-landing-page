"use client"

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [animateClass, setAnimateClass] = useState('');
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (menuOpen) {
            setAnimateClass('menu-enter');
            const timer = setTimeout(() => {
                setAnimateClass('menu-enter-active');
            }, 10);
            return () => clearTimeout(timer);
        } else if (menuRef.current) {
            setAnimateClass('menu-exit');
            const timer = setTimeout(() => {
                setAnimateClass('menu-exit-active');
            }, 10);
            const hideTimer = setTimeout(() => {
                setAnimateClass(''); 
            }, 300);
            return () => {
                clearTimeout(timer);
                clearTimeout(hideTimer);
            };
        }
    }, [menuOpen]);

    return (
        <header className="w-full bg-black text-white py-4 border-b border-neutral-800 relative z-50">
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8">
                <div className="flex items-center gap-2 flex-1 justify-start md:justify-center"> {/* Adjusted for mobile positioning */}
                    <Image src="/logo.svg" alt="Promptverse AI Logo" width={150} height={40} className="object-contain" /> {/* Ajuste o width/height conforme necessário */}
                </div>

                <ul className="hidden md:flex gap-8 text-sm font-normal">
                    <li><a href="#" className="hover:text-white/80 transition-colors duration-200">About</a></li>
                    <li><a href="#" className="hover:text-white/80 transition-colors duration-200">Technologies</a></li>
                    <li><a href="#" className="hover:text-white/80 transition-colors duration-200">Products</a></li>
                    <li><a href="#" className="hover:text-white/80 transition-colors duration-200">Discover</a></li>
                    <li><a href="#" className="hover:text-white/80 transition-colors duration-200">Team</a></li>
                    <li><a href="#" className="hover:text-white/80 transition-colors duration-200">Pricing</a></li>
                    <li><a href="#" className="hover:text-white/80 transition-colors duration-200">Buy Premium</a></li>
                    <li>
                        <a href="#" className="bg-white text-black rounded-full px-7 py-3 font-medium transition hover:bg-neutral-200">Get Started</a>
                    </li>
                </ul>

                <button
                    className="md:hidden relative z-50 p-2" 
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Open menu"
                >
                    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 7h20M4 14h20M4 21h20" />
                    </svg>
                </button>
            </nav>

        
            {(menuOpen || animateClass) && (
                <div
                    ref={menuRef}
                    className={`md:hidden absolute top-[calc(100%+10px)] right-4 bg-neutral-900/90 backdrop-blur-md rounded-xl p-6 shadow-xl border border-neutral-700/50 min-w-[200px] max-w-[250px] ${animateClass}`}
                    style={!menuOpen && !animateClass ? { display: 'none' } : {}}
                >
                    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden rounded-xl">
                        <div className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-twinkle" style={{ top: "15%", left: "20%", animationDelay: "0.1s" }} />
                        <div className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-40 animate-twinkle" style={{ top: "40%", right: "10%", animationDelay: "0.3s" }} />
                        <div className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-70 animate-twinkle" style={{ bottom: "20%", left: "30%", animationDelay: "0.5s" }} />
                        <div className="absolute w-0.8 h-0.8 bg-white rounded-full opacity-50 animate-twinkle" style={{ top: "10%", right: "40%", animationDelay: "0.7s" }} />
                    </div>

                    <ul className="flex flex-col gap-4 text-sm font-normal relative z-10"> {/* z-10 to keep text above stars */}
                        <li><a href="#" className="block hover:text-white/80 transition-colors duration-200">About</a></li>
                        <li><a href="#" className="block hover:text-white/80 transition-colors duration-200">Technologies</a></li>
                        <li><a href="#" className="block hover:text-white/80 transition-colors duration-200">Products</a></li>
                        <li><a href="#" className="block hover:text-white/80 transition-colors duration-200">Discover</a></li>
                        <li><a href="#" className="block hover:text-white/80 transition-colors duration-200">Team</a></li>
                        <li><a href="#" className="block hover:text-white/80 transition-colors duration-200">Pricing</a></li>
                        <li><a href="#" className="block hover:text-white/80 transition-colors duration-200">Buy Premium</a></li>
                        <li className="mt-2"> {/* Added margin to separate the button */}
                            <a href="#" className="bg-white text-black rounded-full px-5 py-2.5 font-medium transition hover:bg-neutral-200 block text-center text-sm">Get Started</a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}