import React, {Component} from "react";

import Header from "./Header.jsx";

class Header1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      href: this.props.href,
      style: {
        div: {
          fontSize: 30,
          paddingTop: 70,
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

export default Header1;