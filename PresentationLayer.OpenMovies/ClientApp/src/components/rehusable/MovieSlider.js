import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MovieSlider = ({ movies }) => {
    const moviesToDisplay = movies ?? [];

    return (
        <>
            {movies.map((movie) => (
                <div key={movie.id} className="col-6 col-md-4 col-lg px-2">
                    <div className="product mt-2">
                        <div className="product-image mb-1">
                            <a href="../single-movies/single-movies-v6.html" className="d-inline-block position-relative stretched-link">
                                <span className="position-absolute px-2d line-height-lg bg-primary rounded content-centered-x z-index-2 mt-n2 text-white font-size-12">Featured</span>
                                <img className="img-fluid" src={`https://image.tmdb.org/t/p/original/${movie.posterPath}`} style={{width: "180px", height: "240px"}} alt={movie.title} />
                            </a>
                        </div>
                        <div className="product-meta font-size-12">
                            <span><a href="../single-movies/single-movies-v6.html" className="h-g-primary">2020</a></span>
                            <span><a href="../single-movies/single-movies-v6.html" className="h-g-primary">Adventures</a></span>
                            <span><a href="../single-movies/single-movies-v6.html" className="h-g-primary">History</a></span>
                        </div>
                        <div className="font-weight-bold font-size-1">
                            <a className="text-dark" href="../single-movies/single-movies-v6.html">{movie.title}</a>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default MovieSlider;