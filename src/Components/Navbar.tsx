import { HiMenuAlt2 } from "react-icons/hi";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <HiMenuAlt2 />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Service</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Feedback</a>
            </li>
          </ul>
        </div>
        <a className="btn bg-transparent border-none text-xl">interiofirm</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Service</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Feedback</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-teal-600 text-white">Contact Us</a>
      </div>
    </div>
  );
}
