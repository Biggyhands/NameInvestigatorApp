import React from "react";

import countryNames from "../helper/countryNames";
import CountryFlagComponent from "./CountryFlagComponent";
import CountryStickerComponent from "./CountryStickerComponent";

export const ResultsCardComponent = ({ data, setviewSearch }) => {
  const getCountryName = (countryCode) => {
    return countryNames[countryCode] || "Unknown Country";
  };

  const getPercentage = (countryPercentage) => {
    const percentage = Math.round(countryPercentage * 100);
    return `${percentage}%`;
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
              <div className="country-media-container">
                <CountryFlagComponent
                  countryName={getCountryName(result.countryOrigin)}
                />
                <CountryStickerComponent
                  stickerQuery={getCountryName(result.countryOrigin)}
                />
              </div>
              <div className="results-probability">
                <button>
                  Probability: {getPercentage(result.probabilityCalibrated)}
                </button>
              </div>
            </section>
            <section className="results-info">
              <h4>{getCountryName(result.countryOriginAlt)}</h4>
              <div className="country-media-container">
                <CountryFlagComponent
                  countryName={getCountryName(result.countryOriginAlt)}
                />
                <CountryStickerComponent
                  stickerQuery={getCountryName(result.countryOriginAlt)}
                />
              </div>
              <div className="results-probability">
                <button>
                  {" "}
                  Probability: {getPercentage(result.probabilityAltCalibrated)}
                </button>
              </div>
            </section>
          </div>
        ))}
      </section>
    </section>
  );
};

export default ResultsCardComponent;
