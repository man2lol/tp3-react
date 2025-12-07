import moviesList from './data/moviesList.js';
import MovieList from './components/MovieList.jsx';
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
      <section className="bg-gray-900 text-white p-6 rounded-xl shadow-xl mb-10">
        <h2 className="text-3xl font-bold mb-4 text-center">Film du moment</h2>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={featuredMovie.poster}
            alt={featuredMovie.title}
            className="w-full sm:w-1/4 h-auto object-cover rounded"
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

      <main className="max-w-7xl mx-auto mt-6">
        <MovieList title="Films à l'affiche" movies={moviesList} />

        <MovieList
          title="Coups de cœur"
          movies={moviesList}
          filter={(movie) => movie.rating >= 8}
        />

        <MovieList
          title="Films de super-héros"
          movies={moviesList}
          filter={(movie) => movie.Category === 'film de super héros'}
        />
      </main>

      <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-12">
        <p className="text-sm">© 2024 CinéTech</p>
      </footer>
    </>
  );
}
