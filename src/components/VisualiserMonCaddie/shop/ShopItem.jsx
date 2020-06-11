import React from "react";
import { Card } from "react-bootstrap";
import "../../../App.css"

export default function ShopItem ({item,value}) {
    const {id, photo, name, price, total, remove, count} = item
    const {increment, decrement, removeItem, clearShop } = value
    return (
        <div className="container shopItem">
            <div className="row">
                <div className="col-6">
                    <div className="container">
                        <div className="row">
                            <div className="8">
                                <Card.Img src={photo} style={{width:"50px", height: "50px" }} ></Card.Img>
                            </div>
                            <div className="4">
                                <div>
                                    <span>{name}</span>
                                </div>
                                <div>
                                    <span>{price} euros</span>
                                </div>
                                <div>
                                    <span onClick={()=> removeItem(id)}>
                                        <i class="far fa-trash-alt"></i>supprimer
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div>
                        <span className="btn-black" onClick={() => decrement(id)}>
                            -
                        </span>
                        <span className="btn-black">{count}</span>
                        <span className="btn-black" onClick={() => increment(id)}>
                            +
                        </span>
                    </div>
                    <div>
                        <span>{total} euros</span>
                    </div>
                </div>
            </div>
            <div className="border"></div>
            <br></br>
        </div>
    )
}