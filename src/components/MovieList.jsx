import MovieCard from './MovieCard';
import Section from './Section';
export default function MovieList({ movies }) {
  return (
    <Section title={"Films à l'affiche"}>
      <ul className="grid grid-cols-1 sm:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </ul>
    </Section>
  );
}
