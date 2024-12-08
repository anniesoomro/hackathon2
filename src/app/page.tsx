import BrowseTheRangeSection from "./components/BrowsetheRange";
import HeroSection from "./components/HeroSection";
import OurProductSection from "./components/OurProducts";
import ShareSetupSection from "./components/ShareSetupSection";
import Slide from "./components/Slide";

export default function HomePage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <BrowseTheRangeSection />
      <OurProductSection />
      <Slide />
      <ShareSetupSection />
      
      </main>
  );
}