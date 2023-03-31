import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

import { useSelector } from "react-redux";
import News from "./components/News";

function App() {
  const theme = useSelector((state) => state.theme.value);
  const country = useSelector((state) => state.country.value);


  return (
    <div
      style={{
        backgroundColor: theme ? "black" : "white",
        color: theme ? "white" : "black",
      }}
    >
      <Header />
      <div className="flex px-2 lg:mt-4 py-0 lg:px-10">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/country/:country`} element={<News />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
