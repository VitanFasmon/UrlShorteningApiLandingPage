import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import LinkShortenForm from "./components/LinkShortenForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <LinkShortenForm />
    </div>
  );
}

export default App;
