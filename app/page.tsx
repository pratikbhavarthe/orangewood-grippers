import Image from "next/image";
import Navbar from "./components/Navbar"; 
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorks from "./components/HowItWorks";
import ContentWithImageCard from "./components/ContentWithImageCard";
import ComponentsSection from "./components/ComponentsSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <InfoSection />
      <FeaturesSection />
      <HowItWorks />
      <ComponentsSection />
      <ContentWithImageCard />
      <FAQSection />
      <Footer />
    </div>
  );
}
