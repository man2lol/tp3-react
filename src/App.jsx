import moviesList from './data/moviesList.js';
import MovieList from './components/MovieList.jsx';
import FeaturedMovie from './components/FeaturedMovie.jsx';

export default function App() {
  console.log(moviesList);

  const featuredMovie = moviesList[0];

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
      <FeaturedMovie movie={featuredMovie} />
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
