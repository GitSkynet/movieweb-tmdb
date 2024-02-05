import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap';

const items = [
    {
        src: 'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/poster1.jpg',
        altText: 'Poster Guardians of the galaxy',
        caption: 'Guardians of the galaxy',
        key: 1,
    },
    {
        src: 'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/poster1.jpg',
        altText: 'Poster Guardians of the galaxy',
        caption: 'Guardians of the galaxy vol 2',
        key: 2,
    },
    {
        src: 'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/poster1.jpg',
        altText: 'Poster Guardians of the galaxy',
        caption: 'Guardians of the galaxy vol 3',
        key: 3,
    },
];

function HeroHome(args) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(true)}
                key={item.src}
                className="movie-item"
            >
                <div className="row">
                    <div className="col-md-8 col-sm-12 col-xs-12">
                        <div className="title-in">
                            <div className="cate">
                                <span className="blue"><a href="#" tabindex="0">Sci-fi</a></span>
                                <span className="yell"><a href="#" tabindex="0">Action</a></span>
                                <span className="orange"><a href="#" tabindex="0">Adventure</a></span>
                            </div>
                            <h1><a href="#" tabindex="0">{item.caption}<br/>
                                <span>2015</span></a></h1>
                            <div className="social-btn">
                                <a href="#" className="parent-btn" tabindex="0"><i className="ion-play"></i> Watch Trailer</a>
                                <a href="#" className="parent-btn" tabindex="0"><i className="ion-heart"></i> Add to Favorite</a>
                                <div className="hover-bnt">
                                    <a href="#" className="parent-btn" tabindex="0"><i className="ion-android-share-alt"></i>share</a>
                                    <div className="hvr-item">
                                        <a href="#" className="hvr-grow" tabindex="0"><i className="ion-social-facebook"></i></a>
                                        <a href="#" className="hvr-grow" tabindex="0"><i className="ion-social-twitter"></i></a>
                                        <a href="#" className="hvr-grow" tabindex="0"><i className="ion-social-googleplus"></i></a>
                                        <a href="#" className="hvr-grow" tabindex="0"><i className="ion-social-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="mv-details">
                                <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                <ul className="mv-infor">
                                    <li>  Run Time: 2h21’ </li>
                                    <li>  Rated: PG-13  </li>
                                    <li>  Release: 1 May 2015</li>
                                </ul>
                            </div>
                            <div className="btn-transform transform-vertical">
                                <div><a href="#" className="item item-1 redbtn" tabindex="0">more detail</a></div>
                                <div><a href="#" className="item item-2 redbtn hvrbtn" tabindex="0">more detail</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 col-xs-12">
                        <div className="mv-img-2">
                            <a><img src={item.src} alt={item.altText} /></a>
                        </div>
                    </div>
                </div>
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            {...args}
        >
        {slides}
        </Carousel>
    );
}

export default HeroHome;