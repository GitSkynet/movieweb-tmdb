import React, { Component } from 'react';
import HeroHome from '../components/sections/HeroHome';
import HotMoviesSection from '../components/sections/HotMoviesSection';
import MostPopularSection from '../components/sections/MostPopularSection';
import DiscoverSection from '../components/sections/DiscoverSection';
import MultiSectionHome from '../components/sections/MultiSectionHome';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
        <main id="content">
            <HeroHome/>
            <MostPopularSection />
            <DiscoverSection/>
            <HotMoviesSection />
            <MultiSectionHome />
        </main>
    );
  }
}
