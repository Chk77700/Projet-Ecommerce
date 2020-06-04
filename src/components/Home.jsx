import React from 'react';
import STLViewer from "stl-viewer";
import Header from "./Header";
import {Row, Col} from "react-bootstrap";
import '../css/bootstrapCommerce.css';
import "../font/Oswald-VariableFont_wght.ttf";
import Devis from "./Devis";
import Boutiques from "./Boutiques";
import Panier from "./Panier";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        let taille;
        localStorage.getItem("panier") === null ? taille = 0 : taille = JSON.parse(localStorage.getItem("panier")).length;
        this.state = {
            showDevis: null,
            showBoutiques: null,
            showPanier: null,
            taillePanier: taille
        };
    }

    showDevis = () => {
        this.setState({showDevis: true, showBoutiques: null, showPanier: null})
    }

    showBoutiques= () => {
        this.setState({showDevis: null, showBoutiques: true, showPanier: null})
    }

    showPanier= () => {
        this.setState({showDevis: null, showBoutiques: null, showPanier: true})
    }

    refreshPanier = () => {
        this.setState({taillePanier: JSON.parse(localStorage.getItem("panier")).length});
    }

    render() {
        return (
            <div style={{fontFamily: "Oswald"}}>
                <Header taille={this.state.taillePanier} showBoutiques={this.showBoutiques} showDevis={this.showDevis} showPanier={this.showPanier}/>
                <Row>
                    <Col lg={2} sm={0}/>
                    <Col lg={8} sm={12}>
                        {this.state.showDevis && <Devis/>}
                        {this.state.showBoutiques && <Boutiques refresh={this.refreshPanier}/>}
                        {this.state.showPanier && <Panier refresh={this.refreshPanier}/>}
                    </Col>
                    <Col lg={2} sm={0}/>
                </Row>
            </div>
        );
    }
}
