import React, { useState, useEffect } from "react";

export const CountryFlagComponent = ({ countryName }) => {
  const [flag, setFlag] = useState(null);
  const [altText, setAltText] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlag = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
        );
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const data = await response.json();
        const country = data[0];
        setFlag(country.flags.png);
        setAltText(country.flags.alt);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchFlag();
  }, [countryName]);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div>
      {flag ? (
        <img className="country-flag" src={flag} alt={altText} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CountryFlagComponent;
