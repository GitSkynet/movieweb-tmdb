using DataContext.DbContexts.TmdbDbContext;
using Entities.TMDB.Movies;
using Microsoft.EntityFrameworkCore;
using Repositories.BaseDA;
using Repository.Contracts.TMDB;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;

namespace Repositories.TMDBRepo
{
	public class MovieDA : BaseDA<Movie>, IMovieDA
	{
		private readonly TmdbDbContext dbContext;

		public MovieDA(TmdbDbContext context) : base(context)
		{
			dbContext = context;
		}

		public Movie GetByIdTMDB(long id)
		{
			return AsQueryable()
				.Include(x => x.Genres)
			.Where(m => m.IdTMDB == id).AsNoTracking()
			.FirstOrDefault();
		}

		public bool AlreadyExists(long movieId)
		{
			return AsQueryable()
				.Where(x => x.Id == movieId)
				.Any();
		}
		
		public bool AlreadyExistsByIdTmdb(long id)
		{
			return AsQueryable()
				.Where(x => x.IdTMDB == id)
				.Any();
		}

		public override Movie GetById(long movieID)
		{
			Movie? movie = AsQueryable()
				.Where(x => x.Id == movieID)
				.Include(x => x.Genres)
				.Include(x => x.ProductionCompanies)
				.Include(x => x.ProductionCountries)
				.Include(x => x.SpokenLanguages)
				.FirstOrDefault();
			return movie;
		}

		public List<Movie> GetMostPopularInTheaters(int limit)
		{
			return AsQueryable()
				.OrderByDescending(x => x.Popularity)
                .Take(limit)
				.ToList();
		}

		public List<Movie> GetMostRecentInTheaters(int limit)
		{
			return AsQueryable()
				.OrderByDescending(x => x.ReleaseDate)
				.Take(limit)
				.ToList();
		}
		
		public List<Movie> GetTopRatedInTheaters(int limit)
		{
            return AsQueryable()
				.Where(x => x.TopRated == true)
				.OrderByDescending(x => x.Popularity)
				.Take(limit)
				.ToList();
		}
		
		public List<Movie> GetComingSoonInTheaters(int limit)
		{
            return AsQueryable()
				.Where(x => x.Upcoming == true)
				.OrderByDescending(x => x.Popularity)
				.Take(limit)
				.ToList();
		}

		public List<Movie> GetByGenre(int id, int results)
		{
			var query = AsQueryable()
                .Where(e => e.Genres.Any(g => g.Id == id))
				.Take(results)
				.OrderByDescending(m => m.TopRated)
                .ToList();

			return query;
		}

		public List<Movie> GetNowPlaying(int limit)
		{
			return AsQueryable()
				.Where(x => x.NowPlaying == true)
                .OrderByDescending(m => m.Popularity)
                .Take(limit)
                .ToList();
		}

		public List<Movie> GetTrendingDay(int limit)
		{
			return AsQueryable()
				.Where(x => x.TrendingDay == true)
                .OrderByDescending(m => m.Popularity)
                .Take(limit)
                .ToList();
		}
		
		
		public List<Movie> GetTrendingWeek(int limit)
		{
			return AsQueryable()
				.Where(x => x.TrendingWeek == true)
				.OrderByDescending(m => m.Popularity)
                .Take(limit)
                .ToList();
		}
		public int MoviesOnDbCount()
		{
			return AsQueryable().Count();
		}

        public List<Movie> GetToday(int limit)
        {
			//DateTime today = DateTime.Today;
			//DateTime yesterday = today.AddDays(-1);

			//return AsQueryable()
			//    .AsEnumerable()
			//    .Where(m => !string.IsNullOrEmpty(m.ReleaseDate) &&
			//           DateTime.TryParseExact(m.ReleaseDate, "yyyy-MM-dd", CultureInfo.InvariantCulture, DateTimeStyles.None, out var releaseDate) &&
			//           (releaseDate.Date == today || releaseDate.Date == yesterday))
			//    .OrderByDescending(m => m.Popularity)
			//    .Take(limit)
			//    .ToList();
			return AsQueryable()
				.OrderByDescending(m => m.Popularity)
				.Take(limit)
				.ToList();
        }

        public List<Movie> GetThisWeek(int limit)
        {
            DateTime today = DateTime.Today;
            DateTime startOfWeek = today.AddDays(-(int)today.DayOfWeek); // Inicia la semana en domingo
            DateTime endOfWeek = startOfWeek.AddDays(6); // Termina la semana en sábado

            return AsQueryable()
                .AsEnumerable()
                .Where(m => !string.IsNullOrEmpty(m.ReleaseDate) && // Verifica que ReleaseDate no sea una cadena vacía
                    DateTime.TryParseExact(m.ReleaseDate, "yyyy-MM-dd", CultureInfo.InvariantCulture, DateTimeStyles.None, out var releaseDate) && // Intenta convertir ReleaseDate a DateTime
                    releaseDate >= startOfWeek &&
                    releaseDate <= endOfWeek)
                .OrderByDescending(m => m.Popularity)
                .Take(limit)
                .ToList();
        }
		
		public List<Movie> GetLast30days(int limit)
        {
            DateTime today = DateTime.Today;
            DateTime thirtyDaysAgo = today.AddDays(-30);
            
			return AsQueryable()
				.AsEnumerable()
				.Where(m => !string.IsNullOrEmpty(m.ReleaseDate) && // Verifica que ReleaseDate no sea una cadena vacía
					DateTime.TryParseExact(m.ReleaseDate, "yyyy-MM-dd", CultureInfo.InvariantCulture, DateTimeStyles.None, out var releaseDate) && // Intenta convertir ReleaseDate a DateTime
					releaseDate >= thirtyDaysAgo &&
					releaseDate <= today)
                .OrderByDescending(m => m.Popularity)
                .Take(limit)
				.ToList();
        }
    }
}
