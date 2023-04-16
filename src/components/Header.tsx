import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="py-4 fixed left-0 right-0 bg-opacity-50 bg-blue-400 select-none">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="home" smooth={true}>
            <span className="cursor-pointer font-bold text-[25px]">
              Jeong Ha Seung
            </span>
          </Link>
          <Link to="contact" smooth={true}>
            <button className="btn btn-lg">
              <span className="font-bold">Contact Me</span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
