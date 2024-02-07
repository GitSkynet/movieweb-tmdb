import React from 'react';
import Slider from 'react-slick';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MovieSlider = ({ movies }) => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
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
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const moviesToDisplay = movies ?? [];
    return (
        <Slider {...settings}>
            {moviesToDisplay.map((movie) => (
                <div className="movie-item" style={{width: "194px"}}>
				    <div className="mv-img">
                        <img src={`https://image.tmdb.org/t/p/original/${movie.posterPath}`} alt={movie.title} width="194" height="284" />
					</div> 
					<div className="hvr-inner">
					    <a href="#" tabindex="0">Details<i className="ion-android-arrow-dropright"></i></a>
					</div>
					<div className="title-in">
                        <h6><a href="#" tabindex="0">{movie.title}</a></h6>
                        <p><i className="ion-android-star"></i><span>{(movie.voteAverage).toFixed(1)}</span> /10</p>
					</div>
				</div>
            ))}
        </Slider>
    );
};

export default MovieSlider;