import Qualifications from "@/components/Qualification";
import Hero from "../components/Hero";
import Skills from "@/components/Skills";
import Work from "@/components/Works";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import SplashCursor from "@/components/SplashCursor";

export default function Home() {
  return (
    <>
      <SplashCursor />
      <Hero />
      <Qualifications />
      <Skills />
      <Work />
      <Services />
      <Contact />
    </>
  );
}
