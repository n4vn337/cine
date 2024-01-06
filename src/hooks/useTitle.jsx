import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} / CinemaTime`;
  }); // Add an empty dependency array to run the effect only once on mount
  return null;
};
