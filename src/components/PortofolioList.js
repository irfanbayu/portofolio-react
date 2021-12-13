import React, { useEffect, useState } from "react";
import Card from "./Card";

const PortofolioList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.jsonbin.io/b/5f3833874d9399103615755f/2")
      .then((result) => result.json())
      .then((data) => setData(data.portolist))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <section className="page-section portfolio" id="portfolio">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Portofolio
          </h2>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <div className="row">
            {data.map((e, i) => {
              return <Card data={e} key={i} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default PortofolioList;
