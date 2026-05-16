import { Container, Row, Col, Tab} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projectsBg from "../assets/img/projects-bg.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Projects.css';

export const Projects = () => {
  // State to track if projects should be loaded
  const [shouldLoadProjects, setShouldLoadProjects] = useState(false);
  // State to store projects data
  const [projects, setProjects] = useState([]);
  // State to track loading status
  const [isLoading, setIsLoading] = useState(true);
  // Reference to the projects section
  const projectsSectionRef = useRef(null);
  // Reference to the observer
  const observerRef = useRef(null);

  // Memoize projects data to prevent unnecessary re-renders
  const projectsData = useMemo(() => [
    {
      title: "Online Voting System",
      description: "Secure admin-managed voter registration. PHP/MySQL backend, HTML/CSS frontend. Registration, login, voting with real-time results processing.",
      imgUrl: "/logo192.png",
      githubUrl: "https://github.com/LaxmanSA"
    },
    {
      title: "Automatic Timetable Generator",
      description: "Spring Boot + Hibernate + MySQL - 40% scheduling time reduction. 25% conflict reduction with optimized algorithms, customizable slots.",
      imgUrl: "/logo192.png",
      githubUrl: "https://github.com/LaxmanSA"
    },
    {
      title: "ESP32 Surveillance Car",
      description: "Embedded C backend (50% latency reduction), HTML/JS live video streaming frontend for remote surveillance.",
      imgUrl: "/logo192.png",
      githubUrl: "https://github.com/LaxmanSA"
    }
  ], []);

  // Optimized function to load projects data
  const loadProjects = useCallback(() => {
    setIsLoading(true);
    // Use requestAnimationFrame for smoother loading
    requestAnimationFrame(() => {
      setProjects(projectsData);
      setIsLoading(false);
    });
  }, [projectsData]);

  // Setup intersection observer to detect when user approaches Projects section
  useEffect(() => {
    // Create an observer to detect when user is approaching the Projects section directly
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // User has reached the Projects section, load projects
          setShouldLoadProjects(true);
          // Disconnect the observer once projects are set to load
          if (observerRef.current) {
            observerRef.current.disconnect();
          }
        }
      },
      {
        rootMargin: '300px 0px', // Increased margin for earlier loading
        threshold: 0.05 // Lower threshold for faster detection
      }
    );

    // Observe the projects section itself
    if (projectsSectionRef.current) {
      observerRef.current.observe(projectsSectionRef.current);
    }

    // Clean up observer on component unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  
  // Load projects when shouldLoadProjects becomes true
  useEffect(() => {
    if (shouldLoadProjects) {
      loadProjects();
    }
  }, [shouldLoadProjects, loadProjects]);

  // If projects haven't been loaded yet, show a loading placeholder
  if (!shouldLoadProjects || isLoading) {
    return (
      <section className="project" id="projects" ref={projectsSectionRef} style={{ 
        background: `url(${projectsBg}) center center/cover no-repeat`, 
        backgroundBlendMode: 'overlay',
        willChange: 'opacity',
        transform: 'translateZ(0)' // Force GPU acceleration
      }}>
        <Container>
          <Row>
            <Col size={12}>
              <div className="animate__animated animate__fadeIn">
                <h2>Projects</h2>
                <p>Loading amazing projects...</p>
                <div className="projects-loading-placeholder">
                  <div className="loading-spinner"></div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
  
  return (
    <section className="project" id="projects" ref={projectsSectionRef} style={{ 
      background: `url(${projectsBg}) center center/cover no-repeat`, 
      backgroundBlendMode: 'overlay',
      willChange: 'opacity',
      transform: 'translateZ(0)' // Force GPU acceleration
    }}>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility partialVisibility>
              {({ isVisible }) =>
              <div 
                className={isVisible ? "animate__animated animate__fadeIn": ""}
                style={{ 
                  willChange: isVisible ? 'opacity, transform' : 'auto',
                  transform: 'translateZ(0)' // Force GPU acceleration
                }}>
                <h2>Projects</h2>
                <p>University projects demonstrating fullstack development, backend optimization, and embedded systems.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""} >
                    <Tab.Pane eventKey="first">
                      <Row className="align-items-center projects-grid">
                        {
                          projects.map((project, index) => (
                            <LazyLoadComponent key={index} threshold={100} placeholder={<div className="project-card-placeholder"></div>}>
                              <ProjectCard
                                key={`project-${index}`}
                                index={index}
                                {...project}
                              />
                            </LazyLoadComponent>
                          ))
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
