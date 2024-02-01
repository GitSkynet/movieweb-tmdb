using Entities.TMDB.Movies;

namespace Repository.Contracts.TMDB
{
	public interface IMoviesGenresDA
	{
		bool AlreadyExists(MoviesGenres movieGenre);

		List<MoviesGenres> GetAllByMovieId(long movieId);
	}
}
