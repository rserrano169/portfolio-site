import React, { Component } from 'react';

import LinkText from './Text.jsx';

class Email extends Component {
  constructor(props) {
    super(props);

    this.state = {
      href: 'mailto: rserrano169@gmail.com',
      text: 'rserrano169@gmail.com',
    };
  }

  render() {
    return <LinkText
      href={this.state.href}
      text={this.state.text}
    />;
  }
}

export default Email;