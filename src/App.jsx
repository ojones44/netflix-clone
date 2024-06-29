import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Body from "./components/Body";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import { GlobalStyles } from "./wrappers/Globals";
import { useState } from "react";
import { ThemeProvider } from "styled-components";

import { light, synthwave } from "./themes";

function App() {
  const [theme, setTheme] = useState(light);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar setTheme={setTheme} />
      <Hero />
      <Body />
      <Carousel />
      <FaqSection />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
