import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import StorySection from "@/components/story-section"
import ProblemSection from "@/components/problem-section"
import SolutionSection from "@/components/solution-section"
import ImpactSection from "@/components/impact-section"
import VisionSection from "@/components/vision-section"
import WaitlistSection from "@/components/waitlist-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StorySection />
      <ProblemSection />
      <SolutionSection />
      <ImpactSection />
      <VisionSection />
      <WaitlistSection />
      <Footer />
    </main>
  )
}
