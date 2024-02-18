import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SliderMultiSection({ movies }) {
    const moviesToDisplay = movies ?? [];
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 406,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
            <Slider {...settings}>
                {movies.map((movie) => (
                    <div key={movie.id} className="product mt-2">
                        <div className="product-image mb-1">
                            <a href="../single-movies/single-movies-v6.html" className="d-inline-block position-relative stretched-link">
                                <span className="position-absolute px-2d line-height-lg bg-primary rounded content-centered-x z-index-2 mt-n2 text-white font-size-12">Featured</span>
                                <img className="img-fluid" src={`https://image.tmdb.org/t/p/original/${movie.posterPath}`} style={{ width: "180px", height: "240px" }} alt={movie.title} />
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
                ))}
            </Slider>
    );
}

export default SliderMultiSection;