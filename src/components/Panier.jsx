import React from "react";
import {Button, Card, Col, Form, FormControl, Row} from "react-bootstrap";
import Axios from "axios";

export default class Panier extends React.Component {
    constructor(props) {
        super(props);
        if (localStorage.getItem("panier") !== null)
            this.state = {
                panier: JSON.parse(localStorage.getItem("panier")),
                total: 0,
                adresse: ""
            }
        else this.state = {
            panier: [],
            total: 0,
            adresse: ""
        }
    }

    componentDidMount() {
        this.refreshPanier();
    }

    refreshPanier = (e) => {
        const panier = JSON.parse(localStorage.getItem("panier"));
        let total = 0;
        for (let i = 0; i < panier.length; i++)
            total += parseInt(panier[i].total) * parseInt(panier[i].price);
        this.setState({panier: panier, total: total})
    }

    deletePanier = async (e) => {
        let panier = JSON.parse(localStorage.getItem("panier")).filter((x, i) => i !== parseInt(e.target.value));
        await localStorage.setItem("panier", JSON.stringify(panier));
        this.refreshPanier();
        this.props.refresh();
    }

    sendCommande = async (e) => {
        const body = {
            articles: this.state.panier,
            adresse: this.state.adresse,
            userId: localStorage.getItem("userId")
        }
        const response = await Axios.post("http://localhost:8000/commande", body);
        if(response.data) {
            localStorage.setItem("panier", JSON.stringify([]));
            this.props.refresh();
            window.location = "http://localhost:3000/mesCommandes";
        }
    }

    render() {
        return (
            <>
                <Row>
                    {this.state.panier.map((x, i) => (
                        <>
                            <Col lg={4} sm={12} md={6}>
                                <Card bg={"light"} key={i}>
                                    <Card.Img style={style.boutique} variant="top"
                                              src={`http://localhost:8000${x.photo}`}/>
                                    <Card.Body>
                                        <Card.Text className="text-ecommerce1">
                                            <h3 className="text-ecommerce2">{x.name}</h3>
                                            {x.description}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            <Col>
                                                <h4>{`${x.price}€`}</h4>
                                            </Col>
                                            <Col>
                                                <h5>{`${x.total} articles`}</h5>
                                            </Col>
                                            <Col>
                                                <Button value={i} variant={"danger"} onClick={this.deletePanier}>
                                                    Supprimer
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                                <br/>
                            </Col>
                        </>
                    ))}
                </Row>
                <Row>
                    <Col>
                        {`Total: ${this.state.total}€`}
                    </Col>
                    <Col>
                        <FormControl type="text" placeholder="Votre adresse" onChange={(e) => this.setState({adresse: e.target.value})}/>
                    </Col>
                    <Col>
                        <Button variant={"ecommerce3"} onClick={this.sendCommande}>
                            Commander
                        </Button>
                    </Col>
                </Row>
            </>
        )
    }
}

const style = {
    boutique: {
        cursor: "pointer"
    }
}