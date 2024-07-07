import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="py-8 xl:py-10 text-white">
        <div className="container mx-auto px-2 flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <div className="text-xl xl:text-2xl font-medium">Iljuha_alikin</div>
          </Link>

          {/* desktop nav */}
          <div className="hidden xl:flex">
            <Nav />
          </div>

          {/* Contact button */}
          <button className="px-4 py-2 bg-green-500 rounded-md text-white text-lg ">
            Contact me
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
