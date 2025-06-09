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
      details: 'I always wanted to do something for the healthcare industry, so I developed an AI chatbot that provides preliminary healthcare advice using natural language processing and Generative AI.',
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
        'https://private-user-images.githubusercontent.com/197499780/421335210-ae5ad346-5776-4c5e-8ad0-edd5ca0e5fb4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDgwNzc1MjcsIm5iZiI6MTc0ODA3NzIyNywicGF0aCI6Ii8xOTc0OTk3ODAvNDIxMzM1MjEwLWFlNWFkMzQ2LTU3NzYtNGM1ZS04YWQwLWVkZDVjYTBlNWZiNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTI0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUyNFQwOTAwMjdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mMjljODZiZDY3ZmM5OWZiZjQ1MWI2NGJmYzgwNzk2MTE2OTVmNTdiZTNiNDViZDUxMjRjM2Q5N2ZkZjMxZWEyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.jr2DOqNRmAhP3Vux_F4HDpXf-MiEyfbb2hrisqm79vA',
        'https://private-user-images.githubusercontent.com/197499780/421336067-56b24994-dec2-4033-953c-752fce4df83b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDgwNzc1MjcsIm5iZiI6MTc0ODA3NzIyNywicGF0aCI6Ii8xOTc0OTk3ODAvNDIxMzM2MDY3LTU2YjI0OTk0LWRlYzItNDAzMy05NTNjLTc1MmZjZTRkZjgzYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTI0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUyNFQwOTAwMjdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xZWJiYWZkYWNjNTU4MGI1ZDgzZjM5MWY2OTlmODRmOWM5OTMzNDBjNTkzMmVmYzY4ZTgxYjk1OGM3M2JlNjViJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.wPSFuVG182MiLXvpP6ANSSpAGbY4JIv-Zeti_77MlNA',
        'https://private-user-images.githubusercontent.com/197499780/421336169-a3014a3b-3e2c-4d5d-bc11-eb36afa006c8.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDgwNzc1MjcsIm5iZiI6MTc0ODA3NzIyNywicGF0aCI6Ii8xOTc0OTk3ODAvNDIxMzM2MTY5LWEzMDE0YTNiLTNlMmMtNGQ1ZC1iYzExLWViMzZhZmEwMDZjOC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTI0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUyNFQwOTAwMjdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zY2E4MzJlY2VhMWFjZWQ4YzEzYjYzZTY2ZDVhODc3YTUyY2E1NzBkYjg3YTUwNjk2NzAzNjBiZDc4Mzk4NGQ4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.4vjL0I1kum9_CXvIy87yXdVo_1IMv-kIKsh3FzCA_GQ',
        'https://private-user-images.githubusercontent.com/197499780/421336335-3e407aa3-7ae3-4cd9-b8db-92150997ec8c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDgwNzc1MjcsIm5iZiI6MTc0ODA3NzIyNywicGF0aCI6Ii8xOTc0OTk3ODAvNDIxMzM2MzM1LTNlNDA3YWEzLTdhZTMtNGNkOS1iOGRiLTkyMTUwOTk3ZWM4Yy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTI0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUyNFQwOTAwMjdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05YmIxYWMyY2NiNmQzN2Q4ODg3YmU4YzcyNzFkYjY2YjgxNjgyODliYjcyZTIxZDZjYjIwODUyY2Y4NzZjMmY3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.oLQMNAgh8-Q5tbqF-yV4hOPIMoDlqg_jUurerWNXJ_w',
        'https://private-user-images.githubusercontent.com/197499780/421337408-cc1dea09-dc1c-4ff6-9eec-eff8bc04253b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDgwNzc1MjcsIm5iZiI6MTc0ODA3NzIyNywicGF0aCI6Ii8xOTc0OTk3ODAvNDIxMzM3NDA4LWNjMWRlYTA5LWRjMWMtNGZmNi05ZWVjLWVmZjhiYzA0MjUzYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTI0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUyNFQwOTAwMjdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wYzA2NmYwOTliMjYyZDUxNzY3OWNlMGFhZWQ3OTRjOTk3NTYzYWY4YWU2MzliMWY3NTI3NTllNTI3Y2RjZmNjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.ZPcx3Zik9MnodNnaHw-tGSi-Zq2YOzPscd3eGFswdns',
        'https://private-user-images.githubusercontent.com/197499780/421337482-803f1761-2e6d-4ee8-ae1e-b0f5bc9ceae4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDgwNzc1MjcsIm5iZiI6MTc0ODA3NzIyNywicGF0aCI6Ii8xOTc0OTk3ODAvNDIxMzM3NDgyLTgwM2YxNzYxLTJlNmQtNGVlOC1hZTFlLWIwZjViYzljZWFlNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTI0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUyNFQwOTAwMjdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01MGI5NGQ3MzY5NGZjMDFmMzRkZTMwOTc0MjhlYTk2OTk3OGJkZWQyNjhhMGYxNWQ2NmEzZGM3MzY3MjcyNmNhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.YWgZWnNHyIphnM4aS5uJj1KgYNXCuHHVFVElZzr_Leg'
      ],
      achievements: [
        'Featured in App Store "Must Have" section',
        '10,000+ active users'
      ],
      link: 'https://github.com/hiyaamalik/Self-Healing-AI-for-Network-Security'
    },
    {
        title: 'Intellégendes',
        description: 'AI-Powered Caption Generation',
        image: 'https://private-user-images.githubusercontent.com/142331596/447231491-5f6e66b3-06d9-48e6-a114-8414bb556dd2.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDk0NjA2MjMsIm5iZiI6MTc0OTQ2MDMyMywicGF0aCI6Ii8xNDIzMzE1OTYvNDQ3MjMxNDkxLTVmNmU2NmIzLTA2ZDktNDhlNi1hMTE0LTg0MTRiYjU1NmRkMi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYwOVQwOTEyMDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04NDUwZDkwYTBiZTQ2NTg5MGVmNDQ5ZmI3MDc5YzQ5YmMyZDk4MmE4NWIxY2ZjYjg4YTE0ODEwMWQ1ODhlODYxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.sT74A75_OrNLJaOk87y-GrSwfxbFOQN6OvnXkbdgXHw',
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
        link: 'https://intellegendes.vercel.app/'
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