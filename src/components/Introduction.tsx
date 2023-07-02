import TypingIntroduction from "./TypingIntroduction";

const Introduction = () => {
  return (
    <>
      <section className="mb-6 text-[27px] md:w-96 lg:text-[40px] font-secondary font-semibold leading-[1.4]">
        <span className="mr-4 text-gray-900">
          유저경험을 중시하는
          <br />
        </span>
        <TypingIntroduction />
      </section>
    </>
  );
};

export default Introduction;
