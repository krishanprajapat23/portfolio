import React from 'react'

function Skills() {
  return (
    <section id="skill" className="skill-sec">
    <div className="container-md container-fluid">

        <div className="skill-section-content text-md-start text-center">
            <h2 className="section-heading text-center">What I can <span className="tip">do.</span></h2>
            <div className="skill-inner row p-md-4 p-1 ">
                <div className="col-md-4 text-center">
                    <div className="img-wrapper mx-auto">
                        <img loading="lazy" src="src/assets/img/design.webp" className="skill-design-image animated pulse infinite" />
                    </div>
                </div>
                <div className="col-md-8 text-container pt-md-0 pt-3">
                    <h3 className="skill-design-head">Website Designing</h3>
                    <p className="skill-design-desc">I like to keep it simple. My goals are to focus on typography,
                        content and conveying the message that you want to send.</p>
                </div>
            </div>
            <div className="skill-inner row p-md-4 p-1 ">
                <div className="col-md-4 text-center">
                    <div className="img-wrapper mx-auto">

                        <img loading="lazy" src="src/assets/img/web-dev.webp"
                            className="skill-develop-image animated pulse infinite" />
                    </div>
                </div>
                <div className="col-md-8 text-container pt-md-0 pt-3">
                    <h3 className="skill-develop-head nova-font color-blue">Website Development</h3>
                    <p className="skill-develop-desc rubik-font color-grey">I'm a developer, so I know how to create
                        your website to run across devices using the latest technologies available.</p>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default Skills