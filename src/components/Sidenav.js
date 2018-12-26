import React, { Component } from 'react';

class SideNav extends Component {
    constructor(props) {
        super(props)
    }
    // addToCart(image, name, price, id, quantity) {
    //     this.setState(
    //         {
    //             selectedProduct: {
    //                 image: image,
    //                 name: name,
    //                 price: price,
    //                 id: id,
    //                 quantity: quantity
    //             }
    //         },
    //         function () {
    //             this.props.addToCart(this.state.selectedProduct);
    //         }
    //     );
    //     this.setState(
    //         {
    //             isAdded: true
    //         },
    //         function () {
    //             setTimeout(() => {
    //                 this.setState({
    //                     isAdded: false,
    //                     selectedProduct: {}
    //                 });
    //             }, 3500);
    //         }
    //     );
    // }
    // quickView(image, name, price, id) {
    //     this.setState(
    //         {
    //             quickViewProdcut: {
    //                 image: image,
    //                 name: name,
    //                 price: price,
    //                 id: id
    //             }
    //         },
    //         function () {
    //             this.props.openModal(this.state.quickViewProdcut);
    //         }
    //     );
    // }

    render() {
        return (
            <div>
                <div className="sidebar">
                    <a className="active" href="#home">Orders</a>
                    <a href="#news">Info records</a>
                    <a href="#contact">Invoices</a>
                    <a href="#about">ASN</a>
                    <a href="#about">Notes</a>
                    <a href="#about">Account info</a>
                    <a href="#about">Returns</a>
                    <a href="#about">Docs</a>
                    <a href="#about">1</a>
                    <a href="#about">2</a>
                    <a href="#about">3</a>
                    <a href="#about">4</a>
                </div>
                {/* <div className="product">
                                <div className="product-image">
                                    <img src={image} alt={this.props.name} onClick={this.quickView.bind(
                                    this,
                                    image,
                                    name,
                                    price,
                                    id,
                                    quantity)}/>
                                </div>
                                <h4 className="product-name">{this.props.name}</h4>
                                <p className="product-price">{this.props.price}</p>
                                <Counter productQuantity={quantity} updateQuantity={this.props.updateQuantity} resetQuantity={this.resetQuantity}/>
                                 <div className="product-action">
                                  <button className={!this.state.isAdded ? "" : "added"} type="button" onClick={this.addToCart.bind( this,image,name,price,id,quantity)}>
                                {!this.state.isAdded ? "ADD TO CART" : "✔ ADDED"}
                            </button>
                        </div>
                    </div>
                   
                    );
                </div> */}
            </div>
        )
    }
}
export default SideNav;