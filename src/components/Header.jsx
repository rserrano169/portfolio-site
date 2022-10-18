import React, {Component} from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        fontSize: 45,
        padding: 20,
        textAlign: 'center',
      },
    };
  }

  render() {
    return (
      <header style={this.state.style}>Raul Serrano</header>
    );
  }
}

export default Header;