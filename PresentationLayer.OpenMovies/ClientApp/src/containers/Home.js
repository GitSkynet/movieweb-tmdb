import React, { Component } from 'react';
import HeroHome from '../components/sections/HeroHome';
import MultiSectionHome from '../components/sections/MultiSectionHome';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
        <>
        <div className="slider sliderv2">
            <div className="container">
                <div className="row">
                    <HeroHome />
                </div>
            </div>
        </div>
        <MultiSectionHome />
        </>
    );
  }
}
