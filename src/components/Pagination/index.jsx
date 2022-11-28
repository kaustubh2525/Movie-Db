import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  setnextPage,
  setpreviousPage,
} from "../../services/Redux/PaginationSlice";

const Pagination = () => {
  const { page, totalRows, limit } = useSelector((state) => state.Pagination);

  const dispatch = useDispatch();

  const handlePreviousPage = () => {
    dispatch(
      setpreviousPage({
        page: 1,
      })
    );
  };

  const handleNextPage = () => {
    dispatch(
      setnextPage({
        page: 1,
      })
    );
  };

  return (
    <>
      <div className="bg-custom-bg text-white p-2 flex justify-end items-center gap-3 pr-5">
        <div className="h-full flex items-center pr-5">
          {page}-{limit} of {totalRows}
        </div>
        <BiChevronLeft
          className={`cursor-pointer w-8 h-8 rounded-full hover:bg-gray-600 transition-all duration-200 ease-in-out`}
          title="previous"
          onClick={page > 1 ? handlePreviousPage : null}
        />
        <BiChevronRight
          className="w-8 h-8 rounded-full cursor-pointer hover:bg-gray-600 transition-all duration-200 ease-in-out"
          title="next"
          onClick={handleNextPage}
        />
      </div>
    </>
  );
};

export default Pagination;
