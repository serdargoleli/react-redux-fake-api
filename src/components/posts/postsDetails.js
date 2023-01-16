import React, { useEffect, useState } from "react";
import Actions from "../../redux/actions";
import { useSelector } from "react-redux";
import {  useParams } from "react-router-dom";
import axios from "axios";

import PostHeader from "./postHeader";
import PostCard from "./postCard";
import { Col, Row, Modal, Card, Button } from "react-bootstrap";

export default function Posts() {
  const users = useSelector((state) => state.usersReducer);
  let { userId } = useParams();
  const [userPosts, setUserPosts] = useState([]);
  const [userData, setUserData] = useState();
  const [show, setShow] = useState(false);
  const [comments, setComments] = useState([]);
  const [selectedPost, setSelectedPost] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getPostComments = async (id) => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    setComments(data);
  };

  const getSelectedPost = (post) => {
    setSelectedPost(post);
  };

  useEffect(() => {
    const getPosts = async () => {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      setUserPosts(data);
    };

    const getUser = async () => {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
      setUserData(data);
    };

    if (users.length <= 0) {
      getUser();
    } else {
      let user = users.find((user) => user.id == userId);
      setUserData(user);
    }

    getPosts();
  }, []);

  return (
    <>
      <PostHeader className={"mb-4"} userData={userData} userPostsLength={userPosts.length} />
      <Row>
        {userPosts.map((post) => (
          <Col xs="12" md="6" lg="4" key={post.id} className="mb-4">
            <PostCard
              getSelectedPost={getSelectedPost}
              getPostComments={getPostComments}
              selectedPost={selectedPost}
              handleShow={handleShow}
              className={"h-100"}
              post={post}
            >
              <Button
                variant="success"
                size="sm"
                onClick={() => {
                  getPostComments(post.id);
                  handleShow();
                  getSelectedPost(post);
                }}
              >
                Get Comments
              </Button>
            </PostCard>
          </Col>
        ))}
      </Row>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedPost.title}
            <small>
              <mark>COMMENTS</mark>
            </small>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {comments.map((comment) => (
            <Card className="mb-3">
              <Card.Header>
                <Card.Title> {comment.name} </Card.Title>
                <Card.Subtitle>{comment.email} </Card.Subtitle>
              </Card.Header>
              <Card.Body> {comment.body} </Card.Body>
            </Card>
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
}
