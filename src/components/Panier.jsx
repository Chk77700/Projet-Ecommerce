import React from "react";
import {Button, Card, Col, Form, FormControl, Row} from "react-bootstrap";
import Axios from "axios";
import STLViewer from "stl-viewer";
import {Link} from "react-router-dom";

export default class Panier extends React.Component {
    constructor(props) {
        super(props);
        if (localStorage.getItem("panier") !== null)
            this.state = {
                panier: JSON.parse(localStorage.getItem("panier")),
                total: 0,
                adresse: "",
                isConnected: null,
                pays: [],
                livraison: 0
            }
        else this.state = {
            panier: [],
            total: 0,
            adresse: "",
            isConnected: null,
            pays: [],
            livraison: 0
        }
    }

    componentDidMount() {
        this.refreshPanier();
        this.getPays();
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.isConnected)
            this.setState({isConnected: true});
    }

    refreshPanier = (e) => {
        const panier = JSON.parse(localStorage.getItem("panier"));
        let total = 0;
        for (let i = 0; i < panier.length; i++)
            total += ((parseInt(panier[i].total) * parseInt(panier[i].price)) + (parseInt(panier[i].total) * this.state.livraison));
        this.setState({panier: panier, total: total})
    }

    getPays = async () => {
        const res = await Axios.post("http://localhost:8000/getPays");
        this.setState({pays: res.data});
    }

    deletePanier = async (e) => {
        let panier = JSON.parse(localStorage.getItem("panier")).filter((x, i) => i !== parseInt(e.target.value));
        await localStorage.setItem("panier", JSON.stringify(panier));
        this.refreshPanier();
        this.props.refresh();
    }

    sendCommande = async (e) => {
        let userId = localStorage.getItem("userId");
        if (userId === null)
            userId = 0;
        const body = {
            articles: this.state.panier,
            adresse: this.state.adresse,
            userId: userId,
            ville: this.state.ville,
            nom: this.state.nom,
            prenom: this.state.prenom,
            idPays: this.state.idPays,
            codePostal: this.state.codePostal
        }
        const response = await Axios.post("http://localhost:8000/commande", body);
        if (response.data) {
            localStorage.setItem("panier", JSON.stringify([]));
            this.props.refresh();
            window.location = "http://localhost:3000/mesCommandes";
        }
    }

    changeTotal = (e, i) => {
        if (e.target.value === "")
            e.target.value = 1;
        let {panier} = this.state;
        panier[i].total = e.target.value;
        localStorage.setItem("panier", JSON.stringify(panier));
        this.refreshPanier();
    }

    changePays = async (e) => {
        await this.setState({
            livraison: this.state.pays[e.target.value].prix,
            idPays: this.state.pays[e.target.value].id
        });
        this.refreshPanier();
    }

    render() {
        return (
            <>
                <Row>
                    {this.state.panier.map((x, i) => (
                        <>
                            <Col lg={4} sm={12} md={6}>
                                <Card bg={"light"} key={i}>
                                    {
                                        x.photo.split(".")[x.photo.split(".").length - 1] !== "stl" && x.photo.split(".")[x.photo.split(".").length - 1] !== "STL" &&
                                        <Card.Img style={style.boutique} variant="top"
                                                  src={`http://localhost:8000${x.photo}`}/>
                                    }
                                    {
                                        x.photo.split(".")[x.photo.split(".").length - 1] === "stl" || x.photo.split(".")[x.photo.split(".").length - 1] === "STL" &&
                                        <STLViewer
                                            model={x.photo}
                                            width={300}
                                            height={300}
                                            modelColor={"red"}
                                            backgroundColor='#EAEAEA'
                                            rotate={true}
                                            orbitControls={true}
                                        />
                                    }
                                    <Card.Body>
                                        <Card.Text className="text-ecommerce1">
                                            <h3 className="text-ecommerce2">{x.name}</h3>
                                            {x.description}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            <Col>
                                                <h4>{`${x.price}€`}</h4>
                                            </Col>
                                            <Col>
                                                <h5>{`${x.total} articles`}</h5>
                                                <FormControl type="number" value={x.total}
                                                             onChange={(e) => this.changeTotal(e, i)}/>
                                            </Col>
                                            <Col>
                                                <Button value={i} variant={"danger"} onClick={this.deletePanier}>
                                                    Supprimer
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                                <br/>
                            </Col>
                        </>
                    ))}
                </Row>
                <Row>
                    <Col>
                        {`Total: ${this.state.total}€`}
                    </Col>
                    {this.state.total > 0 && <>
                        <Col>
                            <Form>
                                <FormControl type="text" placeholder="Votre nom"
                                             onChange={(e) => this.setState({nom: e.target.value})}/>
                                <FormControl type="text" placeholder="Votre prenom"
                                             onChange={(e) => this.setState({prenom: e.target.value})}/>
                                <FormControl type="number" placeholder="Votre code postal"
                                             onChange={(e) => this.setState({codePostal: e.target.value})}/>
                                <FormControl type="text" placeholder="Votre ville"
                                             onChange={(e) => this.setState({ville: e.target.value})}/>
                                <FormControl type="text" placeholder="Votre adresse"
                                             onChange={(e) => this.setState({adresse: e.target.value})}/>
                                <Form.Control as="select" onChange={this.changePays} custom>
                                    {
                                        this.state.pays.map((x, i) => (
                                            <option idPays={x.id} value={x.id}>{x.pays}</option>
                                        ))
                                    }
                                </Form.Control>
                            </Form>
                        </Col>
                        <Col>
                            {this.state.isConnected && <Button variant={"ecommerce3"} onClick={this.sendCommande}>
                                Commander
                            </Button>}
                            {!this.state.isConnected && <>
                                <Button variant={"ecommerce3"} onClick={this.sendCommande}>
                                    Commander sans se connecter
                                </Button>
                                <Link to={"/register"}>
                                    <Button variant={"ecommerce2"}>
                                        Inscription
                                    </Button>
                                </Link>
                            </>}
                        </Col>
                    </>}
                </Row>
            </>
        )
    }
}

const style = {
    boutique: {
        cursor: "pointer"
    }
}