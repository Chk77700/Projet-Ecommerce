import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/font.css";
import Axios from "axios";
import {Button, Card, Col, Container, Row, Image } from "react-bootstrap";

import Menu from "./Menu";


const BackArrow = () => (
    <div style={{fontSize: '25px'}}  className="left" onClick={ActiveLeft}>
        <i class="fas fa-chevron-left"></i>
    </div>
)

const NextArrow = () => (
    <div style={{fontSize: '25px'}} className="right" onClick={ActiveRight}>
        <i class="fas fa-chevron-right"></i>
    </div>
)

function ActiveLeft() {
    console.log("left")
}

function ActiveRight() {
    console.log("right")
}

export default class PageAccueil extends Component{
    constructor(props) {
        super(props);

        this.nextImage = this.nextImage.bind(this);
        this.previousImage = this.previousImage.bind(this);

        this.state = {
            idUser: localStorage.getItem("userId"),
            articles: [],
            slideCount: 0,
        };
    }

    componentDidMount() {
        this.getMostViewed();
    }

    getMostViewed = () => {
        Axios.post("http://localhost:8000/mostViewed", {id: this.state.idUser})
            .then( resp => this.setState({articles: resp.data}));
    }

    nextImage() {
        this.setState({ slideCount: this.state.slideCount + 1 })
    }
    
    previousImage() {
        this.setState({ slideCount: this.state.slideCount - 1 })
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
                                    <span className="button-t"><Link to="/register" style={{ textDecoration: 'none' }}>Rejoindre</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-header-link">
                        <Menu />
                    </div>
                    <div className="main-padding-top">
                        <div className="container container-background">

                                <h2 className="main-tendance">Les réalisations les plus demandés</h2>
                                <div className="main-tendance-image">

                                    <div className="move-btn-main">
                                        <Link to="/populaires" className="main-devis-p" style={{ textDecoration: 'inherit'}} >Tout voir</Link>
                                        <div className="move-btn">
                                            {this.state.slideCount !== 1 ? <BackArrow previousImage={this.previousImage}/> : ''}
                                            {this.state.slideCount !== (this.state.articles.length - 1) ? <NextArrow nextImage={this.nextImage}/> : ''}
                                        </div>
                                    </div>

                                    <Container className="slide-un">
                                        <Row className="slide-deux">
                                                
                                                
                                                {this.state.articles.map((x, i) => (
                                                    <Col className="slide-trois">
                                                        <Card.Img className="slide-quatre" variant="top" src={`http://localhost:8000${x.photo}`}/>
                                                        <Card.Footer>
                                                                    <Link to={`/article/${x.id}`}>
                                                                        <Button value={i} variant={"ecommerce3"}>
                                                                            Details
                                                                        </Button>
                                                                    </Link>
                                                                    <p>{x.name}</p>
                                                        </Card.Footer>
                                                    </Col>
                                                ))}

                                                 
                                        </Row>
                                    </Container>

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
                            <div className="main-confiance-image">
                                <Image className="image-confiance" width="280" height="170" src={require('../images/deux.png')} alt="image qui represante la securite" />
                            </div>
                            <div className="">
                                <h2>Faites nous confiance</h2>
                                <p className="confiance-p"><i class="fas fa-check"></i>protection de données</p>
                                <p className="confiance-p"><i class="fas fa-check"></i>Service supplémentaire: marquage de pièce, personnalisation</p>
                                <p className="confiance-p"><i class="fas fa-check"></i>Vérification de la production</p>
                                <p className="confiance-p"><i class="fas fa-check"></i>Certification des matériaux</p>
                            </div>
                        </div>
                    </div>
                    <div className="main-padding-top main-confiance-top">
                        <div className="container main-confiance container-background">
                            <div className="main-rencontre-p">
                                <h2>Fais des rencontres</h2>
                                <p className="confiance-p"><i class="fas fa-check"></i>Pour toutes les générations</p>
                                <p className="confiance-p"><i class="fas fa-check"></i>Créez-toi un réseau d'ami</p>
                                <p className="confiance-p"><i class="fas fa-check"></i>Partage nous tes impressions 3D</p>
                            </div>
                            <div className="main-rencontre-image">
                                <Image className="image-confiance" width="280" height="170" src={require('../images/un.png')} alt="image qui represante la confiance" />
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