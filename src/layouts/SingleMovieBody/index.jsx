const SingleMovieBody = ({ children }) => {
  return (
    <div className="h-nav-calc flex flex-col justify-between">
      <div className="h-nav-calc overflow-auto my-2 scroll-smooth">
        {children}
      </div>
    </div>
  );
};

export default SingleMovieBody;
