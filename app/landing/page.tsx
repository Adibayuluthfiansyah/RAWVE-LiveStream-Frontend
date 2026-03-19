import Hero from "@/components/layout/Hero";
import Statistics from "@/components/layout/Statistics";
import RecommendedLive from "@/components/layout/RecommendedLive";
import WhyCreatorsChoose from "@/components/layout/WhyCreatorsChoose";
import Footer from "@/components/layout/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0F]">
      <main id="main-content">
        <Hero />
        <Statistics />
        <RecommendedLive />
        <WhyCreatorsChoose />
        <Footer />
      </main>
    </div>
  );
}
