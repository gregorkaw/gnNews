import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Sidebar from "../src/components/Sidebar";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import themeReducer from "../src/features/theme";
import displayReducer from "../src/features/display";
import countryReducer from "../src/features/country";
import articlessizeReducer from "../src/features/articlessize";
import showsidebarReducer from "../src/features/showsidebar";
import { newsApi } from "../src/features/apiSlice";
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

test("Wrong country code shows an error message", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    </Provider>
  );
  const searchBtn = screen.getByTestId("searchBtn");
  fireEvent.click(searchBtn);
  const errorMsg = screen.getByTestId("errorMsg");
  expect(errorMsg).toBeInTheDocument();
});