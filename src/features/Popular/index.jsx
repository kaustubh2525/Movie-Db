import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import BodyLayout from "../../layouts/BodyLayout";
import { useGetPopularMovieQuery } from "../../services/Redux/MovieDbSlice";
import { setTotalRows } from "../../services/Redux/PaginationSlice";

const Popular = () => {
  const { data, isSuccess } = useGetPopularMovieQuery({});

  const dispatch = useDispatch();

  const URL = import.meta.env.VITE_APP_IMAGE_URL;

  useEffect(() => {
    if (isSuccess) {
      dispatch(
        setTotalRows({
          totalRows: data?.total_pages,
        })
      );
    }
  }, [data]);

  return (
    <>
      <BodyLayout>
        <div className="grid lg:grid-cols-4 grid-cols-1 p-5 gap-8">
          {data?.results?.length !== 0 ? (
            <>
              {data?.results?.map((item) => (
                <Link
                  className="cursor-pointer"
                  to={`/singleMovie/${item.id}`}
                  key={item.id}
                >
                  <img
                    className="rounded w-full h-96 object-fill hover:scale-105 transition-all duration-200 ease-in-out"
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
