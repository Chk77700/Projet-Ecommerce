import React from "react";
import ShopItem from "./ShopItem";
// import { shop } from "../../../context";
// import { ProductConsumer } from "../../../context"

export default function ShopList ({value}) {
    const {shop} = value;

    console.log(value, shop)

    return (
        <div className="container trois-shop">
            {shop.map(item => {
                return <ShopItem  key={item.id} item={item} value={value}/>
            })}
        </div>
    )
}