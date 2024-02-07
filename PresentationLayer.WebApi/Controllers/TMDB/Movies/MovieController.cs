using DomainService.Contracts.TMDB;
using Entities.TMDB.Movies;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers.TMDB.Movies
{
	[ApiController]
	[Route("api/tmdb/movies")]
	public class MovieController : Controller
    {
        private readonly IMovieBL movieBL;

        public MovieController(IMovieBL iMovieBL)
        {
			movieBL = iMovieBL;
        }

		[HttpGet]
		[Route("get_all")]
		public IActionResult GetAll()
	        => new ObjectResult(movieBL.GetAll());

		[HttpGet]
        [Route("get_by_ID")]
        public IActionResult GetById(long movieId)
			=> new ObjectResult(movieBL.GetById(movieId));

		[HttpGet]
        [Route("get_most_popular_intheaters")]
        public IActionResult GetMostPopularInTheaters(int limit)
            => new ObjectResult(movieBL.GetMostPopularInTheaters(limit));

        [HttpGet]
        [Route("get_most_recent_intheaters")]
        public IActionResult GetMostRecentInTheaters(int limit)
            => new ObjectResult(movieBL.GetMostRecentInTheaters(limit));
        
        [HttpGet]
        [Route("get_top_rated_intheaters")]
        public IActionResult GetTopRatedInTheaters(int limit)
            => new ObjectResult(movieBL.GetTopRatedInTheaters(limit));
        
        [HttpGet]
        [Route("get_comingsoon_intheaters")]
        public IActionResult GetComingSoonInTheaters(int limit)
            => new ObjectResult(movieBL.GetComingSoonInTheaters(limit));

        [HttpGet]
        [Route("get_by_category")]
        public IActionResult GetByGenre(int genreId, int results)
            => new ObjectResult(movieBL.GetByGenre(genreId, results));
        
        [HttpGet]
        [Route("get_num_movies")]
        public IActionResult MoviesOnDbCount()
            => new ObjectResult(movieBL.MoviesOnDbCount());

	}
}