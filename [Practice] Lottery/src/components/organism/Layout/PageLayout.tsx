import { Outlet } from "react-router-dom";
import Lnb from "../LNB";

const PageLayout = () => {
  return (
    <main className="pl-[300px]">
      <Lnb />
      <Outlet />
    </main>
  );
};

export default PageLayout;
