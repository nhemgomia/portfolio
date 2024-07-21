import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TechStack from "./components/TechStack";

const App = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const handleSetDarkMode = () => {
    setDarkMode(!isDarkMode);

    document.querySelector('body')?.classList.toggle('dark');
  }

  return (
    // <div className={isDarkMode ? "dark" : ""}>
    <div>
      <Navbar isDarkMode={isDarkMode} setDarkMode={handleSetDarkMode}/>
      <Hero/>
      <TechStack/>
    </div>
  );
};

export default App;