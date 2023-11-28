import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accordion from "./pages/Accordion/Accordion";
import Dropdown from "./pages/Dropdown/Dropdown";
import CheckBox from "./pages/CheckBox/CheckBox";
import Modal from "./pages/Modal/Modal";
import Toast from "./pages/Toast/Toast";
import Pagination from "./pages/Pagination/Pagination";
import Menu from "./pages/Menu/Menu";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/dropdown" element={<Dropdown />} />
        <Route path="/checkBox" element={<CheckBox />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/toast" element={<Toast />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
