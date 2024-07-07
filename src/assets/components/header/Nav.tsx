const pages = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "About",
    link: "#",
  },
  {
    name: "Projects",
    link: "#",
  },
  {
    name: "Contact",
    link: "#",
  },
];

const Nav = () => {
  return (
    <>
      <nav className="">
        <div className="">
          {pages.map((link, index) => {
            return (
              <a href={link.link} key={index} className="">
                {link.name}
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Nav;
