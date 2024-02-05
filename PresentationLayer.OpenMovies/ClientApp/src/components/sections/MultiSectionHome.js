import React, { useState, useEffect } from 'react';
import TabsComponent from '../rehusable/TabsComponent';
import service from '../../api/service';

function MultiSectionHome() {
    const [movies, setMovies] = useState([]);

    const items = [
        { id: 1, name: "#POPULAR", movies: []},
        { id: 2, name: "#MOSTRECENT", movies: [] },
        { id: 3, name: "#TOPRATED", movies: [] },
        { id: 4, name: "#COMINGSOON", movies: [] },
    ];

    const fetchData = async () => {
        const mostPopular = await service.GetMostPopular();
        items[0].movies = mostPopular;

        const mostRecent = await service.GetMostRecent();
        items[1].movies = mostRecent;

        const topRated = await service.GetTopRated();
        items[2].movies = topRated;

        const comingSoon = await service.GetComingSoon();
        items[3].movies = comingSoon;

    };

    useEffect(() => {
        fetchData();
        console.log("data fetched", items)
    }, []);


    return (
        <div className="movie-items full-width">
            <div className="row">
                <div className="col-md-12">
                    <div className="title-hd">
                        <h2>in theaters</h2>
                        <a href="#" className="viewall">View all <i className="ion-ios-arrow-right"></i></a>
                    </div>
                    <div className="tabs">
                        <TabsComponent items={items} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MultiSectionHome;