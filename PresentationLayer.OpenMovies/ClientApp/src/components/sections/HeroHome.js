import React, { useState } from 'react';

function HeroHome(args) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    return (
        <div className="home-slider position-relative mb-7">
            <div className="row no-gutters">
                <div className="col-lg-4">
                    <div className="slider-movie bg-img-hero d-flex flex-column justify-content-end overflow-hidden h-700rem mb-5 mb-lg-0" style={{ backgroundImage: "url('https://html.madrasthemes.com/vodi-html/assets/img/422x700/img1.jpg')" }}>
                        <div className="slider-movie__hover d-flex flex-column z-index-2 px-4 pb-6 pb-lg-4 transition-1">
                            <div className="mx-1">
                                <div className="slider-movie__hover-watch-now d-flex justify-content-center d-xl-none mb-7">
                                    <a href="../single-movies/single-movies-v4.html">
                                        <div className="watch-now-btn d-inline-block rounded-circle py-5 px-5 mb-2 pb-1 mx-1" style={{ background: 'linear-gradient(30deg, #2a4999 0 %, #2c9cd4 100 %)' }}>
                                            <div className="d-flex justify-content-center ml-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" link="http://www.w3.org/1999/xlink" width="49px" height="54px">
                                                    <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M2.000,51.000 C-0.150,46.056 0.424,8.178 2.000,5.000 C3.282,2.414 5.732,0.351 9.000,1.000 C19.348,3.054 45.393,19.419 48.000,25.000 C49.019,27.182 48.794,28.758 48.000,31.000 C46.967,33.919 13.512,54.257 9.000,54.000 C6.740,53.873 3.005,53.311 2.000,51.000 Z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="text-white font-size-24">Watch Now</div>
                                    </a>
                                </div>
                                <a href="../single-movies/single-movies-v4.html">
                                    <h6 className="display-9 text-white mb-2 d-block">Project Cars 3</h6>
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
                                        <p className="text-white font-size-17">Lightning McQueen sets out to prove to a new generation of racers that he’s still the best race car in the world.</p>
                                    </div>
                                </div>
                                <div className="movie__actions d-xl-none">
                                    <div className="pb-1 mr-xl-3">
                                        <a href="../single-movies/single-movies-v4.html" className="btn px-5 btn-primary py-3 w-100 btn-sm mb-3" tabindex="0">WATCH NOW</a>
                                    </div>
                                    <div>
                                        <a href="../single-movies/single-movies-v4.html" className="btn px-5 btn-outline-light py-3 w-100 btn-sm" tabindex="0">+ PLAYLIST</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*numero 2*/}
                <div className="col-lg-4">
                    <div className="slider-movie bg-img-hero d-flex flex-column justify-content-end overflow-hidden h-700rem mb-5 mb-lg-0" style={{ backgroundImage: "url('https://html.madrasthemes.com/vodi-html/assets/img/422x700/img2.jpg')" }}>
                        <div className="slider-movie__hover d-flex flex-column z-index-2 px-4 pb-6 pb-lg-4 transition-1">
                            <div className="mx-1">
                                <div className="slider-movie__hover-watch-now d-flex justify-content-center d-xl-none mb-7">
                                    <a href="../single-movies/single-movies-v4.html">
                                        <div className="watch-now-btn d-inline-block rounded-circle py-5 px-5 mb-2 pb-1 mx-1" style={{ background: 'linear-gradient(30deg, #2a4999 0 %, #2c9cd4 100 %)' }}>
                                            <div className="d-flex justify-content-center ml-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" link="http://www.w3.org/1999/xlink" width="49px" height="54px">
                                                    <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M2.000,51.000 C-0.150,46.056 0.424,8.178 2.000,5.000 C3.282,2.414 5.732,0.351 9.000,1.000 C19.348,3.054 45.393,19.419 48.000,25.000 C49.019,27.182 48.794,28.758 48.000,31.000 C46.967,33.919 13.512,54.257 9.000,54.000 C6.740,53.873 3.005,53.311 2.000,51.000 Z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="text-white font-size-24">Watch Now</div>
                                    </a>
                                </div>
                                <a href="../single-movies/single-movies-v4.html">
                                    <h6 className="display-9 text-white mb-2 d-block">Project Cars 3</h6>
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
                                        <p className="text-white font-size-17">Lightning McQueen sets out to prove to a new generation of racers that he’s still the best race car in the world.</p>
                                    </div>
                                </div>
                                <div className="movie__actions d-xl-none">
                                    <div className="pb-1 mr-xl-3">
                                        <a href="../single-movies/single-movies-v4.html" className="btn px-5 btn-primary py-3 w-100 btn-sm mb-3" tabindex="0">WATCH NOW</a>
                                    </div>
                                    <div>
                                        <a href="../single-movies/single-movies-v4.html" className="btn px-5 btn-outline-light py-3 w-100 btn-sm" tabindex="0">+ PLAYLIST</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*numero 3*/}
                <div className="col-lg-4">
                    <div className="slider-movie bg-img-hero d-flex flex-column justify-content-end overflow-hidden h-700rem mb-5 mb-lg-0" style={{ backgroundImage: "url('https://html.madrasthemes.com/vodi-html/assets/img/422x700/img3.jpg')" }}>
                        <div className="slider-movie__hover d-flex flex-column z-index-2 px-4 pb-6 pb-lg-4 transition-1">
                            <div className="mx-1">
                                <div className="slider-movie__hover-watch-now d-flex justify-content-center d-xl-none mb-7">
                                    <a href="../single-movies/single-movies-v4.html">
                                        <div className="watch-now-btn d-inline-block rounded-circle py-5 px-5 mb-2 pb-1 mx-1" style={{ background: 'linear-gradient(30deg, #2a4999 0 %, #2c9cd4 100 %)' }}>
                                            <div className="d-flex justify-content-center ml-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" link="http://www.w3.org/1999/xlink" width="49px" height="54px">
                                                    <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M2.000,51.000 C-0.150,46.056 0.424,8.178 2.000,5.000 C3.282,2.414 5.732,0.351 9.000,1.000 C19.348,3.054 45.393,19.419 48.000,25.000 C49.019,27.182 48.794,28.758 48.000,31.000 C46.967,33.919 13.512,54.257 9.000,54.000 C6.740,53.873 3.005,53.311 2.000,51.000 Z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="text-white font-size-24">Watch Now</div>
                                    </a>
                                </div>
                                <a href="../single-movies/single-movies-v4.html">
                                    <h6 className="display-9 text-white mb-2 d-block">Project Cars 3</h6>
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
                                        <p className="text-white font-size-17">Lightning McQueen sets out to prove to a new generation of racers that he’s still the best race car in the world.</p>
                                    </div>
                                </div>
                                <div className="movie__actions d-xl-none">
                                    <div className="pb-1 mr-xl-3">
                                        <a href="../single-movies/single-movies-v4.html" className="btn px-5 btn-primary py-3 w-100 btn-sm mb-3" tabindex="0">WATCH NOW</a>
                                    </div>
                                    <div>
                                        <a href="../single-movies/single-movies-v4.html" className="btn px-5 btn-outline-light py-3 w-100 btn-sm" tabindex="0">+ PLAYLIST</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroHome;