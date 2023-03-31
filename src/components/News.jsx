import React, { useEffect } from "react";
import DisplayNews from "./DisplayNews";
import DisplayGrid from "./DisplayGrid";
import { useSelector, useDispatch } from "react-redux";
import { changeCountry } from "../features/country";
import { useParams } from "react-router-dom";

const News = () => {
  const dispatch = useDispatch();
  const { country } = useParams();

  useEffect(() => {
    dispatch(changeCountry(country));
  }, []);

  const display = useSelector((state) => state.display.value);

  return (
    <div className="lg:mx-0 md:mx-24 sm:mx-12">
      {display ? <DisplayNews /> : <DisplayGrid />}{" "}
    </div>
  );
};

export default News;
