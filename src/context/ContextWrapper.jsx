import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useLazyGetMovieBySearchQuery } from "../services/Redux/MovieDbSlice";
import GlobalContext from "./GlobalContext";

const ContextWrapper = ({ children }) => {
  const [InputSearch, setInputSearch] = useState("");
  const [Data, setData] = useState({});
  const { pathname } = useLocation();

  const { page } = useSelector((state) => state.Pagination);

  const [MovieBySearch, MovieSearchRes] = useLazyGetMovieBySearchQuery();

  useEffect(() => {
    if (InputSearch.length !== 0) {
      MovieBySearch({ InputSearch, page });
    }
  }, [InputSearch, page]);

  useEffect(() => {
    if (MovieSearchRes.isSuccess) {
      setData(MovieSearchRes.data);
    }
  }, [MovieSearchRes.data]);

  useEffect(() => {
    return () => setInputSearch(() => "");
  }, [pathname]);

  return (
    <>
      <GlobalContext.Provider
        value={{
          InputSearch,
          setInputSearch,
          Data,
          setData,
          MovieSearchRes
        }}
      >
        {children}
      </GlobalContext.Provider>
    </>
  );
};

export default ContextWrapper;
