import React from "react";
import {useParams} from "react-router-dom";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Axios from "axios";

export default function Modify() {
    let {id} = useParams();
    let state = {
        description: null,
        name: null,
        stock: null,
        price: null,
        photo: null
    };
    let pourcent = [];
    for (let i = 0; i < 100; i++)
        pourcent.push(true);

    const sendForm = async (e) => {
        e.preventDefault();
        let form = new FormData();
        form.append("name", state.name);
        form.append("description", state.description);
        form.append("stock", state.stock);
        form.append("price", state.price);
        form.append("photo", state.photo);
        form.append("id_vendeur", localStorage.getItem("userId"));
        form.append("id", id)
        const response = await Axios.post("http://localhost:8000/modifyArticle", form);
        window.location = "http://localhost:3000/maBoutique";
    }

    const modifySale = async (e) => {
        const res = await Axios.post("http://localhost:8000/modifySale", {id: id, pourcentage: e.target.value});
        if (res.data)  window.location = "http://localhost:3000/maBoutique";
    }

    return (
        <Container style={{marginTop: "20px"}}>
            <Form>
                <Row>
                    <Col>
                        <Form.Control required placeholder="Nom de l'article"
                                      onChange={val => state.name = val.target.value}/>
                    </Col>
                    <Col>
                        <Form.Control required type={"number"} placeholder="Prix"
                                      onChange={val => state.price = val.target.value}/>
                    </Col>
                </Row>
                <Form.Control required style={{marginTop: "20px"}} as="textarea" rows="3"
                              onChange={val => state.description = val.target.value}/>
                <Row style={{marginTop: "20px"}}>
                    <Col>
                        <Form.Control required type={"number"} placeholder="Stock"
                                      onChange={val => state.stock = val.target.value}/>
                    </Col>
                    <Col>
                        <Form.File required name="Photo" label="Photo"
                                   onChange={val => state.photo = val.target.files[0]}/>
                    </Col>
                    <Col>
                        <Button type={"submit"} variant={"ecommerce3"} onClick={sendForm}>
                            Valider
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Pourcentage de rectuction:
                    </Col>
                    <Col>
                        <Form.Control as="select" onChange={(e) => modifySale(e)} custom>
                            <option>Choisissez le pourcentage de reduction</option>
                            {
                                pourcent.map((x, i) => (
                                    <option value={i}>{`${i}%`}</option>
                                ))
                            }
                        </Form.Control>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}