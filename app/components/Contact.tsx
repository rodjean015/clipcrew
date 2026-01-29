export default function Contact() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h3 className="text-4xl font-semibold tracking-tight mb-8 text-black">
                    Contact Us
                </h3>

                <div className="w-12 h-px bg-gold mx-auto mb-10 opacity-70" />

                <p className="text-zinc-800 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
                    Visit our studio for a refined grooming experience. Whether you’re
                    booking an appointment or have a question, we’re here to help.
                </p>

                <div className="grid gap-10 md:grid-cols-3 text-center">
                    {/* Location */}
                    <div>
                        <p className="text-zinc-700 uppercase tracking-widest text-sm mb-2">
                            Location
                        </p>
                        <p className="text-zinc-400">
                            123 Main Street<br />
                            New York, NY 10001
                        </p>
                    </div>

                    {/* Phone */}
                    <div>
                        <p className="text-zinc-700 uppercase tracking-widest text-sm mb-2">
                            Phone
                        </p>
                        <p className="text-zinc-400">
                            (555) 123-4567
                        </p>
                    </div>

                    {/* Hours */}
                    <div>
                        <p className="text-zinc-700 uppercase tracking-widest text-sm mb-2">
                            Hours
                        </p>
                        <p className="text-zinc-400">
                            Mon – Sat: 9am – 7pm<br />
                            Sunday: Closed
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-14">
                    <button
                        className="bg-yellow-400 text-black px-8 py-4 font-semibold hover:bg-yellow-300 transition"
                    >
                        <a
                            href="https://www.facebook.com/profile.php?id=61574600193763"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Book an Appointment
                        </a>
                    </button>
                </div>
            </div>
        </section>
    );
}
