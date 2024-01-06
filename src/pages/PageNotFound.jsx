import { useTitle } from "../hooks/useTitle";
import PNF from "../assets/images/pagenotfound.png";
import { Link } from "react-router-dom";
import { Button } from "../components";
function PageNotFound() {
  useTitle(`Page Not Found`);
  // useTitle({ title: "Page Not Found" });

  return (
    <main>
      <section className="max-w-7xl mx-auto">
        <div className="flex flex-col justify-center px-2 items-center">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white ">
            404, Oops!
          </p>
          <div className="max-w-lg">
            <img className="rounded" src={PNF} alt="Page Not Found" />
          </div>
        </div>
        <div className="flex flex-col items-center my-4">
          <Link to="/">
            {/* <button className="w-64 text-xl rounded px-5 py-2.5 mt-2 font-medium bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white hover:bg-gradient-to-r">
              Back to CinemaTime
            </button> */}
            <Button>Back to CinemaTime</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default PageNotFound;
