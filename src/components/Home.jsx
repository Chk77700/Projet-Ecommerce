import React from 'react';
import Header from "./Header";
import {Row, Col} from "react-bootstrap";
import '../css/bootstrapCommerce.css';
import "../font/Oswald-VariableFont_wght.ttf";
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

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        let taille = 0;
        if(localStorage.getItem("panier") !== null){
            const panier = JSON.parse(localStorage.getItem("panier"));
            for (let i = 0; i < panier.length; i++)
                taille += parseInt(panier[i].total);
        }
        this.state = {
            taillePanier: taille,
            idUser: localStorage.getItem("userId"),
            isAdmin: null
        };
        this.getRole();
    }

    getRole = async () => {
        const role = await Axios.post("http://localhost:8000/getRole", {id: this.state.idUser});
        if (role.data.role === "vendeur")
            this.setState({isAdmin: true});
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
                <div style={{fontFamily: "Oswald"}} className={"bg-white"}>
                    <Header taille={this.state.taillePanier} isAdmin={this.state.isAdmin}/>
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
                                    <Panier refresh={this.refreshPanier}/>
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
                            </Switch>
                        </Col>
                        <Col lg={2} sm={0}/>
                    </Row>
                </div>
            </Router>
        );
    }
}
