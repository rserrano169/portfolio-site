import React, { Component } from 'react';
import styled from 'styled-components';

import CONSTS from '../../js/const';
import headshot from "../../assets/img/headshot.jpg";

const $div = styled.div`
  text-align: center;
`;
const $img = styled.img`
  border-radius: 50%;
  width: 200px;
`;

class Headshot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alt: 'headshot',
      href: CONSTS.url.portfolio,
      target: '_blank',
      url: headshot,
    };
  }

  render() {
    return (
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

export default Headshot;