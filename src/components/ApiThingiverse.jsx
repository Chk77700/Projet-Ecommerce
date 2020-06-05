import React from "react";
import {Button, Form, FormControl, Card, InputGroup, Row, Col} from "react-bootstrap";
import Axios from "axios";

export default class ApiThingiverse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPage: null,
            page: 1,
            search: "",
            result: []
        };
    }

    searchModel = () => {
        Axios.get(`https://cors-anywhere.herokuapp.com/https://www.thingiverse.com/search?q=${this.state.search}&type=things&sort=relevant&page=${this.state.page}`)
            .then((response) => this.setState({result: response.data, showPage: true}))
    }

    precedent = () => {
        const num = this.state.page;
        num > 1 ? this.setState({page: num - 1}) : this.setState({page: 1});
        this.searchModel();
    }

    suivant = () => {
        const num = this.state.page;
        this.setState({page: num + 1});
        this.searchModel();
    }

    select = async (e) => {
        const result = await Axios.get(`https://cors-anywhere.herokuapp.com/https://www.thingiverse.com/thing:${e.target.value}/zip`);
        console.log(result)
    }

    render() {
        return (
            <>
                <InputGroup className={"mb-6"}>
                    <FormControl type="text" onChange={(e) => this.setState({search: e.target.value})}
                                 placeholder="Recherchez un modele" className="mr-sm-2"/>
                    <Button onClick={this.searchModel} variant="ecommerce3">Recherche</Button>
                </InputGroup>
                <Row>
                    {
                        this.state.result.map((x, i) => (
                            <Col key={i} md={6} sm={12} lg={4}>
                                <Card style={{width: '18rem'}}>
                                    <Card.Img variant="top" src={x.thumbnail}/>
                                    <Card.Body>
                                        <Card.Title>{x.name}</Card.Title>
                                        <Card.Text>
                                            {x.description}
                                        </Card.Text>
                                        <Button value={x.id} onClick={this.select} variant="ecommerce2">Selectionner</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
                {
                    this.state.showPage && <Row>
                        <Col>
                            <Button onClick={this.precedent} variant={"ecommerce3"}>Precedent</Button>
                        </Col>
                        <Col/>
                        <Col/>
                        <Col/>
                        <Col>
                            <Button onClick={this.suivant} variant={"ecommerce3"}>Suivant</Button>
                        </Col>
                    </Row>
                }
            </>
        )
    }
}