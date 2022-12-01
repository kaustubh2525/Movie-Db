import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY, cachedDataTime } from "../../constants/constants";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const MovieDbSlice = createApi({
  reducerPath: "MovieDb",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  keepUnusedDataFor: cachedDataTime,
  endpoints: (builder) => ({
    getAllMovies: builder.query({
      query: (page) => ({
        url: `movie/popular?api_key=${API_KEY}&page=${page}`,
        method: "GET",
      }),
      transformResponse: (response) => response,
    }),
    getSingleMovie: builder.query({
      query: (id) => ({
        url: `movie/${id}?api_key=${API_KEY}`,
        method: "GET",
      }),
      transformResponse: (response) => response,
    }),
    getMovieCastDetail: builder.query({
      query: (payload) => ({
        url: `movie/${payload}/credits?api_key=${API_KEY}`,
        method: "GET",
      }),
      transformResponse: (response) => response,
    }),
    getPopularMovie: builder.query({
      query: (page) => ({
        url: `movie/top_rated?api_key=${API_KEY}&page=${page}`,
        method: "GET",
      }),
      transformResponse: (response) => response,
    }),
    getTopRatedMovie: builder.query({
      query: (page) => ({
        url: `movie/top_rated?api_key=${API_KEY}&page=${page}`,
        method: "GET",
      }),
      transformResponse: (response) => response,
    }),
    getUpcomingMovie: builder.query({
      query: (page) => ({
        url: `movie/upcoming?api_key=${API_KEY}&page=${page}`,
        method: "GET",
      }),
      transformResponse: (response) => response,
    }),
    getMovieBySearch: builder.query({
      query: ({ InputSearch, page }) => ({
        url: `search/movie?api_key=${API_KEY}&query=${InputSearch}&page=${page}`,
        method: "GET",
      }),
      transformResponse: (response) => response,
    }),
  }),
});

export const {
  useGetAllMoviesQuery,
  useGetSingleMovieQuery,
  useGetMovieCastDetailQuery,
  useGetPopularMovieQuery,
  useGetTopRatedMovieQuery,
  useGetUpcomingMovieQuery,
  useLazyGetMovieBySearchQuery,
} = MovieDbSlice;
