import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Accordion from './pages/Accordion';
import Dropdown from './pages/Dropdown';
import CheckBox from './pages/CheckBox';
import Modal from './pages/Modal';
import Toast from './pages/Toast';
import Pagination from './pages/Pagination';
import Menu from './pages/Menu';
import Gnb from './components/Gnb';

const Router = () => {
  return (
    <BrowserRouter>
      <Gnb />
      <Routes>
        <Route path="/" element={<Home />} />
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
