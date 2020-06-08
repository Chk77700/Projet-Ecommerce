import React from "react";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import Axios from "axios";

export default class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article: []
        }
    }

    componentDidMount() {
        this.getArticle();
    }

    getArticle = async () => {
        await this.addView();
        await Axios.post("http://localhost:8000/article", {id: window.location.href.split("/")[4]})
            .then(resp => this.setState({article: resp.data}));
    }

    addView = async () => {
        await Axios.post("http://localhost:8000/view", {id: window.location.href.split("/")[4]})
            .then(resp => console.log(resp.data));
    }

    addPanier = (e) => {
        let article = this.state.article[0];
        let panier = JSON.parse(localStorage.getItem("panier"));
        panier === null ? panier = [article] : panier.push(article);
        localStorage.setItem("panier", JSON.stringify(panier));
        this.props.refresh();
    }

    render() {
        return (
            <Container style={{marginTop: "20px"}}>
                {
                    this.state.article.map((x, i) => (
                        <>
                            <Card key={i}>
                                <Card.Img style={style.boutique} variant="top"
                                          src={`http://localhost:8000${x.photo}`}/>
                                <Card.Body>
                                    <Card.Text className="text-ecommerce1">
                                        <h3 className="text-ecommerce2">{x.name}</h3>
                                        {x.description}
                                    </Card.Text>
                                    <Row>
                                        <Col>
                                            <h4 className={"text-warning"}>{`${x.stock} en stocks`}</h4>
                                        </Col>
                                        <Col>
                                            <h4 className={"text-secondary"}>{`${x.views} vues`}</h4>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Footer>
                                    <Row>
                                        <Col>
                                            <h4>{`${x.price}€`}</h4>
                                        </Col>
                                        <Col>
                                            {
                                                x.stock > 0 && <Button value={i} variant={"ecommerce3"} onClick={this.addPanier}>
                                                    Ajouter au panier
                                                </Button>
                                            }
                                            {
                                                x.stock === 0 && <h4 className={"text-danger"}>
                                                    En rupture de stock
                                                </h4>
                                            }
                                        </Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                            <br/>
                        </>
                    ))
                }
            </Container>
        );
    }
}

const style = {
    boutique: {
        cursor: "pointer"
    }
}