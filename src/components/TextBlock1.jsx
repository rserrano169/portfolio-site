import React, { Component } from 'react';

import TextBlock from "./TextBlock.jsx";

class TextBlock1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      href: this.props.href,
      style: {
        div: {
          fontSize: 16,
          paddingTop: 2,
          textAlign: 'center',
        },
      },
      text: this.props.text,
    };
  }

  render() {
    return(
      <TextBlock
        href={this.state.href}
        style={this.state.style}
        text={this.state.text}
      />
    );
  }
}

export default TextBlock1;