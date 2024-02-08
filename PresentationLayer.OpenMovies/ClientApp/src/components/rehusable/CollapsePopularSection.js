import React, { useState } from 'react';
import { Collapse, Button } from 'reactstrap';

const CollapsePopularSection = ({movies}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    console.log("movies:", movies);

    return (
        <div>
            <Collapse isOpen={isOpen}>
                <div className="row row-cols-md-5 row-cols-xl">
                    {movies?.map((movie, index) => (
                        <div className="col-6 col-xl mb-5 mb-xl-0">
                            <div className="product">
                                <div className="product-image mb-2">
                                    <a href="#" className="d-inline-block position-relative stretched-link">
                                        <img className="img-fluid" src={`https://image.tmdb.org/t/p/original/${movie.posterPath}`} alt="Image Description" />
                                    </a>
                                </div>
                                <div className="product-meta font-size-12 mb-1">
                                    <span><a href="../single-movies/single-movies-v2.html" className="h-g-primary">{movie.releaseDate.substring(0, 4)}</a></span>
                                    <span><a href="../single-movies/single-movies-v2.html" className="h-g-primary">Action</a></span>
                                    <span><a href="../single-movies/single-movies-v2.html" className="h-g-primary">Comedy</a></span>
                                    <span><a href="../single-movies/single-movies-v2.html" className="h-g-primary">Mystery</a></span>
                                </div>
                                <div className="product-title font-weight-bold font-size-1"><a href="../single-movies/single-movies-v2.html">{movie.title}</a></div>
                            </div>
                        </div>
                    ))}
                </div>
                {/*<div className="mt-6">*/}
                {/*    <div className="container px-md-4">*/}
                {/*        <div className="row">*/}
                {/*            {movies?.map((movie, index) => (*/}
                {/*                <div className="col-lg-2">*/}
                {/*                <div className="product">*/}
                {/*                    <div className="product-image mb-2">*/}
                {/*                        <a href="#" className="d-inline-block position-relative stretched-link">*/}
                {/*                            <img className="img-fluid" src={`https://image.tmdb.org/t/p/original/${movie.posterPath}`} alt="Image Description" />*/}
                {/*                        </a>*/}
                {/*                    </div>*/}
                {/*                    <div className="product-meta font-size-12 mb-1">*/}
                {/*                        <span><a href="../single-movies/single-movies-v2.html" className="h-g-primary">{movie.releaseDate.substring(0, 4)}</a></span>*/}
                {/*                        <span><a href="../single-movies/single-movies-v2.html" className="h-g-primary">Action</a></span>*/}
                {/*                        <span><a href="../single-movies/single-movies-v2.html" className="h-g-primary">Comedy</a></span>*/}
                {/*                        <span><a href="../single-movies/single-movies-v2.html" className="h-g-primary">Mystery</a></span>*/}
                {/*                    </div>*/}
                {/*                    <div className="product-title font-weight-bold font-size-1"><a href="../single-movies/single-movies-v2.html">{movie.title}</a></div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            ))}*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </Collapse>
            <div className="space-1 position-relative d-flex">
                <Button
                    color="outline-1"
                    className="btn btn-outline-1 mx-auto px-7 py-3 font-size-1 z-index-2 font-weight-medium font-secondary"
                    onClick={toggle}
                >
                    {isOpen ? '- View less' : '+ View more'}
                </Button>
                <div className="border-top content-centered w-100 border-gray-1300"></div>
            </div>
        </div>
    );
};

export default CollapsePopularSection;