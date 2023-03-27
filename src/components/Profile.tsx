import { motion } from "framer-motion";
import profiles from "../assets/profile.jpg";
import { fadeIn } from "../variant";

const Profile = () => {
  return (
    <motion.div
      variants={fadeIn("down", 0.3)}
      initial="hidden"
      whileInView={"show"}
      className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] ">
      <img src={profiles} alt="profile" />
    </motion.div>
  );
};

export default Profile;
