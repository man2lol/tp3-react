import moviesList from './data/moviesList.js';

export default function App() {
  console.log(moviesList);

  const favoriteMovies = moviesList.filter((movie) => movie.rating >= 8);

  const superHeroMovies = moviesList.filter(
    (movie) => movie.Category === 'film de super héros'
  );

  return (
    <>
      <h1>CinéTech</h1>
      <main>
        <h2>Films à l'affiche</h2>
        <ul>
          {moviesList.map((movie) => (
            <li key={movie.id}>
              <h3>{movie.title}</h3>
              <p>
                {movie.year} — {movie.director}
              </p>
              <p>Note : {movie.rating}</p>
            </li>
          ))}
        </ul>

        <section>
          <h2>Coups de cœur</h2>
          <ul>
            {favoriteMovies.map((movie) => (
              <li key={movie.id}>
                {movie.title} — {movie.rating}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Films de super-héros</h2>
          <ul>
            {superHeroMovies.map((movie) => (
              <li key={movie.id}>
                {movie.title} — {movie.category}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
