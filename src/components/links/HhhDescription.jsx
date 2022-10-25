import React, { Component } from 'react';

import LinkText from './Text.jsx';

class HhhDescription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      href: 'https://hungryhungryhippolyta.com/',
      text: 'The first browser game I ever made',
    };
  }

  render() {
    return <LinkText
      href={this.state.href}
      text={this.state.text}
    />;
  }
}

export default HhhDescription;