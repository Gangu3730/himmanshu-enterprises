import About from "./components/About";
import Contact from "./components/Contact";
import EmergencyCTA from "./components/EmergencyCTA";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Process from "./components/Process";
import Services from "./components/Services";
import StickyMobileBar from "./components/StickyMobileBar";
import WhyChooseUs from "./components/WhyChooseUs";

export default function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <About />
      <Process />
      <EmergencyCTA />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
      <StickyMobileBar />
    </div>
  );
}
