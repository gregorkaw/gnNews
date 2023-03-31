import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import themeReducer from "./features/theme";
import displayReducer from "./features/display";
import countryReducer from "./features/country";
import articlessizeReducer from "./features/articlessize";
import showsidebarReducer from "./features/showsidebar";
import { newsApi } from "./features/apiSlice";
import { BrowserRouter } from "react-router-dom";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    display: displayReducer,
    showsidebar: showsidebarReducer,
    country: countryReducer,
    articlessize: articlessizeReducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
