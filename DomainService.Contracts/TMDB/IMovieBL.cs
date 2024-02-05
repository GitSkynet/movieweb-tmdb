using Entities.TMDB.Movies;

namespace DomainService.Contracts.TMDB
{
	public interface IMovieBL
	{
		List<Movie> GetAll();

		Movie GetById(long movieId);

		List<Movie> GetNowPlaying();

		List<Movie> GetTrendingDay();

		List<Movie> GetTrendingWeek();

		List<Movie> GetMostPopular(string language, int results);

		List<Movie> GetMostRecent(string language, string status, int limit);

		List<Movie> GetTopRated(int limit);

		List<Movie> GetComingSoon(int limit);

		List<Movie> GetByGenre(string category, string language, int results, bool adult);

	}
}
