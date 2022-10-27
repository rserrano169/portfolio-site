import React, { Component } from 'react';
import styled from 'styled-components';

const $p = styled.p`
  font-size: 22px;
  margin: auto;
  ${(props) => {
    let paddingTop = 30;
    
    if (props.type === 'hobby') {
      paddingTop = 50;
    } else if (props.type === 'LinkedIn') {
      paddingTop = 0;
    }
    
    return `padding: ${paddingTop}px 10px 0 10px;` 
  }}
  width: 50%;
  ${props => props.type === 'email' || props.type === 'LinkedIn' ? 'text-align: center;' : ''}
  
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
      type: this.props.type,
    };
  }

  render() {
    return <$p type={this.state.type}>{this.state.children}</$p>;
  }
}

export default Section;