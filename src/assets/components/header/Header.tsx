import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <header className="py-8 xl:py-10 text-white bg-black">
        <div className="container mx-auto px-2 flex justify-between items-center">
          {/* Logo */}
          <div className="">Iljuha_alikin</div>

          {/* desktop nav */}
          <Nav />
        </div>
      </header>
    </>
  );
};

export default Header;
