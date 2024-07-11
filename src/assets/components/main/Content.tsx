import Buttons from "../main/Buttons";
const Content = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col py-[150px] xl:py-0 lg:py-0 md:py-0 xl:items-center md:items-center xl:justify-between xl:flex-row md:justify-between md:flex-row lg:align-center lg:justify-center lg:flex-row h-screen relative z-10 gap-8 px-4">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-12">
            <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium">
              Hello, I’m Ilya -<span className="block">Frontend developer</span>
            </div>
            <button className="text-xl xl:text-2xl rounded-full px-10 py-4 uppercase bg-primary-color text-white inline-block max-w-[345px]">
              Contact me
            </button>
          </div>
          <Buttons />
        </div>
        <div className="rounded-full max-w-[535px] border-2 border-primary-color mx-auto ">
          <img src="/main/person.png" className="w-full h-full rounded-full" />
        </div>
      </div>
    </>
  );
};

export default Content;
