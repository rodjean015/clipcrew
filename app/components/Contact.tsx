"use client";

import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section className="py-32 bg-gradient-to-b from-black via-zinc-950 to-black" id="contact">
            <div className="max-w-6xl mx-auto px-6 text-center">
                {/* Title */}
                <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-5xl font-light tracking-wide text-white mb-6"
                >
                    Contact Us
                </motion.h3>

                {/* Divider */}
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-500/70 to-transparent mx-auto mb-12" />

                {/* Intro */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-zinc-400 text-lg max-w-2xl mx-auto mb-20 leading-relaxed"
                >
                    Visit our studio for a refined grooming experience. Whether you’re
                    booking an appointment or have a question, we’re here to help.
                </motion.p>

                {/* Info Grid */}
                <div className="grid gap-16 md:grid-cols-4">
                    {[
                        {
                            label: "Location",
                            content: (
                                <>
                                    46A F. San Juan Cor. Liamzon St.<br />
                                    San Jose, Rodriguez, Rizal<br />
                                    Philippines 1860
                                </>
                            ),
                        },
                        {
                            label: "Phone",
                            content: "+63 905 487 6857",
                        },
                        {
                            label: "Hours",
                            content: (
                                <>
                                    Mon - Sun: <br /> 9:00am - 7:00pm
                                </>
                            ),
                        },
                        {
                            label: "Follow Us",
                            content: (
                                <div className="flex justify-center gap-8">
                                    {[FaInstagram, FaFacebookF].map((Icon, i) => (
                                        <a
                                            key={i}
                                            href="#"
                                            className="text-zinc-500 transition-all duration-300
                       hover:text-yellow-500
                       hover:scale-110
                       hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                                        >
                                            <Icon size={22} />
                                        </a>
                                    ))}
                                </div>
                            ),
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.15 * index }}
                            className="relative rounded-xl border border-white/10 bg-zinc-950/40 p-8"
                        >
                            <p className="text-xs uppercase tracking-widest text-zinc-300 mb-4">
                                {item.label}
                            </p>

                            {/* Change from <p> to <div> to avoid nesting errors */}
                            <div className="text-zinc-500 leading-relaxed">
                                {item.content}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer note */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="mt-24 text-xs tracking-widest text-zinc-600 uppercase"
                >
                    © {new Date().getFullYear()} • Crafted with care
                </motion.p>
            </div>
        </section>
    );
}
