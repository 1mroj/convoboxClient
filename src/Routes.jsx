import React, { useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Chats from "./Pages/Chats";

import DashBoard from "./Screens/DashBoard/DashBoard";
import WelcomeScreen from "./Screens/DashBoard/WelcomeScreen";
import CreateTemplate from "./Screens/DashBoard/Templates/CreateTemplate";
import TemplateList from "./Screens/DashBoard/Templates/TemplateList/Templates";
import Templates from "./Screens/DashBoard/Templates/TemplateList";
import Broadcast from "./Screens/DashBoard/Broadcasting/Broadcast";
import CreateBroadcast from "./Screens/DashBoard/Broadcasting/CreateBroadcast";
import Conversations from "./Screens/DashBoard/Conversation";

export default function DashBoardRoutes() {
  return (
    <Routes>
      <Route path="/chats">
        <Route index={true} element={<Conversations />} />
      </Route>

      <Route path="/home">
        <Route index={true} element={<DashBoard />} />
      </Route>

      <Route path="/template">
        <Route index={true} element={<Templates />} />
      </Route>

      <Route path="/template/create">
        <Route index={true} element={<CreateTemplate />}></Route>
      </Route>
      {/* <Route path="/template/view">
        <Route index={true} element={<ViewTemplate />}></Route>
      </Route> */}
      <Route path="/broadcast">
        <Route index={true} element={<Broadcast />}></Route>
      </Route>
      <Route path="/broadcast/create">
        <Route index={true} element={<CreateBroadcast />}></Route>
      </Route>
    </Routes>
  );
}
