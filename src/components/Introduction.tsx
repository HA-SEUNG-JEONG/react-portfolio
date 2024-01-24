import { commonProps } from "../utils/props";
import { fadeIn } from "../utils/variant";

import TypingIntroduction from "./TypingIntroduction";
import { motion } from "framer-motion";

const Introduction = () => {
    return (
        <>
            <motion.section
                variants={fadeIn("right", 0.4)}
                {...commonProps(0.3)}
                className="mb-6 text-[27px] md:w-96 lg:text-[40px] font-secondary font-semibold leading-[1.4]"
            >
                <span className="mr-4 text-gray-900">
                    기록을 좋아하는
                    <br />
                </span>
                <TypingIntroduction />
            </motion.section>
        </>
    );
};

export default Introduction;
