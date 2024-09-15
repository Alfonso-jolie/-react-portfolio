import React from 'react';
import './App.css';
import myPhoto from './pics/lebron.jpg'; 
import project1 from './pics/kick.png'; 
import project2 from './pics/iphone.png'; 
import project3 from './pics/website.png'; 


function App() {
  return (
    <div className="App">
      <header>
        <h1>My Portfolio</h1>
      </header>
      <section id="about-me">
  <h2>About Me</h2>
  <img src={myPhoto} alt="Alfonso Jolie Castillo" style={{ width: '150px', borderRadius: '50%' }} />
  <p>Hi! I'm a 3rd-year Computer Science student at De La Salle Lipa with a passion for tech and coding. I'm eager to take on new challenges and improve my skills through projects, group work, and internships. 
  Outside of coding, I enjoy exploring tech trends, playing video games, and hanging out with friends. Excited to connect and grow in the world of CS!</p>
</section>

<section id="projects">
  <h2>Projects</h2>
  <ul>
    <li>
      <h3>Project 1</h3>
      <p>Kick Streaming is a dynamic and engaging platform dedicated to live streaming and video content. It offers a seamless experience for both content creators and viewers, featuring high-quality video streaming, interactive chat, and a wide array of entertainment options.</p>
      <img src={project1} alt="Project 1" style={{ width: '200px' }} />
    </li>
    <li>
      <h3>Project 2</h3>
      <p>The iPhone is a line of smartphones designed and marketed by Apple Inc. It combines a mobile phone, iPod, and internet communication device in a single handheld device.</p>
      <img src={project2} alt="Project 2" style={{ width: '200px' }} />
    </li>
    <li>
      <h3>Project 3</h3>
      <p>A simple globe or earth icon to symbolize global reach or creativity.</p>
      <img src={project3} alt="Project 3 " style={{ width: '200px' }} />
    </li>
  </ul>
</section>

      <section id="contact-me">
        <h2>Contact Me</h2>
        <li>Email: <a href="mailto:alfonso_jolie_castillo@dlsl.edu.ph">alfonso_jolie_castillo@dlsl.edu.ph</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/samael-luck-040312328/" target="_blank" rel="noopener noreferrer">My LinkedIn Profile</a></li>
        <li>GitHub: <a href="https://github.com/Alfonso-jolie" target="_blank" rel="noopener noreferrer">My GitHub Profile</a></li>
      </section>
    </div>
  );
}

export default App;