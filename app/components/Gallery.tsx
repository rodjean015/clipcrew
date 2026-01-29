export default function Gallery() {
    return (
        <section className="py-20 bg-zinc-900">
            <div className="max-w-6xl mx-auto px-6">
                <h3 className="text-3xl font-bold text-center mb-10 text-gold">
                    Gallery
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-40 bg-gray-700 rounded-lg" />
                    ))}
                </div>
            </div>
        </section>
    );
}
