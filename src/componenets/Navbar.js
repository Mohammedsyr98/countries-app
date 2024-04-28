import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { CountryContext } from "../Context/CountryContext";
import { useContext } from "react";
export default function Navbar() {
  const { darkmode, setDarkMode, textColor, bgcolor } =
    useContext(CountryContext);
  return (
    <div
      className={`h-20 flex text-2xl font-semibold ${bgcolor}  ${textColor}`}>
      <div className="w-11/12 mx-auto  sticky flex items-center  justify-between">
        <h1>Where in the world?</h1>
        <div
          className="theme-mode flex gap-3 cursor-pointer"
          onClick={() => setDarkMode(darkmode ? false : true)}>
          {darkmode ? <FaRegMoon /> : <MdOutlineWbSunny />}

          <span className="text-base">
            {darkmode ? "Dark Mode" : "Light Mode"}
          </span>
        </div>
      </div>
    </div>
  );
}
