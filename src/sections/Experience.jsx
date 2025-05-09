import React from 'react';
import headingExperience from '../assets/heading-experience.png';
import workGirl from '../assets/work-girl.png';
import star from '../assets/star.png';
import '../styles/Experience.css';

const experienceData = [
  {
    title: 'Intern at XYZ',
    description: 'Worked on cybersecurity monitoring tools like ArcSight and Seceon SIEM.',
  },
  {
    title: 'Freelancer',
    description: 'Created AI/ML projects for clients and participated in research studies.',
  },
  {
    title: 'Campus Tech Lead',
    description: 'Organized tech workshops and guided peers in hands-on AI projects.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <img src={headingExperience} alt="Work Experience" className="experience-heading" />

      <div className="timeline-container">
        <img src={workGirl} alt="Girl Working" className="work-girl" />

        <div className="timeline">
          {experienceData.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <img src={star} alt="Star" className="star" />
              <div className="timeline-content">
                <h3>{exp.title}</h3>
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
