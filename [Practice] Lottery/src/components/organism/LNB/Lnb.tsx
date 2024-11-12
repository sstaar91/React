import { useLocation, useNavigate } from "react-router-dom";

const Lnb = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const movePage = (path: string) => {
    navigate(path);
  };

  return (
    <nav className="fixed left-0 top-0 py-16 w-[300px] h-screen px-10 bg-[#0b1137] border-r border-[#01B8E3] text-white font-kanit">
      <div className="flex-center flex-col mb-28">
        <div className="text-6xl font-bold">RTR</div>
        <div className="text-lg font-semibold text-zinc-400 font-noto">rags to riches</div>
      </div>
      <ul className="flex-center flex-col gap-6">
        {NAV_LIST.map(({ id, title, path }) => {
          return (
            <li
              className={`p-3 w-full text-center rounded-2xl cursor-pointer hover:text-[#01B8E3] transition-all ${
                pathname === path ? "bg-[#2e3455] text-[#01B8E3]" : ""
              } `}
              key={id}
              onClick={() => movePage(path)}
            >
              {title}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Lnb;

const NAV_LIST = [
  { id: 1, title: "HOME", path: "/" },
  { id: 2, title: "LOTTO", path: "/lotto" },
  { id: 3, title: "PENSION", path: "/pension" },
];
