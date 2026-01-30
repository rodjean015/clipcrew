"use client";
import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    "/pink.jpg",
    "/pink.jpg",
    "/pink.jpg",
    "/pink.jpg",
    "/pink.jpg",
    "/pink.jpg",
    "/pink.jpg",
    "/pink.jpg",
    "/pink.jpg",
    "/pink.jpg",
    "/pink.jpg",
    "/pink.jpg",
];

export default function Product() {
    const sliderRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (!sliderRef.current) return;

        const cardWidth = 320 + 24; // width + gap
        sliderRef.current.scrollBy({
            left: direction === "left" ? -cardWidth : cardWidth,
            behavior: "smooth",
        });
    };

    return (
        <section className="py-24 bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-10">
                <h3 className="text-4xl font-semibold text-center text-white">
                    Product
                </h3>
            </div>

            <div className="relative">
                {/* Left Arrow */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/60 border border-white/20 text-white hover:bg-black transition"
                >
                    <ChevronLeft size={28} />
                </button>

                {/* Right Arrow */}
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/60 border border-white/20 text-white hover:bg-black transition"
                >
                    <ChevronRight size={28} />
                </button>

                {/* Fade edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

                {/* Slider */}
                <div
                    ref={sliderRef}
                    className="flex gap-6 overflow-x-scroll scroll-smooth scrollbar-hide px-16"
                >
                    {[...images, ...images].map((src, i) => (
                        <div
                            key={i}
                            className="min-w-[260px] md:min-w-[320px] h-120 relative overflow-hidden bg-zinc-800 flex-shrink-0"
                        >
                            <Image
                                src={src}
                                alt="Product image"
                                fill
                                className="object-cover"
                                priority={i < 4}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
