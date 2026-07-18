import ClientEffects from "@/components/ClientEffects";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Gear from "@/components/Gear";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ClientEffects />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Stack />
        <Projects />
        <Gear />
      </main>
      <Footer />
    </>
  );
}
