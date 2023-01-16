import React from "react";
import { Badge, Card, Col, Row } from "react-bootstrap";
import Actions from "../../redux/actions";

export default function PostHeader(props) {
  return (
    props.userData && (
      <Card className={props.className}>
        <Card.Body>
          <Row>
            <Col xs="3">
              <Card.Img src={Actions.userActions.setUsersAvatar().payload} />
            </Col>
            <Col xs="9" className="d-flex flex-column align-items-baseline justify-content-center">
              <Badge className="p-2  " bg="success">
                Post ({props.userPostsLength})
              </Badge>
              <Card.Title as={"h1"}>{props.userData.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted" as={"h5"}>
                {props.userData.username}
              </Card.Subtitle>
              <Card.Text className="mb-1">{props.userData.email} </Card.Text>
              <Card.Text className="mb-1">{props.userData.phone} </Card.Text>
              <Card.Text className="mb-1">{props.userData.website} </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    )
  );
}
