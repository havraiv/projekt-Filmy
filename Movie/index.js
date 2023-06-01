const movieList = document.querySelector('#movies');
export const Movie = ({ film }) => {
  return (movieList.innerHTML += `<div class="movie">
  <img class="movie__img" src=${film.posterUrl} alt="${film.title}">
  <h2 class="movie__title"><a href=${film.url}>${film.title}</a></h2>
  <p class="movie__year">${film.year}</p>
  <p class="movie__genre">${film.genres.join(', ')}</p>
</div>`);
};
