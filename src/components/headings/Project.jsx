import React, { Component } from 'react';
import styled from 'styled-components';

const StyledH3 = styled.h3`
  font-size: 24px;
  margin: auto;
  padding-top: 15px;
  text-align: center;
  width: 50%;
`;

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      children: this.props.children,
    };
  }

  render() {
    return <StyledH3>{this.state.children}</StyledH3>;
  }
}

export default Project;