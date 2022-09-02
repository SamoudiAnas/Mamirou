import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyling";
import store from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={{}}>
        <>
          <GlobalStyles />
          <App />
        </>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
