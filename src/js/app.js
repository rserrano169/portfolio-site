import "../styles/index.sass";

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Component } from 'react';

import Header from '../components/Header.jsx';
import Header1 from "../components/Header1.jsx";
import Header2 from "../components/Header2.jsx";
import Icon from '../components/Icon.jsx';
import Icon1 from "../components/Icon1.jsx";
import Resume from '../components/Resume.jsx';
import TextBlock from '../components/TextBlock.jsx';
import TextBlock1 from '../components/TextBlock1.jsx';

import headshot from '../assets/img/headshot.jpg';
import hhh from '../assets/img/hippolyta-mouth-open-left.png';
import hippolyta from '../assets/img/hippolyta_hippo.png';
import resume from "../assets/pdf/Resume_Raul_Serrano.pdf";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        section: {
          bottom: {
            header: {
              text: 'If it sounds like I might be a good fit for a role in your organization, please feel free to reach out! Hope to speak with you soon!',
            },
          },
          culture: {
            header: {
              text: 'Culture',
            },
            hobby: {
              textBlock: {
                text: 'In my free time I like to socialize with my diverse network of friends. We like to dance, game, have intense discussions, and even keep up with our marksmanship skills.',
              },
            },
            usma: {
              textBlock: {
                text: 'I gained invaluable experience with teamwork and discipline while attending the United States Military Academy at West Point. Willingness to dive headfirst into challenging situations while maintaining quick and critical thinking, was a constant requirement at “The Point”, and has shaped who I am. I apply this enduring life skill to new challenges in my profession.',
              },
            },
          },
          personalProjects: {
            main: {
              header: {
                text: 'Personal Projects',
              },
              textBlock: {
                text: 'Over the years, most of my development time has been spent making proprietary products for specific jobs, but I have published a couple of smaller personal projects, that I built when I was just starting out. Check them out below.',
              },
            },
            hhh: {
              header: {
                text: 'Hungry Hungry Hippolyta',
              },
              href: 'https://hungryhungryhippolyta.com/',
              icon: {
                alt: 'Hungry Hungry Hippolyta Icon',
                url: hhh,
              },
              textBlock: {
                text: 'The first browser game I ever made',
              },
            },
            hippolyta: {
              header: {
                text: 'Hippolyta',
              },
              href: 'https://github.com/rserrano169/Hippolyta',
              icon: {
                alt: 'Hippolyta Logo',
                url: hippolyta,
              },
              textBlock: {
                text: 'A graduation project I made while I was attending App Academy',
              },
            },
          },
          resume: {
            header: {
              href: resume,
              text: 'Resume',
            },
            textBlock: {
              text: 'My most recent roles are Front-end Software Engineer at Teachley, LLC and Quality Assurance Manager at Kiswe Mobile Inc. I enjoy working with others, problem solving, the challenges of meeting high standards for product quality, and improving the efficiency of production processes.',
            },
          },
          top: {
            header: {
              text: 'Raul Serrano',
            },
            href: 'https://github.com/rserrano169',
            icon: {
              alt: 'headshot-icon',
              url: headshot,
            },
            textBlock: {
              text: 'I’m a software engineer with experience in JavaScript, Ruby, and Python, and frameworks such as React, Node, and Rails. I am looking to join a creative and ambitious team, where I can contribute to challenging projects, help real people, and continue to improve my skills.',
            },
          },
        },
      },
      style: {
        height: '100%',
        padding: 20,
        width: '100%',
      },
    };
  }

  render() {
    const section = this.state.data.section;
    
    return (
      <div
        id="main"
        style={this.state.style}
      >
        <Icon
          alt={section.top.icon.alt}
          href={section.top.href}
          url={section.top.icon.url}
        />
        <Header
          href={section.top.href}
          text={section.top.header.text}
        />
        <TextBlock text={section.top.textBlock.text}/>

        <Header1
          href={section.resume.header.href}
          text={section.resume.header.text}
        />
        <Resume />
        <TextBlock text={section.resume.textBlock.text}/>

        <Header1 text={section.personalProjects.main.header.text}/>
        <TextBlock text={section.personalProjects.main.textBlock.text}/>

        <Icon1
          alt={section.personalProjects.hhh.icon.alt}
          href={section.personalProjects.hhh.href}
          url={section.personalProjects.hhh.icon.url}
        />
        <Header2
          href={section.personalProjects.hhh.href}
          text={section.personalProjects.hhh.header.text}
        />
        <TextBlock1
          href={section.personalProjects.hhh.href}
          text={section.personalProjects.hhh.textBlock.text}
        />

        <Icon1
          alt={section.personalProjects.hippolyta.icon.alt}
          href={section.personalProjects.hippolyta.href}
          url={section.personalProjects.hippolyta.icon.url}
        />
        <Header2
          href={section.personalProjects.hippolyta.href}
          text={section.personalProjects.hippolyta.header.text}
        />
        <TextBlock1
          href={section.personalProjects.hippolyta.href}
          text={section.personalProjects.hippolyta.textBlock.text}
        />

        <Header1 text={section.culture.header.text}/>
        <TextBlock text={section.culture.usma.textBlock.text}/>

        <TextBlock text={section.culture.hobby.textBlock.text}/>

        <Header1 text={section.bottom.header.text}/>
        {/*TODO: email link*/}
        {/*TODO: LinkedIn linke*/}
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);