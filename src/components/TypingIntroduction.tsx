import { TypeAnimation } from "react-type-animation";

const TypingIntroduction = () => {
  return (
    <TypeAnimation
      sequence={["프론트엔드 개발자 정하승입니다.", 2000]}
      speed={10}
      className="text-blue-600"
      wrapper="span"
      repeat={Infinity}
    />
  );
};

export default TypingIntroduction;
