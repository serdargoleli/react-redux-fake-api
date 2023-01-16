import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import PostCard from "./postCard";
import { Col, Row, ListGroup, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Posts() {
  const postState = useSelector((state) => state.postsReducer);
  const userState = useSelector((state) => state.usersReducer);
  let [filteredPosts, setFilteredPosts] = useState([]);

  const getUserData = (userId) => {
    return userState.find((user) => user.id === userId);
  };

  const filteredPost = (userId) => {
    let filtered;
    filtered = postState.posts.filter((post) => {
      return post.userId == userId;
    });
    setFilteredPosts(filtered);
  };

  const getCountPost = (userId) => {
    let data = postState.posts.filter((post) => {
      return post.userId == userId;
    });
    return data.length;
  };
  getCountPost(1);

  return (
    <Row>
      <Col xs="3">
        <ListGroup className="position-sticky top-20">
          {userState.map((user) => (
            <ListGroup.Item
              style={{ cursor: "pointer" }}
              className="d-flex justify-content-between"
              key={user.name}
              active={filteredPosts.length ? filteredPosts[0].userId == user.id : ""}
              onClick={() => filteredPost(user.id)}
            >
              {user.name}
              <Badge bg="warning" text="dark">
                {getCountPost(user.id)}
              </Badge>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>

      <Col xs="9">
        <Row>
          <Col xs="12">
            {filteredPosts.length > 0 && (
              <div className="d-flex justify-content-between align-items-center">
                <h1>
                  {getUserData(filteredPosts[0].userId).name}{" "}
                  <small className="text-muted">
                    <i>Posts</i>
                  </small>
                </h1>
                <Button onClick={() => setFilteredPosts([])}>Filreyi Kaldır</Button>
              </div>
            )}
          </Col>
          {filteredPosts.length <= 0
            ? postState.posts.map((post) => (
                <PostCard className={"mb-3"} key={post.id} post={post}>
                  <Link to={`/user/${post.userId}/posts`}>{getUserData(post.userId).name}</Link>
                </PostCard>
              ))
            : filteredPosts.map((post) => (
                <PostCard className={"mb-3"} key={post.id} post={post}>
                  <Link to={`/user/${post.userId}/posts`}>{getUserData(post.userId).name}</Link>
                </PostCard>
              ))}
        </Row>
      </Col>
    </Row>
  );
}
