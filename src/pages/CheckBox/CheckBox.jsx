import { useState } from 'react';
import List from './List';

const CheckBox = () => {
  const [checkList, setCheckList] = useState([false, false, false]);

  const isAllChecked = checkList.every(item => item);

  const handleAllCheck = () => {
    const newArr = new Array(checkList.length).fill(!isAllChecked);
    setCheckList(newArr);
  };

  const handleCheck = index => {
    setCheckList(prev => prev.map((el, idx) => (idx === index ? !el : el)));
  };

  return (
    <section className="pt-[150px]  h-screen bg-gradient-to-r from-[#6fb43a] via-[#fdde1d] to-[#45c8fc] flex items-center flex-col">
      <div className="p-4 w-[600px] rounded-lg bg-gray-100">
        <h2 className="mb-2 text-l font-medium">약관 동의</h2>
        <div className="flex flex-col gap-2">
          <List
            title="전체 선택"
            unique="all"
            checked={isAllChecked}
            handleCheck={handleAllCheck}
          />
          {CHECK_LIST.map((list, idx) => {
            return (
              <List
                key={list.id}
                idx={idx}
                unique={`checkbox${idx}`}
                title={list.title}
                checked={checkList[idx]}
                handleCheck={handleCheck}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CheckBox;

const CHECK_LIST = [
  { id: 1, title: '14세 이상입니다.' },
  { id: 2, title: '모든 약관을 확인했습니다.' },
  { id: 3, title: '이 체크박스를 누르면 당신은 슈퍼 개발자가 됩니다.' },
];
