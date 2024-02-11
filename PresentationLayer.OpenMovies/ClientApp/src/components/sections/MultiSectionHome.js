import React, { useState, useEffect } from 'react';
import TabsDiscover from '../rehusable/TabsDiscover';
import service from '../../api/service';

function MultiSectionHome() {
    const [inTheatersData, setInTheatersData] = useState({
        upcoming: [],
        topRated: [],
        popular: [],
        mostRecent: []
    });
    const [newArrivalsData, setNewArrivalsData] = useState({
        upcoming: [],
        topRated: [],
        popular: [],
        mostRecent: []
    });

    // Loader for data
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const inTheaters = await service.GetInTheatersData(15);
            setInTheatersData(inTheaters);

            const newArrivals = await service.GetInTheatersData(15);
            setNewArrivalsData(newArrivals);

            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="home-section section-movies-carousel-aside-header has-section-header">
            <div className="">
                <ul className="nav nav-tabs">
                    <li class="nav-item"><a class="nav-link active" href="#">Comedy</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Drama</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Musical</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Romance</a></li>
                </ul>
                <div className="section-movies-carousel-aside-header__inner">
                    <div className="">
                        {!loading && (
                            <TabsDiscover items={[
                                { id: 1, name: "upcoming", movies: inTheatersData.upcoming },
                                { id: 2, name: "top rated", movies: inTheatersData.topRated },
                                { id: 3, name: "popular", movies: inTheatersData.popular },
                                { id: 4, name: "most recent", movies: inTheatersData.mostRecent }
                            ]} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MultiSectionHome;