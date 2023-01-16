import "./assets/css/bootstrap.min.css";
import "./assets/css/styles.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import TechStack from "./components/TechStack";
import PortfolioSec from "./components/PortfolioSec";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <AboutMe />
        <hr />
        <Skills />        
        <TechStack />
        <PortfolioSec />
        <hr />
        <Contact />
        <hr />
      </main>
      <Footer />
    </>
  );
}

export default App;
