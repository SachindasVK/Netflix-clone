import React, { Suspense } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import "./app.css";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./firebase";
import { ToastContainer } from "react-toastify";

const Landing = React.lazy(() => import("./pages/Landing"));
const HomeCompo = React.lazy(() => import("./pages/Home/Home"));
const Login = React.lazy(() => import("./pages/Login/Login"));
const Player = React.lazy(() => import("./pages/Player/Player"));
const MovieDetails = React.lazy(
  () => import("./pages/MovieDetails/MovieDetails"),
);

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = React.useState(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

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
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/in" element={<HomeCompo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:type/:id" element={<Player />} />
        <Route path="/details/:type/:id" element={<MovieDetails />} />
      </Routes>
    </Suspense>
  );
};

export default App;
