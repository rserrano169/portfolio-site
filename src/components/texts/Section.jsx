import React, {Component} from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
  font-size: 22px;
  margin: auto;
  padding: ${(props) => props.isHobby ? 50 : 30}px 10px 0 10px; 
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
      isHobby: this.props.isHobby,
    };
  }

  render() {
    return <StyledP isHobby={this.state.isHobby}>{this.state.children}</StyledP>;
  }
}

export { StyledP };
export default Section;