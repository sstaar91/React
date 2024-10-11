import { Link } from 'react-router-dom';

const Gnb = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 flex pt-4">
      <div className="mx-auto my-0 max-w-7xl px-4 w-full">
        <Link className="inline-block w-fit" to="/">
          <h1 className="p-3 w-fit text-4xl font-extrabold text-neutral-100 duration-100 hover:border-b-4 border-white border-solid">
            Front UI
          </h1>
        </Link>
      </div>
    </nav>
  );
};

export default Gnb;
