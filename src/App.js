import React from "react";
import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Sidebar from "./components/sidebar/Sidebar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const user = true;
function App() {
  return (
    <>
    <BrowserRouter>
    <Topbar />

    <Routes>
      <Route path="/" element={user?<Home />:<Login />} />
      <Route path="home" element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="settings" element={user?<Settings />:<Login />} />
      <Route path="post/:postId" element={<Single />} />
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
export {user};