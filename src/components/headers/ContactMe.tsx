import { Link } from "react-scroll";

const ContactMe = () => {
  return (
    <Link to="contact" smooth={true}>
      <button className="btn btn-lg">
        <span className="font-bold">Contact Me</span>
      </button>
    </Link>
  );
};

export default ContactMe;
