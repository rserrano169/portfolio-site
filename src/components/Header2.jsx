import React, {Component} from "react";

import Header from "./Header.jsx";

class Header2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      href: this.props.href,
      style: {
        div: {
          fontSize: 24,
          paddingTop: 15,
        },
      },
      text: this.props.text,
    };
  }

  render() {
    return (
      <Header
        href={this.state.href}
        style={this.state.style}
        text={this.state.text}
      />
    );
  }
}

export default Header2;