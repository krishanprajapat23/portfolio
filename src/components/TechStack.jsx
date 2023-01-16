import React from "react";
import OwlCarousel from 'react-owl-carousel';  
import "../assets/css/owl.carousel.min.css";
import "../assets/css/owl.theme.default.css";
// import 'owl.carousel/dist/assets/owl.carousel.css';  
// import 'owl.carousel/dist/assets/owl.theme.default.css';  
// import "../assets/scripts/owl.carousel.js";

function TechStack() {
  const options = {
    loop: true,
    autoplay:true,
    rewind: true,
    // autoplayTimeout:5000,
    autoplayHoverPause:true,
    margin: 20,
    dots: false,
    // navContainer: '#experties-sec',
    nav: true,
    animateIn:true,
    navText:["<div class='nav-btn prev-slide fas fa-chevron-left'></div>","<div class='nav-btn next-slide fas fa-chevron-right'></div>"],
    items: 3,
    smartSpeed: 1000,
    responsiveClass: true,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:2
        },
        567:{
            items:3
        },
        991: {
            items:3
        },
        1280: {
          items:4
      },
    }
};


const techArr = [
  {
    id: 0,
    name: "HTML 5",
    url: "src/assets/img/html.webp",
  },
  {
    id: 1,
    name: "CSS 3",
    url: "src/assets/img/css.webp",
  },
  {
    id: 2,
    name: "SASS - SCSS",
    url: "src/assets/img/sass.webp",
  },
  {
    id: 3,
    name: "Javascript",
    url: "src/assets/img/js.webp",
  },
  {
    id: 4,
    name: "Bootstrap Framework",
    url: "src/assets/img/bootstrap.webp",
  },
  {
    id: 5,
    name: "ReactJS",
    url: "src/assets/img/reactjs.webp",
  },
  {
    id: 6,
    name: "VueJS",
    url: "src/assets/img/vuejs.webp",
  },
  {
    id: 7,
    name: "NuxtJS",
    url: "src/assets/img/nuxt.webp",
  },
  {
    id: 8,
    name: "Quasar",
    url: "src/assets/img/quasar.webp",
  },
  {
    id: 9,
    name: "Git",
    url: "src/assets/img/git.webp",
  },
  {
    id: 10,
    name: "Adobe Photoshop",
    url: "src/assets/img/ps.webp",
  },
]

  return (
    <section className="tech-sec" id="tech">
      <div className="container container-fluid">
        <div
          className="experties-slider-content d-flex flex-lg-row flex-column"
          id="experties-sec"
        >
          <div className="experties-header section-header text-start p-1">
            <h2 className="section-heading text-md-start text-center">
              <span className="tip">Technologies</span> I work with.
            </h2>
          </div>
          <div className="slider-container">
          <OwlCarousel 
          id="expertise-slider"
          className="owl-carousel owl-theme owl-slider"
          {...options}
          >  
          {techArr.map((el) => {let { id, name, url } = el;
          return (
              <div key={id} className="item slider-item">
                <div className="slider-img-wrapper">
                  <img
                    loading="lazy"
                    src={url}
                    alt={name}
                  />
                  <h6 className="info">{name}</h6>
                </div>
              </div>);
            })};
              </OwlCarousel>  
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
