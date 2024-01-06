import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <footer className="bg-white border-t-2 shadow dark:bg-gray-800 dark:border-t-2">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <Link to="https://flowbite.com/" className="hover:underline">
              CinemaTime™
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:underline me-4 md:me-6 "
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:underline me-4 md:me-6"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.pinterest.com"
                target="_blank"
                rel="noreferrer"
                className="hover:underline me-4 md:me-6"
              >
                Pinterest
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </footer>
  );
}

export default Footer;
