import ss from "../images/ss.jpg";
/* eslint-disable jsx-a11y/alt-text */
import { CountryContext } from "../Context/CountryContext";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  console.log(ss);
  const { selectedCountry } = useParams();
  const { data, textColor } = useContext(CountryContext);

  // selected country
  const [country] = data.filter((country) =>
    country.alpha3Code === selectedCountry ? country : ""
  );

  return (
    <div className={`w-11/12 mx-auto ${textColor} `}>
      {/* Head */}
      <div className="head flex  ">
        <Link to="/">
          <button className={`${textColor} flex mt-6 gap-2 items-center`}>
            <FaArrowLeftLong className={`h-4 ${textColor}`} />
            <span className=" text-xl">Back</span>
          </button>
        </Link>
      </div>
      {/* Content */}
      <div className="content mt-6 flex flex-col sm:md:flex-wrap md:flex-col lg:flex-row lg:flex-nowrap">
        <div className="flag basis-2/5">
          {/* Flag */}
          <img src={country.alpha3Code === "SYR" ? ss : country.flag} />
        </div>
        {/* Country details */}
        <div className="details basis-3/5 text-left lg:ml-6">
          <h2 className="text-3xl font-semibold ">{country.name}</h2>
          <div className="flex flex-nowrap lg:flex-row flex-col justify-center justify-between mt-6 gap-7">
            <div className="flex flex-col gap-7 text-lg font-semibold">
              <span className="">
                Native Name:
                <span className="font-normal"> {country.nativeName}</span>
              </span>
              <span>
                Population:{" "}
                <span className="font-normal">
                  {country.population.toLocaleString()}
                </span>
              </span>
              <span>
                Region: <span className="font-normal">{country.region}</span>
              </span>
              <span>
                Sub Region:{" "}
                <span className="font-normal">{country.subregion}</span>
              </span>
              <span>
                Capital:{" "}
                <span className="font-normal">
                  {country.capital ? country.capital : "No capital"}
                </span>
              </span>
            </div>
            <div className="flex flex-col lg:mr-10 gap-7 text-xl font-semibold">
              <span>
                Top Level Domain:{" "}
                <span className="font-normal">{country.topLevelDomain}</span>
              </span>
              <span>Currencies: {country.currencies[0].name}</span>
              <span>Languages: {country.languages[0].name}</span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-5 border-countries text-lg font-semibold mt-7">
            Border Countries :
            <div className="flex flex-wrap flex-row gap-5">
              {country.borders
                ? country.borders.map((border) => (
                    <Link
                      className="bg-darkcolor w-20 text-center h-8 rounded shadow-dark"
                      to={`/country-details/${border}`}>
                      {border}
                    </Link>
                  ))
                : "No borders"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
