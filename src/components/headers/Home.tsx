import HomeLogo from "../../assets/dev-jeans.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <Link to="home" smooth={true}>
      <img
        className="rounded-md cursor-pointer"
        src={HomeLogo}
        alt="logo"
        width="56"
        height="56"
      />
    </Link>
  );
};

export default Home;
