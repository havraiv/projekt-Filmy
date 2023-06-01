/* tady bude tvůj kód */
import { Movie } from './Movie/index.js';

console.log('JavaScript ve stránce funguje');

let movieArray;
const showMovies = (data) => {
  data.forEach((film) => {
    return Movie(film);
  });
};

fetch('https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies')
  .then((response) => response.json())
  .then((data) => {
    movieArray = data;
    const sortTitles = movieArray.sort((a, b) => {
      let fa = a.title.toLowerCase(),
        fb = b.title.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    showMovies(sortTitles);
  });
