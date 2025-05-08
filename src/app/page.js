import Navbar from "@/components/landing_page/Navbar";
import HeroSection from "@/components/landing_page/HeroSection";
import Features from "@/components/landing_page/Features";
import Footer from "@/components/landing_page/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow overflow-auto">
        <HeroSection />
        <Features />
      </div>
      <Footer />
    </div>
  );
}