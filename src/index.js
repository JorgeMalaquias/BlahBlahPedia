import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));

if (process.env.REACT_APP_ENVIRONMENT === "production") {
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}

if (process.env.REACT_APP_ENVIRONMENT === "development") {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}
