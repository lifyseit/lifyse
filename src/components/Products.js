import React, { Component } from 'react';
import { throws } from 'assert';
import Product from './Product.js';


class Products extends Component {
    constructor(props) {
        super(props)
        this.state = { products: [], fetchProds: true }
    }
    componentWillMount() {
        let prods = []
        if (this.state.fetchProds) {
            prods = [{
                id: 1,
                name: "product1",
                desc: "Product1",
                image: "",
                quantity: 1,
                price: 100,
                discount:20
            },
            {
                id: 2,
                name: "product2",
                desc: "Product2",
                image: "/product2",
                quantity: 1,
                price: 200,
                discount:15
            },
            {
                id: 3,
                name: "product3",
                desc: "Product3",
                image: "/product3",
                quantity: 1,
                price: 300,
                discount:18
            },
            {
                id: 4,
                name: "product4",
                desc: "Product4",
                image: "/product4",
                quantity: 1,
                price: 400,
                discount:17
            },
            {
                id: 5,
                name: "product5",
                desc: "Product5",
                image: "/product5",
                quantity: 1,
                price: 500,
                discount:21
            },
            {
                id: 6,
                name: "product6",
                desc: "Product6",
                image: "/product6",
                quantity: 1,
                price: 600,
                discount:21
            },
            {
                id: 7,
                name: "product7",
                desc: "Product7",
                image: "/product7",
                quantity: 1,
                price: 700,
                discount:20
            },
            {
                id: 8,
                name: "product8",
                desc: "Product8",
                image: "/product8",
                quantity: 1,
                price: 800,
                discount:15
            },
            {
                id: 9,
                name: "product9",
                desc: "Product9",
                image: "/product9",
                quantity: 1,
                price: 900,
                discount:18

            }]
            this.setState({ products: prods, fetchProds: false })
            console.log(prods)
        }

    }
    render() {
        let className;
        let handleAddToCart = this.props.handleAddToCart
        let prods = this.state.products.map(function (prod, index) {
            if (index % 2 == 0) {
                className = "strip"
            } else {
                className = "strip1"
            }
            return <Product key={prod.id}
                id={prod.id}
                name={prod.name}
                desc={prod.desc}
                image={prod.image}
                quantity={prod.quantity}
                price={prod.price}
                discount={prod.discount}
                className={className}
                handleAddToCart={handleAddToCart} />
        })
        return (<div className="container-fluid">{prods}</div>)
    }
}
export default Products;