using Entities.TMDB.Movies;

namespace Repository.Contracts.TMDB
{
	public interface ISpokenLanguageDA
	{
		public bool HasMoviesAssociated(long Id);

		public bool AlreadyExistsById(long id);
		
		public bool AlreadyExistsByIso(string iso);

		public bool AlreadyExistsByName(string name);

		public SpokenLanguage GetByIso6391(string iso);
	}
}
