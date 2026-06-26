import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Courses from "./Components/Courses";
import Testimonials from "./Components/Testimonials";
import About from "./Components/About";
import CTA from "./Components/CTA";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Nav />

      <section id="home" className="scroll-mt-24">
        <Home />
      </section>

      <section id="courses" className="scroll-mt-24">
        <Courses />
      </section>

      <section id="results" className="scroll-mt-24">
        <Testimonials />
      </section>

      <section id="about" className="scroll-mt-24">
        <About />
      </section>

      <section id="contact" className="scroll-mt-24">
        <CTA />
        <Footer />
      </section>
    </>
  );
};

export default App;

