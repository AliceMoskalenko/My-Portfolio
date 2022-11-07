import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_URL } from "./config/API.js";
import { sendRequest } from "./helpers/SendRequest.js";

import Header from "./pages/Header/Header";

import { actionGetCardsData } from "./reducers";

import "./App.css";
import AppRoutes from "./AppRoutes/AppRoutes.jsx";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    sendRequest(API_URL).then((response) => {
      dispatch(actionGetCardsData(response));
    });
  }, []);

  return (
    <>
      <div className="App">
        <Header />
        <main className="page__wrapper">
          <div className="container">
            <AppRoutes />
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
