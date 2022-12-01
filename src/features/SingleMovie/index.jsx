import { useParams } from "react-router-dom";
import {
  useGetMovieCastDetailQuery,
  useGetSingleMovieQuery,
} from "../../services/Redux/MovieDbSlice";
import dayjs from "dayjs";
import SingleMovieBody from "../../layouts/SingleMovieBody";
import "./style/style.css";

const SingleMovie = () => {
  const { id } = useParams();

  const URL = import.meta.env.VITE_APP_IMAGE_URL;

  const { data, isFetching } = useGetSingleMovieQuery(id);

  const MovieCastDetailRes = useGetMovieCastDetailQuery(id);

  return (
    <>
      <SingleMovieBody isFetching={isFetching}>
        <div className="px-5 lg:py-5">
          {/* Overview */}
          <div className="rounded overflow-hidden grid lg:grid-cols-2 grid-cols-1 gap-2 bg-singleBackColor text-white">
            {data ? (
              <>
                <div className="grid lg:grid-cols-4 lg:grid-rows-2 grid-cols-1 gap-2 p-2 capitalize">
                  <img
                    src={`${URL}${data.poster_path}`}
                    alt="No Image Available"
                    className="text-white h-48 w-full lg:object-fill object-contain rounded pointer-events-none"
                  />
                  <div className="lg:col-span-3 flex flex-col lg:gap-4 gap-3 pointer-events-none">
                    <p className="text-xl">{data.original_title}</p>
                    <p className="text-sm text-blue-400">
                      rating :
                      <span className="pl-1">
                        {parseFloat(data.vote_average).toFixed(2)} / 10
                      </span>
                    </p>
                    <div className="flex gap-3 items-center text-xs">
                      <p className="border border-gray-500 p-1 rounded">
                        {data.runtime} min
                      </p>
                      <p className="flex gap-2">
                        {data.genres?.map((item, index) => (
                          <span key={index}>{item.name}</span>
                        ))}
                      </p>
                    </div>
                    <p className="text-xs">
                      release date :
                      <span className="pl-1">
                        {dayjs(data.release_date).format("ddd MMM DD YYYY")}
                      </span>
                    </p>
                  </div>
                  <div className="lg:col-span-4">
                    <p className="pb-2 text-lg">overview</p>
                    <p className="text-justify text-sm text-gray-500">
                      {data.overview}
                    </p>
                  </div>
                </div>
                <img
                  src={`${URL}${data?.backdrop_path}`}
                  alt=""
                  className="lg:h-full h-52 w-full object-fill"
                />
              </>
            ) : (
              <h1>No Data Available</h1>
            )}
          </div>
          {/* Casts */}
          <div className="my-3">
            <h1 className="text-2xl text-white">Cast</h1>
          </div>
          <div className="flex gap-5 h-full overflow-x-scroll overflow-y-hidden customScroll">
            {MovieCastDetailRes.data?.cast?.length !== 0 ? (
              MovieCastDetailRes.data?.cast?.map((item) => (
                <>
                  {item.profile_path !== null ? (
                    <div className="w-64 h-full shrink-0">
                      <img
                        src={`${URL}${item.profile_path}`}
                        className="h-64 w-full rounded"
                        alt=""
                      />
                      <div className="text-white">
                        <p className="text-lg">{item.name}</p>
                        <p className="text-sm text-blue-400">
                          Character :
                          <span className="text-white pl-1">{item.character}</span>
                        </p>
                      </div>
                    </div>
                  ) : null}
                </>
              ))
            ) : (
              <h1>No Data Found</h1>
            )}
          </div>
        </div>
      </SingleMovieBody>
    </>
  );
};

export default SingleMovie;
