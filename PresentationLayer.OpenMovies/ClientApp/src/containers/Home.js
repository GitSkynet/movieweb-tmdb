import React, { Component } from 'react';
import HeroHome from '../components/sections/HeroHome';
import MultiSectionHome from '../components/sections/MultiSectionHome';
import MostPopularSection from '../components/sections/MostPopularSection';
import DiscoverSection from '../components/sections/DiscoverSection';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
        <main id="content">
            <HeroHome/>
            <MostPopularSection />
            <DiscoverSection/>
            {/*<MultiSectionHome />*/}
        </main>
    );
  }
}
