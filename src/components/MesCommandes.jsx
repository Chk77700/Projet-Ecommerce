import React from "react";
import {Container, Card, Col, Button, Row} from "react-bootstrap";
import Axios from "axios";
import {Link} from "react-router-dom";
import Modifier from './modifierCommande';
export default class MesCommandes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commandes: []
        }
    }

    componentDidMount() {
        this.getCommandes()
    }

    getCommandes = async () => {
        const commandes = await Axios.post("http://localhost:8000/mesCommandes", {id: localStorage.getItem("userId")});
        console.log(commandes.data);
        this.setState({commandes: commandes.data});
    }

    render() {
        return (
            <Container>
                <h3 className={"text-ecommerce3"}>
                    Recapitulatif de vos commandes:
                </h3>
                <br/>
                {this.state.commandes.length === 0 && <h4 className={"text-danger"}>Aucunes commandes</h4>}
                {
                    this.state.commandes.map((x, i) => (
                        <>
                            <Card>
                                <Card.Header>
                                    <h3>{`Statut: ${x.statut}`}</h3>
                                </Card.Header>
                                <Card.Body key={i} className={"text-ecommerce2"}>
                                    <h3>{`Boutique: ${x.boutique}`}</h3>
                                    <h4>{`Adresse: ${x.adresse} ${x.code_postal} ${x.ville}`}</h4>
                                    <h4>{`Total: ${x.prix_total}€`}</h4>
                                </Card.Body>
                                <Card.Footer>
                                    <Row>
                                        <Col>
                                            <h5>{`Date: ${x.date}`}</h5>
                                        </Col>
                                        <Col>
                                            <Link to={`/commandeDetail/${x.id}`}>
                                                <Button variant={"ecommerce3"}>
                                                    Details
                                                </Button>
                                            </Link>
                                        </Col>


                                    </Row>
                                </Card.Footer>
                            </Card>
                            <br/>
                        </>
                    ))
                }
            </Container>
        )
    }

}