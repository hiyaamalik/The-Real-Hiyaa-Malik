import React, { useEffect, useRef } from 'react';
import headingExperience from '../assets/heading-experience.png';
import workGirl from '../assets/work-girl.png';
import star from '../assets/star.png';
import '../styles/Experience.css';

const experienceData = [
    {
        title: 'Intern at CSIR NPL',
        date: '13 May 2025- 4 July 2025',
        description: 'Worked on the user module and dashboard of SensorSync — a real-time sensor data visualization and management platform developed at CSIR–NPL.',
    },
    {
        title: 'SoC Analyst Intern at Tata Advanced Systems Limited',
        date: '17 June 2024 - 5 July 2024',
        description: 'Gained hands-on experience in cybersecurity through practical demonstration of threat detection using ArcSight and Seceon SIEM tools. Worked with event log analysis, rule-based and learnt about MITRE ATT&CK framework, CIA Triad, OSI model attacks, and various proxy techniques.',
    },
];

const Experience = () => {
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            observer.unobserve(entry.target); // Avoid re-triggering
          }
        });
      },
      { threshold: 0.15 }
    );

    itemRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="experience-section">
      <img src={headingExperience} alt="Work Experience" className="experience-heading" />

      <div className="timeline-container">
        <img src={workGirl} alt="Girl Working" className="work-girl" />

        <div className="timeline">
          {experienceData.map((exp, index) => (
            <div
              className="timeline-item"
              key={index}
              ref={el => (itemRefs.current[index] = el)}
            >
              <img src={star} alt="Star" className="star" />
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <p className="date">{exp.date}</p> {/* Date added here */}
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
