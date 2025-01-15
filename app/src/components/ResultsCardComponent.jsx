import React from "react";

import countryNames from "../helper/countryNames";

export const ResultsCardComponent = ({ data, setviewSearch }) => {
  const getCountryName = (countryCode) => {
    return countryNames[countryCode] || "Unknown Country";
  };
  return (
    <section className="results-container">
      <nav className="results-navbar">
        <h1>Name Investigator App</h1>
        <button onClick={() => setviewSearch(true)}>
          Back To Search Results
        </button>
      </nav>
      <section className="results-card-container">
        {data.personalNames.map((result, index) => (
          <div key={index} className="results-card">
            <section className="results-info">
              <h4>{getCountryName(result.countryOrigin)}</h4>
              <p>
                <span>Probability:</span> {result.probabilityCalibrated}
              </p>
            </section>
            <section className="results-info">
              <h4>{getCountryName(result.countryOriginAlt)}</h4>
              <p>
                {" "}
                <span>Probability:</span> {result.probabilityAltCalibrated}
              </p>
            </section>
          </div>
        ))}
      </section>
    </section>
  );
};

export default ResultsCardComponent;
