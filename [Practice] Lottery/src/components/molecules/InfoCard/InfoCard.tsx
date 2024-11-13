interface Props {
  title: string;
  date: number;
  curStatus: string;
  onClickOverview: (status: string) => void;
}

const InfoCard = ({ title, date, curStatus, onClickOverview }: Props) => {
  return (
    <div
      className={`flex items-center justify-around py-4 px-8 w-full rounded-xl bg-[#2e3455] border cursor-pointer font-kanit ${
        curStatus === title ? "border-[#01B8E3]" : "border-[#050624]"
      } `}
      onClick={() => onClickOverview(title)}
    >
      <label className="text-xs text-[#01B8E3]">{title}</label>
      <div className="text-3xl font-bold">{date}</div>
    </div>
  );
};

export default InfoCard;
