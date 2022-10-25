import React, { Component } from 'react';
import styled from 'styled-components';

const $p = styled.p`
  font-size: 22px;
  margin: auto;
  padding: 30px 10px 0 10px;
  width: 50%;
  
  @media (max-width: 768px) {
    width: 100%;
    font-size: 20px;
  }
  
  @media (max-width: 375px) {
    font-size: 15px;
  }
`;

class Section extends Component {
  constructor(props) {
    super(props);

    this.state = {
      children: this.props.children,
    };
  }

  render() {
    return <$p>{this.state.children}</$p>;
  }
}

export default Section;