using DataAccess.RESTServices.TheMovieDB.Interfaces;
using DomainService.Contracts.TMDB;
using DomainService.Services.BaseBL;
using Entities.TMDB.Movies;
using Repository.Contracts.TMDB;

namespace DomainService.Services.TMDB
{
	public class MovieBL : BaseBL<Movie>, IMovieBL
	{
		private readonly IQueryServiceTMDB queryService;
		private readonly IGenreBL genreBL;
		private readonly IProductionCountriesBL countriesBL;
		private readonly ISpokenLanguageBL languageBL;	
		private readonly IProductionCompaniesBL companiesBL;
		private IMovieDA movieDA => (IMovieDA)DataAccess;

		public MovieBL(IQueryServiceTMDB iQqueryService, IMovieDA iMovieDA, IGenreBL iGenreBL, 
			IProductionCompaniesBL iCompaniesBL, IProductionCountriesBL iCountriesBL, 
			ISpokenLanguageBL iLanguageBL) : base((Repositories.BaseDA.IBaseDA<Movie>)iMovieDA)
		{
			genreBL = iGenreBL;
			queryService = iQqueryService;
			companiesBL = iCompaniesBL;
			countriesBL = iCountriesBL;
			languageBL = iLanguageBL;
		}
		
		public override Movie GetById(long movieId) => movieDA.GetById(movieId);

		public List<Movie> GetNowPlaying() => movieDA.GetNowPlaying();
		public List<Movie> GetTrendingDay() => movieDA.GetTrendingDay();
		public List<Movie> GetTrendingWeek() => movieDA.GetTrendingWeek();

		// [GET] #INTHEATERS
		public List<Movie> GetTopRatedInTheaters(int limit) => movieDA.GetTopRatedInTheaters(limit);
		public List<Movie> GetComingSoonInTheaters(int limit) => movieDA.GetComingSoonInTheaters(limit);
		public List<Movie> GetMostPopularInTheaters(int limit) => movieDA.GetMostPopularInTheaters(limit);
		public List<Movie> GetMostRecentInTheaters(int limit) => movieDA.GetMostRecentInTheaters(limit);
		public int MoviesOnDbCount() => movieDA.MoviesOnDbCount();

		public List<Movie> GetByGenre(int genreId, int results)
            => movieDA.GetByGenre(genreId, results);
    }
}