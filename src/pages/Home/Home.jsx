import { Link } from 'react-router-dom';
import accordion from '/images/accordion.png';
import checkBox from '/images/checkBox.png';

const Home = () => {
  const thumnailList = {
    accordion,
    checkBox,
  };

  return (
    <section className="pt-[150px] h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% flex items-center flex-col">
      <article className="grid grid-cols-4 gap-6 max-w-7xl">
        {CARD_LIST.map(({ id, thumnail, title, description }) => {
          return (
            <Link
              className="p-3 bg-white rounded-lg"
              to={`/${thumnail}`}
              key={id}
            >
              <div className="overflow-hidden rounded-lg cursor-pointer">
                <div className="h-40 object-cover">
                  <img
                    className="duration-300 hover:scale-125	"
                    src={thumnailList[thumnail]}
                    alt="card image"
                  />
                </div>
              </div>
              <div className="px-1">
                <h2 className="mt-5 text-l font-bold text-pink-900">{title}</h2>
                <p className="mt-3 text-xs font-normal text-gray-600 break-all">
                  {description}
                </p>
              </div>
            </Link>
          );
        })}
      </article>
    </section>
  );
};

export default Home;

const CARD_LIST = [
  {
    id: 1,
    title: 'Accordion',
    thumnail: 'accordion',
    description:
      '토글 형태의 UI로 특정 영역을 선택하면, 숨겨져 있던 내용들이 나오는 UI',
  },
  {
    id: 2,
    title: 'CheckBox',
    thumnail: 'checkBox',
    description:
      '여러가지 항목을 체크 할 수 있고, 전체 체크를 한번에 동작할 수 있게 하는 UI',
  },
];
