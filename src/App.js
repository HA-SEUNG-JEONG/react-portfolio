import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Work />
      <Skills />
    </div>
  );
}

export default App;
