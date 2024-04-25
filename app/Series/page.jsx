"use client";
import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { entries } from "../public/sample.json";

const Series = () => {
  const [seriesData, setSeriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoadError, setImageLoadError] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const filteredData = entries.filter(
      (item) =>
        item.programType === "series" &&
        item.releaseYear >= 2010 &&
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const sortedData = filteredData.sort((a, b) => a.title.localeCompare(b.title));
    setSeriesData(sortedData.slice(0, 21));
  }, [searchQuery]);


  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(delay);
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const fallbackImage = "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-23.jpg";

  return (
    <>
      <Title title="Series" handleSearchInputChange={handleSearchInputChange} />
      {isLoading ? (
        <h1 className="text-2xl top-25 main-h1">Loading.......</h1>
      ) : (
        <div className="cards">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-4 p-4">
            {seriesData.map((item, index) => (
              <li key={item.title} className="mb-4">
                <div className="max-w-xs mx-auto bg-white rounded shadow-lg card-1">
                  <div className="h-48 sm:h-64  p-4">
                    <img
                      src={item.images["Poster Art"].url}

                      onError={(e) => {
                        if (imageLoadError) {
                          setImageLoadError(true);
                          e.target.src = fallbackImage;
                        }
                      }}
                      alt={item.title}
                      width={150}
                      height={225}
                      className="w-full h-full object-cover rounded-t"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600">{item.programType}</p>
                    <p className="text-lg font-bold mb-2">{item.title}</p>
                    <p className="text-sm text-gray-600">Release Year {item.releaseYear}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Series;
