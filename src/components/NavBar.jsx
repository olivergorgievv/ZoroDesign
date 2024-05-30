import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

// eslint-disable-next-line react/prop-types
function NavBar({ onOpenModal }) {
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-8" alt="Flowbite Logo" />
          </a>
          <div className="flex gap-4 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              onClick={logOut}
              type="button"
              className="text-gray-600 content-center flex border border-gray-300 hover:border-gray-500 focus:ring-4 focus:outline-none focus:ring-primary-red font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Log out
            </button>
            <button
              onClick={onOpenModal}
              type="button"
              className="text-white bg-primary-red hover:bg-primary-hover focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 text-center"
            >
              Log in
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-primary-red" : "text-gray-900"
                  } block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0`
                }
                aria-current="page"
                end
              >
                Home
              </NavLink>

              <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-primary-red" : "text-gray-900"
                    } block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0`
                  }
                >
                  Products
                </NavLink>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-red md:p-0"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-red md:p-0"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
