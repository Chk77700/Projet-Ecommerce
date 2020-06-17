import React from "react";
import Axios from "axios";
import {Button, Card, Col, Container, Row, DropdownButton, Dropdown, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
//TODO: comfirmation suppression
export default class Boutique extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idUser: localStorage.getItem("userId"),
            articles: [],
            pourcentage: {
                "#10": 10, 
                "#20": 20,
                "#40": 40,
            }
        };
    }

    componentDidMount() {
        this.getArticle();
    }

    getArticle = () => {
        Axios.post("http://localhost:8000/maBoutique", {id: this.state.idUser})
            .then(resp => this.setState({articles: resp.data}));
    }

    delete = (e) => {
        Axios.post("http://localhost:8000/deleteArticle", {id: this.state.articles[e.target.value].id})
            .then(resp => this.getArticle());
    }

    ChangePourcentage = (e) => {
        this.setState({
            pourcentageMaBoutique: this.state.pourcentage[e.target.value]
        })
        this.ShowPourcentage();
    }

    ShowPourcentage = (e) => {
        this.setState({
            pourcentage: true,
            price: this.state.price * (this.state.pourcentageMaBoutique / 100)
        })
    }

    render() {
        return (
            <Container>
                <Row>
                    {
                        this.state.articles.map((x, i) => (
                            <Col lg={4} sm={12} md={6}>
                                <Card key={i}>
                                    <Card.Img style={style.boutique} variant="top"
                                              src={`http://localhost:8000${x.photo}`}/>
                                    <Card.Body>
                                        <Card.Text className="text-ecommerce1">
                                            <h3 className="text-ecommerce2">{x.name}</h3>
                                            {x.description}
                                            <Row>
                                                <Col>
                                                    <h4 className={"text-warning"}>{`${x.stock} en stocks`}</h4>
                                                </Col>
                                                <Col>
                                                    <h4 className={"text-secondary"}>{`${x.views} vues`}</h4>
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            <Col>
                                                <h4>{`${x.price}€`}</h4>
                                            </Col>
                                            <Col>
                                                <Link to={`/modify/${x.id}`}>
                                                    <Button value={i} variant={"ecommerce3"}>
                                                        Modifier
                                                    </Button>
                                                </Link>
                                                {/* onClick={this.Showpourcentage} */}
                                                <DropdownButton  title="Mettre une promotion">
                                                    <Dropdown.Item value={"#10"}>-10%</Dropdown.Item>
                                                    <Dropdown.Item value={"#20"}>-20%</Dropdown.Item>
                                                    <Dropdown.Item value={"#40"}>-40%</Dropdown.Item>
                                                </DropdownButton>
                                                <Button value={i} variant={"danger"} onClick={this.delete}>
                                                    Supprimer
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                                <br/>
                            </Col>
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