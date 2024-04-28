import axios from "axios";
import { useEffect, createContext, useState } from "react";

export const CountryContext = createContext();
export const CountryContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState({});
  const [regions, setRegion] = useState("");
  const [inputorselect, setInputOrSelect] = useState(null);
  const [darkmode, setDarkMode] = useState(false);
  const [textColor, bgcolor] = [
    darkmode ? "text-black" : "text-white",
    darkmode ? `bg-white shadow-light` : `bg-darkcolor shadow-dark`,
  ];

  useEffect(() => {
    axios("/data.json").then((response) => {
      if (inputorselect != null) {
        setData(null);
        const filteredData = response.data.filter(
          (country) =>
            country.name.toUpperCase().includes(inputorselect.toUpperCase()) ||
            country.region === inputorselect
        );

        // Use functional update to append new data to existing data
        setData((prevData) => {
          if (prevData) {
            return [...prevData, ...filteredData];
          } else {
            return filteredData;
          }
        });
      } else {
        setData(response.data);
      }

      const region = response.data
        ? Array.from(new Set(response.data.map((country) => country.region)))
        : "";
      setRegion(region);
    });
  }, [inputorselect]);

  return data ? (
    <CountryContext.Provider
      value={{
        data,
        setData,
        selectedCountry,
        setSelectedCountry,
        regions,
        setRegion,
        inputorselect,
        setInputOrSelect,
        darkmode,
        setDarkMode,
        textColor,
        bgcolor,
      }}>
      {children}
    </CountryContext.Provider>
  ) : (
    ""
  );
};
