﻿using Entities.TMDB.Movies;

namespace Repository.Contracts.TMDB
{
	public interface IMovieDA
	{
		/// <summary>
		/// Comprueba si ya existe la película en base de datos
		/// </summary>
		/// <param name="movieId">Identificador de la película a buscar</param>
		/// <returns>booleano que indica si la <see cref="Movie"/> ya existe o no en BBDD</returns>
		bool AlreadyExists(long movieId);
		
		/// <summary>
		/// Comprueba si existe la película por IDTMDB
		/// </summary>
		/// <param name="Id">Identificador de la película a buscar</param>
		/// <returns>Booleano que indica si la <see cref="Movie"/> ya existe o no en BBDD</returns>
		bool AlreadyExistsByIdTmdb(long Id);

		/// <summary>
		/// Obtiene la película por el ID especificado
		/// </summary>
		/// <param name="movieID">Identificador de la película a buscar</param>
		/// <returns>Un objeto de tipo <see cref="Movie"/> con la película requerida</returns>
		Movie GetById(long movieID);

		/// <summary>
		/// Obtiene la película por el IDTMDB especificado
		/// </summary>
		/// <param name="id">Identificador de la película a buscar</param>
		/// <returns>Un objeto de tipo <see cref="Movie"/> con la película requerida</returns>
		Movie GetByIdTMDB(long id);

		/// <summary>
		/// Obtiene las películas más populares (actualizado desde TMDB)
		/// </summary>
		/// <param name="limit">Límite de resultados a mostrar</param>
		/// <returns>Una <see cref="List{T}"/> de <see cref="Movie"/> con el filtro aplicado</returns>
		List<Movie> GetMostPopularInTheaters(int limit);

		/// <summary>
		/// Obtiene las últimas películas añadidas recientemente
		/// </summary>
		/// <param name="limit">Límite a aplicar para los resultados</param>
		/// <returns>Una <see cref="List{T}"/> de <see cref="Movie"/> con el filtro aplicado</returns>
		List<Movie> GetMostRecentInTheaters( int limit);

        /// <summary>
        /// Obtiene todas las películas marcadas como Upcoming
        /// </summary>
        /// <returns>Una <see cref="List{T}"/> de <see cref="Movie"/> con las películas marcadas como Upcoming</returns>
        List<Movie> GetComingSoonInTheaters(int limit);

        /// <summary>
        /// Obtiene todas las películas marcadas como Top Rated
        /// </summary>
        /// <returns>Una <see cref="List{T}"/> de <see cref="Movie"/> con las películas marcadas como Top Rated</returns>
        List<Movie> GetTopRatedInTheaters(int limit);

        /// <summary>
        /// Obtiene las películas filtradas por Género
        /// </summary>
        /// <param name="genreId">Identificador del género por el que buscar</param>
        /// <param name="results">Límite a aplicar para los resultados</param>
        /// <returns>Una <see cref="List{T}"/> de <see cref="Movie"/> con el filtro aplicado</returns>
        List<Movie> GetByGenre(int genreId, int results);

        /// <summary>
        /// Obtiene todas las películas marcadas como Now Playing
        /// </summary>
        /// <returns>Una <see cref="List{T}"/> de <see cref="Movie"/> con las películas marcadas como Now Playing</returns>
        List<Movie> GetNowPlaying();

		/// <summary>
		/// Obtiene todas las películas marcadas como Trending Day
		/// </summary>
		/// <returns>Una <see cref="List{T}"/> de <see cref="Movie"/> con las películas marcadas como Trending Day</returns>
		List<Movie> GetTrendingDay();

		/// <summary>
		/// Obtiene todas las películas marcadas como Trending Week
		/// </summary>
		/// <returns>Una <see cref="List{T}"/> de <see cref="Movie"/> con las películas marcadas como Trending Week</returns>
		List<Movie> GetTrendingWeek();

        /// <summary>
        /// Devuelve el número de películas existentes en DB
        /// </summary>
        /// <returns>Un <see cref="int"/> con el número de películas existentes en base de datos</returns>
        int MoviesOnDbCount();
	}
}
