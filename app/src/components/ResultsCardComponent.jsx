import React from "react";

export const ResultsCardComponent = ({ data }) => {
  return (
    <>
      <nav>
        <h1>Name Investigator App</h1>
      </nav>
      <section>
        {data.personalNames.map((result, index) => (
          <div key={index}>
            <section>
              <h4>Country Origin: {result.countryOrigin}</h4>
              <p>Probability: {result.probabilityCalibrated}</p>
            </section>
            <section>
              <h4>Country Origin Alternative: {result.countryOriginAlt}</h4>
              <p>Probability: {result.probabilityAltCalibrated}</p>
            </section>
          </div>
        ))}
      </section>
    </>
  );
};

export default ResultsCardComponent;
