import React, { useState, useEffect } from 'react';
import service from '../../api/service';
import CollapsePopularSection from '../rehusable/CollapsePopularSection';
import MovieSlider from '../rehusable/MovieSlider';

function MostPopularSection() {
    const [loading, setLoading] = useState(true);
    const [firstFiveMovies, setfirstFiveMovies] = useState();
    const [nextSixMovies, setnextSixMovies] = useState();
    const [remainingMovies, setremainingMovies] = useState();

    const fetchData = async () => {
        try {
            const movies = await service.GetMostPopular(23);
            setfirstFiveMovies(movies.slice(0, 5));
            setnextSixMovies(movies.slice(5, 11));
            setremainingMovies(movies.slice(11));
            setLoading(false); 
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section>
            <div className="container px-md-6 mb-5 mb-xl-8">
                <div className="row mb-xl-5">
                    <div className="col-xl-auto d-flex">
                        <header className="max-w-370 mt-auto mb-8 title-dash">
                            <h1 className="display-7 mb-3 pr-xl-12 font-weight-semi-bold">Popular Movies to Watch Now</h1>
                            <p className="text-gray-1300 font-secondary font-weight-medium">Most watched movies by days</p>
                            <div className="border-top border-g-1200-op mr-xl-7">
                                <a href="#" className="h-w-primary text-gray-1300 font-size-13 d-inline-flex align-items-center pt-2 font-secondary font-weight-medium">VIEW ALL
                                    <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="4" height="7"><path d="M3.979,3.703 C3.987,3.785 3.966,3.869 3.903,3.934 L1.038,6.901 C0.921,7.023 0.724,7.029 0.598,6.916 L0.143,6.506 C0.017,6.393 0.011,6.203 0.128,6.082 L2.190,3.946 C2.276,3.829 2.356,3.691 2.356,3.548 C2.356,3.214 1.947,2.885 1.947,2.885 L1.963,2.877 L0.080,0.905 C-0.036,0.784 -0.029,0.592 0.095,0.479 L0.547,0.068 C0.671,-0.045 0.867,-0.039 0.983,0.083 L3.823,3.057 C3.867,3.102 3.876,3.161 3.885,3.218 C3.945,3.267 3.988,3.334 3.988,3.416 L3.988,3.681 C3.988,3.690 3.979,3.694 3.979,3.703 Z" fill="rgb(148, 156, 176)"></path></svg>
                                </a>
                            </div>
                        </header>
                    </div>
                    <div className="col">
                        <div className="row row-cols-2 row-cols-md-5">
                            {firstFiveMovies?.map((movie) => (
                                <div key={movie.id} className="col mb-5 mb-xl-0">
                                    <div className="product">
                                        <div className="product-image mb-2">
                                            <a href="../single-movies/single-movies-v2.html" className="d-inline-block position-relative stretched-link">
                                                <img className="img-fluid" src={`https://image.tmdb.org/t/p/original/${movie.posterPath}`} alt="Image Description" />
                                            </a>
                                        </div>
                                        <div className="product-meta font-size-12 mb-1">
                                            <span><a href="../single-movies/single-movies-v2.html" className="h-g-primary">2020</a></span>
                                            <span><a href="../single-movies/single-movies-v2.html" className="h-g-primary">Action</a></span>
                                            <span><a href="../single-movies/single-movies-v2.html" className="h-g-primary">Comedy</a></span>
                                            <span><a href="../single-movies/single-movies-v2.html" className="h-g-primary">Mystery</a></span>
                                        </div>
                                        <div className="product-title font-weight-bold font-size-1"><a href="../single-movies/single-movies-v2.html">{movie.title}</a></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="row row-cols-md-5 row-cols-xl">
                    {nextSixMovies?.map((movie, index) => (
                        <div key={movie.id} className="col-6 col-xl mb-5 mb-xl-0">
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
                <CollapsePopularSection movies={remainingMovies } />
            </div>
        </section>
    );
}

export default MostPopularSection;