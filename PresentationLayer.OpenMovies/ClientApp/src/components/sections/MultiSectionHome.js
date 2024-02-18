import React, { useState, useEffect } from 'react';
import TabsMultisectionHome from '../rehusable/TabsMultisectionHome';
import service from '../../api/service';

function MultiSectionHome() {
    const [romanticMovies, setRomanticMovies] = useState();
    const [actionMovies, setActionMovies] = useState();

    const fetchData = async () => {
        try {
            const rMovies = await service.GetRomanticMovies(12);
            const aMovies = await service.GetActionMovies(12);
            console.log("Romantic Movies: ", rMovies);
            console.log("Action Movies: ", aMovies);
            setRomanticMovies(rMovies);
            setActionMovies(aMovies);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const [loading, setLoading] = useState(true);
    return (
        <>
            <section className="home-section section-movies-carousel-aside-header has-section-header">
                <div className="container px-sm-10 px-md-7 px-lg-8">
                    {!loading && (
                        <TabsMultisectionHome items={[
                            { id: 1, name: "Comedia", movies: romanticMovies.comedia },
                            { id: 2, name: "Drama", movies: romanticMovies.drama },
                            { id: 3, name: "Musical", movies: romanticMovies.musical },
                            { id: 4, name: "Romance", movies: romanticMovies.romance },
                        ]} data={1} title={"Romantic for"} title2={"Valentines Day"} />
                    )}
                </div>
            </section>
            <section className="home-section section-movies-carousel-aside-header has-section-header">
                <div className="container px-sm-10 px-md-7 px-lg-8">
                    {!loading && (
                        <TabsMultisectionHome items={[
                            { id: 1, name: "Acción", movies: actionMovies.accion },
                            { id: 2, name: "Ciencia Ficción", movies: actionMovies.cienciaFiccion },
                            { id: 3, name: "Aventura", movies: actionMovies.aventura },
                            { id: 4, name: "Suspense", movies: actionMovies.suspense },
                        ]} data={2} title={"Give me"} title2={"action please"} />
                    )}
                </div>
            </section>
        </>
    );
}

export default MultiSectionHome;