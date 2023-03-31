import React from "react";
import { useSelector } from "react-redux";

const NewsBlock = (news) => {
  const display = useSelector((state) => state.display.value);
  const theme = useSelector((state) => state.theme.value);
  const newsDate = news.news.publishedAt.slice(0, 10);
  const newsDateHour = news.news.publishedAt.slice(11, 16);

  if (display === false) {
    return (
      //design grida
      <a
        href={news.news.url}
        target="blank"
        className="flex flex-col justify-between rounded-xl lg:w-[80%] p-6 my-4 transition duration-200 hover:scale-105 min-h-[300px] min-w-[240px] shadow-2xl"
        style={{
          backgroundColor: theme ? "#111111" : "#F0EEED",
          color: theme ? "white" : "black",
        }}
      >
        <div>
          {display === false && news.news.urlToImage != null ? (
            <img className="mb-2" src={news.news.urlToImage} />
          ) : (
            <p className="mb-2"> </p>
          )}
          <p className="font-bold mb-6">{news.news.title}</p>
        </div>
        <div>
          <p className="text-[14px] italic">{news.news.author}</p>
          <p className="text-[14px]">
            {newsDate} {newsDateHour}
          </p>
        </div>
      </a>
    );
  } else {
    //design listy
    return (
      <a
        href={news.news.url}
        target="blank"
        className="my-6 lg:w-[75%] p-6 rounded-xl shadow-xl h-5/6 hover:scale-105 transition duration-150"
        style={{
          backgroundColor: theme ? "#111111" : "#F0EEED",
          color: theme ? "white" : "black",
        }}
      >
        {display === true && news.news.urlToImage != null ? (
          <img className="mb-2 lg:hidden block" src={news.news.urlToImage} />
        ) : (
          <p className="mb-2"> </p>
        )}
        <p className="mb-6 lg:mb-4 font-bold">{news.news.title}</p>
        <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center lg:gap-4">
          <p className="text-[14px] italic">{news.news.author}</p>
          <p className="text-[14px]">
            {newsDate} {newsDateHour}
          </p>
        </div>
      </a>
    );
  }
};

export default NewsBlock;
