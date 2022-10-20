import React, {Component} from "react";
import _ from "lodash";

class Icon extends Component {
  constructor(props) {
    super(props);
    this.state = _.merge({
      style: {
        container: {
          textAlign: 'center',
        },
        img: {
          borderRadius: '50%',
          width: 200,
        },
      },
    }, this.props);
  }

  render() {
    let img = <img
      alt={this.state.alt}
      src={this.state.url}
      style={this.state.style.img}
    />;

    if (this.state.href) {
      img = <a
        href={this.state.href}
        target="_blank"
      >
        <img
          alt={this.state.alt}
          src={this.state.url}
          style={this.state.style.img}
        />
      </a>
    }

    return (
      <div style={this.state.style.container}>
        {img}
      </div>
    );
  }
}

export default Icon;