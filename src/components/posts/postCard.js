import React from "react";
import { Card, Button } from "react-bootstrap";

export default function PostCard(props) {
  return (
    <Card className={props.className}>
      <Card.Body>
        <Card.Title>{props.post.title.toUpperCase()}</Card.Title>
        <Card.Text>{props.post.body}.</Card.Text>
        <div className="d-flex justify-content-end">
          <Button
            variant="success"
            size="sm"
            onClick={() => {
              props.getPostComments(props.post.id);
              props.handleShow();
              props.getSelectedPost(props.post);
            }}
          >
            Get Comments
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
