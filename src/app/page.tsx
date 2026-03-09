import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import Spaces from "@/components/Spaces";
import Menu from "@/components/Menu";
import Features from "@/components/Features";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <Spaces />
      <Menu />
      <Features />
      <Visit />
      <Footer />
    </main>
  );
}
