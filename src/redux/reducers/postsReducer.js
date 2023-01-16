import * as ActionsTypes from "../actionsTypes";

const postsState = {
  posts: [],
};

const postsReducer = (state = postsState, action) => {
  switch (action.type) {
    case ActionsTypes.SET_POSTS:
      postsState.posts = action.payload;
      return postsState;
    default:
      return state;
  }
};

export default postsReducer;
