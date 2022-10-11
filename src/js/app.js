import "../styles/index.sass";
import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom/client';

import Header from '../components/Header.jsx';
import Resume from '../components/Resume.jsx';
import Section from '../components/Section.jsx';
import TextBlock from '../components/TextBlock.jsx';

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