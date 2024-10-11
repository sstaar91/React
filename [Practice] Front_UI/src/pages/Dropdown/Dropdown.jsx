import SectionLayout from '@_component/Layout';
import Select from './Select';
import Content from './Content';

const Dropdown = () => {
  return (
    <SectionLayout>
      <div className="p-4 w-[600px] rounded-lg bg-gray-100">
        <h2 className="mb-2 text-l font-medium">옵션을 선택해주세요</h2>
        <Select />
        <Content />
      </div>
    </SectionLayout>
  );
};

export default Dropdown;
