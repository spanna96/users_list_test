import React, { useEffect, useState } from "react";
import {
  useSelector,
  useDispatch
} from 'react-redux';

import UsersList from "../UsersList/UsersList";
import RandomUser from "../RandomUser/RandomUser";
import Loader from './../Loader';
import { setUsers } from './../../store';
import {
  getUsersList,
  getRandomInt
} from "../../helpers";

import "./App.css";

function App() {
  const usersLength = useSelector(({ usersLength }) => usersLength);
  const { allUsers, usersOnPage } = useSelector(({
    users,
    currentPage,
    usersOnPage
  }) => {
    const isfirstPage = currentPage === 0;
    const idxOfFirstUserOnPage = isfirstPage ? 0 : (currentPage * usersOnPage);
    const idxOfLastUserOnPage = isfirstPage ? usersOnPage : (currentPage * usersOnPage) + usersOnPage;

    return {
      usersOnPage: users.slice(
        idxOfFirstUserOnPage,
        idxOfLastUserOnPage
      ),
      allUsers: users
    }
  });
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const users = await getUsersList();

      dispatch(setUsers(users));
      setIsLoading(false);
    }

    fetchData();
  }, [dispatch]);

  const getRandomUser = () => {
    const randomUserIdx = getRandomInt(0, usersLength);

    return allUsers[randomUserIdx];
  }

  return (
    <Loader isLoading={isLoading}>
      <div>
        <div className="App">
          <UsersList users={usersOnPage} />
          <RandomUser getRandomUser={getRandomUser} />
        </div>
      </div>
    </Loader>
  );
}

export default App;
