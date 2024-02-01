using DataAccess.RESTServices.TheMovieDB.Interfaces;
using DataAccess.RESTServices.TheMovieDB.Services;
using DataContext.DbContexts.TmdbDbContext;
using DomainService.Contracts.TMDB;
using DomainService.Services.TMDB;
using Microsoft.EntityFrameworkCore;
using Repositories.TMDBRepo;
using Repository.Contracts.TMDB;

namespace WebApi
{
    public static class ConfigServiceCollectionExtensions
    {
        public static IServiceCollection AddConfig(this IServiceCollection services, IConfiguration config)
        {
            services.AddSingleton<IConfiguration>(provider => config);
            services.AddTransient<IQueryServiceTMDB, TmdbQueryService>();
            // TMDB Configuration
            services.AddScoped<ITVShowBL, TVShowBL>();
            services.AddScoped<IMovieBL, MovieBL>();
            services.AddScoped<IGenreBL, GenreBL>();
            services.AddScoped<ISpokenLanguageBL, SpokenLanguageBL>();
            services.AddScoped<IProductionCompaniesBL, ProductionCompaniesBL>();
            services.AddScoped<IProductionCountriesBL, ProductionCountriesBL>();
            services.AddScoped<IMoviesGenresBL, MoviesGenresBL>();
            services.AddScoped<IMoviesProductionCountriesBL, MoviesProductionCountriesBL>();
            services.AddScoped<IMoviesProductionCompaniesBL, MovieProductionCompaniesBL>();
            services.AddScoped<IMovieSpokenLanguagesBL, MovieSpokenLanguagesBL>();
            services.AddScoped<ITVShowDA, TVShowDA>();
            services.AddScoped<IMovieDA, MovieDA>();
            services.AddScoped<IGenreDA, GenreDA>();
            services.AddScoped<ISpokenLanguageDA, SpokenLanguageDA>();
            services.AddScoped<IProductionCompaniesDA, ProductionCompaniesDA>();
            services.AddScoped<IProductionCountriesDA, ProductionCountriesDA>();
            services.AddScoped<IMoviesGenresDA, MoviesGenresDA>();
            services.AddScoped<IMoviesProductionCountriesDA, MoviesProductionCountriesDA>();
            services.AddScoped<IMoviesProductionCompaniesDA, MoviesProductionCompaniesDA>();
            services.AddScoped<IMovieSpokenLanguagesDA, MovieSpokenLanguageDA>();
            services.AddScoped<TVShowBL>();
            services.AddScoped<MovieBL>();
            services.AddScoped<GenreBL>();
            services.AddScoped<SpokenLanguageBL>();
            services.AddScoped<MoviesGenresBL>();
            services.AddScoped<MoviesProductionCountriesBL>();
            services.AddScoped<MovieProductionCompaniesBL>();
            services.AddScoped<MovieSpokenLanguagesBL>();
            services.AddScoped<ProductionCompaniesDA>();
            services.AddScoped<ProductionCountriesDA>();
            services.AddScoped<SpokenLanguageDA>();
            services.AddScoped<MoviesGenresDA>();
            services.AddScoped<MoviesProductionCountriesDA>();
            services.AddScoped<MoviesProductionCompaniesDA>();
            services.AddScoped<MovieSpokenLanguageDA>();
            services.AddDbContext<TmdbDbContext>(options => options.UseSqlServer(config.GetConnectionString("DefaultConnection")), ServiceLifetime.Scoped);
            // End TMDB Configuration

            return services;
        }
    }
}
