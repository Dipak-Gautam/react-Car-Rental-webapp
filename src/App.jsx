import { useEffect, useState } from "react";

import Navbar from "./components/navbar/Navbar";

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
  return (
    <>
      <Navbar theme={theme} settheme={settheme} />
    </>
  );
}

export default App;
