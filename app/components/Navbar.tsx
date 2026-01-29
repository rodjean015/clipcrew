"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-black z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

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
                    <h1 className="text-xl font-bold text-white tracking-wide">
                        CLIPCREW
                    </h1>
                </div>

                {/* Desktop Nav */}
                <ul className="hidden md:flex gap-8 text-sm text-white">
                    {["Services", "About", "Gallery", "Contact"].map((item) => (
                        <li
                            key={item}
                            className="hover:text-yellow-400 cursor-pointer transition"
                        >
                            {item}
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

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-black border-t border-white/10">
                    <ul className="flex flex-col items-center gap-6 py-6 text-white text-sm">
                        {["Services", "About", "Gallery", "Contact"].map((item) => (
                            <li
                                key={item}
                                onClick={() => setOpen(false)}
                                className="hover:text-yellow-400 cursor-pointer transition"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}
