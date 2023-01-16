import "./App.css";
import { useEffect } from "react";
import Users from "./components/users/users";
import { useDispatch } from "react-redux";

import axios from "axios";
import Actions from "./redux/actions";
import { Route, Routes } from "react-router-dom";
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

    getUser();
  }, []);

  return (
    <div>
      <Navi />
      <Container>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/user/:userId/posts" element={<Posts />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
