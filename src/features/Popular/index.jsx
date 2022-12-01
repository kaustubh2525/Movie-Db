import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import GlobalContext from "../../context/GlobalContext";
import BodyLayout from "../../layouts/BodyLayout";
import { useGetPopularMovieQuery } from "../../services/Redux/MovieDbSlice";

const Popular = () => {
  const { Data, InputSearch, setData, MovieSearchRes } =
    useContext(GlobalContext);

  const { page } = useSelector((state) => state.Pagination);

  const { data, isSuccess, isFetching } = useGetPopularMovieQuery(
    InputSearch.length === 0 ? page : null
  );

  const URL = import.meta.env.VITE_APP_IMAGE_URL;

  useEffect(() => {
    if (isSuccess && InputSearch.length === 0) {
      setData(data);
    }
  }, [data, InputSearch]);

  return (
    <>
      <BodyLayout
        isFetching={isFetching || MovieSearchRes.isFetching}
        data={Data?.results}
        totalCount={Data?.total_pages}
        isSuccess={isSuccess}
      >
        <div className="grid lg:grid-cols-4 grid-cols-1 p-5 gap-8">
          {Data?.results?.length !== 0 ? (
            <>
              {Data?.results?.map((item) => (
                <Link
                  className="cursor-pointer"
                  to={`/singleMovie/${item.id}`}
                  key={item.id}
                >
                  <img
                    className="rounded w-full h-96 object-fill hover:scale-105 transition-all duration-200 ease-in-out text-white"
                    src={`${URL}${item.poster_path}`}
                    alt="No Image Available"
                  />
                  <div className=" text-white capitalize py-2 pointer-events-none">
                    <p className="font-semibold">{item.original_title}</p>
                    <p className="font-light text-sm text-blue-400">
                      rating : <span>{item.vote_average} / 10</span>
                    </p>
                  </div>
                </Link>
              ))}
            </>
          ) : (
            <h1>No Data Available</h1>
          )}
        </div>
      </BodyLayout>
    </>
  );
};

export default Popular;
