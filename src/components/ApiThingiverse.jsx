import React from "react";
import {Button, Form, FormControl, Card, InputGroup} from "react-bootstrap";
const axios = require('axios');

export default class ApiThingiverse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          search: "",
          result: []
        };
    }

    searchModel =  () => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://www.thingiverse.com/search?q=${this.state.search}&type=things&sort=relevant`)
            .then((response) => this.setState({result: response.data}))
    }

    render() {
        return (
            <>
                <InputGroup className={"mb-6"}>
                <FormControl type="text" onChange={(e) => this.setState({search: e.target.value})} placeholder="Recherchez un modele" className="mr-sm-2" />
                <Button onClick={this.searchModel} variant="ecommerce3">Recherche</Button>
                </InputGroup>
                {
                    this.state.result.map((x, i) => (
                        <Card key={i} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={x.thumbnail} />
                            <Card.Body>
                                <Card.Title>{x.name}</Card.Title>
                                <Card.Text>
                                    {x.description}
                                </Card.Text>
                                <Button value={x.id} variant="primary">Selectionner</Button>
                            </Card.Body>
                        </Card>
                    ))
                }
            </>
        )
    }
}