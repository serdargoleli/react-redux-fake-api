import * as ActionsTypes from "../actionsTypes";

const setPosts = (val) => {
  return { type: ActionsTypes.SET_POSTS, payload: val };
};
 

const postActions = { setPosts };

export default postActions;
