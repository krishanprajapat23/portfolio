import React from "react";

function AboutMe() {
  return (
    <section id="about" className="about-sec">
      <div className="container-md container-fluid">
        <div className="about-sec-content text-center mx-auto">
          <img
            loading="lazy"
            src="src/assets/img/about-img.webp"
            alt="about sec image"
            className="rounded-circle m-3"
          />
          <h4 className="py-3 m-0">Hello! 👋</h4>
          <p className="about-sect-desc">
            I am Krishan, a web designer and frontend developer based in
            Rajasthan, India. I have a great passion for web designing and web
            application development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
