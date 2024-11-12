import { useEffect } from "react";

const Home = () => {
  const getLotto = async () => {
    const res = await fetch("https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=100");
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    getLotto();
  }, []);

  return (
    <section className="h-screen px-8 pt-16 bg-[#050624] text-white">
      <div className="text-3xl font-bold">Overview</div>
    </section>
  );
};

export default Home;
