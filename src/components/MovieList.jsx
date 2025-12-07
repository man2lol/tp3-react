import MovieCard from './MovieCard.jsx';
import Section from './Section.jsx';

export default function MovieList({ title, movies, filter }) {
  const filteredMovies = filter ? movies.filter(filter) : movies;

  return (
    <Section title={title}>
      <ul className="grid grid-cols-1 sm:grid-cols-5 gap-6">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </Section>
  );
}
