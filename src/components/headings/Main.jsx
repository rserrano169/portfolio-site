import React, { Component } from 'react';
import styled from 'styled-components';

const $h1 = styled.h1`
  font-size: 45px;
  margin: auto;
  text-align: center;
  width: 50%;
`;

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      children: this.props.children,
    };
  }

  render() {
    return (
      <$h1>{this.state.children}</$h1>
    );
  }
}

export default Main;