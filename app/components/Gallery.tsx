"use client";
import { useState } from "react";

const images = [
    "/pink.jpg",
    "/pink.jpg",
    "/pink.jpg",
    "/pink.jpg",
    "/pink.jpg",
    "/pink.jpg",
    "/pink.jpg",
    "/pink.jpg",
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-6">
                <h3 className="text-4xl font-semibold tracking-tight text-center mb-14 text-white">
                    Gallery
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {images.map((src, i) => (
                        <div
                            key={i}
                            className="group relative overflow-hidden bg-zinc-800 rounded cursor-pointer"
                            onClick={() => setSelectedImage(src)}
                        >
                            <img
                                src={src}
                                alt="Barbershop work"
                                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>

                {selectedImage && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative max-w-3xl w-full p-6">
                            <button
                                className="absolute top-3 right-3 text-white text-2xl"
                                onClick={() => setSelectedImage(null)}
                            >
                                &times;
                            </button>

                            <img
                                src={selectedImage}
                                alt="Selected"
                                className="w-full h-auto rounded-2xl shadow-lg"
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
