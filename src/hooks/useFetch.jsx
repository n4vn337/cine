import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
  // console.log("API Key:", apiKey);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${apiKey}&query=${queryTerm}`;

  // if (queryTerm) {
  // } else {
  //   const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${apiKey}`;
  // }

  // const url = `https://api.themoviedb.org/3/${apiPath}?api_key=`;
  // const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${
  //   import.meta.env.REACT_APP_API_KEY
  // }`;

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }
    fetchMovies();
  }, [url]);
  return { data };
};
