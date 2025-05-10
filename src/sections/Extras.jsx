import React, { useState } from 'react';
import headingExtra from '../assets/heading-extra.png';
import extraClubs from '../assets/extra-clubs.png';
import extraHackathons from '../assets/extra-hackathons.png';
import extraVolunteering from '../assets/extra-volunteering.png';
import ProjectModal from '../components/ProjectModal';
import '../styles/Extras.css';

const extracurriculars = [
  {
    title: 'Clubs & Events',
    image: extraClubs,
    details: 'Organized college fests, hosted open mics, and led creative club activities.',
  },
  {
    title: 'Hackathons & Competitions',
    image: extraHackathons,
    details: 'Participated in 10+ national-level hackathons; won 3 times for AI innovation.',
  },
  {
    title: 'Volunteering',
    image: extraVolunteering,
    details: 'Taught coding to underprivileged kids, and volunteered at community events.',
  },
];

const Extras = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="extras" className="extras-section">
      <img src={headingExtra} alt="Extracurriculars Heading" className="extras-heading" />

      <div className="extras-grid">
        {extracurriculars.map((item, index) => (
          <div
            className="extra-card"
            key={index}
            onClick={() => setSelected(item)}
          >
            <img src={item.image} alt={item.title} />
            
          </div>
        ))}
      </div>

      <ProjectModal
        show={!!selected}
        onClose={() => setSelected(null)}
        project={selected}
      />
    </section>
  );
};

export default Extras;
