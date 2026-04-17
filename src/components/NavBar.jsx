import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex justify-between px-6 py-4 items-center border-gray-200">
      <h1 className="text-3xl text-gray-800">Lizzy Fashion</h1>
      <ul className="flex uppercase tracking-wide gap-4">
        <li className="flex hover:text-black">
          <Link to="/">Home</Link>
        </li>
        <li className="flex hover:text-black">
          <Link to="/collections">Collections</Link>
        </li>
        <li className="flex hover:text-black">
          <Link to="/about">About</Link>
        </li>
        <li className="flex hover:text-black">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
