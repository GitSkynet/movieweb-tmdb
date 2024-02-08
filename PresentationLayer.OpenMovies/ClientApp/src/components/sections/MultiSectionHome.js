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
        <div className="">
            <div className="">
                <div className="">
                    <div className="">
                        <h2>in theaters</h2>
                        <a href="#" className="">View all <i className=""></i></a>
                    </div>
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
            <div className="">
                <div className="">
                    <div className="">
                        <h2>New arrivals</h2>
                        <a href="#" className="">View all <i className="ion-ios-arrow-right"></i></a>
                    </div>
                    <div className="">
                        {!loading && (
                            <TabsDiscover items={[
                                { id: 1, name: "upcoming", movies: newArrivalsData.upcoming },
                                { id: 2, name: "top rated", movies: newArrivalsData.topRated },
                                { id: 3, name: "popular", movies: newArrivalsData.popular },
                                { id: 4, name: "most recent", movies: newArrivalsData.mostRecent }
                            ]} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MultiSectionHome;