import React from "react";

const GlobalContext = React.createContext({
  InputSearch: "",
  setInputSearch: () => {},
  Data: {},
  setData: () => {},
  MovieSearchRes: {
    isFetching: false,
  },
});

export default GlobalContext;
