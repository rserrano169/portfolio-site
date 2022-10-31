import React, {Component} from 'react';

import LinkText from './Text.jsx';

import CONSTS from '../../js/const';

class HippolytaDescription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      href: CONSTS.url.hippolyta,
      text: 'A graduation project I made while I was attending App Academy',
    };
  }

  render() {
    return (
      <LinkText
        href={this.state.href}
        text={this.state.text}
      />
    );
  }
}

export default HippolytaDescription;