import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@_page/Home";
import { PageLayout } from "@_components/organism";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/lotto" element={<Home />} />
          <Route path="/pension" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
