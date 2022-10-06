import "../styles/index.sass";
import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom/client';
import resumePdf from '../assets/Resume_Raul_Serrano.pdf';
import resumePng from '../assets/Resume_Raul_Serrano.png';

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        maxWidth: '50%',
      },
    };
  }

  render() {
    return (
      <a
        href={resumePdf}
        target="_blank"
      >
        <img
          alt="Resume PDF"
          src={resumePng}
          style={this.state.style}
        >
        </img>
      </a>
    );
  }
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        color: '#fff',
        fontSize: 40,
        paddingBottom: 20,
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
        <Resume />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);