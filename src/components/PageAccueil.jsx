import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/font.css";
import Axios from "axios";
import {Button, Card, Col, Container, Row, Image } from "react-bootstrap";

export default class PageAccueil extends Component{
    constructor(props) {
        super(props);
        this.state = {
            idUser: localStorage.getItem("userId"),
            articles: []
        };
    }

    componentDidMount() {
        this.getMostViewed();
    }

    getMostViewed = () => {
        Axios.post("http://localhost:8000/mostViewed", {id: this.state.idUser})
            .then(resp => this.setState({articles: resp.data}));
    }

    render () {
        return (
            <div>
                <main>
                    <div className="main-pageaccueil">
                        <div className="container">
                            <div className="header-page">
                                <h1 className="header-h1-color">Just think, they print</h1>
                                <p className="header-p-color">Rejoins plus de 500 000 mille personnes qui utilisent Print'n go pour partager leurs impressions 3D, ou découvrir les réalisations de nos imprimeurs.</p>
                                <div>
                                    {/* <button></button> */}
                                    <span className="button-t"><Link to="/register" style={{ textDecoration: 'none' }}>Rejoindre</Link></span>
                                </div>
                                <br></br>
                            </div>
                        </div>
                    </div>
                    <div className="container-header-link">
                        <div className="header-link">
                            <Link style={{ textDecoration: 'inherit'}} to="/meilleur">Meilleurs ventes</Link>
                            <Link style={{ textDecoration: 'inherit'}} to="/nouveaute">Dernières Nouveautés</Link>
                            <Link style={{ textDecoration: 'inherit'}} to="/vendeur">Nos vendeurs</Link>
                            <Link style={{ textDecoration: 'inherit'}} to="/reduction">Réduction</Link>
                        </div>
                    </div>
                    <div className="main-padding-top">
                        <div className="container container-background">
                            <div>
                                <h2 className="main-tendance">Les réalisations les plus demandés</h2>
                                {/* <p>(par example un ajout de like, de vue etc...)</p> */}
                                <div className="main-tendance-image">
                                    <Container>
                                        <Row>
                                            {
                                                this.state.articles.map((x, i) => (
                                                    <>
                                                        <Col lg={4} sm={12} md={6}>
                                                            <Card.Img style={style.boutique} variant="top" src={`http://localhost:8000${x.photo}`}/>
                                                            <Card.Footer>
                                                                        <Link to={`/article/${x.id}`}>
                                                                            <Button value={i} variant={"ecommerce3"}>
                                                                                Details
                                                                            </Button>
                                                                        </Link>
                                                            </Card.Footer>
                                                        </Col>
                                                    </>
                                                ))
                                            }
                                        </Row>
                                    </Container>
                                </div>
                                <Link to="/populaires" className="main-devis-p" style={{ textDecoration: 'inherit'}} >Tout voir</Link>
                            </div>
                        </div>
                    </div>

                    <div className="main-padding-top">
                        <div className="container container-background">
                            <div>
                                <h2 className="main-limite">Des pièces en édition limitée</h2>
                                <div>
                                    <img className="image-tendance-limite" height="250" width="350" src={require('../images/Ecommerce1.png')} />
                                    <img className="image-tendance-limite" height="250" width="350" src={require('../images/Ecommerce2.png')} />
                                    <img className="image-tendance-limite" height="250" width="350" src={require('../images/Ecommerce3.png')} />
                                    <img className="image-tendance-limite" height="250" width="350" src={require('../images/Ecommerce4.png')} />
                                    <img className="image-tendance-limite" height="250" width="350" src={require('../images/Ecommerce5.png')} />
                                    <img className="image-tendance-limite" height="250" width="350" src={require('../images/Ecommerce6.png')} />
                                </div>
                                <Link to="#" className="main-devis-p" style={{ textDecoration: 'inherit'}} >Tout voir</Link>
                            </div>
                        </div>
                    </div>

                    <div className="main-padding-top-devis">
                        <div className="container main-devis">
                            <div>
                                <div>
                                    <h1 className="main-devis-h1">Obtenez des pièces de qualité rapidement et sans difficulté</h1>
                                    <div className="main-devis-logo">
                                        <i class="fas fa-book"></i>
                                        <Link className="main-devis-p" style={{ textDecoration: 'inherit'}} to="/devis">Établir un devis</Link>
                                    </div>
                                    <div className="main-devis-logo">
                                        <i class="far fa-paper-plane"></i>
                                        <Link className="main-devis-p" style={{ textDecoration: 'inherit'}} to="#">Suivre la production de vos pièces</Link>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img className="image-tendance-limite" height="350" width="350" src={require('../images/Ecommerce13.png')} />
                            </div>        
                        </div>
                    </div>
                    <div className="main-padding-top">
                        <div className="container main-temoignage">
                            <h1 className="main-temoignage-h1">Témoignages</h1>
                            <div className="main-temoignage-deux">

                                <div className="main-temoignage-para container-background">
                                    <div className="temoignage-padding">
                                        <img className="image-tendance-limite" height="110" width="110" src={require('../images/Ecommerce11.png')} />
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquam necessitatibus provident quibusdam aliquid beatae, cupiditate reiciendis doloribus voluptatem dolores ipsam corrupti, quia sit eveniet numquam, corporisLorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquam necessitatibus provident quibusdam aliquid beatae, cupiditate reiciendis doloribus voluptatem dolores ipsam corrupti, eos aut dolorum.</p>
                                    </div>
                                </div>
                                
                                <div className="main-temoignage-para container-background">
                                    <div className="temoignage-padding">
                                        <img className="image-tendance-limite" height="110" width="110" src={require('../images/Ecommerce10.png')} />
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquam necessitatibus provident quibusdam aliquid beatae, cupiditate reiciendis doloribus voluptatem dolores ipsam corrupti, quia sit eveniet numquam, corporisLorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquam necessitatibus provident quibusdam aliquid beatae, cupiditate reiciendis doloribus voluptatem dolores ipsam corrupti, eos aut dolorum.</p>
                                    </div>
                                </div>
                                
                                <div className="main-temoignage-para container-background">
                                    <div className="temoignage-padding">
                                        <img className="image-tendance-limite" height="110" width="110" src={require('../images/Ecommerce10.png')} />
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquam necessitatibus provident quibusdam aliquid beatae, cupiditate reiciendis doloribus voluptatem dolores ipsam corrupti, quia sit eveniet numquam, corporisLorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquam necessitatibus provident quibusdam aliquid beatae, cupiditate reiciendis doloribus voluptatem dolores ipsam corrupti, eos aut dolorum.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="main-padding-top main-confiance-top">
                        <div className="container main-confiance container-background">
                            <div>
                                <div>
                                    <Image className="image-confiance" width="280" height="170" src={require('../images/un.png')} alt="image qui represante la confiance" />
                                    <Image className="image-confiance" width="280" height="170" src={require('../images/deux.png')} alt="image qui represante la securite" />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h2>Faites nous confiance</h2>
                                    <p className="confiance-p"><i class="fas fa-check"></i>protection de données</p>
                                    <p className="confiance-p"><i class="fas fa-check"></i>Service supplémentaire: marquage de pièce, personnalisation</p>
                                    <p className="confiance-p"><i class="fas fa-check"></i>Vérification de la production</p>
                                    <p className="confiance-p"><i class="fas fa-check"></i>Certification des matériaux</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

const style = {
    boutique: {
        cursor: "pointer"
    }
}