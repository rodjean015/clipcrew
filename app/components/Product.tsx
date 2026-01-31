"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const images = Array(12).fill("/pink.jpg");

export default function Product() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const cardWidth = 320 + 32; // width + gap

    const scroll = (direction: "left" | "right") => {
        if (!sliderRef.current) return;

        sliderRef.current.scrollBy({
            left: direction === "left" ? -cardWidth : cardWidth,
            behavior: "smooth",
        });
    };

    // Auto scroll
    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const startAutoScroll = () => {
            intervalRef.current = setInterval(() => {
                if (!slider) return;

                // Loop back smoothly
                if (
                    slider.scrollLeft + slider.clientWidth >=
                    slider.scrollWidth - cardWidth
                ) {
                    slider.scrollTo({ left: 0, behavior: "smooth" });
                } else {
                    slider.scrollBy({ left: cardWidth, behavior: "smooth" });
                }
            }, 3000);
        };

        const stopAutoScroll = () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };

        startAutoScroll();

        slider.addEventListener("mouseenter", stopAutoScroll);
        slider.addEventListener("mouseleave", startAutoScroll);

        return () => {
            stopAutoScroll();
            slider.removeEventListener("mouseenter", stopAutoScroll);
            slider.removeEventListener("mouseleave", startAutoScroll);
        };
    }, []);

    return (
        <section className="py-28 bg-black overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 text-center">
                {/* Title */}
                <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-5xl font-light tracking-wide text-white mb-6"
                >
                    Our Product
                </motion.h3>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-500/70 to-transparent mx-auto mb-12" />

            </div>

            <div className="relative">
                {/* Left Arrow */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-6 top-1/2 -translate-y-1/2 z-20
                               rounded-full border border-white/20 bg-black/40 backdrop-blur
                               p-4 text-white transition-all
                               hover:bg-white hover:text-black"
                >
                    <ChevronLeft size={26} />
                </button>

                {/* Right Arrow */}
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-6 top-1/2 -translate-y-1/2 z-20
                               rounded-full border border-white/20 bg-black/40 backdrop-blur
                               p-4 text-white transition-all
                               hover:bg-white hover:text-black"
                >
                    <ChevronRight size={26} />
                </button>

                {/* Fade edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

                {/* Slider */}
                <div
                    ref={sliderRef}
                    className="flex gap-8 overflow-x-scroll scroll-smooth scrollbar-hide px-24"
                >
                    {[...images, ...images].map((src, i) => (
                        <div
                            key={i}
                            className="group relative min-w-[260px] md:min-w-[320px] h-[420px]
                                       overflow-hidden rounded-xl bg-zinc-900 flex-shrink-0
                                       transition-transform duration-500"
                        >
                            <Image
                                src={src}
                                alt="Product image"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                priority={i < 4}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
