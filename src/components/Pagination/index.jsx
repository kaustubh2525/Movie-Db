import { useContext, useEffect } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import GlobalContext from "../../context/GlobalContext";
import {
  setnextPage,
  setpreviousPage,
  setResetPagination,
} from "../../services/Redux/PaginationSlice";

const Pagination = () => {
  const { InputSearch } = useContext(GlobalContext);

  const { page, totalRows, limit } = useSelector((state) => state.Pagination);

  const { pathname } = useLocation();

  const dispatch = useDispatch();

  const handlePreviousPage = () => {
    scrollTo({ top: 0, behavior: "smooth" });

    dispatch(
      setpreviousPage({
        page: 1,
      })
    );
  };

  const handleNextPage = () => {
    scrollTo({ top: 0, behavior: "smooth" });

    dispatch(
      setnextPage({
        page: 1,
      })
    );
  };

  useEffect(() => {
    return () => {
      dispatch(setResetPagination());
    };
  }, [pathname, InputSearch]);

  return (
    <>
      <div className="bg-custom-bg text-white p-2 flex justify-end items-center gap-3 pr-5">
        <div className="h-full flex items-center pr-5">
          {page}
          <span className="pr-1 lg:block hidden">-{limit}</span> of {totalRows}
        </div>
        <BiChevronLeft
          className={`cursor-pointer w-8 h-8 rounded-full hover:bg-gray-600 transition-all duration-200 ease-in-out`}
          title="previous"
          onClick={page > 1 ? handlePreviousPage : null}
        />
        <BiChevronRight
          className="w-8 h-8 rounded-full cursor-pointer hover:bg-gray-600 transition-all duration-200 ease-in-out"
          title="next"
          onClick={page < totalRows ? handleNextPage : null}
        />
      </div>
    </>
  );
};

export default Pagination;
