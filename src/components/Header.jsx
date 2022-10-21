import React, {Component} from "react";
import _ from 'lodash';

const linkUnderlineColor = 'rgba(87,67,96,0.5)';

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
          borderBottomColor: linkUnderlineColor,
          borderBottomWidth: 1,
          borderBottomStyle: 'solid',
          cursor: 'pointer',
        },
      },
    }, this.props);
  }

  handlePointerDown = () => {
    window.open(this.state.href, '_blank');
  }

  handlePointerEnter = () => {
    this.setState((state) => {
      return {...state,
        style: {...state.style,
          span: {...state.style.span,
            borderBottomColor: '#B9983E',
          },
        },
      };
    });
  }

  handlePointerLeave = () => {
    this.setState((state) => {
      return {...state,
        style: {...state.style,
          span: {...state.style.span,
            borderBottomColor: linkUnderlineColor,
          },
        },
      };
    });
  }

  render() {
    const innerHtml = this.state.href
      ? <span
          onPointerDown={this.handlePointerDown}
          onPointerEnter={this.handlePointerEnter}
          onPointerLeave={this.handlePointerLeave}
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