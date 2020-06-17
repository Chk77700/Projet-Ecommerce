import React, { Component } from "react";
import Axios from "axios";
// import { Slide } from "react-slideshow-image"
import { Link } from "react-router-dom";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import "../css/font.css";
import { Slide } from "react-slideshow-image"

// import img1 from "../images/Ecommerce1.png"

const proprietes = {
    transitionDuration: 1500,
    infinite: true,
    indications: true,
    arrows: true    
}


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
                    
                    <div className="main-padding-top">
                        <div className="container container-background">
                            <div>
                                <h2 className="main-tendance">Les réalisations les plus demandés</h2>
                                <div className="main-tendance-image">
                                    <Container>
                                        <Row>
                                            { 
                                                this.state.articles.map((x, i) => (        
                                                <>
                                                <Col lg={4} sm={12} md={6}>
                                                    <Card key={i}>
                                                        <Card.Img style={style.boutique} variant="top" height="230"
                                                                src={`http://localhost:8000${x.photo}`}/>
                                                        <Card.Body>
                                                            <Card.Text className="text-ecommerce1">
                                                                <h4 className={"text-secondary"}>{`${x.views} vues`}</h4>
                                                            </Card.Text>
                                                        </Card.Body>
                                                        <Card.Footer>
                                                            <Row>
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
                                                ))  
                                            }
                                        </Row>
                                    </Container>
                                </div>
                                <Link to="/populaires" >Tout voir</Link>
                            </div>
                        </div>
                    </div>

                    <div className="main-padding-top">
                        <div className="container container-background">
                            <div>
                                <h2 className="main-limite">Des pièces en édition limitée</h2>
                                <div className="slider">
                                    <div className="main-limite-slide">
                                        {/* <Slide {...proprietes} > */}
                                            <img className="image-tendance-limite" height="250" width="350" src={require('../images/Ecommerce1.png')} />
                                            <img className="image-tendance-limite" height="250" width="350" src={require('../images/Ecommerce2.png')} />
                                            <img className="image-tendance-limite" height="250" width="350" src={require('../images/Ecommerce3.png')} />
                                            <img className="image-tendance-limite" height="250" width="350" src={require('../images/Ecommerce4.png')} />
                                            <img className="image-tendance-limite" height="250" width="350" src={require('../images/Ecommerce5.png')} />
                                            <img className="image-tendance-limite" height="250" width="350" src={require('../images/Ecommerce6.png')} />
                                        {/* </Slide> */}
                                    </div>
                                </div>
                                <Link to="#" >Tout voir</Link>
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
                                        <p className="main-devis-p"><Link to="/devis">Établir un devis</Link></p>
                                    </div>
                                    <div className="main-devis-logo">
                                        <i class="far fa-paper-plane"></i>
                                        <p className="main-devis-p"><Link to="#">Suivre la production de vos pièces</Link></p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img className="image-tendance-limite" height="350" width="350" src={require('../images/Ecommerce13.png')} />
                                {/* <img src="http://placehold.it/450x450" alt="image d'une realisation en 3d"></img> */}
                            </div>        
                        </div>
                    </div>
                    <div className="main-padding-top">
                        <div className="container main-temoignage container-background">
                            <h1 className="main-temoignage-h1">Témoignages</h1>
                            <div className="main-temoignage-deux">
                                <div className="main-temoignage-para">
                                    <img className="image-tendance-limite" height="110" width="110" src={require('../images/Ecommerce11.png')} />
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquam necessitatibus provident quibusdam aliquid beatae, cupiditate reiciendis doloribus voluptatem dolores ipsam corrupti, quia sit eveniet numquam, corporisLorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquam necessitatibus provident quibusdam aliquid beatae, cupiditate reiciendis doloribus voluptatem dolores ipsam corrupti, eos aut dolorum.</p>
                                </div>
                                <div className="main-temoignage-para">
                                    <img className="image-tendance-limite" height="110" width="110" src={require('../images/Ecommerce10.png')} />
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquam necessitatibus provident quibusdam aliquid beatae, cupiditate reiciendis doloribus voluptatem dolores ipsam corrupti, quia sit eveniet numquam, corporisLorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquam necessitatibus provident quibusdam aliquid beatae, cupiditate reiciendis doloribus voluptatem dolores ipsam corrupti, eos aut dolorum.</p>
                                </div>
                                <div className="main-temoignage-para">
                                    <img className="image-tendance-limite" height="110" width="110" src={require('../images/Ecommerce10.png')} />
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquam necessitatibus provident quibusdam aliquid beatae, cupiditate reiciendis doloribus voluptatem dolores ipsam corrupti, quia sit eveniet numquam, corporisLorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquam necessitatibus provident quibusdam aliquid beatae, cupiditate reiciendis doloribus voluptatem dolores ipsam corrupti, eos aut dolorum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-padding-top">
                        <div className="container main-confiance container-background">
                            <div>
                                <div>
                                    <img className="image-confiance" src="http://placehold.it/350x150" alt="image des imprimeur 3d"></img>
                                    <img className="image-confiance" src="http://placehold.it/350x150" alt="image des imprimeur 3d"></img>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h2>Faites nous confiance</h2>
                                    <p>protection de données</p>
                                    <p>Service supplémentaire: marquage de pièce, personnalisation</p>
                                    <p>Vérification de la production</p>
                                    <p>Certification des matériaux</p>
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