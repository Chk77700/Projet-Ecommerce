import React from "react";
import {Container, Card, Badge, Row, Button, Col, Form} from "react-bootstrap";
import Axios from "axios";
import {Link} from "react-router-dom";

export default class Boutiques extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boutiques: [],
            showBoutiques: true,
            showBoutique: null,
            key: null
        };
    }

    changeShop = (e, key) => {
        this.setState({
            showBoutiques: null,
            showBoutique: true,
            key: key
        });
    }

    changeTri = (e) => {
        if (e.target.value === "1") this.triCroissant();
        if (e.target.value === "2") this.triDecroissant();
        if (e.target.value === "3") this.triAlpha();
        if (e.target.value === "4") this.triAlphaInverse();
    }

    triCroissant = () => {
        let articles = this.state.boutiques[this.state.key].articles;
        for (let i = 0; i < articles.length - 1; i++)
            for (let j = 0; j < articles.length - 1; j++)
                if (articles[j].price > articles[j + 1].price) {
                    const temp = articles[j];
                    articles[j] = articles[j + 1];
                    articles[j + 1] = temp;
                    i = 0;
                }
        let boutiques = this.state.boutiques;
        boutiques[this.state.key].articles = articles;
        this.setState({boutiques: boutiques});
    }

    triDecroissant = () => {
        let articles = this.state.boutiques[this.state.key].articles;
        for (let i = 0; i < articles.length - 1; i++)
            for (let j = 0; j < articles.length - 1; j++)
                if (articles[j].price < articles[j + 1].price) {
                const temp = articles[j];
                articles[j] = articles[j + 1];
                articles[j + 1] = temp;
                i = 0;
            }
        let boutiques = this.state.boutiques;
        boutiques[this.state.key].articles = articles;
        this.setState({boutiques: boutiques});
    }

    triAlpha = () => {
        let articles = this.state.boutiques[this.state.key].articles;
        articles.sort((x, y) => x.name.localeCompare(y.name));
        let boutiques = this.state.boutiques;
        boutiques[this.state.key].articles = articles;
        this.setState({boutiques: boutiques});
    }

    triAlphaInverse = () => {
        let articles = this.state.boutiques[this.state.key].articles;
        articles.sort((x, y) => y.name.localeCompare(x.name));
        let boutiques = this.state.boutiques;
        boutiques[this.state.key].articles = articles;
        this.setState({boutiques: boutiques});    }

    componentDidMount() {
        Axios.post("http://localhost:8000/boutiques").then(res => {
            this.setState({boutiques: res.data});
            console.log(res.data)
        });
    }

    render() {
        return (
            <Container className="ma-boutique-padding">
                <p className="boutiques-p-padding">Liste de tous les vendeurs de Print'n go :</p>
                <Row>
                    {
                        this.state.showBoutiques && this.state.boutiques.map((x, i) => (
                            <>
                                <Col lg={4} sm={12} md={6}>
                                    <Card key={i} style={style.boutique} onClick={(e) => this.changeShop(e, i)}>
                                        {/* <Card.Img value={i} variant="top" src={`http://localhost:8000${x.photo}`}/> */}
                                        <Card.Body>
                                            <Card.Text className="text-ecommerce2">
                                                <p>Nom du vendeur : {x.username}</p>
                                                <p>Nombre d'article: </p>
                                                <p className="nom-du-vendeur-dans-boutiques">Cliquez pour afficher les produits</p>
                                                {/* <h5>
                                                    {x.covid && <Badge variant={"ecommerce1"}>Covid</Badge>}
                                                    {x.urgences && <Badge variant={"ecommerce1"}>Urgences</Badge>}
                                                </h5> */}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <br/>
                                </Col>
                            </>
                        ))
                    }
                </Row>
                {
                    this.state.showBoutique && <>
                        <Row>
                            <Col>
                                Trier par:
                            </Col>
                            <Col>
                                <Form.Control as="select" onChange={this.changeTri} custom>
                                    <option>Choisissez un tri</option>
                                    <option value={1}>Prix par ordre croissant</option>
                                    <option value={2}>Prix par ordre decroissant</option>
                                    <option value={3}>Prix par ordre alphabetique</option>
                                    <option value={4}>Prix par ordre alphabetique inverse</option>
                                </Form.Control>
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            {this.state.boutiques[this.state.key].articles.map((x, i) => (
                                <>
                                    <Col lg={4} sm={12} md={6}>
                                        <Card key={i}>
                                            <Card.Img style={style.boutique} variant="top"
                                                      src={`http://localhost:8000${x.photo}`} className="photo-articles-de-chaque-vendeur"/>
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
                                                        <Link to={`/article/${x.id}`}>
                                                            <Button value={i} variant={"ecommerce3"}>
                                                                Details
                                                            </Button>
                                                        </Link>
                                                    </Col>
                                                </Row>
                                            </Card.Footer>
                                        </Card>
                                        <br/>
                                    </Col>
                                </>
                            ))}
                        </Row>
                    </>}
            </Container>
        )
    }
}

const style = {
    boutique: {
        cursor: "pointer"
    }
}