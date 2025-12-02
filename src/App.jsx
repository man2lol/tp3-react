import moviesList from './data/moviesList.js';
import './style.css';
import styles from './App.module.css';

export default function App() {
  console.log(moviesList);

  const favoriteMovies = moviesList.filter((movie) => movie.rating >= 8);
  const featuredMovie = moviesList[0];

  const superHeroMovies = moviesList.filter(
    (movie) => movie.Category === 'film de super héros'
  );

  return (
    <>
      <nav className="bg-gray-900 text-white px-6 py-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h2 className="text-xl font-bold">CinéTech</h2>

          <ul className="flex gap-6 text-sm">
            <li className="hover:text-yellow-400 cursor-pointer">Accueil</li>
            <li className="hover:text-yellow-400 cursor-pointer">Films</li>
            <li className="hover:text-yellow-400 cursor-pointer">Top</li>
            <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
          </ul>
        </div>
      </nav>

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

              <h3 className="text-xl font-semibold mt-2">{movie.title}</h3>

              <p className="text-sm text-gray-600 mt-2">
                {movie.year} — {movie.director}
              </p>

              <p className="mt-2">Note : {movie.rating}</p>
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

                <h3 className="text-xl font-semibold mt-2">{movie.title}</h3>

                <p className="text-sm text-gray-600 mt-2">
                  {movie.year} — {movie.director}
                </p>

                <p className="mt-2">Note : {movie.rating}</p>
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

                <h3 className="text-xl font-semibold mt-2">{movie.title}</h3>

                <p className="text-sm text-gray-600 mt-2">
                  {movie.year} — {movie.director}
                </p>

                <p className="mt-2">Note : {movie.rating}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="bg-gray-900 text-white p-6 rounded-xl shadow-xl mb-10">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Film du moment
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={featuredMovie.poster}
              alt={featuredMovie.title}
              className="w-full md:w-1/3 h-96 object-cover rounded-lg shadow-lg"
            />

            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3">{featuredMovie.title}</h3>

              <p className="text-yellow-400 text-xl font-semibold mb-3">
                Note : {featuredMovie.rating}
              </p>

              <p className="text-gray-300 leading-relaxed">
                {featuredMovie.synopsis}
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-12">
        <p className="text-sm">© 2024 CinéTech</p>
      </footer>
    </>
  );
}
