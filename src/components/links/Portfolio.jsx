import React, { Component } from 'react';

import LinkText from './Text.jsx';

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      href: 'https://github.com/rserrano169',
      text: 'Raul Serrano',
    };
  }

  render() {
    return <LinkText
      href={this.state.href}
      text={this.state.text}
    />;
  }
}

export default Portfolio;