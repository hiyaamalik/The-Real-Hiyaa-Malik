import React from 'react';
import heroBanner from '../assets/hero-banner.png';

const Hero = () => {
  return (
    <section id="hero" style={styles.container}>
      {/* Centered banner image with responsive width */}
      <div style={styles.bannerContainer}>
        <img src={heroBanner} alt="Hiyaa Malik Hero Banner" style={styles.bannerImage} />
      </div>

      {/* Navigation bar with responsive layout */}
      <div style={styles.navContainer}>
        <div style={styles.navBar}>
          <a href="#about" style={styles.navLink}>ABOUT ME</a>
          <a href="#projects" style={styles.navLink}>PROJECTS</a>
          <a href="#powers" style={styles.navLink}>SKILLS</a>
          <a href="#experience" style={styles.navLink}>WORK EXPERIENCE</a>
          <a href="#extras" style={styles.navLink}>EXTRA CURRICULARS</a>
          <a href="#contact" style={styles.navLink}>FIND ME</a>
        </div>
      </div>

      {/* Responsive text content */}
      <div style={styles.textContainer}>
        <p style={styles.leadText}>
          <strong>I'VE ALWAYS BEEN DRAWN TO IDEAS — THE KIND YOU CAN FEEL, NOT JUST SOLVE.</strong>
        </p>
        <p style={styles.mainText}>
          I've always been drawn to ideas — the kind you can feel, not just solve. 
          That's what led me to AI: a space where logic and technology meet creativity, and small ideas can turn into powerful tools. I love building
          thoughtful, creative, and impactful projects. Whether it's sparking curiosity, telling better stories, or helping people see the world a
          little differently, I enjoy not just using intelligent tools but shaping them too. My work is guided by curiosity, clarity, and creativity. I'm
          not chasing complexity for the sake of it. I care about building things that make sense, feel right, and leave an impression.
          I'm currently exploring meaningful applications of AI that bring value to everyday moments. Open to opportunities where intelligence
          meets creativity and ideas are brought to life with heart.
        </p>
      </div>
    </section>
  );
};

const styles = {
  container: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    fontFamily: 'inherit',
    textAlign: 'center',
  },
  bannerContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto 20px',
  },
  bannerImage: {
    width: '75%',
    maxWidth: '900px',
    height: 'auto',
    display: 'block',
    '@media (max-width: 768px)': {
      width: '90%',
    },
  },
  navContainer: {
    width: '100%',
    borderTop: '1px solid #000',
    borderBottom: '1px solid #000',
    marginBottom: '40px',
    marginTop: '-60px',
    '@media (max-width: 768px)': {
      marginTop: '-30px',
    },
  },
  navBar: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '15px 0',
    overflowX: 'auto',
    '@media (max-width: 768px)': {
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: '10px 0',
    },
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: '500',
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    whiteSpace: 'nowrap',
    padding: '0 10px',
    fontFamily: 'inherit',
    '@media (max-width: 768px)': {
      fontSize: '0.8rem',
      padding: '5px 8px',
      margin: '0 5px',
    },
  },
  textContainer: {
    width: '100%',
    maxWidth: '900px', 
    margin: '-10px auto 50px',
    '@media (max-width: 768px)': {
      margin: '0 auto 30px',
      padding: '0 15px',
    },
  },
  leadText: {
    fontWeight: '600',
    fontSize: '1.1rem',
    lineHeight: '1.6',
    marginBottom: '20px',
    letterSpacing: '0.02em',
    '@media (max-width: 768px)': {
      fontSize: '1rem',
      marginBottom: '15px',
    },
  },
  mainText: {
    fontSize: '1rem',
    lineHeight: '1.6',
    letterSpacing: '0.01em',
    textAlign: 'center',
    margin: '0 auto',
    '@media (max-width: 768px)': {
      fontSize: '0.9rem',
      textAlign: 'left',
      lineHeight: '1.5',
    },
  },
};

export default Hero;