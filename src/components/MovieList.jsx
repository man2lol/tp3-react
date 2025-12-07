import MovieCard from './MovieCard.jsx';

export default function MovieList({ movies }) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Films à l'affiche</h2>

      <ul className="grid grid-cols-1 sm:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </section>
  );
}
