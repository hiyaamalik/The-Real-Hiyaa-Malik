import React, { useState } from 'react';
import headingExtra from '../assets/heading-extra.png';
import extraClubs from '../assets/extra-clubs.png';
import extraHackathons from '../assets/extra-hackathons.png';
import extraVolunteering from '../assets/extra-volunteering.png';
import ProjectModal from '../components/ProjectModal';
import '../styles/Extras.css';
import Aihorizon from '../assets/Aihorizon.png';
import IEEEIndicon from '../assets/IEEEIndicon.png';

const extracurriculars = [
  {
    title: 'Clubs & Events',
    image: extraClubs,
    modalContent: {
      extraImages: [extraClubs],
      details: 'Organized college fests events and university club events, and hosted industry guest lectures and conferences sessions.',
      fullDescription: [
        'Started as a member of the design team at IEEE Student Branch, AMity University and was later promoted to Head of Design. Led the creation of social media graphics, event branding, and all visual content for technical and promotional campaigns.',
        'Later on became the Vice President of Srijan Art Club where we led and hosted multiple creative events, coordinated art volunteering initiatives, and organized NGO outreach drives to promote community engagement through art.',
        'Part of the organizing committee for Battleground Arena at Amity Youth Fest 2024 — managed event planning, sponsorship coordination, and design collateral.',
        'Served as Master of Ceremony for multiple guest lectures and conference sessions, ensuring smooth flow and audience engagement.',
      ],
      achievements: [
        'Demonstrated leadership and creativity through event and design management roles.',
        'Developed strong communication skills as host for various formal sessions.',
        'Managed sponsorships, logistics, and branding for large-scale college events.',
        'Strengthened teamwork, organization, and problem-solving across multiple student-led initiatives.',
      ],
    },
  },
  {
    title: 'Hackathons & Competitions',
    image: extraHackathons,
    modalContent: {
      extraImages: [
        Aihorizon, IEEEIndicon
      ],
      details: 'Recognized in National Hackathons for Innovative Tech Solutions and Social Impact',
      fullDescription: [
        'Actively participated in national-level hackathons and innovation challenges with a focus on AI for social good.',
        'As part of Team Adyant, co-developed Project N: The Women Safety and Analytics Tool, an AI-based solution featuring smart surveillance and SOS systems.',
        'he project was selected among the Top 10 finalists at IEEE Intel INDICON 2024 held at IIT Kharagpur, after clearing multiple rounds including research paper, technical demo, and live pitching.',
        'It also secured 2nd place at AI Horizon 2.0, IIM Bodh Gaya, for its innovative approach to enhancing public safety.',
        'Additionally , participated in Technovate Hackathon by Sharda University, where we (an all girls trio), represented our team as ByteForce in the final round (24 hour hackathon). '
      ],
      achievements: [
        'Top 10 Finalist, IEEE Intel INDICON 2024 @ IIT Kharagpur – Selected for the national grand finale live pitch round for Project N, an AI-based women safety tool.',
        '2nd Place, AI Horizon 2.0 @ IIM Bodh Gaya – Recognized for innovation in AI for social impact with Project N.',
      ],
    },
  },
  {
    title: 'Volunteering',
    image: extraVolunteering,
    modalContent: {
      extraImages: [extraVolunteering],
      details: 'Coming Soon',
      fullDescription: [
        'Coming Soon',
        
      ],
      achievements: [
        'Coming Soon',
        
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