import { Link } from 'react-router-dom';
import accordion from '../../assets/images/accordion.png';

const Home = () => {
  return (
    <section className="pt-[150px] h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% flex items-center flex-col">
      <article className="grid grid-cols-4 gap-6 max-w-7xl">
        <Link className="p-3 bg-white rounded-lg" to="/accordion">
          <div className="overflow-hidden rounded-lg cursor-pointer">
            <img
              className="duration-300 hover:scale-125	"
              src={accordion}
              alt="card image"
            />
          </div>
          <div className="px-1">
            <h2 className="mt-5 text-l font-bold text-pink-900">Accordion</h2>
            <p className="mt-3 text-xs font-normal text-gray-600 break-all">
              토글 형태의 UI로 특정 영역을 선택하면, 숨겨져 있던 내용들이 나오는
              UI
            </p>
          </div>
        </Link>
        <div className="p-3 bg-white border-4 border-white border-solid rounded-lg">
          <img className="rounded-lg" src={accordion} alt="card image" />
          <h2>CheckBox</h2>
        </div>
        <div className="p-3 bg-white border-4 border-white border-solid rounded-lg">
          <img className="rounded-lg" src={accordion} alt="card image" />
          <h2>Dropdown</h2>
        </div>
        <div className="p-3 bg-white border-4 border-white border-solid rounded-lg">
          <img className="rounded-lg" src={accordion} alt="card image" />
          <h2>Menu</h2>
        </div>
        <div className="p-3 bg-white border-4 border-white border-solid rounded-lg">
          <img className="rounded-lg" src={accordion} alt="card image" />
          <h2>Modal</h2>
        </div>
        <div className="p-3 bg-white border-4 border-white border-solid rounded-lg">
          <img className="rounded-lg" src={accordion} alt="card image" />
          <h2>Pagination</h2>
        </div>
        <div className="p-3 bg-white border-4 border-white border-solid rounded-lg">
          <img className="rounded-lg" src={accordion} alt="card image" />
          <h2>Toast</h2>
        </div>
      </article>
    </section>
  );
};

export default Home;
