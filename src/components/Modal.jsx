import React from "react";
import {
  FaEnvelope,
  FaEnvelopeOpen
} from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  const theme = useSelector((state) => state.theme.value)
  return (
    <>
      <button
        type="button"
        className="-translate-y-0.5"
        onClick={() => setShowModal(true)}
      >
        {showModal===true ? <FaEnvelopeOpen color={"white"} size={30} />:<FaEnvelope color={"white"} size={30} />}
      </button>
      {showModal ? (
        <>
          <div
          
            className="justify-center items-center mx-4 lg:mx-0 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div style={{
            backgroundColor: theme ? "#010101" : "white",
            color: theme ? "white" : "black",
          }}className="relative rounded-xl shadow-xl w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Co sprawiło mi trudność oraz co dało mi największą frajdę?
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Największą trudność sprawiło mi dopracowanie API i wymyślenie sposobu na to, jak wyświetlać kraje w sidebarze (do zmiany wyświetlanych newsów)
                  </p>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Największą frajdę dało mi tworzenie layoutu :P
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}