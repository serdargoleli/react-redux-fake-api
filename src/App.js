import "./App.css";
import { useEffect } from "react";
import Users from "./components/users/users";
import { useDispatch } from "react-redux";

import axios from "axios";
import Actions from "./redux/actions";
import { Route, Routes } from "react-router-dom";
import PostsDetails from "./components/posts/postsDetails";
import Posts from "./components/posts/posts";
import Navi from "./components/navi";
import { Container } from "react-bootstrap";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
      dispatch(Actions.userActions.setUsers(data));
    };
    const getPosts = async () => {
      axios.get("https://jsonplaceholder.typicode.com/posts").then(({ data }) => {
        dispatch(Actions.postsActions.setPosts(data));
      });
    };

    getUser();
    getPosts();
  }, []);

  return (
    <div>
      <Navi />
      <Container>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/user/:userId/posts" element={<PostsDetails />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
