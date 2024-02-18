using DtoService.TMDB;
using Entities.TMDB.Movies;

namespace DomainService.Contracts.TMDB
{
	public interface IMovieBL
	{
		List<Movie> GetAll();

		Movie GetById(long movieId);

		List<Movie> GetNowPlaying(int limit);

		List<Movie> GetTrendingDay(int limit);

		List<Movie> GetTrendingWeek(int limit);

		List<Movie> GetMostPopularInTheaters(int limit);

		List<Movie> GetMostRecentInTheaters(int limit);

		List<Movie> GetTopRatedInTheaters(int limit);

		List<Movie> GetComingSoonInTheaters(int limit);

		List<Movie> GetByGenre(int genreId, int results);

		List<Movie> GetToday(int limit);

		List<Movie> GetThisWeek(int limit);

		List<Movie> GetLast30days(int limit);

		List<MovieHeroHomeDTO> GetHeroHome();

        /// <summary>
        /// Devuelve el número de películas existentes en DB
        /// </summary>
        /// <returns>Un <see cref="int"/> con el número de películas existentes en base de datos</returns>
        int MoviesOnDbCount();
    }
}
