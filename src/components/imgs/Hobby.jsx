import React, { Component } from 'react';

import Culture from './Culture.jsx';

import hobby from '../../assets/img/hobby_collage.jpg';

class Hobby extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alt: 'hobby collage',
      url: hobby,
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

export default Hobby;