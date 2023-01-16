import React from "react";
import { Card } from "react-bootstrap";

export default function PostCard(props) {
  return (
    <Card className={props.className}>
      <Card.Body>
        <Card.Title>{props.post.title.toUpperCase()}</Card.Title>
        <Card.Text>{props.post.body}.</Card.Text>
        <div className="d-flex justify-content-end">{props.children}</div>
      </Card.Body>
    </Card>
  );
}
