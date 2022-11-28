import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import InputField from "../../../components/InputField";
import { NavItems } from "../constants/constants";
import { GiHamburgerMenu } from "react-icons/gi";
import "../style/style.css";
import { useRef } from "react";

const SideBar = () => {
  const MenuRef = useRef();

  const handleToggleMenu = () => {
    MenuRef.current.classList.toggle("hide");
  };

  return (
    <>
      <div
        ref={MenuRef}
        className="lg:h-full lg:w-auto lg:relative lg:flex-row lg:top-0 lg:bg-none lg:-translate-x-0 transition-all duration-200 ease-in-out text-gray-300 flex flex-col absolute top-16 left-0 bg-custom-bg w-full items-center gap-3 capitalize p-2"
      >
        {NavItems?.map(({ title, route, id }) => (
          <Link
            className="rounded-md hover:bg-gray-600 transition-all duration-200 ease-in-out px-2 py-1 h-full lg:w-auto w-full flex items-center cursor-pointer"
            to={route}
            title={title}
            key={id}
          >
            {title}
          </Link>
        ))}
        <InputField
          type={"text"}
          name="search"
          placeholder={"movie name"}
          className={"bg-gray-200 text-gray-700 rounded-md lg:w-auto w-full"}
        />
        <Button
          className={
            "bg-btn-color hover:bg-gray-600 transition-all duration-200 ease-in-out text-gray-100 lg:w-auto w-full"
          }
          BtnText="Search"
        />
      </div>
      <div className="lg:hidden block">
        <GiHamburgerMenu
          className="w-10 h-full p-1 text-white cursor-pointer"
          onClick={handleToggleMenu}
        />
      </div>
    </>
  );
};

export default SideBar;
