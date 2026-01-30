export default function Hero() {
    return (
        <section className="relative pt-24 h-[60vh] w-full overflow-hidden">

            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/hero-bg.mp4"
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
                    <h1 className="text-3xl md:text-6xl text-white mb-4 tracking-tight">
                        Precision Grooming.<br className="hidden md:block" />
                        Timeless Style.
                    </h1>

                    <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed">
                        CLIPCREW is where modern technique meets classic barbering.
                        Experience expert cuts, detailed fades, and premium grooming in a
                        refined environment.
                    </p>
                </div>
            </div>
        </section>
    );
}
