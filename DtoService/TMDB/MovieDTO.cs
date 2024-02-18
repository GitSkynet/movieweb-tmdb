using Entities.TMDB.Movies;

namespace DtoService.TMDB
{
    public class MovieHeroHomeDTO
    {
        public long Id { get; set; }

        public string Title { get; set; }
        
        public string? PosterPath { get; set; }
        
        public int Runtime { get; set; }

        public string? TagLine { get; set; }

        public List<GenreHeroHomeDTO> Genres { get; set; }
    }
}
