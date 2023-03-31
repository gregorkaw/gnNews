import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetEverythingQuery } from "../features/apiSlice";
import { changeArticlessize } from "../features/articlessize";
import Loading from "./Loading";
import NewsBlock from "./NewsBlock";

const DisplayNews = () => {
  const dispatch = useDispatch()
  const country = useSelector((state) => state.country.value);
  const { data } = useGetEverythingQuery(country);

  useEffect(() => {
    if(data && data.articles.length > 0 ){
      dispatch(changeArticlessize(data.articles.length))
    }
  }, [data])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[100vh] w-full my-12 lg:mx-16 justify-center items-start">
      {data && data.articles.length > 0 ? 
      data.articles.map((news) => <NewsBlock news={news} key={news.title} />)
      : 
      <div className="w-full"><Loading /></div>
      }
      
    </div>
  );
};

export default DisplayNews;
