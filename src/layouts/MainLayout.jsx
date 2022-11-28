import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="bg-mainBackColor h-nav-calc isolate">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
