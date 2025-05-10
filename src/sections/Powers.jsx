import React from 'react';
import headingPowers from '../assets/heading-powers.png';
import powersGirl from '../assets/powers-girl.png';
import notesFrame from '../assets/notes-frame.png';
import '../styles/Powers.css';

const topNotes = [
  {
    title: 'Technical Skills',
    list: ['AI, IoT, Machine Learning, Deep Learning, NLP, Data Science, Cybersecurity, Networking, Generative AI'],
  },
  {
    title: 'Programming Languages',
    list: ['Python, SQL, Java, JavaScript, HTML'],
  }
];

const bottomNotes = [
  {
    title: 'Soft Skills',
    list: ['Communication, Team Leadership, Coordination, Event Management, Problem Solving, Content Creation, Time Management'],
  },
  {
    title: 'Software/Tools',
    list: ['Google Colab, Jupyter, Microsoft Tools, PostGre SQL, Canva, Cybersecurity Tools (ArcSight SIEM, Seceon SIEM), Github '],
  }
];

const Powers = () => {
  return (
    <section id="powers" className="powers-section">
      <img src={headingPowers} alt="My Powers Heading" className="powers-heading" />

      <div className="powers-grid">
        {topNotes.map((block, index) => (
          <div className="note-card" key={index}>
            <img src={notesFrame} alt="Note Frame" className="note-frame" />
            <div className="note-text">
              <h3>{block.title}</h3>
              <ul>
                {block.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div className="girl-wrapper">
          <img src={powersGirl} alt="Powers Girl" className="powers-girl" />
        </div>

        {bottomNotes.map((block, index) => (
          <div className="note-card" key={index + 2}>
            <img src={notesFrame} alt="Note Frame" className="note-frame" />
            <div className="note-text">
              <h3>{block.title}</h3>
              <ul>
                {block.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Powers;