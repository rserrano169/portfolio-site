import "../styles/index.sass";
import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom/client';
import resumePdf from '../assets/Resume_Raul_Serrano.pdf';
import resumePng from '../assets/Resume_Raul_Serrano.png';

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      },
      text: props.text,
    };
  }

  render() {
    return(
      <div style={this.state.style}>
        {this.props.children[0]}
        {this.props.children[1]}
      </div>
    );
  }
}

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

class TextBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        fontSize: 22,
        padding: 20,
        width: '50%',
      },
      text: this.props.text,
    };
  }

  render() {
    return(
      <div style={this.state.style}>{this.state.text}</div>
    );
  }
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        fontSize: 40,
        padding: 20,
        textAlign: 'center',
      },
    };
  }

  render() {
    return (
      <header style={this.state.style}>Raul Serrano</header>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        textBlocks: [
          'I am a full-stack web developer with a background in JavaScript, Ruby, and Python, and frameworks such as Node, React, and Rails. I am looking to join a creative and ambitious team, where I can contribute to challenging projects and continue to grow as a developer.',
          'In addition to my programming skills, I gained invaluable experience with teamwork and discipline when I attended the United States Military Academy at West Point. Willingness to dive headfirst into challenging situations while maintaining quick and critical thinking, was a constant requirement at “The Point”, and has shaped who I am. I apply this enduring life skill to new challenges in programming.',
          'My most recent roles are Front-end Software Engineer at Teachley, LLC and Quality Assurance Manager at Kiswe Mobile Inc. I enjoy working with others, problem solving, the challenge of meeting high standards for product quality, and improving the efficiency of production processes.'
        ],
      },
      style: {
        height: '100%',
        padding: 20,
        width: '100%',
      },
    };
  }

  render() {
    return (
      <div
        id="main"
        style={this.state.style}
      >
        <Header />
        <Section>
          <TextBlock text={this.state.data.textBlocks[2]}/>
          <Resume />
        </Section>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);