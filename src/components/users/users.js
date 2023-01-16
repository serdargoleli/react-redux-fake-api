import React from "react";
import { Card, ListGroup, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import random from "random";

const backgroundColor = ["b6e3f4", "c0aede", "d1d4f9", "ffd5dc", "ffdfbf"];
const clothingColor = ["456dff", "54d7c7", "6dbb58", "7555ca", "e24553", "f3b63a", "f55d81"];
const eyes = ["glasses", "happy", "open", "sleep", "sunglasses", "wink"];
const facialHair = ["beardMustache", "goatee", "pyramid", "shadow", "soulPatch", "walrus"];
const hair = [
  "bald",
  "balding",
  "beanie",
  "bobBangs",
  "bobCut",
  "bunUndercut",
  "buzzcut",
  "cap",
  "curly",
  "curlyBun",
  "curlyHighTop",
  "extraLong",
  "fade",
  "long",
  "mohawk",
  "pigtails",
  "shortCombover",
  "shortComboverChops",
  "sideShave",
  "straightBun",
];
function randomAvatar() {
  let settingsUrl = "";
  let mainUrl = `https://api.dicebear.com/5.x/personas/svg?seed=Aneka`;
  settingsUrl += `&backgroundColor=${backgroundColor[random.int(backgroundColor.length - 1)]}`;
  settingsUrl += `&clothingColor=${clothingColor[random.int(clothingColor.length - 1)]}`;
  settingsUrl += `&eyes=${eyes[random.int(eyes.length - 1)]}`;
  settingsUrl += `&facialHair=${facialHair[random.int(facialHair.length - 1)]}`;
  settingsUrl += `&hair=${hair[random.int(hair.length - 1)]}`;
  return mainUrl + settingsUrl;
}

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
                    <Card.Img src={randomAvatar()} />
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
