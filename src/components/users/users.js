import React from "react";
import { Card, ListGroup, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Actions from "../../redux/actions";

export default function Posts() {
  const users = useSelector((state) => state.usersReducer);

  return (
    <Row>
      {users.map((user) => (
        <Col xs="12" lg="6" className="mb-4" key={user.id}>
          <Link to={`/user/${user.id}/posts`} className="user-card-link text-decoration-none ">
            <Card className="h-100">
              <Card.Body>
                <Row>
                  <Col xs="3">
                    <Card.Img src={Actions.userActions.setUsersAvatar().payload} />
                  </Col>
                  <Col xs="9" className="d-flex justify-content-center flex-column">
                    <Card.Text className="mb-1">{user.username}</Card.Text>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>{user.company.name} </Card.Text>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col xs="12">
                    <ListGroup horizontal>
                      <ListGroup.Item>{user.phone} </ListGroup.Item>
                      <ListGroup.Item>{user.email} </ListGroup.Item>
                      <ListGroup.Item>{user.website}</ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
}
