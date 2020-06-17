import React from "react";
import Axios from "axios";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

export default class MostViewed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idUser: localStorage.getItem("userId"),
            articles: []
        };
    }

    componentDidMount() {
        this.getMostViewed();
    }

    getMostViewed = () => {
        Axios.post("http://localhost:8000/mostViewed", {id: this.state.idUser})
            .then(resp => this.setState({articles: resp.data}));
    }

    render() {
        return (
            <Container>
                <Row>
                    {
                        this.state.articles.map((x, i) => (
                            <>
                                <Col lg={4} sm={12} md={6}>
                                    <Card key={i}>
                                        <Card.Img style={style.boutique} variant="top" height="230"
                                                  src={`http://localhost:8000${x.photo}`}/>
                                        <Card.Body>
                                            <Card.Text className="text-ecommerce1">
                                                <h3 className="text-ecommerce2">{x.name}</h3>
                                                {x.description}
                                                <h4 className={"text-secondary"}>{`${x.views} vues`}</h4>
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Row>
                                                <Col>
                                                    <h4>{`${x.price}€`}</h4>
                                                </Col>
                                                <Col>
                                                    <Link to={`/article/${x.id}`}>
                                                        <Button value={i} variant={"ecommerce3"}>
                                                            Details
                                                        </Button>
                                                    </Link>
                                                </Col>
                                            </Row>
                                        </Card.Footer>
                                    </Card>
                                    <br/>
                                </Col>
                            </>
                        ))
                    }
                </Row>
            </Container>
        )
    }
}

const style = {
    boutique: {
        cursor: "pointer"
    }
}