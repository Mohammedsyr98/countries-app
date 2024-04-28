import { useContext } from "react";
import { CountryContext } from "../Context/CountryContext";

export default function Searchandfilter() {
  const { setInputOrSelect, textColor, bgcolor } = useContext(CountryContext);

  return (
    <div className="flex searchandinput gap-y-10  mt-11 flex-col md:flex-row">
      <form
        className={`max-w-md mx-auto h-14 basis-3/4 w-full ${
          bgcolor + " " + textColor
        }`}>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className={`h-14  block w-full p-4 ps-10 text-sm ${
              bgcolor + " " + textColor + " " + "placeholder:" + textColor
            }   rounded-lg`}
            placeholder="Search for a country..."
            onInput={(e) => setInputOrSelect(e.target.value)}
          />
        </div>
      </form>

      <form className="max-w-sm mx-auto placeholder-white h-14 basis-1/6 w-full">
        <select
          defaultValue="Filter by region"
          onChange={(e) =>
            e.target.value !== "Filter by region"
              ? setInputOrSelect(e.target.value)
              : setInputOrSelect(null)
          }
          id="countries"
          className={`${
            textColor + " " + bgcolor
          } h-14  text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 `}>
          <option>Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </form>
    </div>
  );
}
