import React, { Component } from 'react';
import styled from 'styled-components';

const $div = styled.div`
  padding-top: 15px;
  text-align: center;
`;
const $img = styled.img`
  width: 50%;
`;

class Culture extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alt: this.props.alt,
      url: this.props.url,
    };
  }

  render() {
    return (
      <$div>
        <$img
          alt={this.state.alt}
          src={this.state.url}
        />
      </$div>
    );
  }
}

export default Culture;