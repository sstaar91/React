import logo from "@_assets/images/logo.png";

interface Props {
  currentCategory: string;
  onClickCategory: (value: string) => void;
}

const Lnb = ({ currentCategory, onClickCategory }: Props) => {
  const listStyles = (value: string) => {
    return currentCategory === value ? `-translate-y-full` : `none`;
  };

  return (
    <nav className="px-10 py-4 bg-black/[0.85] text-white">
      <div className="flex-center gap-3 h-20">
        <img src={logo} alt="logo" width="36px" />
        <h1 className="font-kanit font-medium text-2xl text-white">Lottery</h1>
      </div>
      <ul className="flex flex-col gap-8 mt-20 font-kanit text-lg ">
        {CATEGORY_LIST.map(({ id, title, value }) => {
          return (
            <li key={id} onClick={() => onClickCategory(value)} className={`relative px-10 py-4 w-full rounded-3xl cursor-pointer overflow-hidden`}>
              {title}
              <div className={`absolute px-10 py-4 w-full h-full top-full left-0 bg-white text-black transition-all ${listStyles(value)}`}>
                {title}
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Lnb;

const CATEGORY_LIST = [
  {
    id: 1,
    title: "LOTTO",
    value: "lotto",
  },
  {
    id: 2,
    title: "PENSION LOTTO",
    value: "pension",
  },
];
