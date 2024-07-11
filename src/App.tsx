import "./App.css";
import Main from "./assets/pages/Main";

function App() {
  return (
    <>
      <Main />
      <div className="relative z-10">
        <img
          src="main/drop-1.svg"
          alt=""
          className="fixed top-0 left-0 transition-all ease-in-out hover:scale-125 max-w-[40%] md:max-w-[60%] xl:max-w-[100%]"
        />
        <img
          src="main/drop-2.svg"
          alt=""
          className="fixed top-0 right-0 transition-all ease-in-out hover:scale-125 max-w-[40%] md:max-w-[60%] xl:max-w-[100%]"
        />
        <img
          src="main/drop-3.svg"
          alt=""
          className="fixed bottom-0 left-0 transition-all ease-in-out hover:scale-125  max-w-[40%] md:max-w-[60%] xl:max-w-[100%]"
        />
      </div>
    </>
  );
}

export default App;
