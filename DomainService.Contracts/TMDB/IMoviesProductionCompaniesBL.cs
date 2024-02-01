using Entities.TMDB.Movies;

namespace DomainService.Contracts.TMDB
{
	public interface IMoviesProductionCompaniesBL
	{
		public List<MovieProductionCompany> Save(long movieId, List<MovieProductionCompany> entities);

	}
}
