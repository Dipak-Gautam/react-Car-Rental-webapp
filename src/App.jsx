import { useEffect, useState } from "react";

import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/About";
import Services from "./components/Services";
import Carlist from "./components/Carlist/Carlist";
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

  return (
    <>
      <Navbar theme={theme} settheme={settheme} />
      <Hero theme={theme} />
      <About />
      <Services />
      <Carlist />
    </>
  );
}

export default App;
