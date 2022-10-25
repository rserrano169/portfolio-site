import React, { Component } from 'react';
import styled from 'styled-components';

const $h2 = styled.h2`
  font-size: 30px;
  margin: auto;
  padding-top: 70px;
  text-align: center;
  width: 50%;
`;

class Section extends Component {
  constructor(props) {
    super(props);

    this.state = {
      children: this.props.children,
    };
  }

  render() {
    return <$h2>{this.state.children}</$h2>;
  }
}

export default Section;