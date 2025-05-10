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
    modalContent: {
      extraImages: [extraClubs], // Add more images if needed
      details: 'Organized college fests, hosted open mics, and led creative club activities.',
      fullDescription: 'As part of the college clubs, I organized multiple events including annual fests, open mic nights, and workshops. I also led a team of 20+ members in the Creative Arts Club.',
      achievements: [
        'Managed events with 500+ attendees',
        'Won "Best Organizer" award in 2022',
      ],
    },
  },
  {
    title: 'Hackathons & Competitions',
    image: extraHackathons,
    modalContent: {
      extraImages: [
        "https://media.licdn.com/dms/image/v2/D5622AQG84hITK_m9Mw/feedshare-shrink_2048_1536/B56ZTRU.0qHsAo-/0/1738678728282?e=1749686400&v=beta&t=MqYvixNsed2HAMs5Rh9G7mtqN-vqd7LcQxl-6bifX38",
        "https://media.licdn.com/dms/image/v2/D5622AQGsoIDvYWQtLg/feedshare-shrink_1280/B56ZTA4z_NGsAo-/0/1738402906811?e=1749686400&v=beta&t=CGmIYb_eCwIRzjPkFTc8zZ_Rb1hZeT63p6p8AXpoaYI"
      ],
      details: 'Participated in 10+ national-level hackathons; won 3 times for AI innovation.',
      fullDescription: 'Competed in hackathons like Smart India Hackathon, HackTheNorth, and others. Built AI-powered solutions for real-world problems.',
      achievements: [
        '1st Place - AI Innovation Challenge (2023)',
        'Top 5 - National Hackathon League',
      ],
    },
  },
  {
    title: 'Volunteering',
    image: extraVolunteering,
    modalContent: {
      extraImages: [extraVolunteering],
      details: 'Taught coding to underprivileged kids, and volunteered at community events.',
      fullDescription: 'Volunteered with NGOs to teach Python and web development to kids. Organized charity drives and community clean-up events.',
      achievements: [
        '100+ hours of teaching',
        'Led a team of 15 volunteers',
      ],
    },
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
            <img src={item.image} alt={item.title} className="extra-card-image" />
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