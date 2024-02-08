import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <>
        <NavMenu />
            {this.props.children}

            <a class="js-go-to go-to position-fixed animated hs-go-to-prevent-event fadeInUp" href="#content" style={{ right: "15px", bottom: "15px"}}>
                <i class="fas fa-angle-up"></i>
            </a>
      </>
    );
  }
}
