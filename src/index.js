import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from "./store";
import App from "./App";

import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

console.log("store is", store.getState());

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
