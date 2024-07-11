import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const pages = [
  {
    name: "Home",
    path: "#",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Projects",
    path: "#",
  },
];

const Nav = () => {
  return (
    <>
      <ul className="flex gap-8">
        {pages.map((link, index) => {
          return (
            <Link to={link.path} key={index}>
              <li
                className={`
                 text-primary-color transition ease-in-out uppercase hover:underline cursor-pointer text-lg`}
              >
                {link.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default Nav;
