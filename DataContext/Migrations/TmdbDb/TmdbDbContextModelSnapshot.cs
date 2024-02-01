﻿// <auto-generated />
using DataContext.DbContexts.TmdbDbContext;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace DataContext.Migrations.TmdbDb
{
    [DbContext(typeof(TmdbDbContext))]
    partial class TmdbDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.12")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Entities.TMDB.Movies.Genre", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("Id"));

                    b.Property<long>("IdTMDB")
                        .HasColumnType("bigint");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Genres");
                });

            modelBuilder.Entity("Entities.TMDB.Movies.Movie", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("Id"));

                    b.Property<bool>("Adult")
                        .HasColumnType("bit");

                    b.Property<string>("BackdropPath")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<long>("Budget")
                        .HasColumnType("bigint");

                    b.Property<string>("Homepage")
                        .HasColumnType("nvarchar(max)");

                    b.Property<long>("IdTMDB")
                        .HasColumnType("bigint");

                    b.Property<string>("ImdbId")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("NowPlaying")
                        .HasColumnType("bit");

                    b.Property<string>("OriginalLanguage")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("OriginalTitle")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Overview")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Popularity")
                        .HasColumnType("float");

                    b.Property<string>("PosterPath")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ReleaseDate")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<long>("Revenue")
                        .HasColumnType("bigint");

                    b.Property<int>("Runtime")
                        .HasColumnType("int");

                    b.Property<string>("Status")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Tagline")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("TopRated")
                        .HasColumnType("bit");

                    b.Property<string>("TrailerURL")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("TrendingDay")
                        .HasColumnType("bit");

                    b.Property<bool>("TrendingWeek")
                        .HasColumnType("bit");

                    b.Property<bool>("Upcoming")
                        .HasColumnType("bit");

                    b.Property<bool>("Video")
                        .HasColumnType("bit");

                    b.Property<double>("VoteAverage")
                        .HasColumnType("float");

                    b.Property<int>("VoteCount")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Movies");
                });

            modelBuilder.Entity("Entities.TMDB.Movies.MovieProductionCompany", b =>
                {
                    b.Property<long>("MovieID")
                        .HasColumnType("bigint");

                    b.Property<long>("ProductionCompanyID")
                        .HasColumnType("bigint");

                    b.HasKey("MovieID", "ProductionCompanyID");

                    b.HasIndex("ProductionCompanyID");

                    b.ToTable("MoviesProductionCompanies", (string)null);
                });

            modelBuilder.Entity("Entities.TMDB.Movies.MovieProductionCountry", b =>
                {
                    b.Property<long>("MovieID")
                        .HasColumnType("bigint");

                    b.Property<long>("ProductionCountryID")
                        .HasColumnType("bigint");

                    b.HasKey("MovieID", "ProductionCountryID");

                    b.HasIndex("ProductionCountryID");

                    b.ToTable("MoviesProductionCountries", (string)null);
                });

            modelBuilder.Entity("Entities.TMDB.Movies.MovieSpokenLanguage", b =>
                {
                    b.Property<long>("MovieID")
                        .HasColumnType("bigint");

                    b.Property<long>("SpokenLanguageID")
                        .HasColumnType("bigint");

                    b.HasKey("MovieID", "SpokenLanguageID");

                    b.HasIndex("SpokenLanguageID");

                    b.ToTable("MoviesSpokenLanguages", (string)null);
                });

            modelBuilder.Entity("Entities.TMDB.Movies.MoviesGenres", b =>
                {
                    b.Property<long>("GenreID")
                        .HasColumnType("bigint");

                    b.Property<long>("MovieID")
                        .HasColumnType("bigint");

                    b.HasKey("GenreID", "MovieID");

                    b.HasIndex("MovieID");

                    b.ToTable("MoviesGenres", (string)null);
                });

            modelBuilder.Entity("Entities.TMDB.Movies.ProductionCompany", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("Id"));

                    b.Property<long>("IdTMDB")
                        .HasColumnType("bigint");

                    b.Property<string>("LogoPath")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("OriginCountry")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("ProductionCompanies");
                });

            modelBuilder.Entity("Entities.TMDB.Movies.ProductionCountry", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("Id"));

                    b.Property<long>("IdTMDB")
                        .HasColumnType("bigint");

                    b.Property<string>("Iso31661")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("ProductionCountries");
                });

            modelBuilder.Entity("Entities.TMDB.Movies.SpokenLanguage", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("Id"));

                    b.Property<string>("EnglishName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<long>("IdTMDB")
                        .HasColumnType("bigint");

                    b.Property<string>("Iso6391")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("SpokenLanguage");
                });

            modelBuilder.Entity("Entities.TMDB.Movies.MovieProductionCompany", b =>
                {
                    b.HasOne("Entities.TMDB.Movies.Movie", "Movies")
                        .WithMany("MovieProductionCompanies")
                        .HasForeignKey("MovieID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Entities.TMDB.Movies.ProductionCompany", "ProductionCompanies")
                        .WithMany("MovieProductionCompanies")
                        .HasForeignKey("ProductionCompanyID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Movies");

                    b.Navigation("ProductionCompanies");
                });

            modelBuilder.Entity("Entities.TMDB.Movies.MovieProductionCountry", b =>
                {
                    b.HasOne("Entities.TMDB.Movies.Movie", "Movies")
                        .WithMany("MovieProductionCountries")
                        .HasForeignKey("MovieID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Entities.TMDB.Movies.ProductionCountry", "ProductionCountries")
                        .WithMany("MovieProductionCountries")
                        .HasForeignKey("ProductionCountryID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Movies");

                    b.Navigation("ProductionCountries");
                });

            modelBuilder.Entity("Entities.TMDB.Movies.MovieSpokenLanguage", b =>
                {
                    b.HasOne("Entities.TMDB.Movies.Movie", "Movies")
                        .WithMany("MovieSpokenLanguages")
                        .HasForeignKey("MovieID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Entities.TMDB.Movies.SpokenLanguage", "SpokenLanguages")
                        .WithMany("MovieSpokenLanguages")
                        .HasForeignKey("SpokenLanguageID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Movies");

                    b.Navigation("SpokenLanguages");
                });

            modelBuilder.Entity("Entities.TMDB.Movies.MoviesGenres", b =>
                {
                    b.HasOne("Entities.TMDB.Movies.Genre", "Genres")
                        .WithMany("MoviesGenres")
                        .HasForeignKey("GenreID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Entities.TMDB.Movies.Movie", "Movies")
                        .WithMany("MoviesGenres")
                        .HasForeignKey("MovieID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Genres");

                    b.Navigation("Movies");
                });

            modelBuilder.Entity("Entities.TMDB.Movies.Genre", b =>
                {
                    b.Navigation("MoviesGenres");
                });

            modelBuilder.Entity("Entities.TMDB.Movies.Movie", b =>
                {
                    b.Navigation("MovieProductionCompanies");

                    b.Navigation("MovieProductionCountries");

                    b.Navigation("MovieSpokenLanguages");

                    b.Navigation("MoviesGenres");
                });

            modelBuilder.Entity("Entities.TMDB.Movies.ProductionCompany", b =>
                {
                    b.Navigation("MovieProductionCompanies");
                });

            modelBuilder.Entity("Entities.TMDB.Movies.ProductionCountry", b =>
                {
                    b.Navigation("MovieProductionCountries");
                });

            modelBuilder.Entity("Entities.TMDB.Movies.SpokenLanguage", b =>
                {
                    b.Navigation("MovieSpokenLanguages");
                });
#pragma warning restore 612, 618
        }
    }
}
