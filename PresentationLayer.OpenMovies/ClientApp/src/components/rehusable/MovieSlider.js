import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MovieSlider = ({ movies }) => {
    const moviesToDisplay = movies ?? [];

    return (
        <>
            {movies.map((movie) => (
                <div class="col-6 col-md-4 col-lg px-2">
                    <div class="product mt-2">
                        <div class="product-image mb-1">
                            <a href="../single-movies/single-movies-v6.html" class="d-inline-block position-relative stretched-link" tabindex="0">
                                <span class="position-absolute px-2d line-height-lg bg-primary rounded content-centered-x z-index-2 mt-n2 text-white font-size-12">Featured</span>
                                <img class="img-fluid w-100" src={`https://image.tmdb.org/t/p/original/${movie.posterPath}`} alt={movie.title} />
                            </a>
                        </div>
                        <div class="product-meta font-size-12">
                            <span><a href="../single-movies/single-movies-v6.html" class="h-g-primary" tabindex="0">2020</a></span>
                            <span><a href="../single-movies/single-movies-v6.html" class="h-g-primary" tabindex="0">Adventures</a></span>
                            <span><a href="../single-movies/single-movies-v6.html" class="h-g-primary" tabindex="0">History</a></span>
                        </div>
                        <div class="font-weight-bold font-size-1">
                            <a class="text-dark" href="../single-movies/single-movies-v6.html" tabindex="0">{movie.title}</a>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default MovieSlider;