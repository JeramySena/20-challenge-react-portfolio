import React from 'react';
import profilePic from '../../assets/self/jeramy.jpg';

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img src={profilePic} className="profile-pic" style={{ width: "15%" }} alt="profile" />
      <div className="my-2">
        <p>
          My name is Jeramy Sena. I graduated from Kansas Wesleyan University in 2003 with a Bachelor of Arts in Music.
          I play multiple instruments including guitar, bass, drums, trumpet, and piano. I am looking for a new
          career in coding and I am excited to see what the future brings to me in this new field. I have a lot
          to learn but I have enjoyed the topics we have covered so far. In this web coding bootcamp
          we have covered front end web application such as HTML, CSS, and Javascript. We also have
          covered backend web application such as Express, Node.js, and React.
        </p>
      </div>
    </section>
  );
}

export default About;