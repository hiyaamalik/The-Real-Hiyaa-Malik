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
import cybvector from '../assets/cybvector.jpeg';
import projectn1 from '../assets/projectn1.png';
import projectn2 from '../assets/projectn2.png';
import pN from '../assets/pN.png';
import SkinT from '../assets/SkinT.png';
import pneumoniaDiagnosis from '../assets/Early pedatric pneumonia detection.png';



const Projects = () => {
  const scrollRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
    title: 'SkinThesis.AI',
    description: 'AI and IOT enabled Smart Mirror',
    image: SkinT,
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
           
        </p>
      </div>
    ),
  extraImages: [
    SelfHeal, SelfHeal2
  ],
  achievements: [
    'Got selected for Finale Round at AICraft 2.0 conducted by Amity Centre of Artificial Intelligence ',
    
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
  {
  title: 'CybVector',
  description: 'AI-Powered Cybersecurity Assistant',
  image: cybvector, 
  details: (
    <div className="project-details">
      <h3>Project Overview</h3>
      <p>
        CybVector is a cutting-edge, web-based AI chatbot designed as a personal cybersecurity analyst. It leverages Google’s Gemini large language model to provide real-time threat intelligence, interactive security posture assessments, and expert cybersecurity guidance in a natural conversational interface.
      </p>

      <h3>Key Features & Technologies</h3>
      <ul>
        <li><strong>Conversational AI:</strong> Powered by Google Gemini-1.5-flash model for natural, intelligent dialogue.</li>
        <li><strong>Real-Time Threat Analysis:</strong> Fetches live data from VirusTotal and AbuseIPDB to evaluate IPs, domains, or URLs instantly.</li>
        <li><strong>Interactive Security Hygiene Check:</strong> An engaging quiz that assesses user security posture and provides actionable feedback with a dynamic conversational flow.</li>
        <li><strong>Modern Analyst’s Terminal UI:</strong> Clean, dark-themed, responsive interface built with HTML, CSS, and vanilla JavaScript.</li>
        <li><strong>Robust Backend:</strong> FastAPI-based Python backend ensuring high performance and seamless API integration.</li>
      </ul>

      <h3>Technical Highlights</h3>
      <ul>
        <li>Backend developed using <strong>FastAPI</strong> for asynchronous, fast HTTP serving.</li>
        <li>Integrated external threat intelligence APIs: <strong>VirusTotal</strong> and <strong>AbuseIPDB</strong>.</li>
        <li>Utilizes <strong>google-generativeai</strong> library to access Google Gemini models.</li>
        <li>Environment variables managed securely using <strong>python-dotenv</strong>.</li>
        <li>Frontend built with <strong>vanilla JavaScript</strong>, ensuring lightweight and fast loading experience.</li>
      </ul>

      <h3>Impact</h3>
      <p>
        CybVector empowers users with expert cybersecurity advice on demand, providing accessible real-time threat detection and personalized security recommendations. The interactive quiz feature engages users in assessing their security hygiene, promoting improved cybersecurity awareness. This project demonstrates how AI can augment cybersecurity operations with efficient, conversational intelligence.
      </p>
    </div>
  ),
  extraImages: [
    
  ],
  achievements: [
    'Implemented seamless integration with VirusTotal and AbuseIPDB for live threat data',
    'Created dynamic AI-powered conversational flow with Google Gemini LLM',
    'Built a professional dark-themed Analyst’s Terminal UI from scratch',
    'Delivered an interactive security hygiene quiz that maintains conversational context'
  ],
  link: 'https://github.com/hiyaamalik/CybVector'
},
{
  title: 'Project N: Women Safety and Analytics Tool',
  description: 'AI-powered women’s safety & analytics platform with real-time alerts using OpenVINO & OpenCV',
  image: pN, 
  details: (
    <div className="project-details">
      <h3>Project Overview</h3>
      <p>
        Project N is an AI-driven Women Safety and Analytics Tool developed by Team Adyant. 
        It proactively monitors environments using AI-based smart surveillance, detects potential risks, 
        and provides immediate assistance through integrated mobile and web applications. 
        Unlike traditional solutions that focus on post-incident responses, Project N emphasizes real-time intervention and prevention.
      </p>

      <h3>Key Features</h3>
      <ul>
        <li><strong>Smart Surveillance System:</strong> AI-powered gender detection, crowd density analysis, and SOS gesture recognition.</li>
        <li><strong>Gesture-Based SOS:</strong> Detects silent distress signals (thumb & pinky gesture) for discreet emergency alerts.</li>
        <li><strong>User-Side Mobile & Web App:</strong> SOS trigger button with multilingual support, real-time geolocation tracking, and legal resource hub.</li>
        <li><strong>Automated Alerts:</strong> Sends emergency notifications via Twilio API, activates loud alarms, and provides location details to responders.</li>
      </ul>

      <h3>Technical Implementation</h3>
      <ul>
        <li><strong>Computer Vision Models:</strong> Utilized OpenVINO™ and OpenCV with Intel Zoo pre-trained models for face, gender, and gesture detection.</li>
        <li><strong>Real-Time Processing:</strong> Achieved ~36.79ms per frame inference time for low-latency performance.</li>
        <li><strong>Alert Mechanism:</strong> Context-aware SOS system using Geocoder & Nominatim for location tracking and Twilio for instant notifications.</li>
        <li><strong>Cross-Platform Compatibility:</strong> Works with existing CCTV infrastructure, smartphones, and Intel CPUs/GPUs/VPUs.</li>
      </ul>

      <h3>Impact</h3>
      <p>
        Project N enhances women’s safety through proactive threat detection and rapid emergency response. 
        Its scalable, low-cost architecture makes it suitable for integration with urban safety initiatives, 
        community support systems, and law enforcement. The multilingual, accessible platform empowers users 
        while minimizing false alarms through intelligent gesture-based activation.
      </p>
    </div>
  ),
  extraImages: [ 
    projectn1,
    projectn2,
   ],
  achievements: [
    'Implemented AI-based real-time gender and crowd detection with OpenVINO & OpenCV',
    'Developed gesture-based distress detection system with <40ms inference latency',
    'Integrated Twilio API for automated emergency alerts with geolocation',
    'Designed scalable solution compatible with existing CCTV and smartphone infrastructure',
    'Research Paper published in IEEE Xplore https://ieeexplore.ieee.org/document/11063727',
    'Won 2nd place at AI Horizon 2.0, IIM Bodh Gaya',
    'Selected as Top 10 Finalist at IEEE Intel INDICON 2024, IIT Kharagpur'
  ],
  link: 'https://github.com/whoravinder/Project-N-Women-Safety-and-Analytics-Tool'
},
{
  title: 'Early Paediatric Pneumonia Diagnosis',
  description: 'VGG-19 vs CNN: Pediatric Pneumonia Detection',
  image: pneumoniaDiagnosis, 
  details: (
    <div className="project-details">
      <h3>Project Overview</h3>
      <p>
        This project focuses on the early diagnosis of pediatric pneumonia using deep learning methods applied to chest X-ray images. 
        It compares the performance of a pre-trained VGG-19 model (transfer learning) and a custom CNN model developed from scratch, 
        analyzing their accuracy, training time, and complexity for binary classification (Normal vs Pneumonia).
      </p>

      <h3>Key Features & Methodology</h3>
      <ul>
        <li><strong>Transfer Learning with VGG-19:</strong> Used pre-trained convolutional layers with frozen weights and a custom dense output layer for classification.</li>
        <li><strong>Custom CNN Model:</strong> Designed and trained from scratch with convolutional, max pooling, batch normalization, and dropout layers for better generalization.</li>
        <li><strong>Image Augmentation:</strong> Applied rotation, shifting, zooming, shearing, and flipping to enhance model robustness.</li>
        <li><strong>Evaluation Metrics:</strong> Compared accuracy, speed, and model complexity between approaches.</li>
      </ul>

      <h3>Dataset</h3>
      <p>
        Pediatric chest X-ray dataset from Guangzhou Women and Children's Medical Center, China, with 8,287 labeled images (Normal/Pneumonia).
      </p>
      <ul>
        <li><strong>Training Set:</strong> Normal: 805 | Pneumonia: 3,406</li>
        <li><strong>Test Set:</strong> Normal: 234 | Pneumonia: 390</li>
        <li><strong>Validation Set:</strong> Normal: 536 | Pneumonia: 2,916</li>
      </ul>

      <h3>Technical Highlights</h3>
      <ul>
        <li>VGG-19 model trained with Adam optimizer (lr=1e-3) and binary cross-entropy loss.</li>
        <li>Custom CNN trained with SGD optimizer and binary cross-entropy loss.</li>
        <li>Applied batch normalization and dropout (20%) for overfitting prevention.</li>
        <li>Used softmax activation in the final output layer for binary classification.</li>
      </ul>

      <h3>Results</h3>
      <p>
        While VGG-19 provided strong results leveraging pre-trained features, the custom CNN achieved better overall accuracy, trained faster, 
        and was less computationally intensive, making it more suitable for early pediatric pneumonia detection in real-world applications.
      </p>
    </div>
  ),
  extraImages: [
    
  ],
  achievements: [
    'Achieved higher classification accuracy with custom CNN compared to VGG-19',
    'Reduced training time and computational requirements with custom CNN',
    'Successfully applied advanced augmentation for better generalization',
    'Built reproducible pipeline for pediatric pneumonia detection using chest X-rays'
  ],
  link: 'https://github.com/hiyaamalik/earlypaediatricpneumoniadiagnosis'
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