import React, {Component} from "react";
import styled from 'styled-components';

import resumePdf from "../../assets/pdf/Resume_Raul_Serrano.pdf";
import resumePng from "../../assets/img/Resume_Raul_Serrano.png";

const $div = styled.div`
  padding-top: 30px;
  margin: auto;
  text-align: center;
`;
const $img = styled.img`
  width: 50%;
`;

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alt: 'Resume PDF',
      href: resumePdf,
      target: '_blank',
      url: resumePng,
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
          >
          </$img>
        </a>
      </$div>
    );
  }
}

export default Resume;