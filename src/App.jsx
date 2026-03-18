import { Route, Routes, useNavigate } from "react-router-dom";
import HomeCompo from "./pages/Home/Home";
import Login from './pages/Login/Login'
import Player from "./pages/Player/Player";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./firebase";
import { ToastContainer, toast } from 'react-toastify';
import Landing from "./pages/Landing";

const App = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
      if(user) {
        console.log("logged in");
        navigate('/in')
      }else {
        console.log("logged out");
        navigate('/')
      }
    })
  },[])

  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    const path = window.location.pathname;

    if (!user && path !== "/") {
      navigate("/");
    }

    if (user && path === "/") {
      navigate("/in");
    }
  });

  return () => unsubscribe();
}, []);

  return (
    <div>
       <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/in" element={<HomeCompo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:type/:id" element={<Player />} />
      </Routes>
    </div>
  );
};

export default App;
