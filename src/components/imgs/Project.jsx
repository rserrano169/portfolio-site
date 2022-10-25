import React, { Component } from 'react';
import styled from 'styled-components';

const $div = styled.div`
  padding-top: 40px;
  text-align: center;
`;
const $img = styled.img`
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
      <$div>
        <a
          href={this.state.href}
          target={this.state.target}
        >
          <$img
            alt={this.state.alt}
            src={this.state.url}
          />
        </a>
      </$div>
    );
  }
}

export default Project;