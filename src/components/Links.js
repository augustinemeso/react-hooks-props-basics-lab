import React from 'react';

const Links = ({ github, linkedin }) => {
  return (
    <div>
      <h3>Links</h3> {/* Ensure this line is present */}
      <a href={github} target="_blank" rel="noopener noreferrer">
        {github}
      </a>
      <br />
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        {linkedin}
      </a>
    </div>
  );
};

export default Links;
