using Entities.TMDB.Movies;

namespace DomainService.Contracts.TMDB
{
	public interface IMoviesGenresBL
	{
		public List<MoviesGenres> Save(long movieId, List<MoviesGenres> entities);
	}
}
