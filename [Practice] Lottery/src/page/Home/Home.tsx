import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getLatestLotto } from "@_service/getLatestInfo";

import { InfoCard } from "@_components/molecules";

// import { doc, getDoc, collection, addDoc, setDoc } from "firebase/firestore";
// import { db } from "@_lib/firebase";
import { getDisplayThursday, getLatestLottoDrwNo, getLatestPensionDrwNo } from "@_utils/calculateDate";

const Home = () => {
  const { data, isPending } = useQuery({ queryKey: ["latestLotto"], queryFn: getLatestLotto });

  const [curOverview, setCurOverview] = useState("LOTTO");
  const onClickOverview = (status: string) => {
    setCurOverview(status);
  };

  console.log(getDisplayThursday(new Date()));

  if (isPending)
    return (
      <section className="h-screen p-16 bg-[#050624] text-white">
        <div className="text-3xl font-bold">Overview</div>
      </section>
    );

  // const { drwNoDate } = curLottoInfo;
  // async function getTest() {
  //   const docRef = doc(db, "item", "1");
  //   const docSnap = await getDoc(docRef);

  //   if (docSnap.exists()) {
  //     console.log(docSnap.data());
  //   }
  // }

  // async function click() {
  //   setDoc(doc(db, "item", "1"), { app: "add check" }, { merge: true });
  // }

  // const { drwNoDate } = data;

  return (
    <section className="h-screen p-16 bg-[#050624] text-white">
      <div className="text-3xl font-bold">Overview</div>
      <article className="grid grid-cols-[222px_1fr] gap-8 my-16">
        <div className="flex flex-col gap-4">
          {OVERVIEW_LIST.map((list) => {
            return <InfoCard key={list.id} title={list.title} date={list.round} curStatus={curOverview} onClickOverview={onClickOverview} />;
          })}
        </div>
        <div className="p-5 bg-[#2e3455] rounded-xl border border-[#4B6EAC]">123</div>
      </article>
    </section>
  );
};

export default Home;

const OVERVIEW_LIST = [
  { id: 1, title: "LOTTO", round: getLatestLottoDrwNo() },
  { id: 2, title: "PENSION", round: getLatestPensionDrwNo() },
];
