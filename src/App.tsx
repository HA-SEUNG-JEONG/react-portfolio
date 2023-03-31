import Skills from "./components/Skills";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Work from "./components/Project";

const App = () => {
  return (
    <section className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <Skills />
      <Work />
      <Contact />
    </section>
  );
};

export default App;
