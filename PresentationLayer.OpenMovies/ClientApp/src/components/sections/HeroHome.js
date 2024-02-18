import React, { useEffect, useState } from 'react';
import service from '../../api/service';

function HeroHome(args) {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState();

    const fetchData = async () => {
        try {
            const movies = await service.GetHeroHomeData();
            setMovies(movies);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="home-slider position-relative mb-7">
            <div className="row no-gutters">
                {!loading && movies.map((movie) => (
                    <div key={movie.id} className="col-lg-4">
                        <div className="slider-movie bg-img-hero d-flex flex-column justify-content-end overflow-hidden h-700rem mb-5 mb-lg-0" style={{backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.posterPath}')`}}>
                        <div className="slider-movie__hover d-flex flex-column z-index-2 px-4 pb-6 pb-lg-4 transition-1">
                            <div className="mx-1">
                                <a href="../single-movies/single-movies-v4.html">
                                    <h6 className="display-9 text-white mb-2 d-block">{movie.title}</h6>
                                </a>
                                <div className="text-white font-size-12 mb-2">
                                    <span>1hr 42 mins</span>
                                    <span> | </span>
                                    <a href="../single-movies/single-movies-v4.html" className="text-white">Action,</a>
                                    <a href="../single-movies/single-movies-v4.html" className="text-white">Adventure,</a>
                                    <a href="../single-movies/single-movies-v4.html" className="text-white">Animation</a>
                                </div>
                                <div className="movie__description-wrap">
                                    <div className="movie__description d-xl-none">
                                            <p className="text-white font-size-17">{movie.tagLine}</p>
                                    </div>
                                </div>
                                <div className="movie__actions d-xl-none">
                                    <div className="pb-1 mr-xl-3">
                                        <a href="../single-movies/single-movies-v4.html" className="btn px-5 btn-primary py-3 w-100 btn-sm mb-3">VIEW MORE</a>
                                    </div>
                                    <div>
                                        <a href="../single-movies/single-movies-v4.html" className="btn px-5 btn-outline-light py-3 w-100 btn-sm">+ PLAYLIST</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default HeroHome;