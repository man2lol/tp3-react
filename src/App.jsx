import moviesList from './data/moviesList.js';
import './style.css';
import styles from './App.module.css';

export default function App() {
  console.log(moviesList);

  const favoriteMovies = moviesList.filter((movie) => movie.rating >= 8);

  const superHeroMovies = moviesList.filter(
    (movie) => movie.Category === 'film de super héros'
  );

  return (
    <>
      <h1 className="text-4xl font-bold text-center my-6">CinéTech</h1>

      <main className="max-w-7xl mx-auto mt-6">
        <h2 style={{ fontSize: '20px' }}>Films à l'affiche</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-5 gap-6">
          {moviesList.map((movie) => (
            <li key={movie.id} className="bg-gray-100 rounded-xl p-4 shadow">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-64 object-cover rounded"
              />
              <h3>{movie.title}</h3>
              <p>
                {movie.year} — {movie.director}
              </p>
              <p>Note : {movie.rating}</p>
            </li>
          ))}
        </ul>

        <section>
          <h2 style={{ fontSize: '20px' }}>Coups de cœur</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-5 gap-6">
            {favoriteMovies.map((movie) => (
              <li key={movie.id} className="bg-gray-100 rounded-xl p-4 shadow">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-64 object-cover rounded"
                />
                {movie.title} — {movie.rating}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '20px' }}>Films de super-héros</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-5 gap-6">
            {superHeroMovies.map((movie) => (
              <li key={movie.id} className="bg-gray-100 rounded-xl p-4 shadow">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-64 object-cover rounded"
                />
                {movie.title} — {movie.Category}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
