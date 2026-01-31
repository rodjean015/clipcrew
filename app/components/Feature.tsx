"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const items = [
    {
        image: "/product/1.jpg",
        title: "Premium Cut",
        description: "Precision haircut crafted for a sharp, modern look."
    },
    {
        image: "/product/6.jpg",
        title: "Beard Styling",
        description: "Clean lines and expert shaping for a bold finish."
    },
    {
        image: "/product/3.jpg",
        title: "Hair Treatment",
        description: "Revitalize your hair with premium care products."
    },
];

export default function Features() {
    return (
        <section className="py-28 bg-black" id="about">
            <div className="max-w-6xl mx-auto px-6 text-center">
                {/* Title */}
                <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-5xl font-light tracking-wide text-white mb-6"
                >
                    Services
                </motion.h3>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-500/70 to-transparent mx-auto mb-12" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="group relative bg-zinc-950 border border-white/10
                                       overflow-hidden rounded-xl transition-all duration-500
                                       hover:border-white/30"
                        >
                            {/* Image */}
                            <div className="relative h-[360px] overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80" />
                            </div>

                            {/* Content */}
                            <div className="p-8 text-center">
                                <h4 className="text-xl font-light tracking-wide text-white mb-3">
                                    {item.title}
                                </h4>
                                <p className="text-sm text-white/60 leading-relaxed max-w-xs mx-auto">
                                    {item.description}
                                </p>
                            </div>

                            {/* Subtle hover glow */}
                            <div className="pointer-events-none absolute inset-0 rounded-xl
                                            opacity-0 group-hover:opacity-100 transition-opacity
                                            shadow-[0_0_60px_rgba(255,255,255,0.05)]" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
