import Pagination from "../../components/Pagination";

const BodyLayout = ({ children }) => {
  return (
    <>
      <div className="h-nav-calc flex flex-col justify-between">
        <div className="h-BodyHeight overflow-auto my-2 scroll-smooth">{children}</div>
        <Pagination />
      </div>
    </>
  );
};

export default BodyLayout;
