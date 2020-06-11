import React from "react";
import { Link } from 'react-router-dom';
import "../../../App.css";

export default function ShopTotal ({value}) {
    const { shopSubTotal, shopClear } = value;
    return (
        <React.Fragment>
            <div className="container deux-shop">
                <div className="row">
                    <Link to="/">
                        <button onClick={()=> shopClear()}>
                            clear shop
                        </button>
                    </Link>
                    <div>
                        <h2>Total</h2>
                        <p>Livraison gratuit</p>
                        <h2>Total {shopSubTotal} euros</h2> 
                    </div>  
                </div>
            </div>
        </React.Fragment>
    )
}