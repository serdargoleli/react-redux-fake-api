import * as ActionsTypes from "../actionsTypes";

const users = [];
let userAvatar = "";

const usersReducer = (state = users, action) => {
  switch (action.type) {
    case ActionsTypes.SET_USERS:
      return action.payload;
    case ActionsTypes.SET_USER_AVATAR:
      return (userAvatar = action.payload);
    default:
      return state;
  }
};

export default usersReducer;
