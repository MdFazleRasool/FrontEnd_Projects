import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UserContext from "./contextApi/UserContext.jsx";
import { Provider } from "react-redux";
import {store} from './Redux/store.js'
createRoot(document.getElementById("root")).render(
  
  <Provider store={store}>
    <UserContext>
      <App />
    </UserContext>
  </Provider>
);
