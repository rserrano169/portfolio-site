import React, { Component } from 'react';

import LinkText from './Text.jsx';

import CONSTS from '../../js/const';

class HhhTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      href: CONSTS.url.hhh,
      text: 'Hungry Hungry Hippolyta',
    };
  }

  render() {
    return <LinkText
      href={this.state.href}
      text={this.state.text}
    />;
  }
}

export default HhhTitle;