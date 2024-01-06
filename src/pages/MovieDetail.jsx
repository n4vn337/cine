import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "flowbite-react";
import Backup from "../assets/images/backup.png";
import { useTitle } from "../hooks/useTitle";

function MovieDetail() {
  const params = useParams();
  // console.log(params);

  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=d990dfcc66db01e2221445602c45a122`
      );
      const json = await response.json();
      setMovie(json);
      console.log(json);
    }

    fetchMovie();
  }, [params]);

  // useTitle(movie.title);
  useTitle({ title: movie.title });

  // useEffect(() => {
  //   document.title = movie.title;
  // });

  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : Backup;

  return (
    <main>
      <section className="flex flex-row flex-wrap py-7 mx-auto m-3 justify-evenly">
        <div className="max-w-sm">
          <img src={image} alt={movie.title} className="rounded" />
        </div>
        <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
          <h1 className="text-4xl font-bold my-3">{movie.title}</h1>
          <p className="my-4">{movie.overview}</p>

          {movie.genres ? (
            <p className="my-7 flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2"
                >
                  {genre.name}
                </span>
              ))}
            </p>
          ) : (
            ""
          )}

          <Rating>
            <Rating.Star />
            <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
              {movie.vote_average}
            </p>
            <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
            <a
              href="#"
              className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
            >
              {movie.vote_count} reviews
            </a>
          </Rating>

          <p className="my-4">
            <span className="mr-2 font-bold">Runtime:</span>
            <span className="">{movie.runtime} mins</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Budget:</span>
            <span className="">{movie.budget}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Revenue:</span>
            <span className="">{movie.revenue}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Release Date:</span>
            <span className="">{movie.release_date}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">IMDB:</span>
            <a
              href={`https://www.imdb.com/title/${movie.imdb_id}`}
              target="_blank"
              rel="noreferrer"
            >
              {movie.imdb_id}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}

export default MovieDetail;
