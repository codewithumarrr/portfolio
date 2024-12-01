import React, { useRef } from 'react';
import CustomHook from './CustomHook';

function Home() {
    const scrollTab = useRef();
    CustomHook(scrollTab);

    return (
        <section ref={scrollTab} className="home">
            <div className="content">
                <div className="name">
                    Hello, I'm <span>Umar Fayaz</span>
                </div>
                <div className="des">
                    I am a Software Engineer and Full-Stack Developer with over 4 years of experience specializing in React.js, Next.js, and backend technologies like Node.js, .NetCore, MongoDB, and PostgreSQL. I excel in creating scalable web applications with secure authentication, responsive designs, and optimized performance.
                </div>
                
                <a 
                    href="/portfolio/my-resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="download-cv animation active"
                    aria-label="Download my CV in PDF format"
                >
                    Download My CV
                </a>
            </div>
            <div className="avatar">
                <div className="card">
                    <img src="/portfolio/my-pic.jpeg" alt="Avatar of Umar Fayaz" />
                    <div className="info">
                        <div>Role: <span className='info--normal-text'>Full-Stack Developer</span></div>
                        <div>Location: <span className='info--normal-text'>Islamabad, Pakistan</span></div>
                        <div>Experience: <span className='info--normal-text'>4+ Years</span></div>
                        <div>Specialization: <span className='info--normal-text'>React.js, Next.js</span></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
