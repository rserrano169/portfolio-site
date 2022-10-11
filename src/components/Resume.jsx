import React, {Component} from "react";
import resumePdf from "../assets/Resume_Raul_Serrano.pdf";
import resumePng from "../assets/Resume_Raul_Serrano.png";

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        span: {
          padding: 20,
          width: '50%',
        },
        img: {
          maxWidth: '100%',
        },
      },
    };
  }

  render() {
    return (
      <span style={this.state.style.span}>
        <a
          href={resumePdf}
          target="_blank"
        >
          <img
            alt="Resume PDF"
            src={resumePng}
            style={this.state.style.img}
          >
          </img>
        </a>
      </span>
    );
  }
}

export default Resume;