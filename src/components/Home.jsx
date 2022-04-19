import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className=" w-full h-screen bg-[#0a192f]">
      <div className="max-w-[62.5rem] px-8 flex flex-col justify-center h-full ml-20">
        <p className="font-bold sm:text-7xl text-[#ebecef]">
          안녕하세요 예비 프론트엔지니어
        </p>
        <h1 className="font-bold sm:text-7xl text-[#8892b0]">정하승입니다.</h1>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-4 flex items-center hover:bg-yellow-600 hover:border-yellow-bg-yellow-600">
            작업 목록 보기
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-4" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
