import React, {Component} from "react";

class Icon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alt: this.props.alt,
      url: this.props.url,
      style: {
        container: {
          textAlign: 'center',
        },
        img: {
          borderRadius: '50%',
          width: 200,
        },
      },
    };
  }

  render() {
    return (
      <div style={this.state.style.container}>
        <img
          alt={this.state.alt}
          src={this.state.url}
          style={this.state.style.img}
        />
      </div>
    );
  }
}

export default Icon;