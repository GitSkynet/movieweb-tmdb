import React, { useState } from 'react';
import classnames from 'classnames';
import {
    TabContent, TabPane, Nav, NavItem, NavLink, Row, Col
} from 'reactstrap';
import MovieSlider from './MovieSlider';

const TabsHotSection = ({ items }) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    const navItems = items.map((item) => (
        <NavItem key={item.id} className={`nav-item flex-shrink-0 flex-shrink-md-0`}>
            <NavLink
                className={`nav-link ${activeTab === `${item.id}` ? 'active pl-2' : ''}`}
                onClick={() => { toggle(`${item.id}`); }}
            >
                {item.name}
            </NavLink>
        </NavItem>
    ));

    const tabPanes = items.map((item) => (
        <TabPane key={item.id} tabId={`${item.id}`} role="tabpanel" className={`masvideos masvideos-movies`}>
            <div className="movies columns-4">
                <div className="movies__inner">
                    {item.movies.map((movie) => (
                        <div className="movie">
                            <div className="movie__poster">
                                <a href="#" className="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                                    <img loading="lazy" decoding="async" width="600" height="900" src={`https://image.tmdb.org/t/p/original/${movie.posterPath}`} className="movie__poster--image" alt=""/>
                                </a>
                            </div>
                            <div className="movie__body">
                                <div className="movie__info">
                                    <div className="movie__info--head">
                                        <div className="movie__meta">
                                            <span className="movie__meta--release-year">2018</span>
                                            <span className="movie__meta--genre">
                                                <a href="https://vodi.madrasthemes.com/main/movie-genre/action/" rel="tag">Action</a>,
                                                <a href="https://vodi.madrasthemes.com/main/movie-genre/animation/" rel="tag">Animation</a>
                                            </span>
                                        </div>
                                        <a href="#" className="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                                            <h3 className="masvideos-loop-movie__title movie__title" style={{fontSize: "18px"}}>{movie.title}</h3>
                                        </a>
                                    </div>
                                    <div className="movie__short-description">
                                        <div><p>{movie.overview}</p></div>
                                    </div>
                                    <div className="movie__actions">
                                        <a className="movie-actions--link_watch" href="#" rel="tag">View more</a>
                                    </div>
                                </div>
                            </div>
                        </div>  
                ))}
                </div>
            </div>
        </TabPane>
    ));

    return (
        <>
            <header className="home-section__flex-header">
                <h2 className="section-title">Hot Premieres</h2>
                <ul className="nav nav-tab">
                    {navItems}
                </ul>
            </header>
            <TabContent className="hot-premier-show" activeTab={activeTab}>
                {tabPanes}
            </TabContent>
        </>
    );
};

export default TabsHotSection;