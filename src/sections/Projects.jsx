import React, { useRef, useState, useEffect } from 'react';
import headingProjects from '../assets/projects.png';
import PolaroidCard from '../components/PolaroidCard';
import ProjectModal from '../components/ProjectModal';
import '../styles/Projects.css';

const Projects = () => {
  const scrollRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const projects = [
    {
      title: 'PROJECT 1',
      description: 'One line description',
      details: 'Baymax',
      image: 'https://camo.githubusercontent.com/595a3476933508cc144067eae4aa4116b9e2184270316b0503c360be60fc1836/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f33612f61382f35312f33616138353161306633346436373033633766306163376666366134316538612e706e67', // Add your image path
      link: '',  // Add your project link
    },
    {
      title: 'PROJECT 2',
      description: 'One line description',
      details: 'Details of project 2',
      image: '',
      link: '',
    },
    {
      title: 'PROJECT 3',
      description: 'One line description',
      details: 'Details of project 3',
      image: '',
      link: '',
    },
    {
      title: 'PROJECT 4',
      description: 'One line description',
      details: 'Details of project 4',
      image: '',
      link: '',
    },
    {
      title: 'PROJECT 5',
      description: 'One line description',
      details: 'Details of project 5',
      image: '',
      link: '',
    },
  ];
  
  const scrollToProject = (index) => {
    const container = scrollRef.current;
    if (!container) return;
    
    const cardWidth = container.querySelector('.polaroid-card')?.offsetWidth;
    if (!cardWidth) return;
    
    container.scrollTo({
      left: index * (cardWidth + 30), // Adding gap width
      behavior: 'smooth',
    });
    setCurrentIndex(index);
  };
  
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    
    const handleScroll = () => {
      const cardWidth = container.querySelector('.polaroid-card')?.offsetWidth;
      if (!cardWidth) return;
      
      const scrollPosition = container.scrollLeft;
      const activeIndex = Math.round(scrollPosition / (cardWidth + 30));
      
      if (activeIndex !== currentIndex && activeIndex >= 0 && activeIndex < projects.length) {
        setCurrentIndex(activeIndex);
      }
    };
    
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [currentIndex, projects.length]);
  
  return (
    <section id="projects" className="projects-container">
      <img src={headingProjects} alt="Projects Heading" className="projects-heading" />
      
      <p className="projects-subheading">
        HERE'S A PEEK INTO THE IDEAS WE BROUGHT TO LIFE. CLICK ON A PROJECT TO READ MORE!
      </p>
      
      {/* Polaroid Carousel */}
      <div className="polaroid-carousel" ref={scrollRef}>
        {projects.map((project, index) => (
          <PolaroidCard
            key={`project-${index}`}
            image={project.image}
            title={project.title}
            description={project.description}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>
      
      <div className="project-dots">
        {projects.map((_, index) => (
          <button
            key={`dot-${index}`}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => scrollToProject(index)}
          />
        ))}
      </div>
      
      {selectedProject && (
        <ProjectModal
          show={true}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </section>
  );
};

export default Projects;
