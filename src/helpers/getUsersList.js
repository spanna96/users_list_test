import users from "../data/users.json";

export const getUsersList = () =>
  new Promise((res) => {
    setTimeout(() => {
      if (users && users.users) {
        res(users.users);
      } else {
        res([]);
      }
    }, 2e3);
  });
