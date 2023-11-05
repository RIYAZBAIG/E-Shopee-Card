import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Admin } from "./components/Admin";
import { FrontDesk } from "./components/FrontDesk";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { NavBar } from "./components/NavBar";
import { ManageRoom } from "./components/ManageRoom";
import { RoomList } from "./components/RoomList";
import { Eshopp } from "./components/Eshopp";
import { Chat } from "./components/Chat";
import { ChainProms } from "./components/ChainProms";
import "./components/common.css";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/frontdesk/roomlist" element={<RoomList />} />
          <Route path="/frontdesk/manageroom" element={<ManageRoom />} />
          <Route path="/frontdesk" element={<FrontDesk />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/eshopp" element={<Eshopp />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/chain" element={<ChainProms />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
