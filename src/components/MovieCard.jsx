export default function MovieCard({ movie }) {
  return (
    <li className="bg-gray-100 rounded-xl p-4 shadow hover:scale-105 transition-transform duration-300">
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
  );
}
