import Content from './Content';
import { randomBgColor } from '../../utils/randomBgColor';

const Accordion = () => {
  return (
    <section
      className={`flex items-center flex-col pt-[150px] h-screen ${randomBgColor()}`}
    >
      <div className="p-4 w-[600px] rounded-lg bg-gray-100">
        <h2 className="mb-2 text-l font-medium">Menu</h2>
        <div className="flex flex-col gap-2">
          {MENU_LIST.map(list => {
            return <Content key={list.id} {...list} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Accordion;

const MENU_LIST = [
  {
    id: 1,
    category: '양식',
    list: [
      { id: 1, title: '파스타', price: 13000 },
      { id: 2, title: '리조또', price: 17000 },
      { id: 3, title: '스테이크', price: 33000 },
    ],
  },
  {
    id: 2,
    category: '중식',
    list: [
      { id: 1, title: '자장면', price: 8000 },
      { id: 2, title: '짬뽕', price: 10000 },
      { id: 3, title: '탕수육', price: 16000 },
    ],
  },
  {
    id: 3,
    category: '일식',
    list: [
      { id: 1, title: '초밥', price: 12000 },
      { id: 2, title: '소바', price: 8000 },
    ],
  },
  {
    id: 4,
    category: '한식',
    list: [
      { id: 1, title: '김치찌개', price: 9000 },
      { id: 2, title: '제육볶음', price: 9000 },
      { id: 3, title: '김치볶음밥', price: 7000 },
    ],
  },
  {
    id: 5,
    category: '분식',
    list: [{}],
  },
];
