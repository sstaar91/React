import { Link } from 'react-router-dom';
import SectionLayout from '@_component/Layout';

import { HOME_CARD_LIST } from '@_constant/list';
import accordion from '/images/accordion.png';
import checkbox from '/images/checkBox.png';
import dropdown from '/images/dropdown.png';

const Home = () => {
  return (
    <SectionLayout>
      <article className="grid grid-cols-4 gap-6 max-w-7xl">
        {HOME_CARD_LIST.map(({ id, thumnail, title, description }) => {
          return (
            <Link
              className="grid grid-rows-[0.8fr_1fr] p-3 bg-white rounded-lg "
              to={`/${thumnail}`}
              key={id}
            >
              <div className="overflow-hidden rounded-lg cursor-pointer">
                <div className="object-cover">
                  <img
                    className="duration-300 hover:scale-125	"
                    src={THUMNAIL[thumnail]}
                    alt="card image"
                  />
                </div>
              </div>
              <div className="px-1">
                <h2 className="mt-5 text-l font-bold text-pink-900">{title}</h2>
                <p className="mt-3 text-xs font-normal text-gray-600 break-all">
                  {description}
                </p>
              </div>
            </Link>
          );
        })}
      </article>
    </SectionLayout>
  );
};

export default Home;

const THUMNAIL = {
  accordion,
  checkbox,
  dropdown,
};
