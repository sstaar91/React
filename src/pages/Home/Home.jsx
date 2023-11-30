import { Link } from 'react-router-dom';
import { randomBgColor } from '../../utils/randomBgColor';
import accordion from '/images/accordion.png';
import checkBox from '/images/checkBox.png';
import dropdown from '/images/dropdown.png';

const Home = () => {
  return (
    <section
      className={`flex items-center flex-col pt-[150px] h-screen ${randomBgColor()}`}
    >
      <article className="grid grid-cols-4 gap-6 max-w-7xl">
        {CARD_LIST.map(({ id, thumnail, title, description }) => {
          return (
            <Link
              className="p-3 bg-white rounded-lg "
              to={`/${thumnail}`}
              key={id}
            >
              <div className="overflow-hidden rounded-lg cursor-pointer">
                <div className="h-40 object-cover">
                  <img
                    className="duration-300 hover:scale-125	"
                    src={THUMNAIL[thumnail]}
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
  {
    id: 3,
    title: 'Dropdown',
    thumnail: 'dropdown',
    description:
      '특정 버튼을 클릭하면 여러가지 선택할 수 있는 리스트가 나오는 UI',
  },
];

const THUMNAIL = {
  accordion,
  checkBox,
  dropdown,
};
