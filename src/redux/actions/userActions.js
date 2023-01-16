import * as ActionsTypes from "../actionsTypes";

const setUsers = (val) => {
  return { type: ActionsTypes.SET_USERS, payload: val };
};
const setSelectedUser = (val) => {
  return { type: ActionsTypes.SET_SELECTED_USER, payload: val };
};

const userActions = { setUsers, setSelectedUser };

export default userActions;
