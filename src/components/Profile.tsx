import profiles from "../assets/profile.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variant";
import { commonProps } from "../utils/props";

const Profile = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.3)}
      {...commonProps(0.3)}
      className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
      <img className="w-72 h-full ml-48" src={profiles} alt="profile" />
    </motion.div>
  );
};

export default Profile;
