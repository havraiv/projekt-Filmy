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
    console.log(movieArray);
    showMovies(movieArray);
  });
