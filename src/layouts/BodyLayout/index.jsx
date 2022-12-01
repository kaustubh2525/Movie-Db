import Pagination from "../../components/Pagination";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  setPageLimit,
  setTotalRows,
} from "../../services/Redux/PaginationSlice";

const BodyLayout = ({ children, isFetching, data, isSuccess, totalCount }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      dispatch(
        setPageLimit({
          limit: Math.floor(data?.length / 4),
        })
      );
      dispatch(
        setTotalRows({
          totalRows: totalCount,
        })
      );
    }
  }, [data]);

  return (
    <>
      {isFetching ? (
        <div className="h-nav-calc flex flex-col justify-between">
          <div className="h-BodyHeight flex justify-center items-center overflow-auto my-2 scroll-smooth">
            <AiOutlineLoading3Quarters className="text-5xl text-white animate-spin" />
          </div>
          <Pagination />
        </div>
      ) : (
        <div className="h-nav-calc flex flex-col justify-between">
          <div className="h-BodyHeight overflow-auto my-2 scroll-smooth">
            {children}
          </div>
          <Pagination />
        </div>
      )}
    </>
  );
};

export default BodyLayout;
