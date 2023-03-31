import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../features/theme";
import {
  MdLightMode,
  MdDarkMode,
  MdOutlineGridView,
  MdOutlineList,
} from "react-icons/md";
import { changeDisplay } from "../features/display";
import { changeShowsidebar } from "../features/showsidebar";
import Modal from "./Modal";

const Header = () => {
  const theme = useSelector((state) => state.theme.value);
  const display = useSelector((state) => state.display.value);
  const showsidebar = useSelector((state) => state.showsidebar.value);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        backgroundColor: theme ? "#18122B" : "#6E85B7",
        color: theme ? "white" : "black",
      }}
      className="flex justify-between px-4 lg:px-16 h-[70px] w-full items-center bg-green-500 sticky top-0 z-10"
    >
      <button
        className="block lg:hidden"
        onClick={() => {
          dispatch(changeShowsidebar(!showsidebar));
        }}
      >
        <MdOutlineList color={"white"} size={35} />
      </button>
      <a href="/" style={{ color: "white" }} className="text-2xl font-bold">
        GnNews
      </a>
      <Modal />
      <div className="flex justify-center items-center gap-4">
        <p className="hidden lg:block">
          <button
            onClick={() => {
              dispatch(changeDisplay(!display));
            }}
          >
            {display ? (
              <MdOutlineGridView color={"white"} size={30} />
            ) : (
              <MdOutlineList color={"white"} size={35} />
            )}
          </button>
        </p>
        <p>
          <button
            onClick={() => {
              dispatch(changeTheme(!theme));
            }}
          >
            {theme ? (
              <MdLightMode color={"white"} size={30} />
            ) : (
              <MdDarkMode color={"white"} size={30} />
            )}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Header;
