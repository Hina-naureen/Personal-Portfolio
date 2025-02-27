





import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import WhyChooseMe from "./components/WhyChooseMe";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
       <WhyChooseMe />
      
      <Footer />
      
    </main>
  );
}

