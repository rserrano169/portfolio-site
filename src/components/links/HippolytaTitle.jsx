import React, { Component } from 'react';

import LinkText from './Text.jsx';

import CONSTS from '../../js/const';

class HippolytaTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      href: CONSTS.url.hippolyta,
      text: 'Hippolyta',
    };
  }

  render() {
    return <LinkText
      href={this.state.href}
      text={this.state.text}
    />;
  }
}

export default HippolytaTitle;