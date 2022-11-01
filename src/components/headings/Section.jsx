import React, {Component} from 'react';
import styled from 'styled-components';

const StyledH2 = styled.h2`
  font-size: 30px;
  margin: auto;
  padding-top: 70px;
  text-align: center;
  width: 50%;

  @media (max-width: 768px) {
    font-size: 26px;
    width: 100%;
  }

  @media (max-width: 375px) {
    font-size: 20px;
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
    return <StyledH2>{this.state.children}</StyledH2>;
  }
}

export default Section;