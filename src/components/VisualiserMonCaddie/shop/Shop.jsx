import React, { Component } from "react";
import ShopEmpty from "./ShopEmpty";
import ShopList from "./ShopList";
import ShopTotal from "./ShopTotal";

import { ProductConsumer } from "../../../context"
// ***** 
// ***** Ce fichier sert a afficher le fichier shop.jsx 
// ***** Je peux visualiser mon caddie n’importe où et connaître la liste des produits, leur quantité, leur prix et le total. 
// *****   

export default class Shop extends Component {
    render() {
        return (
            <section className="container quatre-shop">
                <ProductConsumer>
                    {value => {
                        const {shop} = value;
                        if(shop.length > 0) {
                            return (
                                // on return du json element d'ou le <React.Fragment>
                                <React.Fragment>
                                    <h3>Mon caddie</h3>
                                    <div>
                                        <div className="row">
                                            <div className="col-9">
                                                {/* <ShopColums /> */}
                                                <ShopList value={value} />
                                            </div>
                                            <div className="col-3">
                                                <ShopTotal value={value}/>
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        } else { 
                            return <ShopEmpty />
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}
