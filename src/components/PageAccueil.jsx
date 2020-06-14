import React, { Component } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
// import {Container, Card, Image,  Col, Button, Row} from "react-bootstrap";
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
                                <p className="header-p-color">Rejoins plus de 500 000 mille personnes qui utilisent Print'n go pour partager leurs impression 3D, ou decouvrir les realisations de nos imprimeurs.</p>
                                <div>
                                    <span className="button-t"><Link></Link>Rejoindre</span>
                                </div>
                                <br></br>
                                <img src="http://placehold.it/650x650" alt="image des imprimeur 3d"></img>
                            </div>
                        </div>
                    </div>
                    <div className="main-padding-top">
                        <div className="container">
                            <div>
                                <h2 className="main-tendance">Les realisations de nos imprimeurs tendances</h2>
                                <p>(par example un ajout de like, de vue etc...)</p>
                                <Link to="/populaires" >populaire</Link>
                                <div className="main-tendance-image">
                                    <img className="image-tendance-limite" src="http://placehold.it/350x450" alt="image des imprimeur 3d"></img>
                                    <img className="image-tendance-limite" src="http://placehold.it/350x450" alt="image des imprimeur 3d"></img>
                                    <img className="image-tendance-limite" src="http://placehold.it/350x450" alt="image des imprimeur 3d"></img>
                                </div>
                            </div>
                            <div>
                                <h2 className="main-limite">Des pieces en edition limitee</h2>
                                <p>(mettre un timer)</p>
                                <div>
                                    <img className="image-tendance-limite" src="http://placehold.it/350x150" alt="image des imprimeur 3d"></img>
                                    <img className="image-tendance-limite" src="http://placehold.it/350x150" alt="image des imprimeur 3d"></img>
                                    <img className="image-tendance-limite" src="http://placehold.it/350x150" alt="image des imprimeur 3d"></img>
                                    <img className="image-tendance-limite" src="http://placehold.it/350x150" alt="image des imprimeur 3d"></img>
                                    <img className="image-tendance-limite" src="http://placehold.it/350x150" alt="image des imprimeur 3d"></img>
                                    <img className="image-tendance-limite" src="http://placehold.it/350x150" alt="image des imprimeur 3d"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-padding-top-devis">
                        <div className="container main-devis">
                            <div>
                                <div>
                                    <p className="main-devis-p">Obtenez des pieces de qualite rapidement et sans difficulte</p>
                                    <p className="main-devis-p">Etablir un devis</p>
                                    <p className="main-devis-p">Suivre la production de vos pieces</p>
                                </div>
                            </div>
                            <div>
                                <img src="http://placehold.it/450x450" alt="image d'une realisation en 3d"></img>
                            </div>        
                        </div>
                    </div>
                    <div className="main-padding-top">
                        <div className="container main-temoignage">
                            <h1 className="main-temoignage-h1">Temoignages</h1>
                            <p>( mettre ici nos personas )</p>
                            <div className="main-temoignage-deux">
                                <div className="main-temoignage-para">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquam necessitatibus provident quibusdam aliquid beatae, cupiditate reiciendis doloribus voluptatem dolores ipsam corrupti, quia sit eveniet numquam, corporisLorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquam necessitatibus provident quibusdam aliquid beatae, cupiditate reiciendis doloribus voluptatem dolores ipsam corrupti, eos aut dolorum.</p>
                                </div>
                                <div className="main-temoignage-para">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquam necessitatibus provident quibusdam aliquid beatae, cupiditate reiciendis doloribus voluptatem dolores ipsam corrupti, quia sit eveniet numquam, corporisLorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquam necessitatibus provident quibusdam aliquid beatae, cupiditate reiciendis doloribus voluptatem dolores ipsam corrupti, eos aut dolorum.</p>
                                </div>
                                <div className="main-temoignage-para">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquam necessitatibus provident quibusdam aliquid beatae, cupiditate reiciendis doloribus voluptatem dolores ipsam corrupti, quia sit eveniet numquam, corporisLorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquam necessitatibus provident quibusdam aliquid beatae, cupiditate reiciendis doloribus voluptatem dolores ipsam corrupti, eos aut dolorum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-padding-top">
                        <div className="container main-confiance">
                            <div>
                                <div>
                                    <img className="image-confiance" src="http://placehold.it/350x150" alt="image des imprimeur 3d"></img>
                                    <img className="image-confiance" src="http://placehold.it/350x150" alt="image des imprimeur 3d"></img>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h2>Faites nous confiance</h2>
                                    <p>protection de donnees</p>
                                    <p>Service supplementaires: marquage de piece, personalisation</p>
                                    <p>Verification de la production</p>
                                    <p>Certification des materiaux</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}