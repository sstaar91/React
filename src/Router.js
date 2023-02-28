import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Photo from "./pages/Photo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/photo" element={<Photo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
