﻿using Entities.TMDB.Movies;

namespace Repository.Contracts.TMDB
{
	public interface IProductionCountriesDA
	{
		public bool HasMoviesAssociated(long Id);

		public bool AlreadyExistsById(long id);

		public bool AlreadyExistsByName(string name);

		public bool AlreadyExistsByIso(string iso31661);

		public ProductionCountry GetByIso(string name);
	}
}
