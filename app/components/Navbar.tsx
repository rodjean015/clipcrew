"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = ["Our Product", "About Us", "Contact Us"];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[92%] max-w-7xl z-50">
            <div className="rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 shadow-xl">
                <div className="px-6 py-4 flex justify-between items-center">

                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <Image
                            src="/CLIPCREW.jpg"
                            alt="ClipCrew Logo"
                            width={45}
                            height={45}
                            priority
                            className="rounded-full"
                        />
                        <h1 className="text-xl md:text-2xl font-semibold text-white tracking-widest">
                            CLIPCREW
                        </h1>
                    </div>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex gap-10 text-sm text-white">
                        {navItems.map((item) => (
                            <li key={item} className="group relative cursor-pointer">
                                <span className="transition-colors duration-300 group-hover:text-yellow-500">
                                    {item}
                                </span>
                                <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-yellow-500
                                   transition-all duration-300 group-hover:w-full group-hover:left-0" />
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle Menu"
                    >
                        {open ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden mt-2 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10 shadow-xl">
                    <ul className="flex flex-col items-center gap-6 py-6 text-white text-sm">
                        {navItems.map((item) => (
                            <li
                                key={item}
                                onClick={() => setOpen(false)}
                                className="group relative cursor-pointer"
                            >
                                <span className="transition-colors duration-300 group-hover:text-yellow-500">
                                    {item}
                                </span>
                                <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-yellow-500
                                 transition-all duration-300 group-hover:w-full group-hover:left-0" />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}
