import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonCircleQuestion,
  faEarthAmericas,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import CustomHook from "./CustomHook";

function Projects() {
  const [listProjects] = useState([
    {
      name: "BuildWare SaaS Application",
      des: "A comprehensive SaaS platform designed specifically for construction industry professionals to streamline project management, enhance collaboration, and improve overall task efficiency.",
      mission:
        "Develop a responsive user interface using React.js and Material-UI, integrate real-time collaboration tools allowing for in-app PDF annotations.",
      techStack:
        "TypeScript, React.js, Material-UI, Redux, MongoDB, REST APIs, Unit testing with Jest, Playwright for end-to-end testing, React Hook Form, Zod for data validation",
      keyAchievements:
        "Boosted client productivity by 30% with custom collaboration tools and streamlined project management interfaces.",
      images: "/portfolio/buildware-web.png",
      link: "https://buildware.app",
    },
    {
      name: "BuildWare Mobile App",
      des: "Mobile extension of the BuildWare platform, enabling construction professionals to manage projects effectively from anywhere.",
      mission:
        "Create a mobile application using React Native that is responsive and user-friendly. Implement offline functionality with Redux Persist for enhanced on-site performance.",
      techStack:
        "React Native, Redux, AsyncStorage, REST APIs, Integration with native modules for improved performance",
      keyAchievements:
        "Achieved a 40% increase in on-the-go project updates among users, significantly reducing delays and increasing operational efficiency.",
      images: "/portfolio/buildware-mobile.png",
      link: "https://play.google.com/store/apps/details?id=com.buildware.dev&pcampaignid=web_share",
    },
    {
      name: "OddyMan ASP.NET Core Application",
      des: "Innovative retail supply chain management system designed to optimize operations, enhance data flow, and improve decision-making through advanced data analytics.",
      mission:
        "Leverage ASP.NET Core for robust backend services and create dynamic user interfaces with jQuery on Razor Pages. Streamline API interactions and backend processes.",
      techStack:
        "ASP.NET Core, Razor Pages, jQuery, SQL Server, Entity Framework, Azure Services for cloud infrastructure, Automated testing with xUnit",
      keyAchievements:
        "Enabled real-time supply chain adjustments, cutting operational costs by 20% and improving data visibility across the board.",
      images: "/portfolio/oddyman.png",
      link: "https://oddyman.co.za/",
    },
    {
      name: "Regent Business School - Educational Platform",
      des: "A scalable educational application developed in collaboration with Regent Business School to facilitate online learning, course management, and interactive student engagement.",
      mission:
        "Design and develop a **modern e-learning platform** with a user-friendly interface, enabling students and educators to access course materials, submit assignments, and participate in discussions seamlessly. Implemented a responsive design for a **mobile-first experience**, ensuring accessibility across all devices.",
      techStack:
        "React.js, Tailwind CSS, Shadcn UI, Zustand for state management, Node.js, PostgreSQL, Firebase authentication",
      keyAchievements:
        "Enhanced the institution’s digital learning experience by creating an interactive, fast, and accessible platform, improving student engagement and faculty collaboration.",
      images: "/portfolio/regent-web.png",
      link: "https://dev.sis-regent.co.za/",
    },
  ]);


  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  const handleProjectClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section className="projects" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        My Projects
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        Below are some of my key professional projects. They illustrate my
        expertise in delivering scalable, user-centric, and
        performance-optimized solutions across diverse platforms:
      </div>
      <div className="list tool">
        {listProjects.map((value, key) => (
          <div
            className="item"
            key={key}
            ref={(el) => el && divs.current.push(el)}
            onClick={() => handleProjectClick(value.link)} // Navigate on click
            style={{ cursor: "pointer", transition: "transform 0.2s" }} // Smooth scaling transition
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            } // Scale up on hover
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} // Scale back on mouse leave
          >
            <div className="images">
              <div className="tooltip">Click on the Image for details</div>
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
                  <h4>Tech Stack</h4>
                  <div className="des">{value.techStack}</div>
                </div>
              </div>
              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faTrophy} />
                </div>
                <div>
                  <h4>Key Achievements</h4>
                  <div className="des">{value.keyAchievements}</div>
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
