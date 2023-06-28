import Skills from "./components/Skills";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Header from "./components/headers/Header";
import Nav from "./components/headers/Nav";
import Project from "./components/Project";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <section className="bg-[#e2e2f1] bg-no-repeat bg-cover overflow-hidden">
      <ToastContainer theme="colored" autoClose={3000} position="top-center" />
      <Header />
      <Banner />
      <Nav />
      <Skills />
      <Project />
      <Contact />
    </section>
  );
};

export default App;
