import React, { Component } from 'react';

import ImgProject from './Project.jsx';

import hhh from '../../assets/img/hippolyta-mouth-open-left.png';

class Hhh extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alt: 'Hungry Hungry Hippolyta',
      href: 'https://hungryhungryhippolyta.com/',
      url: hhh,
    };
  }

  render() {
    return (
      <ImgProject
        alt={this.state.alt}
        href={this.state.href}
        url={this.state.url}
      />
    );
  }
}

export default Hhh;