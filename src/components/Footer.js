import React from "react";

const Footer = () => {
  return (
    //  Footer
    <footer className="footer text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Location</h4>
            <p className="lead mb-0">
              Irfan Bayu Setiawan
              <br />
              Bekasi, Indonesia
            </p>
          </div>
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Around the Web</h4>
            <a
              className="btn btn-outline-light btn-social mx-1"
              href="https://www.facebook.com"
            >
              <i className="fab fa-fw fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-outline-light btn-social mx-1"
              href="https://www.twitter.com"
            >
              <i className="fab fa-fw fa-twitter"></i>
            </a>
            <a
              className="btn btn-outline-light btn-social mx-1"
              href="https://www.linkedin.com"
            >
              <i className="fab fa-fw fa-linkedin-in"></i>
            </a>
            <a
              className="btn btn-outline-light btn-social mx-1"
              href="https://www.dribbble.com"
            >
              <i className="fab fa-fw fa-dribbble"></i>
            </a>
          </div>
          <div className="col-lg-4">
            <h4 className="text-uppercase mb-4">About Freelancer</h4>
            <p className="lead mb-0">
              <small>
                Freelance is a free to use, MIT licensed Bootstrap theme created
                by
                <a href="http://startbootstrap.com">Start Bootstrap</a>.
              </small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
