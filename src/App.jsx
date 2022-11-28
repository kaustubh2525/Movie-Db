import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PageNotFound from "./components/PageNotFound";
import MainLayout from "./layouts/MainLayout";
import { Dashboard } from "./pages/Dashboard";
import { Popular } from "./pages/PopularSection";
import { SingleMovie } from "./pages/SingleMovieSection";
import { TopRated } from "./pages/TopRated";
import { Upcoming } from "./pages/Upcoming";
import "./style/App.css";

function App() {
  return (
    <>
      <ToastContainer newestOnTop={true} />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/singleMovie/:id" element={<SingleMovie />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/upcoming" element={<Upcoming />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
