import Buttons from "../main/Buttons";
const Content = () => {
  return (
    <>
      <div className="container mx-auto flex items-center h-screen relative z-10">
        <div className="flex flex-col gap-12">
          <div className="text-6xl xl:text-8xl font-medium">
            Hello, I’m Ilya -<span className="block">Frontend developer</span>
          </div>
          <button className="text-xl xl:text-2xl rounded-full px-10 py-4 uppercase bg-primary-color text-white inline-block max-w-[345px]">
            Contact me
          </button>
        </div>
        <Buttons />
      </div>
    </>
  );
};

export default Content;
