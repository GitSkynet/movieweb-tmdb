using Entities.TMDB.Movies;

namespace Repository.Contracts.TMDB
{
	public interface IMoviesProductionCountriesDA
	{
		bool AlreadyExists(MovieProductionCountry movieProductionCountry);

		List<MovieProductionCountry> GetAllByMovieId(long movieId);
	}
}
