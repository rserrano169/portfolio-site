import React, { Component } from 'react';

import LinkText from './Text.jsx';

class LinkedIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      href: 'https://www.linkedin.com/in/raul-serrano-3814b17b/',
      text: 'LinkedIn',
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

export default LinkedIn;