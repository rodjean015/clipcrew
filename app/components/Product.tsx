"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const images = [
    "/product/8.jpg",
    "/product/2.jpg",
    "/product/3.jpg",
    "/product/4.jpg",
    "/product/5.jpg",
    "/product/6.jpg",
    "/product/7.jpg",
    "/product/1.jpg",
];


export default function Product() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [showArrows, setShowArrows] = useState(false);

    const prev = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const next = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Auto hide arrows after 2 seconds on touch devices
    useEffect(() => {
        if (!showArrows) return;

        const timer = setTimeout(() => {
            setShowArrows(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, [showArrows]);

    return (
        <section className="relative py-28 bg-black overflow-hidden" id="product">
            {/* Elegant Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />
                <div className="absolute inset-0 opacity-40">
                    <Image
                        src="/product/8.jpg"     // <-- add your background image here
                        alt="Background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="max-w-6xl mx-auto px-6 text-center">
                {/* Title */}
                <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-5xl font-light tracking-wide text-white mb-6"
                >
                    Our Products
                </motion.h3>

                {/* Divider */}
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-500/70 to-transparent mx-auto mb-12" />
            </div>

            <div className="relative flex justify-center items-center">
                {/* Hover container */}
                <div
                    className="relative w-[360px] h-[480px] group"
                    onTouchStart={() => setShowArrows(true)}
                >
                    {/* Left Arrow */}
                    <button
                        onClick={prev}
                        className={`absolute left-6 top-1/2 -translate-y-1/2 z-20
                       rounded-full border border-white/20 bg-black/40 backdrop-blur
                       p-4 text-white transition-all
                       opacity-0 group-hover:opacity-100
                       ${showArrows ? "opacity-100" : ""} 
                       hover:bg-white hover:text-black`}
                    >
                        <ChevronLeft size={26} />
                    </button>

                    {/* Stack */}
                    <div className="relative w-full h-full">
                        {images.map((src, index) => {
                            const isActive = index === activeIndex;
                            const offset = index - activeIndex;

                            return (
                                <motion.div
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden cursor-pointer"
                                    animate={{
                                        zIndex: isActive ? 10 : 5,
                                        scale: isActive ? 1 : 0.9,
                                        x: offset * 12,
                                        y: Math.abs(offset) * 10,
                                        opacity: isActive ? 1 : 0.8,
                                        rotate: offset * 2,
                                    }}
                                    transition={{ type: "spring", stiffness: 150, damping: 20 }}
                                >
                                    <Image
                                        src={src}
                                        alt="Product image"
                                        fill
                                        className="object-cover"
                                        priority={index < 2}
                                    />
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={next}
                        className={`absolute right-6 top-1/2 -translate-y-1/2 z-20
                       rounded-full border border-white/20 bg-black/40 backdrop-blur
                       p-4 text-white transition-all
                       opacity-0 group-hover:opacity-100
                       ${showArrows ? "opacity-100" : ""} 
                       hover:bg-white hover:text-black`}
                    >
                        <ChevronRight size={26} />
                    </button>
                </div>
            </div>
        </section>
    );
}
