const Skills = () => {
  return (
    <div id="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 cursor-pointer ">
          <div className="shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="mx-auto my-10"
              src="https://skillicons.dev/icons?i=html"
              alt="logo"
            />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="mx-auto my-10"
              src="https://skillicons.dev/icons?i=css"
              alt="logo"
            />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="mx-auto my-10"
              src="https://skillicons.dev/icons?i=js"
              alt="logo"
            />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="mx-auto my-10"
              src="https://skillicons.dev/icons?i=react"
              alt="logo"
            />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="mx-auto my-10"
              src="https://skillicons.dev/icons?i=ts"
              alt="logo"
            />
            <p className="my-4">TYPESCRIPT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
