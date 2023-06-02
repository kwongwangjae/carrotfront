import React from "react";
import User from "./User";
const UserKey = ({ UserList }) => {
  return (
    <div>
      {UserList &&
        UserList.map((v, index) => (
          <User key={index} user={v.user} location={v.location} />
        ))}
    </div>
  );
};

export default UserKey;
