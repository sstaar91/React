import { useState, Fragment } from 'react';
import { SELECT_LIST, SELECT_RESULT_LIST } from '@_constant/list';

const Select = () => {
  const [selectValue, setSelectValue] = useState({
    size: '',
    color: '',
    option: '',
  });

  const handleSeletValue = e => {
    const { name, value } = e.target;
    setSelectValue(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <label className="block mt-5 mb-2 text-sm text-gray-500">
        select tag version
      </label>
      <div className="flex justify-between gap-8">
        <div className="flex flex-col gap-2 basis-1/2">
          {SELECT_LIST.map(({ id, name, option }) => {
            return (
              <select
                key={id}
                className="p-2 rounded-lg"
                name={name}
                onChange={handleSeletValue}
              >
                {option.map(el => {
                  return (
                    <option key={el.id} value={el.value}>
                      {el.value === '' ? name : el.value}
                    </option>
                  );
                })}
              </select>
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

export default Select;
