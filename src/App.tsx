import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BottomCallToAction from "./components/BottomCallToAction";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Hero />
      <BottomCallToAction />
      <Footer />
    </div>
  );
}

export default App;
