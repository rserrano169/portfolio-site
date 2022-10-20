import React, {Component} from "react";
import _ from 'lodash';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = _.merge({
      style: {
        div: {
          fontSize: 45,
          margin: 'auto',
          textAlign: 'center',
          width: '50%',
        },
        span: {
          cursor: 'pointer',
        },
      },
    }, this.props);
  }

  handlePointerDown = () => {
    window.open(this.state.href, '_blank');
  }

  render() {
    const innerHtml = this.state.href
      ? <span
          onPointerDown={this.handlePointerDown}
          style={this.state.style.span}
        >
          {this.state.text}
        </span>
      : this.state.text;
    return (
      <header style={this.state.style.div}>{innerHtml}</header>
    );
  }
}

export default Header;