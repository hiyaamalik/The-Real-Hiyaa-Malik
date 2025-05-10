import React from 'react';

import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Powers from './sections/Powers';
// import Experience from './sections/Experience';
// import Extras from './sections/Extras';
// import Contact from './sections/Contact';

const App = () => {
  return (
    <div>
      {<Hero /> }
      {<About /> }
      {<Projects /> }
      {<Powers /> }
      {/* Uncomment the sections you want to include */}
      {/* {<Experience />} */}
      {/* {<Extras />} */}
      {/* {<Contact />} */}
      
    </div>
  );
};

export default App;
