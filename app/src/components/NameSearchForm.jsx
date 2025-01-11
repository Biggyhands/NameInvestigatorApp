import { useState } from "react";
import { useForm } from "../hooks/useForm";

import { AppTitle } from "./appTitle";
import { SearchBar } from "./SearchBar";

export default function NameSearchForm() {
  const { formState, onInputChange, onResetForm } = useForm({
    firstName: "",
    lastName: "",
  });

  const { firstName, lastName } = formState;

  console.log(firstName, lastName);

  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const handleSearch = async () => {
    try {
      const apiKey = import.meta.env.VITE_NAMSOR_API_KEY;
      const response = await fetch(
        "https://v2.namsor.com/NamSorAPIv2/api2/json/originBatch",
        {
          method: "POST",
          headers: {
            "X-API-KEY": apiKey,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            personalNames: [
              {
                id: "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                firstName: firstName,
                lastName: lastName,
              },
            ],
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("API Response:", data);
        setData(data);
        setError(null);
      } else {
        console.error(
          "The request failed with status:",
          response.status,
          response
        );
        setError(`Request failed with status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error during fetch:", error);
      setError("Error during fetch");
    }
  };

  return (
    <>
      <AppTitle />
      <SearchBar
        onInputChange={onInputChange}
        onResetForm={onResetForm}
        onSearch={handleSearch}
      />{" "}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data && (
        <div>
          <h3>Search Results:</h3>
          {data.personalNames.map((result, index) => (
            <div key={index}>
              <p>Country Origin: {result.countryOrigin}</p>
              <p>Country Origin Alt: {result.countryOriginAlt}</p>
              <p>Probability Calibrated: {result.probabilityCalibrated}</p>
              <p>
                Probability Alt Calibrated: {result.probabilityAltCalibrated}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
