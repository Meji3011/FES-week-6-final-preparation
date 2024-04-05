import React from "react";
import { useNavigate } from "react-router-dom";

function UserCard({ user }) {
  const navigate = useNavigate();

  return (
    <div className="user" key={user.id}>
      <div className="user-card">
        <div
          className="user-card__container"
          onClick={() => navigate(`/${user.id}`)}
        >
          <h3>{user.name}</h3>
          <p>
            <b>Email:</b> {user.email}
          </p>
          <p>
            <b>Phone:</b> {user.phone}
          </p>
          <p>
            <b>Website:</b> {user.website}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
