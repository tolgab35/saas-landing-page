import Header from "./components/Header";
import Hero from "./components/Hero";
import Firms from "./components/Firms";
import Preview from "./components/Preview";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#2B2B2B] min-h-screen">
      <Header />
      <Hero />
      <Firms />
      <Preview />
      <Features />
      <Testimonial />
      <ContactCTA />
      <Footer />
    </div>
  );
}

export default App;
