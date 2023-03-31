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
    <div className="w-full my-12 min-h-[100vh] lg:mx-16 flex flex-col justify-center items-center lg:items-start">
      {data && data.articles.length > 0 ? 
      data.articles.map((news) => <NewsBlock news={news} key={news.title} />)
      : 
      <div className="w-full"><Loading /></div>
      }
      
    </div>
  );
};

export default DisplayNews;
