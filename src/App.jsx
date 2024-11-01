import { useEffect, useRef, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/About";
import Services from "./components/Services";
import Carlist from "./components/Carlist/Carlist";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/ContactUs/Contact";
import Footer1 from "./components/FooterFile/Footer1";

function App() {
  // dark mode
  const [theme, settheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // AOS initilization
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const carRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <>
      <Navbar
        theme={theme}
        settheme={settheme}
        carRef={carRef}
        aboutRef={aboutRef}
      />
      <Hero theme={theme} />
      <div ref={aboutRef}>
        <About />
      </div>

      <Services />
      <div ref={carRef}>
        <Carlist />
      </div>
      <Testimonial />
      <Contact />
      <Footer1 />
    </>
  );
}

export default App;
