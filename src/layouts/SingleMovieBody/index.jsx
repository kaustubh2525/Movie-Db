import { AiOutlineLoading3Quarters } from "react-icons/ai";

const SingleMovieBody = ({ children, isFetching }) => {
  return (
    <>
      {isFetching ? (
        <div className="h-nav-calc flex flex-col justify-between">
          <div className="h-nav-calc flex justify-center items-center overflow-auto my-2 scroll-smooth">
            <AiOutlineLoading3Quarters className="text-5xl text-white animate-spin" />
          </div>
        </div>
      ) : (
        <div className="h-nav-calc flex flex-col justify-between">
          <div className="h-nav-calc overflow-auto my-2 scroll-smooth">
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default SingleMovieBody;
