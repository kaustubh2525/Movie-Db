import { BiLoaderAlt } from "react-icons/bi";

const Button = ({ isDisabled, isLoading, onClick, className, BtnText }) => {
  return (
    <>
      <button
        disabled={isDisabled || isLoading}
        onClick={onClick}
        title={BtnText}
        className={`${className} ${
          isLoading ? "cursor-not-allowed" : ""
        } p-2 appearance-none outline-none flex justify-center items-center font-medium rounded-md capitalize`}
      >
        {isLoading ? (
          <BiLoaderAlt className="w-10 h-8 animate-spin" />
        ) : (
          <div>{BtnText}</div>
        )}
      </button>
    </>
  );
};

export default Button;
