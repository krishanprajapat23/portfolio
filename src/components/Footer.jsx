import React from 'react'

function Footer() {
    let dateYear = new Date().getFullYear();
    let linkedin = "https://in.linkedin.com/in/krishanprajapat", github = "https://github.com/krishanprajapat23";
    // console.log(dateYear)
  return (
    <footer className="site-footer text-center mt-4 p-3">
        <div className="container">
            <p className="copy-text">© {dateYear} All Rights Reserved</p>
            <section className="social">
                  <a href={linkedin} target="_blank" className="d-inline-block rounded-circle m-1"><i className="fab fa-linkedin-in"></i></a>
                  <a href={github} target="_blank" className="d-inline-block rounded-circle m-1"><i className="fab fa-github"></i></a>
        </section>
        </div>
    </footer>
  )
}

export default Footer