import React from "react";
import { Link } from "react-router-dom";

import "./Users.css";

const User = ({ user }) => {
  return (
    <Link to={`/Users/${user._id}`} className="user-profile-link text-center mb-4">
      <h3 className="display-4">{user.name.charAt(0).toUpperCase()}</h3>
      <h5 className="mb-0">{user.name}</h5>
    </Link>
  );
};

export default User;
