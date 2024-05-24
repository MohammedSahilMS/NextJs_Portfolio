
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementSection from "./components/AchievementSection"

export default function Home() {
  return (
    <main className="flex min-h-screen px-2 flex-col bg-[#121212]">
      <Navbar/>
      <div className="container mt-24  mx-auto px-12 py-4" >
      <HeroSection/>
      <AchievementSection/>
      </div>
      
      <AboutSection/>
      <ProjectSection/>
      <EmailSection/>
      
      <Footer/>
      
    </main>
  );
}
