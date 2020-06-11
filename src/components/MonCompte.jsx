import React from "react";
import {Button, Col, Container, Form, FormControl, Row} from "react-bootstrap";
import Axios from "axios";


export default class MonCompte extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: "",
            password: "",
            passwordConf: "",
            passwordError: "",
            passwordSuccess: "",
            email: "",
            emailError: "",
            emailSuccess: ""
        }
    }

    uploadPhoto = async (e) => {
        console.log(e.target.files[0]);
        let form = new FormData();
        form.append("photo", e.target.files[0]);
        form.append("id", localStorage.getItem("userId"));
        const res = await Axios.post("http://localhost:8000/modifyProfilePicture", form);
        if(res.data) this.setState({photo: "Modification effectuee"});
        else this.setState({photo: "Erreur"});
    }

    changePass = async (e) => {
        if (this.state.password !== this.state.passwordConf)
            this.setState({passwordError: "Mots de passe differents!", passwordSuccess: ""});
        else if (this.state.password.length < 6)
            this.setState({passwordError: "Au moins 6 lettres!", passwordSuccess: ""});
        else {
            const res = await Axios.post("http://localhost:8000/modifyPassword", {
                id: localStorage.getItem("userId"),
                password: this.state.password
            });
            if(res.data)
                this.setState({passwordError: "", passwordSuccess: "Mot de passe change!"});
            else this.setState({passwordError: "Erreur serveur!", passwordSuccess: ""});
        }
    }

    changeMail = async (e) => {
        const regMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!this.state.email.match(regMail))
            this.setState({emailError: "Veuillez rentrer un mail valide!", emailSuccess: ""});
        else {
            const res = await Axios.post("http://localhost:8000/modifyMail", {
                id: localStorage.getItem("userId"),
                email: this.state.email
            });
            if(res.data) this.setState({emailError: "", emailSuccess: "Mail change!"});
            else this.setState({emailError: "Mail deja pris", emailSuccess: ""});
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h5 className={"text-success"}>{this.state.photo}</h5>
                        <Form.File label="Choisissez une photo de profil" onChange={this.uploadPhoto} custom/>
                    </Col>
                    <Col>
                        <Form>
                            <h5 className={"text-danger"}>{this.state.passwordError}</h5>
                            <h5 className={"text-success"}>{this.state.passwordSuccess}</h5>
                            <FormControl type={"password"} placeholder={"Nouveau mot de passe"}
                                         onChange={(e) => this.setState({password: e.target.value})}/>
                            <br/>
                            <FormControl type={"password"} placeholder={"Confirmer mot de passe"}
                                         onChange={(e) => this.setState({passwordConf: e.target.value})}/>
                            <Button variant={"ecommerce2"} onClick={this.changePass}>Valider</Button>
                        </Form>
                        <hr/>
                        <h5 className={"text-danger"}>{this.state.emailError}</h5>
                        <h5 className={"text-success"}>{this.state.emailSuccess}</h5>
                        <Form inline>
                            <FormControl type={"text"} placeholder={"Nouveau mail"}
                                         onChange={(e) => this.setState({email: e.target.value})}/>
                            <Button variant={"ecommerce2"} onClick={this.changeMail}>Valider</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}