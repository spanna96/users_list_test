import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import User from "../User";
import Pagination from "../Pagination";
import { setCurrentPage } from './../../store';

import "./UsersList.css";

function UsersList({ users }) {
  const pages = useSelector(({ pages }) => pages);
  const dispatch = useDispatch();
  const currentPage = useSelector(({ currentPage }) => currentPage);
  const usersList = users.map((user) => <User key={user.id} userData={user} />);

  const onButtonClick = (newPage) => dispatch(setCurrentPage(newPage));

  return (
    <div className="users-list-block">
      <div className="block-header">Users List</div>

      <div className="list">{usersList}</div>

      <Pagination
        onButtonClick={onButtonClick}
        numberOfPage={pages}
        currentPage={currentPage}
      />
    </div>
  );
}

export default UsersList;
