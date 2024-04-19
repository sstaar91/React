import { Link } from 'react-router-dom';

const Gnb = () => {
  return (
    <Link
      className="fixed top-0 left-0 right-0 flex justify-center pt-10"
      to="/"
    >
      <h1 className="p-3 text-4xl font-extrabold text-neutral-100 duration-100 hover:border-b-4 border-white border-solid">
        Front UI
      </h1>
    </Link>
  );
};

export default Gnb;
