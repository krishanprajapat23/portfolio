import React from "react";

function PortfolioSec() {
  const portfolio = [
    {
      id: 0,
      title: "Movie Info Club",
      url: "https://krishanprajapat23.github.io/movie-info-club",
      urlToImage: "src/assets/img/img-1.webp",
      description: null,
    },
    {
      id: 1,
      title: "Sign In Page",
      url: "https://krishanprajapat23.github.io/login-page-demo/?#",
      urlToImage: "src/assets/img/img-2.webp",
      description: null,
    },
    {
      id: 2,
      title: "Qoutes Page (ReactJS)",
      url: "https://krishanprajapat23.github.io/qoutes-site/",
      urlToImage: "src/assets/img/img-3.webp",
      description: null,
    },
    {
      id: 3,
      title: "Conference Website",
      url: "https://krishanprajapat23.github.io/conference-website/",
      urlToImage: "src/assets/img/img-4.webp",
      description: null,
    },
    {
      id: 4,
      title: "Music World Demo Page",
      url: "https://krishanprajapat23.github.io/music-world-html/",
      urlToImage: "src/assets/img/img-5.webp",
      description: null,
    },
    {
      id: 5,
      title: "30 Project of HTML-CSS-JS",
      url: "https://krishanprajapat23.github.io/30-Projects-with-HTML-CSS-and-JavaScript/",
      urlToImage: "src/assets/img/img-6.webp",
      description: null,
    },
  ];

  return (
    <>
      <section id="portfolio" className="portfolio-sec my-md-4">
        <div className="container-md container-fluid">
          <h2 className="section-heading text-center">
            What I <span className="tip">made.</span>
          </h2>
          <div className="portfolio-cards">
            <ul className="list-unstyled gap-4">
              
                {portfolio.map((el) => {
                  let { id, title, url, urlToImage } = el;
                  return (
                    <li key={id}>
                    <div className="cards h-100">
                      <a href={url} className="card-link" target="_blank"></a>
                      <div className="card-content">
                        <div className="img-wrapper overflow-hidden w-100 position-relative text-center">
                          <img
                            loading="lazy"
                            src={urlToImage}
                            alt="card-img"
                            className="img-fluid"
                          />
                          <div className="card-details hover-text d-flex justify-content-end align-items-center">
                            <span className="explore-btn btn">Explore</span>
                          </div>
                        </div>
                        <div className="cards-info">
                          <h5 className="card-title text-center p-2">{title}</h5>
                        </div>
                      </div>
                    </div>
                    </li>
                  );
                })}
             
            </ul>
          </div>
          <div className="more-project text-center">
            <a
              href="https://github.com/krishanprajapat23?tab=repositories"
              target="_blank"
              className="p-3 d-inline-block fw-bold"
            >
              View all Projects <i className="fa fa-folder-open"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default PortfolioSec;
