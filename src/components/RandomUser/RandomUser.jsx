import React, { useEffect, useState } from "react";

import User from './../User';

import "./RandomUser.css";

function RandomUser({ getRandomUser }) {
  const [randomUser, setRandomUser] = useState(null);

  const getAndUpdateUser = () => {
    const user = getRandomUser();

    setRandomUser(user);
  };

  useEffect(() => {
    const getUserIntervalId = setInterval(() => {
      getAndUpdateUser();
    }, 8e3);

    getAndUpdateUser();

    return () => clearInterval(getUserIntervalId);
  }, []);

  return (
    <div className="users-card">
      <div className="block-header">Random User</div>
      {
        randomUser && (
          <User userData={randomUser} />
        )
      }
    </div>
  );
}

export default RandomUser;
