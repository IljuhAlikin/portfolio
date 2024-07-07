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
  {
    name: "Contact",
    path: "#",
  },
];

const Nav = () => {
  let location = useLocation().pathname;
  return (
    <>
      <ul className="flex gap-8">
        {pages.map((link, index) => {
          return (
            <Link to={link.path} key={index}>
              <li
                className={`${
                  link.path == location && "text-green-600"
                } transition ease-in-out hover:text-green-600 hover:underline `}
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
