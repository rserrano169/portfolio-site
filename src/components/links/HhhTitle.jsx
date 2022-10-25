import React, { Component } from 'react';

import LinkText from './Text.jsx';

class HhhTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      href: 'https://hungryhungryhippolyta.com/',
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