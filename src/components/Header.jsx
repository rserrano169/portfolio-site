import React, {Component} from "react";
import _ from 'lodash';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = _.merge({
      style: {
        fontSize: 45,
        margin: 'auto',
        textAlign: 'center',
        width: '50%',
      },
    }, this.props);
  }

  render() {
    return (
      <header style={this.state.style}>{this.state.text}</header>
    );
  }
}

export default Header;