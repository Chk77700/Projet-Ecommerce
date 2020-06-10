import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import Axios from "axios";

export default function CommandeDetail() {
    const {id} = useParams();
    const [commande, setCommande] = useState([]);

    useEffect(() => {
        Axios.post("http://localhost:8000/commandeDetail", {id: id})
            .then(res => setCommande(res.data));
    });

    return (
        <>
            {commande.map((x, i) => (
                <Container key={i}>
                    <Row>
                        <Col >
                            <Card.Img variant="top" src={`http://localhost:8000${x.detailArticle.photo}`}/>
                        </Col>
                        <Col>
                            <Row style={{marginTop: "20px"}}>
                                <Col className={"text-ecommerce2"} style={{borderRight: "1px solid grey"}}>
                                    <h3>{`Article: ${x.detailArticle.name}`}</h3>
                                </Col>
                                <Col className={"text-ecommerce2"} style={{borderRight: "1px solid grey"}}>
                                    <h3>{`Prix: ${x.total}€`}</h3>
                                </Col>
                                <Col className={"text-ecommerce2"}>
                                    <h3>{`Adresse: ${x.adresse}`}</h3>
                                </Col>
                            </Row>
                            <hr/>
                            <Row>
                                <Col className={"text-ecommerce2"} style={{borderRight: "1px solid grey"}}>
                                    <h3>{`Date: ${x.date}`}</h3>
                                </Col>
                                <Col className={"text-ecommerce2"}>
                                    <h3>{`Statut: ${x.statut}`}</h3>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            ))}
        </>
    );
}