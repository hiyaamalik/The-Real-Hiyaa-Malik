import React, { useRef, useState, useEffect } from 'react';
import headingProjects from '../assets/projects.png';
import PolaroidCard from '../components/PolaroidCard';
import ProjectModal from '../components/MagicModal';
import '../styles/Projects.css';

const Projects = () => {
  const scrollRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: 'Baymax Health Assistant',
      description: 'AI-powered healthcare chatbot',
      image: 'https://camo.githubusercontent.com/595a3476933508cc144067eae4aa4116b9e2184270316b0503c360be60fc1836/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f33612f61382f35312f33616138353161306633346436373033633766306163376666366134316538612e706e67',
      details: 'Developed an AI chatbot that provides preliminary healthcare advice using natural language processing.',
      extraImages: [
        'https://tse1.mm.bing.net/th/id/OIP.kUlNGTmZP3sTt-A5ht8AgwHaMR?cb=iwp2&rs=1&pid=ImgDetMain',
        'https://tse1.mm.bing.net/th/id/OIP.kUlNGTmZP3sTt-A5ht8AgwHaMR?cb=iwp2&rs=1&pid=ImgDetMain'
      ],
      achievements: [
        'Won "Best Health Tech" at HackMIT 2022',
        'Processes 100+ queries per minute',
        '94% user satisfaction rate'
      ],
      link: 'https://baymaxhealthcarecompanion.streamlit.app/'
    },
    {
      title: 'Self Healing AI for Network Security',
      description: 'Carbon footprint tracker',
      image: 'https://example.com/ecotrack.jpg',
      details: 'Mobile application that tracks your daily carbon footprint.',
      extraImages: [
        'https://private-user-images.githubusercontent.com/197499780/421335012-8706d2eb-df12-4c2d-b3ed-4405081d069f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDc1ODI3MjYsIm5iZiI6MTc0NzU4MjQyNiwicGF0aCI6Ii8xOTc0OTk3ODAvNDIxMzM1MDEyLTg3MDZkMmViLWRmMTItNGMyZC1iM2VkLTQ0MDUwODFkMDY5Zi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUxOFQxNTMzNDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kMjhjM2ZkYzcwZjY5OWZjOTk3YzA1ZTZkZmRhYTBkNjMyZTM0MWNjZTgyZDA3NGExMjVmNDYyNGU2ZDZhOGIyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.7FulL1y942rWs1MJ_Teive5U255Bo4ULbp5Z3JsUP_0',
        'https://example.com/ecotrack2.jpg'
      ],
      achievements: [
        'Featured in App Store "Must Have" section',
        '10,000+ active users'
      ],
      link: 'https://ecotrack-app.com'
    },
    {
        title: 'Baymax Health Assistant',
        description: 'AI-powered healthcare chatbot',
        image: 'https://camo.githubusercontent.com/595a3476933508cc144067eae4aa4116b9e2184270316b0503c360be60fc1836/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f33612f61382f35312f33616138353161306633346436373033633766306163376666366134316538612e706e67',
        details: 'Developed an AI chatbot that provides preliminary healthcare advice using natural language processing.',
        extraImages: [
          'https://tse1.mm.bing.net/th/id/OIP.kUlNGTmZP3sTt-A5ht8AgwHaMR?cb=iwp2&rs=1&pid=ImgDetMain',
          'https://tse1.mm.bing.net/th/id/OIP.kUlNGTmZP3sTt-A5ht8AgwHaMR?cb=iwp2&rs=1&pid=ImgDetMain'
        ],
        achievements: [
          'Won "Best Health Tech" at HackMIT 2022',
          'Processes 100+ queries per minute',
          '94% user satisfaction rate'
        ],
        link: 'https://baymax-demo.com'
      },
      {
        title: 'EcoTrack',
        description: 'Carbon footprint tracker',
        image: 'https://example.com/ecotrack.jpg',
        details: 'Mobile application that tracks your daily carbon footprint.',
        extraImages: [
          'https://example.com/ecotrack1.jpg',
          'https://example.com/ecotrack2.jpg'
        ],
        achievements: [
          'Featured in App Store "Must Have" section',
          '10,000+ active users'
        ],
        link: 'https://ecotrack-app.com'
      },
      {
        title: 'Baymax Health Assistant',
        description: 'AI-powered healthcare chatbot',
        image: 'https://camo.githubusercontent.com/595a3476933508cc144067eae4aa4116b9e2184270316b0503c360be60fc1836/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f33612f61382f35312f33616138353161306633346436373033633766306163376666366134316538612e706e67',
        details: 'Developed an AI chatbot that provides preliminary healthcare advice using natural language processing.',
        extraImages: [
          'https://tse1.mm.bing.net/th/id/OIP.kUlNGTmZP3sTt-A5ht8AgwHaMR?cb=iwp2&rs=1&pid=ImgDetMain',
          'https://tse1.mm.bing.net/th/id/OIP.kUlNGTmZP3sTt-A5ht8AgwHaMR?cb=iwp2&rs=1&pid=ImgDetMain'
        ],
        achievements: [
          'Won "Best Health Tech" at HackMIT 2022',
          'Processes 100+ queries per minute',
          '94% user satisfaction rate'
        ],
        link: 'https://baymax-demo.com'
      }
  ];

  const scrollToProject = (index) => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.querySelector('.polaroid-card')?.offsetWidth;
    if (!cardWidth) return;

    container.scrollTo({
      left: index * (cardWidth + 30),
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
      
      <div className="polaroid-carousel" ref={scrollRef}>
        {projects.map((project, index) => (
          <PolaroidCard
            key={`project-${index}`}
            image={project.image}
            title={project.title}
            description={project.description}
            onClick={() => setSelectedProject(project)}
            useInternalModal={false} // Flag to disable internal modal
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