import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BottomCallToAction from "./components/BottomCallToAction";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Hero />
      <BottomCallToAction />
    </div>
  );
}

export default App;
