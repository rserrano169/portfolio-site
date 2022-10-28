import React, { Component } from 'react';

import LinkText from './Text.jsx';

import resume from '../../assets/pdf/Resume_Raul_Serrano.pdf';

class Resume extends Component {
  constructor(props) {
    super(props);

    this.state = {
      href: resume,
      text: 'Resume',
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

export default Resume;