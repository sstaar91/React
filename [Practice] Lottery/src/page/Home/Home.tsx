import { useState } from "react";
import Lnb from "@_components/LNB";
import SummaryCard from "@_components/SummaryCard";

const Home = () => {
  const [currentCategory, setCurrentCategory] = useState("");

  const onClickCategory = (value: string) => {
    setCurrentCategory(value);
  };

  return (
    <main className="flex-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <section className="grid grid-cols-[1fr_5fr] mx-20 max-w-[1800px] w-full h-5/6 rounded-[46px] overflow-hidden">
        <Lnb currentCategory={currentCategory} onClickCategory={onClickCategory} />
        <article className="flex flex-col p-10 font-kanit bg-orange-200/[0.85]">
          <h2 className="font-medium text-3xl">Summary</h2>
          <div className="my-8 w-full border-y border-zinc-200/[0.5]" />
          <div className="grid grid-cols-2 gap-10 h-full">
            <SummaryCard />
            <div className="p-4 w-full h-full rounded-2xl bg-stone-50/[0.75]">PENSION LOTTO</div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Home;
