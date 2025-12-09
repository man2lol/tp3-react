export default function FeaturedMovie({ movie }) {
  return (
    <section className="bg-gray-900 text-white p-6 rounded-xl shadow-xl mb-10">
      <h2 className="text-3xl font-bold mb-4 text-center">Film du moment</h2>

      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full sm:w-1/4 h-auto object-cover rounded"
        />

        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-3">{movie.title}</h3>

          <p className="text-yellow-400 text-xl font-semibold mb-3">
            Note : {movie.rating}
          </p>

          <p className="text-gray-300 leading-relaxed">{movie.synopsis}</p>
        </div>
      </div>
    </section>
  );
}
