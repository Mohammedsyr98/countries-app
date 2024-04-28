import "./App.css";
import Navbar from "./componenets/Navbar";
import Cards from "./componenets/Cards";
import Searchandfilter from "./componenets/Searchandfilter";
import { Routes, Route, Router } from "react-router-dom";
import { useContext } from "react";

import CountryDetails from "./componenets/CountryDetails";
import { CountryContext } from "./Context/CountryContext";

function App() {
  const { data, darkmode } = useContext(CountryContext);
  return (
    <div
      className={`${darkmode ? `bg-white` : `bg-darkcolor`} App`}
      style={{ minHeight: "100vh" }}>
      <Navbar />
      <Routes>
        {data ? (
          <Route
            path="/country-details/:selectedCountry?"
            element={<CountryDetails data={data} />}
          />
        ) : (
          ""
        )}
        <Route
          path="/"
          element={
            <>
              <Searchandfilter />
              <Cards />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
