import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Projects() {
  const [listProjects] = useState([
    {
      name: 'BuildWare SaaS Application',
      des: 'A feature-rich SaaS platform tailored for construction professionals, offering tools for efficient project management, collaboration, and task organization.',
      mission: 'Front-End Development: Responsive UI with React.js and Material-UI. Real-Time Collaboration Tools: PDF annotations for team collaboration.',
      language: 'React.js, Material-UI, Redux, MongoDB, REST APIs',
      images: '/portfolio/buildware-web.png', 
      link: 'https://buildware.app'
    },
    {
      name: 'BuildWare Mobile App',
      des: 'Extends the BuildWare SaaS platform to mobile devices, empowering construction professionals with on-the-go project management tools.',
      mission: 'React Native Development: Responsive and user-friendly mobile app. Offline Functionality: Seamless on-site usage with Redux Persist.',
      language: 'React Native, Redux, AsyncStorage, REST APIs',
      images: '/portfolio/buildware-mobile.png',
      link: 'https://play.google.com/store/apps/details?id=com.buildware.dev&pcampaignid=web_share'
    },
    {
      name: 'OddyMan ASP.NET Core Application',
      des: 'A robust retail supply chain management system designed to optimize operations and streamline data flow with a combination of ASP.NET Core backend and Razor Pages frontend.',
      mission: 'Front-End Development: Razor Pages combined with jQuery for dynamic user interactions. Back-End Development: Enhanced API functionality and streamlined backend processes.',
      language: 'ASP.NET Core, Razor Pages, jQuery, SQL Server',
      images: '/portfolio/oddyman.png',
      link: 'https://oddyman.co.za/'
    }
  ]);

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  const handleProjectClick = (link) => {
    window.location.href = link; // Navigates to the project's URL
  };

  return (
    <section className="projects" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        My Projects
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        Here are some of my professional projects that showcase my skills in building scalable, user-centric, and high-performance applications:
      </div>
      <div className="list">
        {listProjects.map((value, key) => (
          <div
            className="item"
            key={key}
            ref={(el) => el && divs.current.push(el)}
            onClick={() => handleProjectClick(value.link)} // Navigate on click
            style={{ cursor: 'pointer', transition: 'transform 0.2s' }} // Smooth scaling transition
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')} // Scale up on hover
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')} // Scale back on mouse leave
          >
            <div className="images">
              <img src={value.images} alt={`${value.name} screenshot`} />
            </div>
            <div className="content">
              <h3>{value.name}</h3>
              <div className="des">{value.des}</div>
              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faPersonCircleQuestion} />
                </div>
                <div>
                  <h4>Mission</h4>
                  <div className="des">{value.mission}</div>
                </div>
              </div>
              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faEarthAmericas} />
                </div>
                <div>
                  <h4>Languages</h4>
                  <div className="des">{value.language}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
