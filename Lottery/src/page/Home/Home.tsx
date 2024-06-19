import { useState } from "react";
import Lnb from "@_components/LNB";

const Home = () => {
  const [currentCategory, setCurrentCategory] = useState("");

  const onClickCategory = (value: string) => {
    setCurrentCategory(value);
  };

  return (
    <main className="flex-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <section className="grid grid-cols-[1fr_5fr] mx-20 max-w-[1800px] w-full h-5/6 rounded-[46px] overflow-hidden">
        <Lnb currentCategory={currentCategory} onClickCategory={onClickCategory} />
        <article className="bg-orange-200/[0.85]">영역</article>
      </section>
    </main>
  );
};

export default Home;
