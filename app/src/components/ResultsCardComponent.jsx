import React from "react";

export const ResultsCardComponent = ({ data }) => {
  return (
    <section className="results-container">
      <nav className="results-navbar">
        <h1>Name Investigator App</h1>
        <button>Back To Search Results</button>
      </nav>
      <section className="results-card-container">
        {data.personalNames.map((result, index) => (
          <div key={index} className="results-card">
            <section className="results-info">
              <h4>Country Origin: {result.countryOrigin}</h4>
              <p>Probability: {result.probabilityCalibrated}</p>
            </section>
            <section className="results-info">
              <h4>Country Origin Alternative: {result.countryOriginAlt}</h4>
              <p>Probability: {result.probabilityAltCalibrated}</p>
            </section>
          </div>
        ))}
      </section>
    </section>
  );
};

export default ResultsCardComponent;
