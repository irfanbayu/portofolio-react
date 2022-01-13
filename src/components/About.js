import React from "react";

const About = () => {
  return (
    // About Section
    <section className="page-section bg-primary text-white mb-0" id="about">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-white">
          About
        </h2>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row">
          <div className="col-lg-4 ml-auto">
            <p className="lead">
              Experienced Production Planning with a demonstrated history of
              working in the manufacturing industry. Skilled in Programming,
              Design Graphics, Planning Production, and Photography. Strong
              interest in Front-end Developer and UI/UX Design with a Bachelor
              of Computer Science (S. Kom.) focused in informatics engineering
              from the University of Mercu Buana
            </p>
          </div>
          <div className="col-lg-4 mr-auto">
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              voluptatem, itaque inventore, dolorem perspiciatis reiciendis
              ratione modi quod quasi nihil quae illo dicta similique laboriosam
              repellendus error hic eum omnis.
            </p>
          </div>
        </div>
        <div className="text-center mt-4">
          <a
            className="btn btn-xl btn-outline-light"
            href="https://linkedin.com"
          >
            <i className="fas fa-download mr-2"></i>
            Download My CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
