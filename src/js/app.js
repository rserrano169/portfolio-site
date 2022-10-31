import React from 'react';
import ReactDOM from 'react-dom/client';
import { Component } from 'react';
import styled from 'styled-components';

import HeadingMain from '../components/headings/Main.jsx';
import HeadingProject from '../components/headings/Project.jsx';
import HeadingSection from '../components/headings/Section.jsx';
import LinkEmail from '../components/links/Email.jsx';
import LinkHhhDescription from '../components/links/HhhDescription.jsx';
import LinkHhhTitle from '../components/links/HhhTitle.jsx';
import LinkHippolytaDescription from '../components/links/HippolytaDescription.jsx';
import LinkHippolytaTitle from '../components/links/HippolytaTitle.jsx';
import LinkLinkedIn from '../components/links/LinkedIn.jsx';
import LinkPortfolio from '../components/links/Portfolio.jsx';
import LinkResume from '../components/links/Resume.jsx';
import ImgHeadshot from '../components/imgs/Headshot.jsx';
import ImgHhh from '../components/imgs/Hhh.jsx';
import ImgHippolyta from '../components/imgs/Hippolyta.jsx';
import ImgHobby from '../components/imgs/Hobby.jsx';
import ImgUsma from '../components/imgs/Usma.jsx';
import ImgResume from '../components/imgs/Resume.jsx';
import TextBottom from '../components/texts/Bottom.jsx';
import TextProject from '../components/texts/Project.jsx';
import TextSection from '../components/texts/Section.jsx';

import "../styles/index.sass";

const StyledDiv = styled.div`
  height: 100%;
  padding: 20px 20px 50px 20px;
  width: 100%;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: {
        bottom: {
          email: {
            type: 'email',
          },
          heading: 'If it sounds like I might be a good fit for a role in your organization, please feel free to reach out! Hope to speak with you soon!',
          linkedIn: {
            type: 'LinkedIn',
          },
        },
        culture: {
          heading: 'Culture',
          hobby: {
            text: 'In my free time I like to socialize with my diverse network of friends. We like to dance, game, have intense discussions, and even keep up with our marksmanship skills.',
            type: 'hobby',
          },
          usma: {
            text: 'I gained invaluable experience with teamwork and discipline while attending the United States Military Academy at West Point. Willingness to dive headfirst into challenging situations while maintaining quick and critical thinking, was a constant requirement at “The Point”, and has shaped who I am. I apply this enduring life skill to new challenges in my profession.',
          },
        },
        main: {
          id: 'main',
        },
        personalProjects: {
          heading: 'Personal Projects',
          text: 'Over the years, most of my development time has been spent making proprietary products for specific jobs, but I have published a couple of smaller personal projects, that I built when I was just starting out. Check them out below.',
        },
        resume: {
          text: 'My most recent roles are Front-end Software Engineer at Teachley, LLC and Quality Assurance Manager at Kiswe Mobile Inc. I enjoy working with others, problem solving, the challenges of meeting high standards for product quality, and improving the efficiency of production processes.',
        },
        top: {
          text: 'I’m a software engineer with experience in JavaScript, Ruby, and Python, and frameworks such as React, Node, and Rails. I am looking to join a creative and ambitious team, where I can contribute to challenging projects, help real people, and continue to improve my skills.',
        },
      },
    };
  }

  render() {
    const section = this.state.section;
    
    return (
      <StyledDiv id={section.main.id}>
        <ImgHeadshot />
        <HeadingMain>
          <LinkPortfolio />
        </HeadingMain>
        <TextSection>
          {section.top.text}
        </TextSection>

        <HeadingSection>
          <LinkResume />
        </HeadingSection>
        <ImgResume />
        <TextSection>
          {section.resume.text}
        </TextSection>

        <HeadingSection>
          {section.personalProjects.heading}
        </HeadingSection>
        <TextSection>
          {section.personalProjects.text}
        </TextSection>

        <ImgHhh />
        <HeadingProject>
          <LinkHhhTitle />
        </HeadingProject>
        <TextProject>
          <LinkHhhDescription />
        </TextProject>

        <ImgHippolyta />
        <HeadingProject>
          <LinkHippolytaTitle />
        </HeadingProject>
        <TextProject>
          <LinkHippolytaDescription />
        </TextProject>

        <HeadingSection>
          {section.culture.heading}
        </HeadingSection>

        <TextSection>
          {section.culture.usma.text}
        </TextSection>
        <ImgUsma />

        <TextSection isHobby>
          {section.culture.hobby.text}
        </TextSection>
        <ImgHobby />

        <HeadingSection>
          {section.bottom.heading}
        </HeadingSection>
        <TextBottom isFirst>
          <LinkEmail />
        </TextBottom>
        <TextBottom>
          <LinkLinkedIn />
        </TextBottom>
      </StyledDiv>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);