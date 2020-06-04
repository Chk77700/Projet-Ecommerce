import React from "react";
import {Container, Image, Card, Badge, Row, Button, Col} from "react-bootstrap";

export default class Boutiques extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boutiques: test,
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

    addPanier = (e) => {
        let article = this.state.boutiques[this.state.key].articles[e.target.value];
        let panier = JSON.parse(localStorage.getItem("panier"));
        panier === null ? panier = [article] : panier.push(article);
        localStorage.setItem("panier", JSON.stringify(panier));
        this.props.refresh();
    }

    render() {
        return (
            <Container>
                {
                    this.state.showBoutiques && this.state.boutiques.map((x, i) => (
                        <>
                            <Card key={i} style={style.boutique} onClick={(e) => this.changeShop(e, i)}>
                                <Card.Img value={i} variant="top" src={x.photo}/>
                                <Card.Body>
                                    <Card.Text className="text-ecommerce2">
                                        <h3>{x.name}</h3>
                                        <h5>
                                            {x.covid && <Badge variant={"ecommerce1"}>Covid</Badge>}
                                            {x.urgences && <Badge variant={"ecommerce1"}>Urgences</Badge>}
                                        </h5>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <br/>
                        </>
                    ))
                }
                {
                    this.state.showBoutique && this.state.boutiques[this.state.key].articles.map((x, i) => (
                        <>
                            <Card key={i}>
                                <Card.Img style={style.boutique} variant="top" src={x.photo}/>
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
                                            <Button value={i} variant={"ecommerce3"} onClick={this.addPanier}>Ajouter au
                                                panier
                                            </Button>
                                        </Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                            <br/>
                        </>
                    ))
                }
            </Container>
        )
    }
}

const style = {
    boutique: {
        cursor: "pointer"
    }
}

const articles = [
    {
        name: "Figurine",
        price: 15,
        description: "Sin autem ad adulescentiam perduxissent, dirimi tamen interdum",
        photo: "https://fc03.deviantart.net/fs71/f/2014/104/f/3/dark_future_warrior_3d_printed_action_figure_by_hauke3000-d7eg1n9.jpg"
    }
];

const test = [
    {
        name: "PlasticLand",
        photo: "https://syrax.net/wp-content/uploads/2018/08/3d-printing.jpg",
        urgences: true,
        covid: null,
        articles: articles
    },
    {
        name: "FullFigurines",
        photo: "https://i.redd.it/5nsx9dc288qz.jpg",
        urgences: null,
        covid: true,
        articles: articles
    },
    {
        name: "CovidHelp",
        photo: "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2020/04/3d_printer_eac_close-up/21982695-1-eng-GB/3D_printer_EAC_close-up_pillars.jpg",
        urgences: true,
        covid: true,
        articles: articles
    },
    {
        name: "HomeDepot",
        photo: "https://www.3dnatives.com/en/wp-content/uploads/sites/2/Article_PLA_Cover.jpg",
        urgences: null,
        covid: null,
        articles: articles
    },
    {
        name: "PhoneGadjet",
        photo: "https://i.all3dp.com/cdn-cgi/image/fit=cover,w=1284,h=722,gravity=0.5x0.5,format=auto/wp-content/uploads/2018/05/26142617/50-things.jpg",
        urgences: null,
        covid: null,
        articles: articles
    },
];