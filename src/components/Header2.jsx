import React, {Component} from "react";

import Header from "./Header.jsx";

class Header2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        fontSize: 24,
        paddingTop: 15,
      },
      text: this.props.text,
    };
  }

  render() {
    return (
      <Header
        style={this.state.style}
        text={this.state.text}
      />
    );
  }
}

export default Header2;