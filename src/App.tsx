import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const handleSetDarkMode = () => {
    setDarkMode(!isDarkMode);
  }

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Navbar isDarkMode={isDarkMode} setDarkMode={handleSetDarkMode}/>
      <Hero/>
    </div>
  );
};

export default App;