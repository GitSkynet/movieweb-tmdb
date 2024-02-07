using DomainService.Contracts.TMDB;
using Entities.TMDB.Movies;
using Microsoft.AspNetCore.Mvc;

namespace PresentationLayer.OpenMovies.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class MoviesHomeController : ControllerBase
    {
        private readonly IMovieBL movieBl;
        private readonly ILogger<MoviesHomeController> _logger;

        public MoviesHomeController(ILogger<MoviesHomeController> logger, IMovieBL iMovieBl)
        {
            _logger = logger;
            movieBl= iMovieBl;
        }

        [HttpGet]
        public List<Movie> GetAll()
        {
            List<Movie> moviesFromDB = movieBl.GetMostPopularInTheaters(15);
            return moviesFromDB;
        }
    }
}

