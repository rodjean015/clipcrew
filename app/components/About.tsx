export default function About() {
    return (
        <section className="py-24 bg-black">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h3 className="text-4xl font-semibold tracking-tight mb-8 text-white">
                    About Us
                </h3>

                <div className="w-12 h-px bg-gold mx-auto mb-8 opacity-70" />

                <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl mx-auto">
                    At <span className="text-zinc-300 font-medium">CLIPCREW</span>, we believe
                    grooming is more than a service — it’s a craft. Our experienced barbers
                    combine precision, premium tools, and modern techniques to deliver
                    consistently exceptional results.
                </p>

                <p className="text-zinc-400 text-base leading-relaxed max-w-3xl mx-auto mt-6">
                    From classic cuts to contemporary styles, every appointment is tailored
                    to the individual. We’ve created a refined yet relaxed environment where
                    attention to detail, professionalism, and client comfort come first.
                </p>
            </div>
        </section>
    );
}
