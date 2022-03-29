import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Reasons from "./components/reasons/Reasons";
import About from "./components/about/About";
import Services from "./components/services/Services";
import StatsCard from "./components/cards/statsCard/StatsCard";
import Ads from "./components/AdsSection/Ads";
import ProjectCard from "./components/cards/projectCard/ProjectCard";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Reasons />
      <About />
      <Services />
      <StatsCard/>
      <Ads />
      <div className="demo text-center pt-5"><h1>To be Continued...</h1>
      <h2>Please Keep Calm😃</h2>
      <p>Site is under Construction...</p></div>
    </>
  );
}

export default App;
