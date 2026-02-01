import Contact from "./components/Contact";
import Product from "./components/Product";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Highlight from "./components/Highlight";
import Image from "next/image";
import Service from "./components/Service";
import Clothing from "./components/Clothing";
import Features from "./components/Feature";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-25">
        <Image
          src="/product/photo-wall-texture-pattern.jpg"
          alt="Pattern overlay"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Page Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Product />
        <Service />
        <Highlight />
        <Clothing />
        <Features />
        <Contact />
      </div>
    </main>
  );
}
