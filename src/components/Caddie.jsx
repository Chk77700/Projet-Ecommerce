import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Axios from "axios";

export default class Caddie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idUser: localStorage.getItem("userId"),
      articles: [],
      caddie: [],
    };
  }

  render() {
    return (
      <div>
        <h1>
          Utilisateur : Je peux mettre des articles dans un panier à un caddie
          afin de n’acheter ce dont je suis vraiment certain. =======> To Be
          Continued
        </h1>
      </div>
    );
  }
}
