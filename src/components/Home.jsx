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

import '../css/bootstrapCommerce.css';
import "../font/Oswald-VariableFont_wght.ttf";
import Headers from "./BreadCrumbs/Headers";
import Search from "./Search";
import MonCompte from "./MonCompte";
import SuiviCommandes from "./SuiviCommandes";
import SuiviCommandeDetail from "./SuiviCommandeDetail";
import PageAccueil from './PageAccueil';
import Default from "./Default";

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
                <div style={{fontFamily: "Oswald"}} className={"bg-light text-dark test"}>

                    <Header taille={this.state.taillePanier} isAdmin={this.state.isAdmin}
                            isConnected={this.state.isConnected}
                            refreshConnect={this.refreshConnect}/>
                    <Headers/>

                    <Switch>
                        <Route path="/" exact component={PageAccueil} />
                        <Route path={"/populaires"} component={MostViewed} />

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
                        <Route path={"/suiviCommandesAdmin"}>
                            <SuiviCommandes/>
                        </Route>
                        <Route path={"/suiviCommandeDetail/:id"}>
                            <SuiviCommandeDetail/>
                        </Route>
                        <Route path={"/register"}>
                            <Register/>
                        </Route>
                        <Route path={"/search/:search"}>
                            <Search/>
                        </Route>
                        <Route path={"/monCompte"}>
                            <MonCompte/>
                        </Route>
                        <Route component={Default} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
