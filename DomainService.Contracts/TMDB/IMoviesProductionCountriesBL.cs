using Entities.TMDB.Movies;

namespace DomainService.Contracts.TMDB
{
	public interface IMoviesProductionCountriesBL
	{
		public List<MovieProductionCountry> Save(long movieId, List<MovieProductionCountry> entities);
	}
}
