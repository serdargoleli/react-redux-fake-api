import * as ActionsTypes from "../actionsTypes";

const setPost = (val) => {
  return { type: ActionsTypes.SET_POSTS, payload: val };
};

const postActions = { setPost };

export default postActions;
