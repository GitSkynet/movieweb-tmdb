import React, { useState } from 'react';
import classnames from 'classnames';
import {
    TabContent, TabPane, Nav, NavItem, NavLink, Row, Col
} from 'reactstrap';
import MovieSlider from './MovieSlider';

const TabsComponent = ({ items }) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    const navItems = items.map((item) => (
        <NavItem key={item.id} className={`nav-item flex-shrink-0 flex-shrink-md-1`}>
            <NavLink
                className={`nav-link ${activeTab === `${item.id}` ? 'active pl-2' : ''}`}
                onClick={() => { toggle(`${item.id}`); }}
            >
            {item.name}
            </NavLink>
        </NavItem>
    ));

    const tabPanes = items.map((item) => (
        <TabPane key={item.id} tabId={`${item.id}`} role="tabpanel" className={`fade ${activeTab === `${item.id}` ? 'show' : ''}`}>
            <div className="row mx-n2">
                <MovieSlider movies={item.movies} />
            </div>
        </TabPane>
    ));

    return (
        <>
            <div className="tab-nav__v3 mb-3">
                <ul className="nav flex-nowrap flex-lg-wrap justify-content-start overflow-auto align-items-center" role="tablist">
                    {navItems}
                </ul>
            </div>
            <div className="tab-content u-slick__tab">
                <TabContent activeTab={activeTab}>
                    {tabPanes}
                </TabContent>
            </div>
        </>
    );
};

export default TabsComponent;