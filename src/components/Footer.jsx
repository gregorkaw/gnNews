import React from "react";
import Clock from "./Clock";
import { useSelector } from "react-redux";

const Footer = () => {
  const amountOfarticles = useSelector((state) => state.articlessize.value)
  const theme = useSelector((state) => state.theme.value)

  return (
    <div 
    style={{
      backgroundColor: theme ? "#18122B" : "#6E85B7",
    }}
    className="flex text-sm justify-between items-center h-[10vh] lg:h-[60px] px-2 lg:pl-16 lg:pr-48 bg-zinc-900">
      <div>
        <p className="text-xs">Articles on site: {amountOfarticles}</p>
        <p className="text-xs">
          <Clock />
        </p>
      </div>
      <p>Copyright @2023 Grzegorz Kawecki</p>
    </div>
  );
};

export default Footer;
