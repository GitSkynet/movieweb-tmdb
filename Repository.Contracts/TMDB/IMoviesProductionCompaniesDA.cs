using Entities.TMDB.Movies;

namespace Repository.Contracts.TMDB
{
	public interface IMoviesProductionCompaniesDA
	{
		bool AlreadyExists(MovieProductionCompany movieProductionCountry);

		List<MovieProductionCompany> GetAllByMovieId(long movieId);
	}
}
