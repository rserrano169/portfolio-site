import React, { Component } from 'react';

import ImgProject from './Project.jsx';

import CONSTS from '../../js/const';
import hippolyta from '../../assets/img/hippolyta_hippo.png';

class Hippolyta extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alt: 'Hippolyta Logo',
      href: CONSTS.url.hippolyta,
      url: hippolyta,
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

export default Hippolyta;