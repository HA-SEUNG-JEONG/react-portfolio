import Skills from "./components/Skills";
import Banner from "./components/Banner";
import Contact from "./components/contact/Contact";
import Header from "./components/headers/Header";
import Nav from "./components/headers/Nav";
import Project from "./components/project/Project";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Experience from "./components/Experience";

const App = () => {
    return (
        <section>
            <ToastContainer
                theme="colored"
                autoClose={3000}
                position="top-center"
            />
            <Header />
            <Banner />
            <Nav />
            <Experience />
            <Skills />
            <Project />
            <Contact />
        </section>
    );
};

export default App;
