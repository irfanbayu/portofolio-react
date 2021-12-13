import About from "./components/About";
import Advice from "./components/Advice";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PortofolioList from "./components/PortofolioList";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PortofolioList />
      <About />
      <Contact />
      <Advice />
      <Footer />
    </div>
  );
}

export default App;
