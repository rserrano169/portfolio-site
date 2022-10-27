import React, { Component } from 'react';

import Culture from './Culture.jsx';

import usma from '../../assets/img/West_Point_collage.jpg';

class Usma extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alt: 'West Point collage',
      url: usma,
    };
  }

  render() {
    return (
      <Culture
        alt={this.state.alt}
        url={this.state.url}
      />
    );
  }
}

export default Usma;