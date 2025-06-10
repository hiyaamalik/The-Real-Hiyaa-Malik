import React, { useRef, useState, useEffect } from 'react';
import headingProjects from '../assets/projects.png';
import PolaroidCard from '../components/PolaroidCard';
import ProjectModal from '../components/MagicModal';
import '../styles/Projects.css';
import Intellegendes from '../assets/447231491-5f6e66b3-06d9-48e6-a114-8414bb556dd2.png';

const Projects = () => {
  const scrollRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
    title: 'Baymax Health Assistant',
    description: 'AI-powered healthcare chatbot',
    image: 'https://camo.githubusercontent.com/595a3476933508cc144067eae4aa4116b9e2184270316b0503c360be60fc1836/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f33612f61382f35312f33616138353161306633346436373033633766306163376666366134316538612e706e67',
    details: (
      <div className="project-details">
        <h3>Project Overview</h3>
        <p>
          Developed an interactive Streamlit web application that serves as an intelligent healthcare companion, 
          providing personalized medical guidance using NLP and knowledge retrieval technologies. Inspired by 
          Disney's Baymax character, this project combines AI accuracy with empathetic user interactions for 
          health-related queries.
        </p>
        
        <h3>Key Features & Technologies</h3>
        <ul>
          <li>Built with <strong>Streamlit</strong> for an intuitive patient-facing interface</li>
          <li>Leveraged <strong>Hugging Face Transformers</strong> for NLP-powered medical Q&A</li>
          <li>Implemented <strong>FAISS</strong> for efficient retrieval from a curated medical knowledge base</li>
          <li>Integrated <strong>PyTorch</strong> for deep learning model inference</li>
          <li>Designed health tracking functionality for monitoring user progress</li>
          <li>Personalized response system tailored to individual health profiles</li>
        </ul>
        
        <h3>Technical Highlights</h3>
        <ul>
          <li>Deployed on Streamlit Cloud for public access</li>
          <li>Contains specialized knowledge on conditions like celiac disease and gluten intolerance</li>
          <li>Evaluation framework (Jupyter Notebook) to measure response accuracy</li>
          <li>Apache 2.0 licensed open-source project</li>
        </ul>
        
        <h3>Impact</h3>
        <p>
          Provides accessible preliminary healthcare guidance while demonstrating how AI can augment 
          (not replace) medical expertise. The system helps users make informed decisions about their 
          health with reliable, referenced information.
        </p>
      </div>
    ),
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
  title: 'Self-Healing AI for Network Security',
  description: 'Cybersecurity threat detection & auto-remediation system',
  image: 'https://example.com/network-security-image.jpg', 
  details: (
      <div className="project-details">
        <h3>Project Overview</h3>
        <p>
         Developed an advanced cybersecurity system that combines machine learning and deep learning 
        to detect network threats, classify attack types, and implement automated self-healing 
        mechanisms. This end-to-end solution provides real-time protection against evolving cyber threats.
        </p>
        
        <h3>Key Features & Technologies</h3>
        <ul>
          <li>Built <strong>ensemble model</strong> combining ANN and LSTM networks for threat detection</li>
        <li>Implemented <strong>Decision Tree classifier</strong> for precise attack categorization</li>
        <li>Developed <strong>real-time dashboard</strong> for threat monitoring and visualization</li>
        <li>Designed <strong>self-healing mechanisms</strong> that automatically respond to detected threats</li>
        <li>Processed and analyzed <strong>CICIDS2017</strong> and <strong>Network Intrusion Detection</strong> datasets</li>
        <li>Deployed <strong>TensorFlow</strong> models with <strong>scikit-learn</strong> integration</li>
        </ul>
        
        <h3>Technical Highlights</h3>
        <ul>
         <li>Data preprocessing pipeline handling missing values and feature scaling</li>
        <li>ANN model with custom architecture for binary threat classification</li>
        <li>LSTM network for sequential pattern recognition in network traffic</li>
        <li>Voting ensemble combining predictions from both models</li>
        <li>Decision Tree classifier with 85%+ accuracy for attack categorization</li>
        <li>Interactive Jupyter dashboard for real-time monitoring</li>
        </ul>
        
        <h3>Impact</h3>
        <p>
           The system achieved 92% detection accuracy on test data, significantly reducing response time 
        to cyber threats. The self-healing automation decreased manual intervention by 75% in simulated 
        environments, demonstrating how AI can enhance traditional cybersecurity operations.
        </p>
      </div>
    ),
  extraImages: [
    'https://private-user-images.githubusercontent.com/197499780/421335210-ae5ad346-5776-4c5e-8ad0-edd5ca0e5fb4.png',
    'https://private-user-images.githubusercontent.com/197499780/421336067-56b24994-dec2-4033-953c-752fce4df83b.png',
    'https://private-user-images.githubusercontent.com/197499780/421336169-a3014a3b-3e2c-4d5d-bc11-eb36afa006c8.png',
    'https://private-user-images.githubusercontent.com/197499780/421336335-3e407aa3-7ae3-4cd9-b8db-92150997ec8c.png'
  ],
  achievements: [
    'Reduced threat response time by 82% compared to manual monitoring',
    'Achieved 92% detection accuracy on test datasets',
    'Implemented 5 distinct self-healing protocols for different attack types',
    'Processes 10,000+ network events per minute in real-time'
  ],
  link: 'https://github.com/hiyaamalik/Self-Healing-AI-for-Network-Security'
},
    {
        title: 'Intellégendes',
        description: 'AI-Powered Caption Generation',
        image: Intellegendes,
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