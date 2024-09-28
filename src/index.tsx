import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import "./index.css";

import { Provider } from "react-redux";
import { store } from "./app/store";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tfq from "./components/Tfq";
import Ms from "./components/Ms";
import Mtf from "./components/Mtf";
import Mcq from "./components/Mcq";
import Fib from "./components/Fib";
import Report from "./components/Report";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>

        <Route path="/tfq" element={<Tfq />}></Route>
        <Route path="/ms" element={<Ms />}></Route>
        <Route path="/mtf" element={<Mtf />}></Route>
        <Route path="/mcq" element={<Mcq />}></Route>
        <Route path="/fib" element={<Fib />}></Route>
        <Route path="/report" element={<Report />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
