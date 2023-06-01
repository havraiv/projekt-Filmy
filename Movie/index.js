const movieList = document.querySelector('#movies');
export const Movie = ({ title, url, posterUrl, year, genres }) => {
  const movieElm = document.createElement('div');
  movieElm.classList.add('movie');
  movieElm.innerHTML = `<img class="movie__img" src=${posterUrl} alt="${title}">
  <h2 class="movie__title"><a href=${url}>${title}</a></h2>
  <p class="movie__year">${year}</p>
  <p class="movie__genre">${genres.join(', ')}</p>`;
  return movieList.append(movieElm);
};
