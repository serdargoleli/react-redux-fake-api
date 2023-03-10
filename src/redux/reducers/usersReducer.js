import * as ActionsTypes from "../actionsTypes";

const users = [];

const usersReducer = (state = users, action) => {
  switch (action.type) {
    case ActionsTypes.SET_USERS:
      return action.payload;
    case ActionsTypes.SET_USER_AVATAR:
      return action.payload;
    default:
      return state;
  }
};

export default usersReducer;
