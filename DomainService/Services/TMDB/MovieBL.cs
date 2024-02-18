using DataAccess.RESTServices.TheMovieDB.Interfaces;
using DomainService.Contracts.TMDB;
using DomainService.Services.BaseBL;
using DtoService.TMDB;
using Entities.TMDB.Movies;
using Repository.Contracts.TMDB;
using System.Collections.Generic;
using System.Diagnostics;

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

		public List<Movie> GetNowPlaying(int limit) => movieDA.GetNowPlaying(limit);
		public List<Movie> GetTrendingDay(int limit) => movieDA.GetTrendingDay(limit);
		public List<Movie> GetTrendingWeek(int limit) => movieDA.GetTrendingWeek(limit);

		// [GET] #INTHEATERS
		public List<Movie> GetTopRatedInTheaters(int limit) => movieDA.GetTopRatedInTheaters(limit);
		public List<Movie> GetComingSoonInTheaters(int limit) => movieDA.GetComingSoonInTheaters(limit);
		public List<Movie> GetMostPopularInTheaters(int limit) => movieDA.GetMostPopularInTheaters(limit);
		public List<Movie> GetMostRecentInTheaters(int limit) => movieDA.GetMostRecentInTheaters(limit);
		public int MoviesOnDbCount() => movieDA.MoviesOnDbCount();

		public List<Movie> GetToday(int limit) => movieDA.GetToday(limit);
		public List<Movie> GetThisWeek(int limit) => movieDA.GetThisWeek(limit);
        public List<Movie> GetLast30days(int limit) => movieDA.GetLast30days(limit);
        
        public List<Movie> GetByGenre(int genreId, int results)
            => movieDA.GetByGenre(genreId, results);
		
		public List<MovieHeroHomeDTO> GetHeroHome()
		{
			List<MovieHeroHomeDTO> moviesDTO = new();
            var movies = movieDA.GetHeroHome();

            foreach (var movie in movies)
            {
                var movieDTO = new MovieHeroHomeDTO
                {
                    Id = movie.Id,
                    Title = movie.Title,
                    PosterPath = movie.PosterPath,
					Runtime = movie.Runtime,
                    TagLine = movie.Tagline,
                    Genres = movie.Genres.Select(g => new GenreHeroHomeDTO 
					{
						Id = g.Id,
						Name = g.Name,
					})
					.ToList()
                };

                moviesDTO.Add(movieDTO);
            }

            return moviesDTO;
        }
    }
}