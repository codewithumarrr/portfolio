import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faNode,
  faAws
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  const [listSkills] = useState([
    {
      name: 'React, React Native & Next.js',
      des: '4+ years of experience in building scalable, high-performance web and mobile applications using React.js, React native and Next.js. Skilled in advanced hooks, state management (Redux, Zustand, Expo), and server-side rendering (SSR).',
      icon: faReact
    },
    {
      name: 'JavaScript & TypeScript',
      des: 'Extensive experience in developing modern web applications with JavaScript and TypeScript, ensuring robust and type-safe codebases.',
      icon: faJs
    },
    {
      name: 'HTML5 & CSS3',
      des: 'Expert in creating responsive and accessible UIs with modern HTML5 and CSS3 standards, using tools like TailwindCSS and Styled Components.',
      icon: faHtml5
    },
    {
      name: 'Node.js & Backend Technologies',
      des: 'Proficient in developing robust backend services and APIs using Node.js, Express.js, and .NetCore, ensuring scalable and secure applications.',
      icon: faNode
    },
    {
      name: 'Databases (MongoDB & SQL)',
      des: 'Skilled in database design and optimization with MongoDB, PostgreSQL, and MySQL, handling complex data structures efficiently.',
      icon: faDatabase
    },
    {
      name: 'AWS & DevOps',
      des: 'Experienced with AWS cloud services and DevOps tools like Docker, Nginx, Jenkins, and GitHub Actions to streamline CI/CD pipelines.',
      icon: faAws
    }
  ]);

  return (
    <section className="skills" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        Technical Skills
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        Here are my core technical skills and tools, reflecting my ability to deliver full-stack solutions effectively:
      </div>
      <div className="list">
        {listSkills.map((value, key) => (
          <div className="item" key={key} ref={(el) => el && divs.current.push(el)}>
            <FontAwesomeIcon icon={value.icon} className="skill-icon" />
            <h3>{value.name}</h3>
            <div className="des">{value.des}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
