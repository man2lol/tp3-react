import MovieCard from './MovieCard.jsx';
import Section from './Section.jsx';
import { useState } from 'react';

export default function MovieList({ title, movies, filter }) {
  const filteredMovies = filter ? movies.filter(filter) : movies;

  const [sortedMovies, setSortedMovies] = useState(filteredMovies);
  const [moviesAsc, setMoviesAsc] = useState(true);

  const sortMoviesByDate = () => {
    const sorted = [...sortedMovies].sort((a, b) =>
      moviesAsc ? a.year - b.year : b.year - a.year
    );

    setSortedMovies(sorted);
    setMoviesAsc(!moviesAsc);
  };

  return (
    <Section title={title}>
      <div className="flex bg-gray-100 rounded-xl p-4 shadow sm:p-6 border border-white/10">
        <button
          className="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-1 rounded"
          onClick={sortMoviesByDate}
        >
          Tri par année
        </button>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-5 gap-6">
        {sortedMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </Section>
  );
}
