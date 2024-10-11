import { useState, Fragment } from 'react';
import { SELECT_LIST, SELECT_RESULT_LIST } from '@_constant/list';

const Content = () => {
  const [selectValue, setSelectValue] = useState({
    size: '',
    color: '',
    option: '',
  });

  const [curDropMenu, setCurDropMenu] = useState('');

  const clickDropDown = name => {
    setCurDropMenu(name);
  };

  const handleSeletValue = (name, value) => {
    setSelectValue(prev => ({ ...prev, [name]: value }));
    clickDropDown('');
  };

  return (
    <>
      <label className="block mt-5 mb-2 text-sm text-gray-500">
        make dropDown version
      </label>
      <div className="flex justify-between gap-8">
        <div className="flex flex-col gap-2 basis-1/2">
          {SELECT_LIST.map(({ id, name, option }) => {
            return (
              <div key={id} className="relative">
                <div
                  className="px-3 py-2 rounded-lg bg-white z-0"
                  onClick={() => clickDropDown(name)}
                >
                  {name}
                </div>
                {curDropMenu === name && (
                  <div className="absolute top-[50px] flex justify-start flex-col gap-1  py-2 w-full rounded-lg bg-white z-10 animate-fadeDown duration-100">
                    {option.map(el => {
                      return (
                        <span
                          className="px-3 hover:bg-red-100"
                          key={el.id}
                          onClick={() => handleSeletValue(name, el.value)}
                        >
                          {el.value === '' ? name : el.value}
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-1 basis-1/2 bg-white rounded-lg">
          {SELECT_RESULT_LIST.map(({ id, name, title }) => {
            return (
              <Fragment key={id}>
                {selectValue[name] && (
                  <div className="flex justify-between px-4 py-2">
                    <span>{title}</span>
                    <span className="w-20 bg-green-200 rounded-lg text-center">
                      {selectValue[name]}
                    </span>
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Content;
