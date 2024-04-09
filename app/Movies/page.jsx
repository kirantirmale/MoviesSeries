"use client";
import React, { useEffect, useState } from "react";
import { entries } from "../public/sample.json";
import Title from "../components/Title";


const Movies = () => {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoadError, setImageLoadError] = useState(true);

  useEffect(() => {
    const filteredData = entries.filter((item) => item.programType === "movie" && item.releaseYear >= 2010);
    const sortedData = filteredData.sort((a, b) => a.title.localeCompare(b.title));
    setMovieData(sortedData.slice(0, 21));
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(delay);
  }, []);

  const fallbackImage =
  "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-23.jpg";


  return (
    <>
      <Title title="Movies"/>
      {isLoading ? (
        <h1 className="text-2xl main-h1">Loading.......</h1>
      ) : (
        <div className="cards">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-4 p-4">
            {movieData.map((item, index) => (
              <li key={item.title} className="mb-4">
                <div className="max-w-xs mx-auto bg-white rounded  shadow-lg card-1">
                  <div className="h-60 sm:h-72 p-4">
                    <img
                      src={item.images["Poster Art"].url}
                      alt={item.title}
                      onError={(e) => {
                        if (imageLoadError) {
                          setImageLoadError(true);
                          e.target.src = fallbackImage;
                        }
                      }}
                      width={150}
                      height={225}
                      className="w-full h-full object-cover rounded-t"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600">{item.programType}</p>
                    <p className="text-lg font-bold mb-2">{item.title}</p>
                    <p className="text-sm text-gray-600">Release  Year {item.releaseYear}</p>
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

export default Movies;
