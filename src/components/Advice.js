import React, { useEffect, useState } from "react";

const Advice = () => {
  const [advice, setAdvice] = useState("");

  const fetchData = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setAdvice(data.slip.advice);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    fetchData();
  };

  return (
    //  Advice Section
    <div className="copyright py-4 text-center text-white">
      <div className="container">
        <p className="lead mt-3">{advice}</p>
        <p>- Me.</p>
        <button onClick={handleClick} className="btn btn-primary">
          <i className="fas fa-sync fa-fw"></i>
        </button>
      </div>
    </div>
  );
};

export default Advice;
