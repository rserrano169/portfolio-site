import "../styles/index.sass";

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Component } from 'react';

import Header from '../components/Header.jsx';
import Header1 from "../components/Header1.jsx";
import Icon from '../components/Icon.jsx';
import Resume from '../components/Resume.jsx';
import TextBlock from '../components/TextBlock.jsx';

import headshot from '../assets/img/headshot.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        headers: [
          'Raul Serrano',
          'Resume',
          'Personal Projects',
          'Culture',
          'If it sounds like I might be a good fit for a role in your organization, please feel free to reach out! Hope to speak with you soon!'
        ],
        textBlocks: [
          'I’m a software engineer with experience in JavaScript, Ruby, and Python, and frameworks such as React, Node, and Rails. I am looking to join a creative and ambitious team, where I can contribute to challenging projects, help real people, and continue to improve my skills.',
          'My most recent roles are Front-end Software Engineer at Teachley, LLC and Quality Assurance Manager at Kiswe Mobile Inc. I enjoy working with others, problem solving, the challenges of meeting high standards for product quality, and improving the efficiency of production processes.',
          'Over the years, most of my development time has been spent making proprietary products for specific jobs, but I have published a couple of smaller personal projects, that I built when I was just starting out. Check them out below.',
          'I gained invaluable experience with teamwork and discipline while attending the United States Military Academy at West Point. Willingness to dive headfirst into challenging situations while maintaining quick and critical thinking, was a constant requirement at “The Point”, and has shaped who I am. I apply this enduring life skill to new challenges in my profession.',
          'In my free time I like to socialize with my diverse network of friends. We like to dance, game, have intense discussions, and even keep up with our marksmanship skills.'
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
        <Icon url={headshot} alt={'headshot-icon'}/>
        <Header text={this.state.data.headers[0]}/>
        <TextBlock text={this.state.data.textBlocks[0]}/>

        <Header1 text={this.state.data.headers[1]}/>
        <Resume />
        <TextBlock text={this.state.data.textBlocks[1]}/>

        <Header1 text={this.state.data.headers[2]}/>
        <TextBlock text={this.state.data.textBlocks[2]}/>

        <Header1 text={this.state.data.headers[3]}/>
        <TextBlock text={this.state.data.textBlocks[3]}/>

        <TextBlock text={this.state.data.textBlocks[4]}/>

        <Header1 text={this.state.data.headers[4]}/>
        {/*TODO: email link*/}
        {/*TODO: LinkedIn linke*/}
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);