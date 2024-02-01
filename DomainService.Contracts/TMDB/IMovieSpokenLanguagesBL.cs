using Entities.TMDB.Movies;

namespace DomainService.Contracts.TMDB
{
	public interface IMovieSpokenLanguagesBL
	{
		public List<MovieSpokenLanguage> Save(long movieId, List<MovieSpokenLanguage> entities);
	}
}
