import "../styles/index.sass";
import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom/client';
import resumePdf from '../assets/Resume_Raul_Serrano.pdf';
import resumePng from '../assets/Resume_Raul_Serrano.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        background: '#999',
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
        <a
          href={resumePdf}
          target="_blank"
        >
          <img
            alt="Resume PDF"
            src={resumePng}
            style={{ maxWidth: '50%' }}
          >
          </img>
        </a>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);