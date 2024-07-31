import "./App.css";
import React from "react";
import { Navigate, Routes, Route, BrowserRouter as Router } from "react-router-dom";

import NewPlace from "./places/pages/NewPlace";
import Users from "./user/pages/Users";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UpdatePlace from "./places/components/UpdatePlace";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/places/new" element={<NewPlace />} />
          <Route path="/:uid/places" element={<UserPlaces />} />
          <Route path="/places/:placeId" element={<UpdatePlace />}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
