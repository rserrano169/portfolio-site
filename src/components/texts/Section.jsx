import React, {Component} from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
  font-size: 22px;
  margin: auto;
  padding: ${(props) => props.isFirst ? 30 : 50}px 10px 0 10px;
  width: 50%;
  
  @media (max-width: 768px) {
    font-size: 20px;
    padding: ${(props) => props.isFirst ? 15 : 30}px 0 0 0;
    width: 100%;
  }
  
  @media (max-width: 375px) {
    font-size: 15px;
    padding: ${(props) => props.isFirst ? 6 : 20}px 0 0 0;
  }
`;

class Section extends Component {
  constructor(props) {
    super(props);

    this.state = {
      children: this.props.children,
      isFirst: this.props.isFirst,
    };
  }

  render() {
    return <StyledP isFirst={this.state.isFirst}>{this.state.children}</StyledP>;
  }
}

export { StyledP };
export default Section;