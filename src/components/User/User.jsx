import React from "react";

import "./User.css";

function User({ userData }) {
  const { id, name, surname, desc } = userData;
  return (
    <div className="user">
      <div className="left-column">
        <div>
          <b>Id: </b>
          {id}
        </div>
        <div>
          <b>Name: </b>
          {name}
        </div>
        <div>
          <b>Surname: </b>
          {surname}
        </div>
      </div>

      <div className="right-column">
        <div>
          <b>Description: </b>
          {desc}
        </div>
      </div>
    </div>
  );
}

export default User;
