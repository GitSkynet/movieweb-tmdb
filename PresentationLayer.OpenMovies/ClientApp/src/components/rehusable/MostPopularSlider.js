import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MostPopularSlider = ({ movies }) => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    const moviesToDisplay = movies ?? [];
    return (
        <Slider {...settings}>
            {moviesToDisplay.map((movie) => (
                <div className="movie-item" style={{ width: "194px" }}>
                    <div className="mv-img">
                        <img src={`https://image.tmdb.org/t/p/original/${movie.posterPath}`} alt={movie.title} width="194" height="284" />
                    </div>
                    <div className="hvr-inner">
                        <a href="#">Details<i className="ion-android-arrow-dropright"></i></a>
                    </div>
                    <div className="title-in">
                        <h6><a href="#">{movie.title}</a></h6>
                        <p><i className="ion-android-star"></i><span>{(movie.voteAverage).toFixed(1)}</span> /10</p>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default MostPopularSlider;