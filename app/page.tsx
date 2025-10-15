import Contact from "@/components/Contact";
import Qualifications from "@/components/Qualification";
import SplashCursor from "@/components/SplashCursor";
import Work from "@/components/Works";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <SplashCursor />
      <Hero />
      <Qualifications />
      <Work />
      <Contact />
    </>
  );
}
