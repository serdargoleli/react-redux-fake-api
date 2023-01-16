import * as ActionsTypes from "../actionsTypes";

const posts = [];

const postsReducer = (state = posts, action) => {
  switch (action.type) {
    case ActionsTypes.POSTS:
      return state;
    case ActionsTypes.SET_POSTS:
      return action.payload;
    default:
      return state;
  }
};

export default postsReducer;
