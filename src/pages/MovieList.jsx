// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
import PropTypes from "prop-types";

// import { useEffect } from "react";

import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

function MovieList({ apiPath, title }) {
  // const [movies, setMovies] = useState([]);
  // const { data: movies } = useFetch(
  //   "https://api.themoviedb.org/3/movie/now_playing?api_key=${api}"
  // );
  const { data: movies } = useFetch(apiPath);
  useTitle(title);
  // useTitle({ title: title });
  // useEffect(() => {
  //   document.title = title;
  // });

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-evenly flex-wrap other:justify-evenly">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
}

MovieList.propTypes = {
  apiPath: PropTypes.string.isRequired, // Update prop name to apiPath
  title: PropTypes.string.isRequired, // Update prop name to apiPath
};

export default MovieList;
