import { Link } from "react-router-dom";
import SideBar from "./components/SideBar";

const Navbar = () => {
  return (
    <>
      <div className="relative">
        <div className="bg-custom-bg h-16 sticky top-0 z-50 flex items-center justify-between lg:px-20 px-2">
          <Link
            className="capitalize text-white text-lg h-full p-2 flex items-center cursor-pointer"
            to={"/"}
            title="Home Page"
          >
            movie db
          </Link>
          <SideBar />
        </div>
      </div>
    </>
  );
};

export default Navbar;
