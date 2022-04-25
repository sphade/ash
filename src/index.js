import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/configureStore";
import { Provider } from "react-redux";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
const queryClient = new QueryClient();
// import throttle from "lodash/throttle";
// import { saveState } from "./redux/sessionStorage";

// store.subscribe(
//   throttle(() => {
//     saveState({ user: store.getState().user.userData });
//   }, 1000)
// );
ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <App />
    </Provider>
  </QueryClientProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
