import Header from "../components/header/Header";

const Main = () => {
  return (
    <>
      <Header />
      <div className="">
        <img src="main/drop-1.svg" alt="" className="fixed top-0 left-0" />
        <img src="main/drop-2.svg" alt="" className="fixed top-0 right-0" />
        <img src="main/drop-3.svg" alt="" className="fixed bottom-0 left-0" />
        <img src="main/drop-4.svg" alt="" className="fixed bottom-0 right-0" />
      </div>
    </>
  );
};

export default Main;
