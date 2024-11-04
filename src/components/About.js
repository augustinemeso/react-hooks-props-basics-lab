import React from 'react';

const About = ({ bio }) => {
  // Only render the <p> if bio is provided and not an empty string
  return bio ? <p>{bio}</p> : null;
};

export default About;
