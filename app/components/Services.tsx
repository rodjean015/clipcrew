const services = [
    {
        name: "Classic Haircut",
        price: "$30",
        image: "/pink.jpg",
    },
    {
        name: "Beard Trim & Shape",
        price: "$20",
        image: "/pink.jpg",
    },
    {
        name: "Hot Towel Shave",
        price: "$35",
        image: "/pink.jpg",
    },
    {
        name: "Haircut & Beard Combo",
        price: "$45",
        image: "/pink.jpg",
    },
    {
        name: "Skin Fade",
        price: "$35",
        image: "/pink.jpg",
    },
    {
        name: "Luxury Grooming Package",
        price: "$60",
        image: "/pink.jpg",
    },
];

export default function Services() {
    return (
        <section className="py-24 bg-black">
            <div className="max-w-6xl mx-auto px-6">
                <h3 className="text-4xl font-semibold tracking-tight text-center mb-14 text-white">
                    Our Services
                </h3>

                <div className="grid gap-8 md:grid-cols-3">
                    {services.map((s) => (
                        <div
                            key={s.name}
                            className="group relative overflow-hidden border border-zinc-800 transition-all duration-300 hover:-translate-y-1 hover:border-gold"
                        >
                            {/* Background image */}
                            <img
                                src={s.image}
                                alt={s.name}
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-300" />

                            {/* Content */}
                            <div className="relative z-10 p-8 text-center">
                                <h4 className="text-lg font-medium tracking-wide mb-3 text-white">
                                    {s.name}
                                </h4>

                                <div className="w-10 h-px bg-gold mx-auto mb-4 opacity-70" />

                                <p className="text-yellow-500 text-xl font-semibold">
                                    {s.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
