"use client";
import Image from "next/image";

const items = [
    {
        image: "/pink.jpg",
        title: "Premium Cut",
        description: "Precision haircut crafted for a sharp, modern look."
    },
    {
        image: "/pink.jpg",
        title: "Beard Styling",
        description: "Clean lines and expert shaping for a bold finish."
    },
    {
        image: "/pink.jpg",
        title: "Hair Treatment",
        description: "Revitalize your hair with premium care products."
    },
];

export default function Features() {
    return (
        <section className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-6">
                <h3 className="text-4xl font-semibold text-center text-white mb-14">
                    Our Services
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-zinc-900 overflow-hidden"
                        >
                            {/* Thumbnail */}
                            <div className="relative h-100 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Description */}
                            <div className="p-6 text-center">
                                <h4 className="text-xl font-semibold text-white mb-2">
                                    {item.title}
                                </h4>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
