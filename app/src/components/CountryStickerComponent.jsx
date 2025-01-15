import React, { useState, useEffect } from "react";

export default function CountryStickerComponent({ stickerQuery }) {
  const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
  const [stickerUrl, setStickerUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSticker = async () => {
      try {
        const response = await fetch(
          `https://api.giphy.com/v1/stickers/search?api_key=${apiKey}&q=${stickerQuery}&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
        );
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const data = await response.json();
        const sticker = data.data[0];
        setStickerUrl(sticker.images.original.url);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchSticker();
  }, [apiKey, stickerQuery]);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div>
      {stickerUrl ? (
        <img className="country-sticker" src={stickerUrl} alt="Giphy Sticker" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
