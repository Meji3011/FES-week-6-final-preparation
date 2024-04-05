import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";

function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    setLoading(true);
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(data);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="user-list">
            {loading ? (
              <h1>Loading users...</h1>
            ) : (
              users.map((user) => <UserCard key={user.id} user={user} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
