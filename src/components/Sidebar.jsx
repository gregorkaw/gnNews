import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCountry } from "../features/country";
import countries from "../countries.json";
import codes from "../countriescodes.json";
import { changeShowsidebar } from "../features/showsidebar";
import { useNavigate } from "react-router-dom";

const countriesCodes = new Set(codes);

const Sidebar = () => {
  const currentCountry = useSelector((state) => state.country.value);
  const theme = useSelector((state) => state.theme.value);
  const showsidebar = useSelector((state) => state.showsidebar.value);
  const dispatch = useDispatch();
  const [customCountry, setCustomCountry] = useState("");
  const navigate = useNavigate();
  const [wrongCode, setWrongCode] = useState(false);
  const [loading, setLoading] = useState(false)

  return (
    <div
      style={{
        display: showsidebar ? "flex" : "",
        backgroundColor: theme ? "black" : "white",
      }}
      className="lg:p-0 p-4 py-0 lg:block absolute flex-col hidden lg:w-[20%]  lg:sticky rounded-xl lg:top-[110px]"
    >
      <div className="flex flex-col justify-center">
        <p className="flex font-bold justify-start text-lg items-center rounded-xl">
          Countries:
        </p>
        {countries.map((country) => {
          return (
            <p key={country.id}>
              <button
                onClick={() => {
                  setWrongCode(false);
                  dispatch(changeCountry(""));
                  setTimeout(() => {
                    dispatch(changeShowsidebar(false));
                  }, 1000);

                  dispatch(changeCountry(country.symbol));
                  navigate(`/country/${country.symbol}`);
                }}
              >
                <div
                  className="flex gap-4 shadow-xl justify-center items-center bg-zinc-900 p-2 rounded-xl my-2 hover:bg-zinc-600 active:bg-zinc-400 hover:scale-105 transition duration-150"
                  style={{
                    backgroundColor:
                      country.symbol === currentCountry
                        ? theme
                          ? "#111111"
                          : "#F0EEED"
                        : theme
                        ? "black"
                        : "white",
                  }}
                >
                  <img className="h-[16px] w-auto" src={country.flagURL} />
                  {country.name}
                </div>
              </button>
            </p>
          );
        })}
      </div>
      <div className="my-4 mt-8 flex flex-col lg:mx-8 text-sm justify-center items-center">
        <span className="text-center text-xs px8">
          <p className="font-bold text-[14px] mb-2">Can't find your country?</p>
          Write in 2-letter ISO code (ex: ru for Russia) and check if we can
          find your country's news!
        </span>
        <input
        data-testid="inputField"
          className="rounded-xl p-2 mt-2"
          style={{
            backgroundColor: theme ? "#111111" : "#F0EEED",
            color: theme ? "white" : "black",
          }}
          type="text"
          value={customCountry}
          onChange={(e) => setCustomCountry(e.target.value)}
        />{wrongCode ? <p data-testid="errorMsg">WRONG CODE!</p> : ""}
        <button
          data-testid="searchBtn"
          onClick={() => {
            if (countriesCodes.has(customCountry)) {
              setLoading(true)
              setWrongCode(false);
              dispatch(changeCountry(""));
              setTimeout(() => {
                dispatch(changeShowsidebar(false));
              }, 1000);
              dispatch(changeCountry(customCountry));
              navigate(`/country/${customCountry}`);
              setLoading(false)
            } else {
              setWrongCode(true);
              console.log(customCountry)
            }
          }}
        >
          {loading ? <p data-testid="loadingMsg">Loading..</p> : ""}
          <p className="bg-slate-900 p-2 rounded-xl mx-12 w-auto mt-1 hover:bg-slate-700 transition duration-150 hover:scale-105">
            Search
          </p>
          
        </button>
        <p className="text-xs my-2 italic">
          Here you can find the country codes:{" "}
          <a
            href="https://www.iban.com/country-codes"
            className="underline"
            target="blank"
          >
            LINK
          </a>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
