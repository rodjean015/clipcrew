const services = [
    { name: "Haircut", price: "$30" },
    { name: "Beard Trim", price: "$20" },
    { name: "Hot Towel Shave", price: "$35" },
];

export default function Services() {
    return (
        <section className="py-20 bg-zinc-900">
            <div className="max-w-6xl mx-auto px-6">
                <h3 className="text-3xl font-bold text-center mb-10 text-gold">
                    Our Services
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((s) => (
                        <div key={s.name} className="bg-black p-6 rounded-xl text-center">
                            <h4 className="text-xl font-semibold mb-2">{s.name}</h4>
                            <p className="text-gold">{s.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
