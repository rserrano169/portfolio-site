import React, { Component } from 'react';

class Img extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alt: this.props.alt,
      style: {
        div: {
          paddingTop: 15,
          textAlign: 'center',
        },
        img: {
          width: '50%',
        },
      },
      url: this.props.url,
    };
  }

  render() {
    return(
      <div style={this.state.style.div}>
        <img
          alt={this.state.alt}
          src={this.state.url}
          style={this.state.style.img}
        />
      </div>
    );
  }
}

export default Img;