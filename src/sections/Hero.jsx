import React from 'react';
import heroBanner from '../assets/hero-banner.png';


const Hero = () => {
  return (
    <section id="hero" style={styles.container}>
      {/* Centered banner image with 75% width */}
      <div style={styles.bannerContainer}>
        <img src={heroBanner} alt="Hiyaa Malik Hero Banner" style={styles.bannerImage} />
      </div>

      {/* Navigation bar moved up */}
      <div style={styles.navContainer}>
        <div style={styles.navBar}>
          <a href="#about" style={styles.navLink}>ABOUT ME</a>
          <a href="#projects" style={{ textDecoration: 'none', color: '#000' }}>PROJECTS</a>
          <a href="#skills" style={styles.navLink}>SKILLS</a>
          <a href="#experience" style={styles.navLink}>WORK EXPERIENCE</a>
          <a href="#extracurriculars" style={styles.navLink}>EXTRA CURRICULARS</a>
          <a href="#contact" style={styles.navLink}>FIND ME</a>
        </div>
      </div>

      {/* Centered text content with increased width */}
      <div style={styles.textContainer}>
        <p style={styles.leadText}>
          <strong>I'VE ALWAYS BEEN DRAWN TO IDEAS — THE KIND YOU CAN FEEL, NOT JUST SOLVE.</strong>
        </p>
        <p style={styles.mainText}>
          THAT'S WHAT LED ME TO ALL: A SPACE WHERE CLOCK AND TECHNOLOGY MEET CREATIVITY, AND SMALL IDEAS CAN TURN INTO POWERFUL TOOLS. I LOVE BUILDING THOUGHTFUL, CREATIVE, AND IMPACTFUL PROJECTS. WHETHER IT'S SPARKING CURIOSITY, TELLING BETTER STORIES, OR HELPING PEOPLE SEE THE WORLD A LITTLE DIFFERENTLY. I ENJOY NOT JUST USING INTELLIGENT TOOLS BUT SHAPING THEM TOO. MY WORK IS GUIDED BY CURIOSITY, CLARITY, AND CREATIVITY. I'M NOT CHASING COMPLEXITY FOR THE SAKE OF IT. I CARE ABOUT BUILDING THINGS THAT MAKE SENSE, FEEL RIGHT, AND LEAVE AN IMPRESSION. I'M CURRENTLY EXPLORING MEANINGFUL APPLICATIONS OF AI THAT BRING VALUE TO EVERYDAY WONDER. OPEN TO OPPORTUNITIES WHERE INTELLIGENCE MEETS CREATIVITY AND IDEAS ARE BROUGHT TO LIFE WITH HEART.
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
        height: 'auto',
        display: 'block',
    },
    navContainer: {
        width: '100%',
        borderTop: '1px solid #000',
        borderBottom: '1px solid #000',
        marginBottom: '40px',
        marginTop: '-60px',
    },
    navBar: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '15px 0',
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
    },
    textContainer: {
        width: '100%',
        maxWidth: '900px', 
        margin: '-10px auto 50px', // Shifted up by 1cm (approximately -10px)
    },
    leadText: {
        fontWeight: '600',
        fontSize: '1.1rem',
        lineHeight: '1.6',
        marginBottom: '20px',
        letterSpacing: '0.02em',
    },
    mainText: {
        fontSize: '1rem',
        lineHeight: '1.6',
        letterSpacing: '0.01em',
        textAlign: 'center',
        margin: '0 auto',
    }
};

export default Hero;