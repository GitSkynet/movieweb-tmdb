using CleanArchitecture.Application.Contracts;

namespace CleanArchitecture.Application.Services
{
    public class MovieApplicationService
    {
        private readonly IMovieContract movieAssociationContract;

        public MovieApplicationService(IMovieContract iMovieAssociationContract)
        {
            movieAssociationContract = iMovieAssociationContract;
        }
    }
}