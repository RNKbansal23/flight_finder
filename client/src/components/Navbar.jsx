import { Link } from "react-router-dom";
import { isAuthenticated } from "../services/auth";
import '../styles/NavBar.css'; // Create a CSS file for your navbar styles
import '../index.css'
import FeaturedTours from "./FeaturedTours";

export default function NavBar(props) {

  const ToFeaturedTours = () => {
    navigate
  }
  return (
    <nav className="bg-white border-gray-200 dark:bg-white-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link className="self-center text-2xl font-semibold whitespace-nowrap text-black mr-96" to="/">
          Flights.io
        </Link>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col justify-between p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-white-800 md:dark:bg-white-900 dark:border-gray-700">
            {!isAuthenticated() ? (
              <li className="nav-item">
                <Link
                  className="block py-2 pl-3 pr-4 text-black bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page"
                  to="/register"
                >
                  Register
                </Link>
              </li>
            ) : null}

            {!isAuthenticated() ? (
              <li className="nav-item">
                <Link
                  className="block py-2 pl-3 pr-4 text-black bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page"
                  to="/login"
                >
                  Login
                </Link>
              </li>
            ) : null}

            <li className="nav-item">
              <Link
                className="block py-2 pl-3 pr-4 text-black bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>

            {isAuthenticated() ? (
              <li className="nav-item">
                <Link
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page"
                  to="/register"
                >
                  Refresh
                </Link>
              </li>
            ) : null}

            {/* <li className="nav-item">
              <Link
                className="block py-2 pl-3 pr-4 text-black bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page"
                to={/}
              >
                About
              </Link>
            </li> */}

            {isAuthenticated() ? (
              <li className="nav-item">
                <a
                  className="block py-2 pl-3 pr-4 text-black bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page"
                  onClick={props.logoutUser}
                  style={{ cursor: "pointer" }}
                >
                  Logout
                </a>
              </li>
            ) : null}

          </ul>
        </div>
      </div>
    </nav>
  );
}
