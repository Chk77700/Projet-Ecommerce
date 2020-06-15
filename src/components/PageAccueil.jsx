import React, { Component } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
// import { Card } from "react-bootstrap";
import "../css/font.css";

export default class PageAccueil extends Component{
        
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
                                {/* <p>(par example un ajout de like, de vue etc...)</p> */}
                                <div className="main-tendance-image">
                                    <img className="image-tendance-limite" height="400" width="330" src={require('../images/Ecommerce7.png')} />
                                    <img className="image-tendance-limite" height="400" width="330" src={require('../images/Ecommerce7.png')} />
                                    <img className="image-tendance-limite" height="400" width="330" src={require('../images/Ecommerce7.png')} />
                                </div>
                                <Link to="/populaires" >Tout voir</Link>
                            </div>
                        </div>
                    </div>

                    <div className="main-padding-top">
                        <div className="container container-background">
                            <div>
                                <h2 className="main-limite">Des pièces en édition limitée</h2>
                                <h2 className="main-limite">( Timer + le nombre de pièces restant )</h2>
                                <div>
                                    <img className="image-tendance-limite" height="250" width="350" src={require('../images/Ecommerce1.png')} />
                                    <img className="image-tendance-limite" height="250" width="350" src={require('../images/Ecommerce2.png')} />
                                    <img className="image-tendance-limite" height="250" width="350" src={require('../images/Ecommerce3.png')} />
                                    <img className="image-tendance-limite" height="250" width="350" src={require('../images/Ecommerce4.png')} />
                                    <img className="image-tendance-limite" height="250" width="350" src={require('../images/Ecommerce5.png')} />
                                    <img className="image-tendance-limite" height="250" width="350" src={require('../images/Ecommerce6.png')} />
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