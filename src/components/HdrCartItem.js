import React, { Component } from 'react';

class HdrCartItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className=".cart-rows">
                <div className="col-md-6"><p>{this.props.name}</p></div>
                <div className="col-md-2"><p>{this.props.quantity}</p></div>
                <div className="col-md-2"><p>{this.props.price}</p></div>
                <div className="col-md-2">
                    <a href="#" onClick= {(e)=> {
                        e.preventDefault()
                        this.props.handleRemoveCartItem(this.props.id)
                    }}>X</a>
                </div>
            </div>
        )
    }
}
export default HdrCartItem;