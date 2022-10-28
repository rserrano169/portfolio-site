import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  padding-top: 15px;
  text-align: center;
`;
const StyledImg = styled.img`
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
      <StyledDiv>
        <StyledImg
          alt={this.state.alt}
          src={this.state.url}
        />
      </StyledDiv>
    );
  }
}

export default Culture;