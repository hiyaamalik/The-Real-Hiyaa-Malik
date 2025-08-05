import React, { useRef, useState, useEffect } from 'react';
import headingProjects from '../assets/projects.png';
import PolaroidCard from '../components/PolaroidCard';
import ProjectModal from '../components/MagicModal';
import '../styles/Projects.css';
import Intellegendes from '../assets/447231491-5f6e66b3-06d9-48e6-a114-8414bb556dd2.png';
import SelfHeal from '../assets/SelfHeal.png';
import SelfHeal2 from '../assets/SelfHeal2.png';
import SelfH from '../assets/SelfH (1).png'; 
import lifeos from '../assets/lifeos.PNG'; 
import sensorsync from '../assets/sensorsync.png'; 
import STAI from '../assets/STAI.png';
import SensorSyncUI1 from '../assets/SensorSyncUI1.png';
import SensorSyncUI2 from '../assets/SensorSyncUI2.png';
import SensorSyncUI3 from '../assets/SensorSyncUI3.png';
import SensorSyncUI4 from '../assets/SensorSyncUI4.png';
import SensorSyncUI5 from '../assets/SensorSyncUI5.png';
import SensorSyncUI6 from '../assets/SensorSyncUI6.png';



const Projects = () => {
  const scrollRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
    title: 'SkinThesis.AI',
    description: 'AI and IOT enabled Smart Mirror',
    image: 'https://camo.githubusercontent.com/595a3476933508cc144067eae4aa4116b9e2184270316b0503c360be60fc1836/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f33612f61382f35312f33616138353161306633346436373033633766306163376666366134316538612e706e67',
    details: (
      <div className="project-details">
        <h3>Project Overview</h3>
        <p>
          SkinThesis.AI is an intelligent, IoT-powered smart mirror system that redefines personal skincare and wellness through real-time diagnostics, AI-based analysis, and personalized recommendations. Designed for both home and clinical use, it integrates high-resolution cameras, multispectral and thermal imaging sensors, and advanced cloud-based deep learning models. The system enables non-invasive skin type classification, detection of dermatological conditions, hydration tracking, and SPF effectiveness analysis. By providing actionable skincare insights and product suggestions through an intuitive mirror interface and mobile app, SkinThesis.AI bridges the gap between daily skincare routines and professional dermatological care.
        </p>
        
        <h3>Key Features & Technologies</h3>
        <ul>
          <li><strong>ESP32-CAM</strong> for capturing high-resolution facial imagery in real time</li>
          <li>Integrated <strong>UV and Thermal Sensors</strong> for sun exposure analysis and contactless temperature monitoring</li>
          <li>Used <strong>Multispectral Imaging</strong> to detect skin undertone, overtone, and dermatological conditions</li>
          <li>Implemented <strong>Cloud-Based Deep Learning Models</strong> for real-time skin type classification and disease detection</li>
          <li>Developed a <strong>Personalized Recommendation Engine</strong> for skincare and cosmetic suggestions</li>
          <li>Built a secure <strong>IoT Architecture</strong> with encrypted Wi-Fi data transfer from mirror to cloud</li>
          <li>Created a responsive <strong>Touchscreen Mirror Interface</strong> for user interaction and result display</li>
          <li>Deployed a connected <strong>Mobile App</strong> for extended recommendations and user profile tracking</li>
          <li>Enabled <strong>SPF Detection & Reapplication Alerts</strong> for real-time sun protection monitoring</li>
          <li>Implemented <strong>End-to-End Data Encryption</strong> and secure APIs for privacy and compliance</li>
        </ul>

        
        <h3>Technical Highlights</h3>
        <ul>
          <li>Developed a modular <strong>AI processing pipeline</strong> integrating computer vision, thermal, and UV data</li>
          <li>Trained and deployed <strong>deep learning models</strong> for skin classification and disease detection</li>
          <li>Used <strong>cloud-based inference servers</strong> for scalable and real-time analytics</li>
          <li>Implemented <strong>multimodal data fusion</strong> (visual, thermal, spectral) for comprehensive diagnostics</li>
          <li>Built a secure <strong>IoT communication layer</strong> using ESP32 Wi-Fi for encrypted data transmission</li>
          <li>Designed a <strong>database-backed recommendation engine</strong> for personalized skincare suggestions</li>
          <li>Enabled <strong>historical trend tracking</strong> with cloud-stored user profiles and skin health data</li>
          <li>Ensured <strong>end-to-end data encryption</strong> and compliance with data protection standards</li>
          <li>Built with <strong>scalable architecture</strong> for both home users and clinical-grade deployments</li>
        </ul>
        
        <h3>Impact</h3>
        <p>
          SkinThesis.AI aims to make professional-grade skincare accessible to a wider audience by combining intelligent diagnostics with user-centric design. By automating skin health analysis and integrating it into daily routines, the system empowers users to understand and track their skin condition in real-time, bridging the gap between dermatological consultation and everyday skincare. It also helps reduce product mismatches, encourages preventive care, and supports health monitoring, promoting both aesthetic well-being and long-term skin health.
        </p>
      </div>
    ),
    extraImages: [
      STAI 
    ],
    achievements: [
      'Functional prototype successfully developed and tested',
      'Patent application filed - Invention Application Number 202511064637',
      'AI models validated on diverse skin datasets with high accuracy',
    'Designed for clinical and commercial scalability'
  ],
  link: 'https://github.com/hiyaamalik/SkinThesis.AI'
},
    {
  title: 'Self-Healing AI for Network Security',
  description: 'Cybersecurity threat detection & auto-remediation system',
  image: SelfH, 
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
    SelfHeal, SelfHeal2
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
  title: 'SensorSync: Real-Time Sensor Analytics & Reporting',
  description: ' full stack web sensor monitor',
  image: sensorsync, 
  details: (
    <div className="project-details">
      <h3>Project Overview</h3>
      <p>
        Developed for CSIR-National Physical Laboratory, SensorSync is a comprehensive, full-stack web platform for real-time environmental monitoring. It provides an end-to-end solution for collecting, visualizing, and validating sensor data (temperature, humidity) with a focus on data integrity, security, and traceability required in scientific research environments.
      </p>
      
      <h3>Key Features & Technologies</h3>
      <ul>
        <li>Implemented <strong>real-time dashboard</strong> with live charts (Recharts) and data cards.</li>
        <li>Developed <strong>secure report generation</strong> (.xlsx) with cryptographic <strong>SHA-256 hash validation</strong>.</li>
        <li>Built-in <strong>Role-Based Access Control (RBAC)</strong> for Standard Users and Administrators.</li>
        <li>Integrated <strong>geospatial mapping</strong> to visualize sensor locations and live status.</li>
        <li>Created a secure authentication system with a <strong>custom CAPTCHA</strong> and <strong>OTP-based profile updates</strong>.</li>
        <li>Utilized <strong>Supabase (PostgreSQL)</strong> for backend and real-time data streaming.</li>
      </ul>
      
      <h3>Technical Highlights</h3>
      <ul>
        <li>Frontend built with <strong>React.js</strong> and <strong>Vite</strong> for a fast, modern single-page application.</li>
        <li>Used <strong>Material-UI (MUI)</strong> for a consistent and responsive user interface.</li>
        <li>Decoupled architecture with a React frontend communicating with a backend powered by <strong>Supabase</strong> and custom <strong>PHP</strong> scripts for specialized logic (OTP, report generation).</li>
        <li>Managed global state with <strong>React Hooks and Context API</strong> for authentication.</li>
        <li>Implemented real-time fault detection to monitor sensor uptime and flag inactive devices.</li>
      </ul>
      
      <h3>Impact</h3>
      <p>
        The platform provides a reliable, low-latency monitoring solution, reflecting live sensor data on the dashboard within 3-5 seconds. Its cryptographic validation ensures complete data integrity, making reports trustworthy for institutional and research use. The system enhances operational awareness through fault detection and provides a scalable foundation for future integration of AI and predictive analytics.
      </p>
    </div>
  ),
  extraImages: [
    SensorSyncUI1, 
    SensorSyncUI2,
    SensorSyncUI3,
    SensorSyncUI4,
    SensorSyncUI5,
    SensorSyncUI6
  ],
  achievements: [
    'Achieved real-time data reflection in <5 seconds',
    'Ensured 100% data integrity with SHA-256 hash validation for reports',
    'Implemented secure role-based access for multi-user institutional environment',
    'Provided live sensor fault detection and geospatial status mapping'
  ],
  link: 'https://github.com/hiyaamalik/SensorMonitoringSystem' 
},
    
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