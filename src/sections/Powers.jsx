import React from 'react';
import headingPowers from '../assets/heading-powers.png';
import powersGirl from '../assets/powers-girl.png';
import notesFrame from '../assets/notes-frame.png';
import '../styles/Powers.css';

const powersData = [
  {
    title: 'Languages',
    list: ['Python', 'SQL', 'Java', 'JavaScript', 'HTML'],
  },
  {
    title: 'Tools',
    list: ['Google Colab', 'Jupyter', 'PostgreSQL', 'Canva', 'GitHub'],
  },
  {
    title: 'Tech Skills',
    list: ['AI', 'ML', 'Deep Learning', 'Cybersecurity', 'NLP'],
  },
  {
    title: 'Soft Skills',
    list: ['Communication', 'Team Leadership', 'Problem Solving', 'Time Management'],
  },
];

const Powers = () => {
  return (
    <section id="powers" className="powers-section">
      <img src={headingPowers} alt="My Powers Heading" className="powers-heading" />

      <div className="powers-content">
        <img src={powersGirl} alt="Powers Girl" className="powers-girl" />

        <div className="powers-notes">
          {powersData.map((block, index) => (
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
        </div>
      </div>
    </section>
  );
};

export default Powers;
