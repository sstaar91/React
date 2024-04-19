import Select from './Select';
import Content from './Content';
import { randomBgColor } from '../../utils/randomBgColor';

const Dropdown = () => {
  return (
    <section
      className={`flex items-center flex-col pt-40 h-screen ${randomBgColor()}`}
    >
      <div className="p-4 w-[600px] rounded-lg bg-gray-100">
        <h2 className="mb-2 text-l font-medium">옵션을 선택해주세요</h2>
        <Select />
        <Content />
      </div>
    </section>
  );
};

export default Dropdown;
