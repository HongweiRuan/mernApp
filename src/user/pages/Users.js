import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  // dummy data
  const USERS = [
    {
      id: "u1",
      name: "Max",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
