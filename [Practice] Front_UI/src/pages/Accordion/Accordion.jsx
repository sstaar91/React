import SectionLayout from '@_component/Layout';
import Content from './Content';

import { ACCORDION_MENU_LIST } from '@_constant/list';

const Accordion = () => {
  return (
    <SectionLayout>
      <div className="p-4 w-[600px] rounded-lg bg-gray-100">
        <h2 className="mb-2 text-l font-medium">Menu</h2>
        <div className="flex flex-col gap-2">
          {ACCORDION_MENU_LIST.map(list => {
            return <Content key={list.id} {...list} />;
          })}
        </div>
      </div>
    </SectionLayout>
  );
};

export default Accordion;
