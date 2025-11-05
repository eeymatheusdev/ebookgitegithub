import Header from "./components/header";
import Hero from "./components/hero";
import Features from "./components/features";
import Author from "./components/author";
import Footer from "./components/footer";
import CTA from "./components/cta";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Author />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
