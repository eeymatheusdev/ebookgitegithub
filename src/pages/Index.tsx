import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Contents from "@/components/Contents";
import DownloadSection from "@/components/DownloadSection";
import Author from "@/components/Author";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <Contents />
      <DownloadSection />
      <Author />
      <Footer />
    </div>
  );
};

export default Index;
