import React, {Component, useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import Axios from "axios";

export default function CommandeDetail() {
    const {id} = useParams();
    const [commande, setCommande] = useState([]);
    useEffect(() => {
        Axios.post("http://localhost:8000/commandeDetail", {id: id})
            .then(res => {
                setCommande(res.data);
                const order = res.data[0].statut;
                if(order === 'en cours de preparation') {

                }
            });
    }, [id]);
    const getProcessOrder = (res) => {
    }
    return (
        <>
            {commande.map((x, i) => (
                <Container key={i} style={{marginBottom: "100px"}}>
                    <Row>
                        <Col >

                            <Card.Img variant="top" src={`http://localhost:8000${x.detailArticle.photo}`}/>
                            <h3>{`Article: ${x.detailArticle.name}`}</h3>
                            <h3>{`Prix: ${x.total}€`}</h3>
                            <h3>{`Nombre d'article: ${x.nombre_article}`}</h3>
                        </Col>
                        <Col>
                            <Row style={{marginTop: "20px"}}>
                                <Col className={"text-ecommerce2"} style={{borderRight: "1px solid grey"}}>
                                    <h3>{`Nom: ${x.nom}`}</h3>
                                    <h3>{`Prenom: ${x.prenom}`}</h3>
                                </Col>
                                <Col className={"text-ecommerce2"}>
                                    <h3>{`Adresse: ${x.adresse}`}</h3>
                                    <h3>{`Ville: ${x.ville}`}</h3>
                                    <h3>{`Code postal: ${x.code_postal}`}</h3>
                                </Col>
                            </Row>
                            <hr/>
                            <Row>
                                <Col className={"text-ecommerce2"} style={{borderRight: "1px solid grey"}}>
                                    <h3>{`Date: ${new Date(Date.parse(x.date)).toString()}`}</h3>
                                </Col>
                                <Col className={"text-ecommerce2"}>
                                    <h3>{`Statut:`}</h3>
                                    <h3 className={"text-success"}>{x.statut}</h3>
                                </Col>
                            </Row>
                            <Container>
                            <Col>
                                {x.statut === "En cours de preparation" && <Link to={'/modifiercommande'}><Button variant={"ecommerce3"}>Modifier les details de ma commande</Button>
                                </Link>}
                            </Col>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            ))}
        </>
    );
}