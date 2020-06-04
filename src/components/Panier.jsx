import React from "react";
import {Button, Card, Col, Row} from "react-bootstrap";

export default class Panier extends React.Component {
    constructor(props) {
        super(props);
        if (localStorage.getItem("panier") !== null)
            this.state = {
                panier: JSON.parse(localStorage.getItem("panier"))
            }
        else this.state = {
            panier: []
        }
    }

    refreshPanier = (e) => {
        this.setState({panier: JSON.parse(localStorage.getItem("panier"))})
    }

    deletePanier = async (e) => {
        let panier = JSON.parse(localStorage.getItem("panier")).filter((x, i) => i !== parseInt(e.target.value));
        await localStorage.setItem("panier", JSON.stringify(panier));
        this.refreshPanier();
        this.props.refresh();
    }

    render() {
        return (
            this.state.panier.map((x, i) => (
                <>
                    <Card key={i}>
                        <Card.Img style={style.boutique} variant="top" src={x.photo}/>
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
                                    <Button value={i} variant={"danger"} onClick={this.deletePanier}>
                                        Supprimer
                                    </Button>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                    <br/>
                </>
            ))
        )
    }
}

const style = {
    boutique: {
        cursor: "pointer"
    }
}