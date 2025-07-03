import Image from "next/image";
import Hero from "./components/Hero";
import PromptsSection from "./components/PromptsSection";
import Header from "./components/Header";
import TrendingPromptsSection from "./components/TrendingPromptsSection";
import ImagesSection from "./components/ImageSection";
import AudioSection from "./components/AudioSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
   <>
  <div className="">
  <Header />
  <Hero />
  <PromptsSection />
  <TrendingPromptsSection />
  <ImagesSection />
  <AudioSection />
  <FeaturesSection />
  <CTASection />
  <Footer />
  </div>
   </>
  );
}
