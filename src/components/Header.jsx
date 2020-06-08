import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Badge} from "react-bootstrap";
import {Link} from "react-router-dom";

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            taillePanier: props.taille,
            isAdmin: null
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.taille)
            this.setState({taillePanier: nextProps.taille});
        if (nextProps.isAdmin)
            this.setState({isAdmin: true})
    }

    render() {
        return (
            <Navbar bg="ecommerce1" expand="md">
                <Link to={"/populaires"}>
                    <Navbar.Brand className="text-ecommerce2" href="#home">
                        <h3>Print'n Go</h3>
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to={"/devis"}>
                            <Nav.Link href="#devis">Faire un devis</Nav.Link>
                        </Link>
                        <Link to={"/boutiques"}>
                            <Nav.Link href="#boutiques">Boutiques</Nav.Link>
                        </Link>
                        <NavDropdown title="Services" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#urgences">Urgences</NavDropdown.Item>
                            <NavDropdown.Item href="#covid">Covid 19</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#propos">A propos</Nav.Link>
                        <Link to={"/panier"}>
                            <Nav.Link href="#devis">
                                <Badge variant={"ecommerce3"}>{this.state.taillePanier}</Badge>
                                Panier
                            </Nav.Link>
                        </Link>
                        <Link to={"/mesCommandes"}>
                            <Nav.Link href="#devis">
                                Mes commandes
                            </Nav.Link>
                        </Link>
                        {
                            this.state.isAdmin && <NavDropdown title="Admin" id="basic-nav-dropdown">
                                <Link to={"/maBoutique"}>
                                    <NavDropdown.Item href="#urgences">Ma Boutique</NavDropdown.Item>
                                </Link>
                                <Link to={"/createArticle"}>
                                    <NavDropdown.Item href="#covid">Creer une annonce</NavDropdown.Item>
                                </Link>
                            </NavDropdown>
                        }
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Recherchez un objet" className="mr-sm-2"/>
                        <Button variant="ecommerce3">Go</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}