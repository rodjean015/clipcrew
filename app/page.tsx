import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Features from "./components/Feature";
import Highlight from "./components/Highlight";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Product />
      <Features />
      <Highlight />
      <Contact />
      {/* <Footer /> */}
    </>
  );
}
