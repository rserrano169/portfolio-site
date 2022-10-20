import React, {Component} from "react";
import resumePdf from "../assets/pdf/Resume_Raul_Serrano.pdf";
import resumePng from "../assets/img/Resume_Raul_Serrano.png";

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        div: {
          paddingTop: 30,
          margin: 'auto',
          textAlign: 'center',
        },
        img: {
          width: '50%',
        },
      },
    };
  }

  render() {
    return (
      <div style={this.state.style.div}>
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
      </div>
    );
  }
}

export default Resume;