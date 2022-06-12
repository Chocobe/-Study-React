import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profiles from "./Profiles";
import Profile from "./Profile";
import HistorySample from "./HistorySample";

const App = () => {
  return (
    <div className="App">
      <ul className="menu">
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route 
          path="/profiles/*" 
          element={<Profiles />}
          children={[
            <Route path="" key="profile-0" element={
              <div>사용자를 선택해 주세요.</div>
            } />,
            <Route path=":username" key="profile-1" element={<Profile />} />
          ]}
        />
        <Route path="/history" element={<HistorySample />} />
      </Routes>
    </div>
  );
};

export default App;