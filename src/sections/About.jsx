import React from 'react';
import profilePolaroid from '../assets/profile-polaroid.png';
import dialogueBubble from '../assets/dialogue-bubble.png';
import decorItems from '../assets/decorative-items.png';
import aeroplane from '../assets/aeroplane.png';
import headingAbout from '../assets/heading-about.png';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about-container">
      <img src={headingAbout} alt="About heading" className="about-heading" />

      <div className="about-flex">
        {/* Text inside a PNG bubble */}
        <div className="about-bubble-wrapper">
          <img src={dialogueBubble} alt="Bubble" className="dialogue-bubble" />
          <div className="bubble-text">
            <p className="about-intro">
              You've read the part about my journey in AI and tech — this is the girl behind it all.
            </p>
            <p className="about-main">
              FULL OF DREAMS, DEPTH, AND A QUIET KIND OF FIRE. HI, I'M HIYAA MALIK— A COLLECTOR OF MOMENTS, A LOVER OF LITTLE THINGS, AND SOMEONE WHO BELIEVES LIFE'S TOO RARE TO LIVE ON REPEAT. YOU'LL FIND ME EVERYWHERE: PAINTING WHEN WORDS FALL SHORT, DANCING WHEN SILENCE FEELS LOUD, WRITING WHEN MY HEART NEEDS SPACE.
            </p>
            <p className="about-secondary">
              I TRY EVERYTHING THAT MAKES ME FEEL ALIVE — NOT TO ESCAPE LIFE, BUT TO TASTE IT FULLY. WHETHER IT'S SLOW MORNINGS WITH CHAI, SPONTANEOUS 3 AM IDEAS, READING WITH A CANDLE FLICKERING NEARBY, OR DISCOVERING NEW PLACES WITH WIDE EYES AND AN OPEN HEART — I LIVE FOR THE IN-BETWEENS, THE BEAUTIFULLY UNEXPECTED, THE SOFT MAGIC TUCKED INTO EVERYDAY LIFE. AND HONESTLY? THE LIST NEVER ENDS.
            </p>
          </div>
        </div>

        {/* Polaroid Image */}
        <img src={profilePolaroid} alt="Hiyaa Malik" className="about-polaroid" />
      </div>

      <div className="about-decorations">
        <img src={decorItems} alt="Decor items" className="decor-items" />
        <img src={aeroplane} alt="Airplane" className="airplane" />
      </div>
    </section>
  );
};

export default About;
