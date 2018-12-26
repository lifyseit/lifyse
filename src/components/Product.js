import React, { Component } from 'react';

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedProduct: {},
            isAdded: false,
            updQty:0
        };
        this.addToCart = this.addToCart.bind(this)
        this.handleQtyChg = this.handleQtyChg.bind(this)
    }
    handleQtyChg(e){
        this.setState({
            updQty:e.target.value 
        })
    }
    addToCart(id, name,qty,price,discount) {
        let quantity = qty
        if(this.state.updQty > qty){
            quantity = this.state.updQty
        }
        this.setState(
            {
                selectedProduct: {
                    name: name,
                    price: price,
                    id: id,
                    quantity: quantity,
                    discount: discount
                }
            },
            function () {
                this.props.handleAddToCart(this.state.selectedProduct);
            }
        );
        this.setState(
            {
                isAdded: true
            },
            function () {
                setTimeout(() => {
                    this.setState({
                        isAdded: false,
                        selectedProduct: {}
                    });
                }, 3500);
            }
        );
    }
    render() {
        let name = this.props.name;
        let price = this.props.price;
        let id = this.props.id;
        let qty = this.props.quantity;
        let discount = this.props.discount;
       return (
            <div className={this.props.className}>
                <div className="row">
                    <div className="prodcol-1">
                        <p>{this.props.name}</p>
                    </div>
                    <div className="prodcol-2">
                        <p className="desc">{this.props.desc}</p>
                    </div>
                    <div className="prodcol-1">
                        <input className="qtyinp" type="number"
                            defaultValue="1" min="1" onChange={this.handleQtyChg}></input>
                    </div>
                    <div className="prodcol-1">
                        <p>{this.props.price}</p>
                    </div>
                    <div className="prodcol-1">
                        <button onClick={this.addToCart.bind(this,id,name,qty,price,discount)}>Add to Cart</button>
                    </div>
                </div >
            </div >
        )
    }
}
export default Product;