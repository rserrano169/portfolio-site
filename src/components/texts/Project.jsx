import React, {Component} from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
  font-size: 16px;
  margin: auto;
  padding-top: 2px;
  text-align: center;
  width: 50%;
  
  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
  }
  
  @media (max-width: 375px) {
    font-size: 10px;
  }
`;

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      children: this.props.children,
    };
  }

  render() {
    return <StyledP>{this.state.children}</StyledP>;
  }
}

export default Project;