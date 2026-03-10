import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import Spaces from "@/components/Spaces";
import Menu from "@/components/Menu";
import Features from "@/components/Features";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Home | Coffee Shop Metro Terbaik - Campanella",
    description: "Nikmati pengalaman coffee shop premium di Metro Lampung. 3 zona unik, menu signature, buka 11.00-22.00.",
    alternates: {
      canonical: "https://campanella-demo.vercel.app/"
    }
  };
}

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
