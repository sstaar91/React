import { randomBgColor } from '@_util/randomBgColor';

const bgColor = randomBgColor();

const SectionLayout = ({ children }) => {
  return (
    <section
      className={`flex items-center flex-col pt-[150px] px-8 h-screen ${bgColor}`}
    >
      {children}
    </section>
  );
};

export default SectionLayout;
