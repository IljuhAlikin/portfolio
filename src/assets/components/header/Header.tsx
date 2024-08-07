import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="py-8 xl:py-10 fixed w-full z-20 px-4">
        <div className="container mx-auto px-2 flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <div className="bg-primary-color rounded-full py-2 px-4 text-xl xl:text-2xl xl:p-0 xl:bg-none text-white font-medium">
              Ilya.
            </div>
          </Link>

          <div className="flex items-center gap-12">
            {/* desktop nav */}
            <div className="hidden xl:flex">
              <Nav />
            </div>

            {/* Contact button */}
            <button className="px-10 py-2 bg-primary-color rounded-3xl text-white text-lg uppercase ">
              Contact me
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
