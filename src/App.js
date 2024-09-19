import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Features from "./Features/Features";
import Portfolio from "./Portfolio/Portfolio";
import Reviews from "./Reviews/Reviews";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import BeyondPortfolio from "./BeyondPortfolio/BeyondPortfolio";
import Services from "./Services/Services";
import Header from "./Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <BeyondPortfolio />
      <Services />
      <Features />
      <Portfolio />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
