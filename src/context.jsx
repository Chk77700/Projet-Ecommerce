import React, { Component } from "react";
// Pour recuperer notre API
import { storeProducts, detailProduct } from "./components/posts/data";

const ProductContext = React.createContext();

class ProductProvider extends Component {

    state = {
        products: [],
        detailProduct: detailProduct,

        shop: storeProducts,
        modalOpen: true,
        modalProduct:detailProduct,
        shopSubTotal: 0,
    };

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach( item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];

        })
        this.setState(() => {
            return {products: tempProducts};
        });
    }

    // getItem va permettre de recuperer l'objet qui correspond a l'id (donc l'image ou on a cliquer)
    getItem = id => {
        const product = this.state.products.find(item => item.id ===id);
        return product;
    }


    addToShop = (id) => {
        console.log(`Ajout dans le Shop ce produit a pour id : ${id}`)

        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]
        product.inShop = true
        product.count = 1
        const price = product.price
        product.total = price

        this.setState(
        ()=>{
            return {products: tempProducts, shop:[...this.state.shop,
            product] };
        },
        () => {
            this.addTotals();
            // console.log(this.state)
        } );
    };


    increment = (id) => {
        let tempShop = [...this.state.shop]
        const selectedProduct = tempShop.find(item => item.id === id)

        const index = tempShop.indexOf(selectedProduct)
        const product = tempShop[index];

        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState(()=>{
            return {shop:[...tempShop]}},()=>{this.addTotals()})
    }

    decrement = (id) => {
        let tempShop = [...this.state.shop]
        const selectedProduct = tempShop.find(item => item.id === id)

        const index = tempShop.indexOf(selectedProduct)
        const product = tempShop[index];

        product.count = product.count - 1;
        if (product.count === 0 ) {
            this.removeItem(id)
        } else {
            product.total = product.count * product.price;
            this.setState(()=>{
                return {shop:[...tempShop]}},()=>{this.addTotals()})
        }
    }

    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempShop = [...this.state.shop]

        tempShop = tempShop.filter(item => item.id !== id);
        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inShop = false
        removedProduct.count = 0
        removedProduct.total = 0

        this.setState(
            ()=> {
                return {
                    shop: [...tempShop],
                    products: [...tempProducts]
                };
            },
            () => {
                this.addTotals();
            }
        )
    }

    clearShop = (id) => {
        this.setState(()=>{
            return {shop:[]};
        },() =>{
            this.setProducts();
            this.addTotals();
        })
    }

    addTotals = () => {
        let subTotal = 0;
        this.state.shop.map(item =>(subTotal += item.total));
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax
        this.setState(()=>{
            return {
                shopSubTotal: subTotal,
            }
        })
    }

    render() {
        return (
            <div>
                <ProductContext.Provider value={{
                    ...this.state,
                    addToShop: this.addToShop,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearShop: this.clearShop,
                }}
                >
                    {this.props.children}
                </ProductContext.Provider>
            </div>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};