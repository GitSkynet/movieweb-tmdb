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

		public List<Movie> GetTopRated(int limit) => movieDA.GetTopRated(limit);
		public List<Movie> GetComingSoon(int limit) => movieDA.GetComingSoon(limit);
			 
		public List<Movie> GetMostPopular(string language, int results) => movieDA.GetMostPopular(language, results);
		public List<Movie> GetMostRecent(string language, string status, int limit)
			=> movieDA.GetMostRecent(language, status, limit);

		public List<Movie> GetByGenre(string category, string language, int results, bool adult)
			=> movieDA.GetByGenre(category, language, results, adult);
    }
}