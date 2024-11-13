import { useQuery } from "@tanstack/react-query";
import { getLatestLotto } from "@_service/getLatestInfo";

import { doc, getDoc, collection, addDoc, setDoc } from "firebase/firestore";
import { db } from "@_lib/firebase";

const Home = () => {
  const { data, isPending } = useQuery({ queryKey: ["latestLotto"], queryFn: getLatestLotto });

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

  const { drwNoDate } = data;

  return (
    <section className="h-screen p-16 bg-[#050624] text-white">
      <div className="text-3xl font-bold">Overview</div>
      <article className="my-16">
        <div className="py-6 px-8 w-fit rounded-xl bg-[#2e3455] border border-[#01B8E3] font-kanit">
          <label className="text-xs text-[#01B8E3]">LOTTO</label>
          <div className="mt-2 text-3xl font-bold">{drwNoDate}</div>
        </div>
        <div></div>
      </article>
    </section>
  );
};

export default Home;
