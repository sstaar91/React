import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Gnb from '@_component/Gnb';
import Home from './pages/Home';
import Accordion from './pages/Accordion';
import CheckBox from './pages/CheckBox';
import Dropdown from './pages/Dropdown';
import Menu from './pages/Menu';
import Modal from './pages/Modal';
import Pagination from './pages/Pagination';
import TimeLine from './pages/TimeLine';
import Toast from './pages/Toast';

const Router = () => {
  return (
    <BrowserRouter>
      <Gnb />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/checkbox" element={<CheckBox />} />
        <Route path="/dropdown" element={<Dropdown />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/timeline" element={<TimeLine />} />
        <Route path="/toast" element={<Toast />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
