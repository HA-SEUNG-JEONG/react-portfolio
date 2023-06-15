import Home from "./Home";
import ContactMe from "./ContactMe";

const Header = () => {
  return (
    <header className="py-4 fixed left-0 right-0 bg-opacity-50 bg-blue-400 select-none">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Home />
          <ContactMe />
        </div>
      </div>
    </header>
  );
};

export default Header;
