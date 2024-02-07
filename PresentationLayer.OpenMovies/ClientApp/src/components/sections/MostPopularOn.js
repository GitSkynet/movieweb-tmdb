import React, { useState, useEffect } from 'react';
import service from '../../api/service';
import MovieSlider from '../rehusable/MovieSlider';

function MostPopularOn() {
    const [selectedGenre, setSelectedGenre] = useState("aventura");
    const [loading, setLoading] = useState(true);
    const [countMovies, setCountMovies] = useState(true);
    const [moviesData, setMoviesData] = useState({
        accion: [],
        aventura: [],
        cienciaFiccion: [],
        terror: []
    });


    const fetchData = async () => {
        try {
            const getNumMovies = await service.GetNumOfMovies();
            const popularMoviesData = await service.GetMostPopularOnData(15, 16);

            setMoviesData(popularMoviesData);
            setCountMovies(getNumMovies);
            setLoading(false); 
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleGenreChange = (e) => {
        setSelectedGenre(e.target.value);
    };

    useEffect(() => {
        fetchData();
    }, []);

    console.log("STATE MOVIES (moviesData):", moviesData);

    return (
        <div className="slider movie-items" style={{ marginTop: "0px" }}>
            <div className="container">
                <div className="row">
                    <div className="social-link">
                        <div className="topbar-filter" style={{ width: "100%" }}>
                            <p className="pad-change">Found <span>{countMovies} movies</span> in total</p>
                            <label>Sort by:</label>
                            <select onChange={handleGenreChange} value={selectedGenre}>
                                {Object.keys(moviesData).map(genre => (
                                    <option key={genre} value={genre}>{genre}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    {selectedGenre && (
                        <MovieSlider movies={moviesData[selectedGenre]} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default MostPopularOn;