import React from "react";

function Contact() {
    let email = "krishanprajapat213@gmail.com";

  return (
    <section id="contact" className="contact-sec">
      <div className="container-md container-fluid text-center">
        <h2 className="text-center section-heading mb-0">
          Let's <span className="tip">Connect.</span>
        </h2>
        <h3 className="py-3 mb-0">Want to work together or have any questions?</h3>
        <p className="w-75 mx-auto p-2 mb-0">
          If there is a project that you want to get started, think you need my
          help with something then don't hesitate to get in touch with me.
        </p>
        <a
          href={"mailto:"+email}
          className="btn btn-lg mail-link fw-bold"
        >
          <span className="fas fa-envelope"></span> Message me
        </a>
      </div>
    </section>
  );
}

export default Contact;
