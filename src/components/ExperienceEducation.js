import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './ExperienceEducation.css';
import experienceBg from '../assets/img/experience-bg.svg';

export const ExperienceEducation = () => {
  const experiences = [
    {
      id: 1,
      title: "API Developer Intern",
      company: "Probus Software Pvt Ltd",
      period: "Aug 2025 - Dec 2025",
      description: "Mastered .NET ecosystem - Dapper for high-performance data access, EF Core for ORM. Complex Stored Procedures, SQL optimization, enterprise backend scalability. Structured database integration for fullstack applications.",
      skills: [".NET", "Dapper", "EF Core", "SQL Stored Procedures", "Backend Architecture"]
    },
    {
      id: 2,
      title: "Full-Stack Developer Intern",
      company: "Algo Analytics",
      period: "Jan 2026 - Jun 2026",
      description: "Live React.js full-stack projects. Docker containerization, GitHub Actions CI/CD. Backend-frontend integration across distributed teams. Deploy scalable production solutions with React and full-stack development.",
      skills: ["React.js", "Docker", "GitHub CI/CD", "Full-Stack Integration", "Team Development"],
      current: true
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Bachelor of Science (Computer Science)",
      institution: "Savitribai Phule Pune University",
      period: "2022 - 2025",
      description: "BSc CS CGPA 7.92 - backend development, databases, algorithms (completed)",
      achievements: ["CGPA: 7.92"],
      current: false
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate",
      institution: "Maharashtra State Board",
      period: "2020 - 2022",
      achievements: ["44.17%"]
    },
    {
      id: 3,
      degree: "Secondary School Certificate",
      institution: "Maharashtra State Board",
      period: "2020",
      achievements: ["70.80%"]
    }
  ];

  return (
    <section className="experience-education" id="experience" style={{ background: `url(${experienceBg}) center center/cover no-repeat`, backgroundBlendMode: 'overlay' }}>
      <Container>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <div className="experience-education-container">
                <div className="experience-education-header">
                  <h2>Experience & Education</h2>
                  <p>My professional journey and academic background</p>
                </div>
                
                <Row className="gy-4">
                  {/* Experience Column */}
                  <Col lg={6}>
                    <div className="timeline-container">
                      <h3 className="timeline-header">Work Experience</h3>
                      <div className="timeline">
                        {experiences.map((exp) => (
                          <TrackVisibility key={exp.id} partialVisibility offset={100}>
                            {({ isVisible }) => (
                              <div className={`timeline-item ${isVisible ? 'animate__animated animate__fadeInUp' : ''}`}>
                                <div className="timeline-dot"></div>
                                <div className="timeline-date">{exp.period}</div>
                                <div className="timeline-content">
                                  <h4>{exp.title}</h4>
                                  <h5>{exp.company}</h5>
                                  <p>{exp.description}</p>
                                  <div className="timeline-skills">
                                    {exp.skills.map((skill, index) => (
                                      <span key={index} className="timeline-skill-tag">{skill}</span>
                                    ))}
                                  </div>
                                  {exp.current && <span className="timeline-current-badge">Current</span>}
                                </div>
                              </div>
                            )}
                          </TrackVisibility>
                        ))}
                      </div>
                    </div>
                  </Col>
                  
                  {/* Education Column */}
                  <Col lg={6}>
                    <div className="timeline-container">
                      <h3 className="timeline-header">Education</h3>
                      <div className="timeline">
                        {education.map((edu) => (
                          <TrackVisibility key={edu.id} partialVisibility offset={100}>
                            {({ isVisible }) => (
                              <div className={`timeline-item ${isVisible ? 'animate__animated animate__fadeInUp' : ''}`}>
                                <div className="timeline-dot"></div>
                                <div className="timeline-date">{edu.period}</div>
                                <div className="timeline-content">
                                  <h4>{edu.degree}</h4>
                                  <h5>{edu.institution}</h5>
                                  <p>{edu.description}</p>
                                  {edu.achievements && edu.achievements.length > 0 && (
                                    <div className="timeline-achievements">
                                      {edu.achievements.map((achievement, index) => (
                                        <span key={index} className="timeline-achievement-item">{achievement}</span>
                                      ))}
                                    </div>
                                  )}
                                  {edu.current && <span className="timeline-current-badge">Current</span>}
                                </div>
                              </div>
                            )}
                          </TrackVisibility>
                        ))}
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          )}
        </TrackVisibility>
      </Container>
    </section>
  )
}
