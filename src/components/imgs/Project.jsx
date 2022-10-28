import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  padding-top: 40px;
  text-align: center;
`;
const StyledImg = styled.img`
  border-radius: 0;
  height: 120px;
  width: auto;
`;

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alt: this.props.alt,
      href: this.props.href,
      target: '_blank',
      url: this.props.url,
    }
  }

  render() {
    return(
      <StyledDiv>
        <a
          href={this.state.href}
          target={this.state.target}
        >
          <StyledImg
            alt={this.state.alt}
            src={this.state.url}
          />
        </a>
      </StyledDiv>
    );
  }
}

export default Project;