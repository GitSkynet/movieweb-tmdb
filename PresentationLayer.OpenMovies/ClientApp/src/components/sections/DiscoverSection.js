import React, { useState, useEffect } from 'react';
import TabsDiscover from '../rehusable/TabsDiscover';
import service from '../../api/service';


function DiscoverSection(args) {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState();

    const fetchData = async () => {
        try {
            const movies = await service.GetDiscoverSectionData(8);
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
        <section className="space-bottom-lg-0">
            <div className="bg-img-hero" style={{ backgroundImage: "url('https://html.madrasthemes.com/vodi-html/assets/img/1920x700/img1.jpg')" }}>
                <div className="container px-md-6">
                    <div className="space-2">
                        <div className="pt-5 mt-1 mb-8">
                            <h6 className="font-size-16 font-weight-normal opacity-6 text-lh-md pl-1 mb-3">Featured</h6>
                            <h5 className="display-10">Discover ’18</h5>
                            <h4 className="font-size-22 font-weight-light pl-1 max-w-330">New Movies that are already playing in theaters and watch them online now.</h4>
                        </div>
                        {!loading && (
                            <TabsDiscover items={[
                                { id: 1, name: "accion", niceName:"Acción", movies: movies.accion },
                                { id: 2, name: "aventura", niceName: "Aventura", movies: movies.aventura },
                                { id: 3, name: "cienciaFiccion", niceName: "Ciencia ficción", movies: movies.cienciaFiccion },
                                { id: 4, name: "terror", niceName: "Terror", movies: movies.terror }
                            ]}/>
                        )}
                    </div>
                </div>
            </div> 
        </section>
    );
}

export default DiscoverSection;