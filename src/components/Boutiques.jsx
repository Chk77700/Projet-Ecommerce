import React from "react";
import {Container, Image, Card, Badge, Row, Button, Col} from "react-bootstrap";
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

    componentDidMount() {
        Axios.post("http://localhost:8000/boutiques").then(res => {
            this.setState({boutiques: res.data});
            console.log(res.data)
        });
    }

    render() {
        return (
            <Container>
                <Row>
                    {
                        this.state.showBoutiques && this.state.boutiques.map((x, i) => (
                            <>
                                <Col lg={4} sm={12} md={6}>
                                    <Card key={i} style={style.boutique} onClick={(e) => this.changeShop(e, i)}>
                                        <Card.Img value={i} variant="top" src={`http://localhost:8000${x.photo}`}/>
                                        <Card.Body>
                                            <Card.Text className="text-ecommerce2">
                                                <h3>{x.username}</h3>
                                                <h5>
                                                    {x.covid && <Badge variant={"ecommerce1"}>Covid</Badge>}
                                                    {x.urgences && <Badge variant={"ecommerce1"}>Urgences</Badge>}
                                                </h5>
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
                    this.state.showBoutique && <Row>
                        {this.state.boutiques[this.state.key].articles.map((x, i) => (
                            <>
                                <Col lg={4} sm={12} md={6}>
                                    <Card key={i}>
                                        <Card.Img style={style.boutique} variant="top"
                                                  src={`http://localhost:8000${x.photo}`}/>
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

// const articles = [
//     {
//         name: "Figurine",
//         price: 15,
//         description: "Sin autem ad adulescentiam perduxissent, dirimi tamen interdum",
//         photo: "https://fc03.deviantart.net/fs71/f/2014/104/f/3/dark_future_warrior_3d_printed_action_figure_by_hauke3000-d7eg1n9.jpg"
//     },
//     {
//         name: "Visiere",
//         price: 5,
//         description: "Sin autem ad adulescentiam perduxissent, dirimi tamen interdum",
//         photo: "https://ville-nogentsurmarne.com/wp-content/uploads/2020/04/9ba782ae4cc816061dc8ba40938a0a58.jpg"
//     },
//     {
//         name: "Porte crayons",
//         price: 7,
//         description: "Sin autem ad adulescentiam perduxissent, dirimi tamen interdum",
//         photo: "https://lh3.googleusercontent.com/proxy/mZlGZZpC_-kgy6qarohKxwUvEstmzhFC3iIO-fZApL-To9sGXdtmFsEgdWwFr4a3qnUiO9cTTNitBE-f"
//     },
//     {
//         name: "Support telephone",
//         price: 11,
//         description: "Sin autem ad adulescentiam perduxissent, dirimi tamen interdum",
//         photo: "https://i.etsystatic.com/17285982/r/il/7ce614/1823017499/il_570xN.1823017499_pur9.jpg"
//     },
// ];
//
// const test = [
//     {
//         username: "PlasticLand",
//         photo: "https://syrax.net/wp-content/uploads/2018/08/3d-printing.jpg",
//         urgences: true,
//         covid: null,
//         articles: articles
//     },
//     {
//         username: "FullFigurines",
//         photo: "https://i.redd.it/5nsx9dc288qz.jpg",
//         urgences: null,
//         covid: true,
//         articles: articles
//     },
//     {
//         username: "CovidHelp",
//         photo: "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2020/04/3d_printer_eac_close-up/21982695-1-eng-GB/3D_printer_EAC_close-up_pillars.jpg",
//         urgences: true,
//         covid: true,
//         articles: articles
//     },
//     {
//         username: "HomeDepot",
//         photo: "https://www.3dnatives.com/en/wp-content/uploads/sites/2/Article_PLA_Cover.jpg",
//         urgences: null,
//         covid: null,
//         articles: articles
//     },
//     {
//         username: "PhoneGadjet",
//         photo: "https://i.all3dp.com/cdn-cgi/image/fit=cover,w=1284,h=722,gravity=0.5x0.5,format=auto/wp-content/uploads/2018/05/26142617/50-things.jpg",
//         urgences: null,
//         covid: null,
//         articles: articles
//     },
// ];