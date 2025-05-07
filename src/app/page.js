import Navbar from "@/components/landing_page/Navbar";
import HeroSection from "@/components/landing_page/HeroSection";
import Features from "@/components/landing_page/Features";
import Footer from "@/components/landing_page/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <Footer />
    </>
  );
}