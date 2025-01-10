import { AppTitle } from "./appTitle";
import { SearchBar } from "./SearchBar";

export default function NameSearchForm() {
  const handleSearch = async () => {
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
              firstName: "Robert",
              lastName: "",
            },
          ],
        }),
      }
    );

    if (response.ok) {
      const data = await response.json(); // Extract JSON data from response
      console.log(data); // View data in the console
    } else {
      console.error(
        "The request failed with status:",
        response.status,
        response
      );
    }
  };

  handleSearch();

  return (
    <>
      <AppTitle />
      <SearchBar />
    </>
  );
}
