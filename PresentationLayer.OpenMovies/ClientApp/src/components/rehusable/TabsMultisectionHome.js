import React, { useState } from 'react';
import {
    TabContent, TabPane, Nav, NavItem, NavLink, Row, Col
} from 'reactstrap';
import SliderMultiSection from './MovieSliderMultiSection';

const TabsMultiSectionHome = ({ items, data, title, title2 }) => {
    const [activeTab, setActiveTab] = useState('1');
    console.log("data: ", data);
    console.log("title: ", title);
    console.log("title2: ", title2);
    const toggle = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    const navItems = items.map((item) => (
        <NavItem key={item.id}>
            <NavLink className={`${activeTab === `${item.id}` ? 'active' : ''}`}
                onClick={() => { toggle(`${item.id}`); }}>
                {item.name}
            </NavLink>
        </NavItem>
    ));

    const tabPanes = items.map((item) => (
        <TabPane key={item.id} tabId={`${item.id}`} role="tabpanel" className={`fade ${activeTab === `${item.id}` ? 'show' : ''}`}>
            <div className="row mx-n2">
                <SliderMultiSection movies={item.movies} />
            </div>
        </TabPane>
    ));

    return (
        <>
            <header className="home-section__flex-header">
                <ul className="nav nav-tab">
                    {navItems}
                </ul>
            </header>
            <div className="row">
                <header className="home-section__header section-movies-carousel-aside-header__header">
                    <h2 className="home-section__title">{title}<br /> {title2}</h2>
                    <div className="home-section__action">
                        <a href="#" className="home-section__action-link">View all</a>
                    </div>
                </header>
                <div className="col-lg-8">
                    <div className="section-movies-carousel__carousel">
                        <div className="movies-carousel__inner">
                            <div className="masvideos masvideos-movies">
                                <TabContent activeTab={activeTab}>
                                    {tabPanes}
                                </TabContent>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TabsMultiSectionHome;