import React, { Component } from 'react';

import Icon from "./Icon.jsx";

class Icon1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alt: this.props.alt,
      href: this.props.href,
      style: {
        container: {
          paddingTop: 40,
        },
        img: {
          borderRadius: 0,
          height: 120,
          width: 'auto',
        },
      },
      url: this.props.url,
    }
  }

  render() {
    return(
      <Icon
        alt={this.state.alt}
        href={this.state.href}
        style={this.state.style}
        url={this.state.url}
      />
    );
  }
}

export default Icon1;