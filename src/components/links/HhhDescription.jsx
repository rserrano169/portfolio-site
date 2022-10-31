import React, {Component} from 'react';

import LinkText from './Text.jsx';

import CONSTS from '../../js/const';

class HhhDescription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      href: CONSTS.url.hhh,
      text: 'The first browser game I ever made',
    };
  }

  render() {
    return(
      <LinkText
        href={this.state.href}
        text={this.state.text}
      />
    );
  }
}

export default HhhDescription;