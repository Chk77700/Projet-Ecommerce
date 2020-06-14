import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Badge, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import Axios from "axios";

import "../css/font.css";

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            taillePanier: props.taille,
            isAdmin: null,
            isConnected: null,
            email: "",
            password: "",
            error: null,
            search: ""
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.taille)
            this.setState({taillePanier: nextProps.taille});
        if (nextProps.isAdmin)
            this.setState({isAdmin: true});
        if (nextProps.isConnected)
            this.setState({isConnected: true});
    }

    login = () => {
        Axios.post("http://localhost:8000/login", {email: this.state.email, password: this.state.password})
            .then(res => {
                console.log(res.data);
                if (res.data.valid) {
                    localStorage.setItem("userId", res.data.id);
                    this.setState({isConnected: true, error: null});
                    this.props.refreshConnect();
                } else this.setState({error: true});
            });
    }

    render() {
        return (
            <Navbar expand="md" variant={"ecommerce3"} className="main-navbar bg-ecommerce1">
                <Link to={"/"}>
                    <Navbar.Brand className="text-ecommerce2" href="#home">
                        <img
                            src="/logo.png"
                            width="60"
                            height="60"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto header-navbar">
                        <Link to={"/devis"}>
                            <Nav.Link href="#devis">Faire un devis</Nav.Link>
                        </Link>
                        <Link to={"/boutiques"}>
                            <Nav.Link href="#boutiques">Boutiques</Nav.Link>
                        </Link>
                        {<Link to={"/panier"}>
                            <Nav.Link href="#devis">
                                <Badge variant={"ecommerce3"}>{this.state.taillePanier}</Badge>
                                Panier
                            </Nav.Link>
                        </Link>}
                        {this.state.isConnected && <>
                            <Link to={"/mesCommandes"}>
                                <Nav.Link href="#devis">Mes commandes</Nav.Link>
                            </Link>
                            <Link to={"/monCompte"}>
                                <Nav.Link href="#devis">Mon compte</Nav.Link>
                            </Link>
                        </>}
                        {
                            !this.state.isConnected && <NavDropdown title="Se Connecter" id="basic-nav-dropdown">
                                {this.state.error && <p className={"text-danger"}>Mauvais identifiants!</p>}
                                <FormControl autoFocus className="mx-3 my-2 w-auto" placeholder="Email"
                                             onChange={(e) => this.setState({email: e.target.value})}/>
                                <FormControl type={"password"} className="mx-3 my-2 w-auto" placeholder="Mot de passe"
                                             onChange={(e) => this.setState({password: e.target.value})}/>
                                <Row>
                                    <Col sm={6}>
                                        <Button variant={"ecommerce2"} onClick={this.login}>
                                            Connection
                                        </Button>
                                    </Col>
                                    <Col sm={6}>
                                        <Link to={"/register"}>
                                            <Button variant={"ecommerce2"}>
                                                Inscription
                                            </Button>
                                        </Link>
                                    </Col>
                                </Row>
                            </NavDropdown>
                        }
                        {
                            this.state.isAdmin && <NavDropdown title="Admin" id="basic-nav-dropdown">
                                <Link to={"/maBoutique"}>
                                    <NavDropdown.Item href="#urgences">Ma Boutique</NavDropdown.Item>
                                </Link>
                                <Link to={"/suiviCommandesAdmin"}>
                                    <NavDropdown.Item href="#covid">Suivi de mes commandes</NavDropdown.Item>
                                </Link>
                                <Link to={"/createArticle"}>
                                    <NavDropdown.Item href="#covid">Creer une annonce</NavDropdown.Item>
                                </Link>
                            </NavDropdown>
                        }
                    </Nav>
                    <Form inline>
                        <FormControl type="text" onChange={(e) => this.setState({search: `/search/${e.target.value}`})}
                                     placeholder="Recherchez un objet" className="mr-sm-2"/>
                        <Link to={this.state.search}>
                            <Button variant="ecommerce3">Go</Button>
                        </Link>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}