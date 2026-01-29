export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">

            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/bg-video.mp4"
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70" />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center px-6">
                <div className="max-w-3xl text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Precision Grooming.<br className="hidden md:block" />
                        Timeless Style.
                    </h1>

                    <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed">
                        CLIPCREW is where modern technique meets classic barbering.
                        Experience expert cuts, detailed fades, and premium grooming in a
                        refined environment.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            className="bg-yellow-400 text-black px-8 py-4 font-semibold hover:bg-yellow-300 transition"
                        >
                            <a
                                href="https://www.facebook.com/profile.php?id=61574600193763"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Book Appointment
                            </a>
                        </button>


                        <button className="border border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-black transition">
                            View Services
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
