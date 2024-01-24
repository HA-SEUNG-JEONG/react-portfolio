import { TypeAnimation } from "react-type-animation";

const TypingIntroduction = () => {
    return (
        <div className="w-screen">
            <TypeAnimation
                sequence={["프론트엔드 개발자 정하승입니다.", 2000]}
                speed={10}
                className="text-blue-600"
                wrapper="span"
                repeat={Infinity}
            />
        </div>
    );
};

export default TypingIntroduction;
