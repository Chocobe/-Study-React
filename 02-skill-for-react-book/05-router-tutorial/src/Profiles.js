import React from "react";
import { Link, Outlet } from "react-router-dom";

const Profiles = () => {
  return (
    <div className="Profiles">
      <h3>사용자 목록: </h3>

      <ul>
        <li>
          <Link to="/profiles/chocobe">초코비</Link>
        </li>
        <li>
          <Link to="/profiles/velopert">Velopert</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default Profiles;