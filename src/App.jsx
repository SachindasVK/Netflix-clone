import React, { Suspense, useContext } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import "./app.css";
import { useEffect } from "react";
import { AuthContext } from "./components/context/Auth";
import { Toaster } from "react-hot-toast";

const Landing = React.lazy(() => import("./pages/Landing"));
const HomeCompo = React.lazy(() => import("./pages/Home/Home"));
const Login = React.lazy(() => import("./pages/Login/Login"));
const Player = React.lazy(() => import("./pages/Player/Player"));
const Tvshows = React.lazy(() => import("./pages/TvShows/Tvshows"));
const NewPopular = React.lazy(() => import("./pages/NewPopular/NewPopular"));
const MovieDetails = React.lazy(
  () => import("./pages/MovieDetails/MovieDetails"),
);
const Mylist = React.lazy(()=> import("./pages/Mylist/Mylist"))
const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user === undefined) return;
    const path = location.pathname;

    if (user && (path === "/" || path === "/login")) {
      navigate("/in", { replace: true });
    }

    if (!user && path !== "/" && path !== "/login") {
      navigate("/", { replace: true });
    }
  }, [user, location.pathname]);

  if (user === undefined) {
    return (
      <div className="login-spinner">
        <img
          src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/3:2/w_2560%2Cc_limit/Netflix_LoadTime.gif"
          alt="loading..."
        />
      </div>
    );
  }

  return (
    <>
      <Toaster
        position="top-right"
        autoClose={2000}
        theme="dark"
        style={{ zIndex: 9999 }}
        toastClassName="custom-toast"
        bodyClassName="custom-toast-body"
      />
      <Suspense
        fallback={
          <div className="login-spinner">
            <img
              src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/3:2/w_2560%2Cc_limit/Netflix_LoadTime.gif"
              alt=""
            />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/in" element={<HomeCompo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/player/:type/:id" element={<Player />} />
          <Route path="/details/:type/:id" element={<MovieDetails />} />
          <Route path="/tv-shows" element={<Tvshows />} />
          <Route path="/new-popular" element={<NewPopular />} />
          <Route path="/my-list" element={<Mylist />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
