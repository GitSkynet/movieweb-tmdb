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

		List<Movie> GetMostPopularInTheaters(int limit);

		List<Movie> GetMostRecentInTheaters(int limit);

		List<Movie> GetTopRatedInTheaters(int limit);

		List<Movie> GetComingSoonInTheaters(int limit);

		List<Movie> GetByGenre(string category, string language, int results, bool adult);

	}
}
