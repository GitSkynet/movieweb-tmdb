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
        <NavItem key={item.id} className={classnames({ active: activeTab === `${item.id}` })}>
            <NavLink
                className={classnames({ active: activeTab === `${item.id}` })}
                onClick={() => { toggle(`${item.id}`); }}
            >
                {item.name}
            </NavLink>
        </NavItem>
    ));

    const tabPanes = items.map((item) => (
        <TabPane key={item.id} tabId={`${item.id}`}>
            <Row>
                <Col sm="12">
                    <MovieSlider movies={item.movies} />
                </Col>
            </Row>
        </TabPane>
    ));

    return (
        <>
            <ul className="tab-links">
                {navItems}
            </ul>
            <TabContent activeTab={activeTab}>
                {tabPanes}
            </TabContent>
        </>
    );
};

export default TabsComponent;