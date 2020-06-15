import React from "react";
import STLViewer from "stl-viewer";
import {Form, Row, Col, Container, Button} from "react-bootstrap";
import ApiThingiverse from "./ApiThingiverse";
import StlDevis from "./StlDevis";
import StlUpload from "./StlUpload";

export default class Devis extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showUpload: null,
            upload: null,
            showSTL: null,
            validate: null,
            url: [],
            path: null
        }
    }

    uploadStl = (e) => {
        this.setState({
            upload: URL.createObjectURL(e.target.files[0]),
            showUpload: true
        });
    }

    getStlFromAPI = (tab, path) => {
        this.setState({url: tab, path: path, showSTL: true});
        console.log(this.state);
    }

    render() {
        return (
            <Container>
                <Row>
                    {this.state.showSTL && this.state.url.map((x, i) => (<Row>
                        <StlDevis path={this.state.path} url={x} refresh={this.props.refresh}/>
                        <hr/>
                    </Row>))}
                    {this.state.showUpload &&
                    <StlUpload path={this.state.upload} refresh={this.props.refresh}/>
                    }
                </Row>
                <Form>
                    <Form.File
                        id="custom-file"
                        label="Choisissez un fichier stl"
                        onChange={this.uploadStl}
                        custom
                    />
                </Form>
                <ApiThingiverse stl={this.getStlFromAPI}/>
            </Container>
        )
    }
}