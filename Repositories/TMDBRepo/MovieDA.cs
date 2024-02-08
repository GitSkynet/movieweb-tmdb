using DataContext.DbContexts.TmdbDbContext;
using Entities.TMDB.Movies;
using Microsoft.EntityFrameworkCore;
using Repositories.BaseDA;
using Repository.Contracts.TMDB;

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
				.OrderBy(m => m.TopRated)
                .ToList();

			return query;
		}

		public List<Movie> GetNowPlaying()
		{
			return AsQueryable()
				.Where(x => x.NowPlaying == true)
					.Include(x => x.Genres)
					.Include(x => x.SpokenLanguages)
					.Include(x => x.ProductionCompanies)
					.Include(x => x.ProductionCountries)
				.ToList();
		}

		public List<Movie> GetTrendingDay()
		{
			return AsQueryable()
				.Where(x => x.TrendingDay == true)
					.Include(x => x.Genres)
					.Include(x => x.SpokenLanguages)
					.Include(x => x.ProductionCompanies)
					.Include(x => x.ProductionCountries)
				.ToList();
		}
		
		public int MoviesOnDbCount()
		{
			return AsQueryable().Count();
		}
		
		public List<Movie> GetTrendingWeek()
		{
			return AsQueryable()
				.Where(x => x.TrendingWeek == true)
					.Include(x => x.Genres)
					.Include(x => x.SpokenLanguages)
					.Include(x => x.ProductionCompanies)
					.Include(x => x.ProductionCountries)
				.ToList();
		}
	}
}
