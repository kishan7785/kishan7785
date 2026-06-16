import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
// import Testimonials from "./components/Testimonials";

function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-neutral-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.28),rgba(255,255,255,0))]" />
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-[90px]" />
      <div className="absolute bottom-24 right-0 h-80 w-80 rounded-full bg-purple-500/20 blur-[90px]" />
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[90px]" />
    </div>
  );
}

export default function App() {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
