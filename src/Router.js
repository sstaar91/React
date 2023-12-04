import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Produce from "./pages/Produce";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produce" element={<Produce />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
