import React, {Component} from "react";
import styled from 'styled-components';

import resumePdf from '../../assets/pdf/Resume_Raul_Serrano.pdf';
import resumePng from '../../assets/img/Resume_Raul_Serrano.png';

const StyledDiv = styled.div`
  padding-top: 30px;
  margin: auto;
  text-align: center;
  
  @media (max-width: 768px) {
    padding-top: 20px;
  }
  
  @media (max-width: 375px) {
    padding-top: 10px;
  }
`;
const StyledImg = styled.img`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
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

export default Resume;