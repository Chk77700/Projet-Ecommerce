import React from 'react';
import STLViewer from "stl-viewer";
import Header from "./Header";
import {Row, Col} from "react-bootstrap";
import '../css/bootstrapCommerce.css';
import "../font/Oswald-VariableFont_wght.ttf";
import Devis from "./Devis";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDevis: null
        };
    }

    showDevis = () => {
        this.setState({showDevis: true})
    }

    render() {
        return (
            <div style={{fontFamily: "Oswald"}}>
                <Header showDevis={this.showDevis}/>
                <Row>
                    <Col lg={2} sm={0}/>
                    <Col lg={8} sm={12}>
                        {this.state.showDevis && <Devis/>}
                    </Col>
                    <Col lg={2} sm={0}/>
                </Row>
            </div>
        );
    }
}
