import React, { useState, useEffect } from 'react';
import service from '../../api/service';
import TabsHotSection from '../rehusable/TabsHotSection';

function HotMoviesSection() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState();


    const fetchData = async () => {
        try {
            const movies = await service.GetHotSectionData(4);
            console.log("movies:", movies);
            setMovies(movies);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section className="home-section section-hot-premier-show">
            <div className="container px-md-6">
                <div className="home-section__inner">
                    {!loading && (
                        <TabsHotSection items={[
                            { id: 1, name: "Today", movies: movies.today },
                            { id: 2, name: "This week", movies: movies.thisWeek },
                            { id: 3, name: "Last 30 days", movies: movies.last30Days },
                        ]} />
                    )}
                </div>
            </div>
        </section>
    );
}

export default HotMoviesSection;