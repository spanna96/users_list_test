import {
  SET_USERS,
  SET_CURRENT_PAGE
} from './types'

export const setUsers = (users) => ({ type: SET_USERS, payload: users });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, payload: page });