import { useState } from 'react';
import fold from '/icons/fold.svg';
import group from '/icons/group.svg';

const Content = ({ category, list }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <div
        className="flex gap-3 items-center p-4 rounded-lg bg-white cursor-pointer"
        onClick={() => {
          setIsSelected(prev => !prev);
        }}
      >
        <img
          src={fold}
          className={`${isSelected ? '' : '-rotate-90'} duration-100`}
        />
        <img src={group} />
        <span className="text-m font-medium">{category}</span>
      </div>
      {isSelected && (
        <div className="flex flex-col p-2 rounded bg-slate-50 animate-fadeDown">
          {list.map(({ id, title, price }) => {
            return (
              <div
                key={id}
                className="flex justify-between items-center p-2 border-b-2 last-of-type:border-b-0"
              >
                {id ? (
                  <>
                    <span>{title}</span>
                    <span className="py-1 px-3 bg-green-300 rounded-2xl font-semibold	text-white cursor-default duration-100 hover:bg-green-500">
                      {price.toLocaleString()} ₩
                    </span>
                  </>
                ) : (
                  <span>메뉴가 없습니다</span>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Content;
