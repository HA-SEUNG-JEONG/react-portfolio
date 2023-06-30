import TypingIntroduction from "./TypingIntroduction";

const Introduction = () => {
  return (
    <>
      <div className="mb-6 text-[27px] lg:text-[40px] font-secondary font-semibold leading-[1.4]">
        <span className="mr-4">
          유저경험을 중시하는
          <br />
        </span>
        <TypingIntroduction />
      </div>
      <p className="mb-8 max-w-lg mx-auto lg:mx-0"></p>
    </>
  );
};

export default Introduction;
