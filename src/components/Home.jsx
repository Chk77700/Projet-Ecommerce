import React from 'react';
import Header from "./Header";
import {Row, Col} from "react-bootstrap";
import Devis from "./Devis";
import Boutiques from "./Boutiques";
import Panier from "./Panier";
import Axios from "axios";
import AnnonceForm from "./AnnonceForm";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Boutique from "./Boutique";
import Modify from "./Modify";
import Article from "./Article";
import MostViewed from "./MostViewed";
import MesCommandes from "./MesCommandes";
import CommandeDetail from "./CommandeDetail";
import Register from "./Register";
import Caddie from "./Caddie";

import '../css/bootstrapCommerce.css';
import "../font/Oswald-VariableFont_wght.ttf";
import Headers from "./BreadCrumbs/Headers";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        let taille = 0;
        let isConnected;
        if (localStorage.getItem("panier") !== null) {
            isConnected = true;
            const panier = JSON.parse(localStorage.getItem("panier"));
            for (let i = 0; i < panier.length; i++)
                taille += parseInt(panier[i].total);
        } else isConnected = null;
        this.state = {
            taillePanier: taille,
            idUser: localStorage.getItem("userId"),
            isAdmin: null,
            isConnected: isConnected
        };
        this.getRole();
    }

    getRole = async () => {
        if (localStorage.getItem("userId") !== null) {
            const role = await Axios.post("http://localhost:8000/getRole", {id: this.state.idUser});
            if (role.data.role === "vendeur")
                this.setState({isAdmin: true});
        }
    }

    refreshConnect = () => {
        this.setState({isConnected: true})
    }

    refreshPanier = () => {
        const panier = JSON.parse(localStorage.getItem("panier"));
        let count = 0;
        for (let i = 0; i < panier.length; i++)
            count += parseInt(panier[i].total);
        this.setState({taillePanier: count});
    }

    render() {
        return (
            <Router>
                <div style={{fontFamily: "Oswald"}} className={"bg-light text-dark"}>
                    <Header taille={this.state.taillePanier} isAdmin={this.state.isAdmin}
                            isConnected={this.state.isConnected}
                            refreshConnect={this.refreshConnect}/>
                    <Headers/>
                    <Row>
                        <Col lg={2} sm={0}/>
                        <Col lg={8} sm={12}>
                            <Switch>
                                <Route path={"/populaires"}>
                                    <MostViewed/>
                                </Route>
                                <Route path="/devis">
                                    <Devis refresh={this.refreshPanier}/>
                                </Route>
                                <Route path="/boutiques">
                                    <Boutiques refresh={this.refreshPanier}/>
                                </Route>
                                <Route path="/panier">
                                    <Panier refresh={this.refreshPanier} isConnected={this.state.isConnected}/>
                                </Route>
                                <Route path="/createArticle">
                                    <AnnonceForm/>
                                </Route>
                                <Route path="/maBoutique">
                                    <Boutique/>
                                </Route>
                                <Route path={"/modify/:id"}>
                                    <Modify/>
                                </Route>
                                <Route path={"/article/:id"}>
                                    <Article refresh={this.refreshPanier}/>
                                </Route>
                                <Route path={"/mesCommandes"}>
                                    <MesCommandes/>
                                </Route>
                                <Route path={"/commandeDetail/:id"}>
                                    <CommandeDetail/>
                                </Route>
                                <Route path={"/register"}>
                                    <Register/>
                                </Route>
                                <Route path={"/caddie"}>
                                    <Caddie />
                                </Route>
                            </Switch>
                        </Col>
                        <Col lg={2} sm={0}/>
                    </Row>
                </div>
            </Router>
        );
    }
}
