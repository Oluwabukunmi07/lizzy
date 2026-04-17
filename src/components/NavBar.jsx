import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex justify-between px-6 py-4 items-center border-gray-200 fixed top-0 left-0 w-full bg-white z-50">
      <h1 className="text-3xl text-gray-800 font-semibold">Lizzy Fashion</h1>
      <ul className="flex uppercase tracking-wide gap-8">
        {["Home", "Collections", "About", "Contact"].map((item) => (
          <li key={item} className="relative group">
            <Link
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-gray-600 hover:text-black transition-colors duration-500 pb-1"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gray-800 transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
