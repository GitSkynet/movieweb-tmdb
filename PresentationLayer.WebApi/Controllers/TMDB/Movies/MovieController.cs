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
		public IActionResult GetAll(long movieId)
	        => new ObjectResult(movieBL.GetAll());

		[HttpGet]
        [Route("get_by_ID")]
        public IActionResult GetById(long movieId)
			=> new ObjectResult(movieBL.GetById(movieId));

		[HttpGet]
        [Route("get_most_popular")]
        public IActionResult GetMostPopular(string language, int results)
            => new ObjectResult(movieBL.GetMostPopular(language, results));

        [HttpGet]
        [Route("get_most_recent")]
        public IActionResult GetMostRecent(string language, string status, int limit)
            => new ObjectResult(movieBL.GetMostRecent(language, status, limit));
        
        [HttpGet]
        [Route("get_top_rated")]
        public IActionResult GetTopRated(int limit)
            => new ObjectResult(movieBL.GetTopRated(limit));
        
        [HttpGet]
        [Route("get_comingsoon")]
        public IActionResult GetComingSoon(int limit)
            => new ObjectResult(movieBL.GetComingSoon(limit));

        [HttpGet]
        [Route("get_by_category")]
        public IActionResult GetByGenre(string category, string language, int results, bool adult)
            => new ObjectResult(movieBL.GetByGenre(category, language, results, adult));

	}
}