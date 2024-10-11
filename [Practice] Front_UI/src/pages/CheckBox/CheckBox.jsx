import { useState } from 'react';

import SectionLayout from '@_component/Layout';
import List from './List';

import { CHECKBOX_LIST } from '@_constant/list';

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
    <SectionLayout>
      <div className="p-4 w-[600px] rounded-lg bg-gray-100">
        <h2 className="mb-2 text-l font-medium">약관 동의</h2>
        <div className="flex flex-col gap-2">
          <List
            title="전체 선택"
            unique="all"
            checked={isAllChecked}
            handleCheck={handleAllCheck}
          />
          {CHECKBOX_LIST.map((list, idx) => {
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
    </SectionLayout>
  );
};

export default CheckBox;
