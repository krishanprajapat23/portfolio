import React from "react";

function HeroSec(props) {
  return (
    <>
      <div className="top-section-content">
        <div className="title">
          <h1 className="title-intro sacramento-font">I'm {props.name}</h1>
          <p className="title-skill">a Web Designer and Frontend Developer</p>
        </div>
      </div>
    </>
  );
}

export default HeroSec;
