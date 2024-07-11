import Header from "../components/header/Header";
import Content from "../components/main/Content";
const Main = () => {
  return (
    <>
      <Header />
      <Content />
      <div className="relative z-10">
        <img
          src="main/drop-1.svg"
          alt=""
          className="fixed top-0 left-0 transition-all ease-in-out hover:scale-125"
        />
        <img
          src="main/drop-2.svg"
          alt=""
          className="fixed top-0 right-0 transition-all ease-in-out hover:scale-125"
        />
        <img
          src="main/drop-3.svg"
          alt=""
          className="fixed bottom-0 left-0 transition-all ease-in-out hover:scale-125"
        />
        <img
          src="main/drop-4.svg"
          alt=""
          className="fixed bottom-0 right-0 transition-all ease-in-out hover:scale-125"
        />
      </div>
    </>
  );
};

export default Main;
