import React, { Component } from 'react';
import logo from '../images/3.png';
import CartScrollBar from './CartScrollBar';
import EmptyCart from './EmptyCart';
import HdrCartItem from './HdrCartItem';
import { withRouter } from 'react-router';

class CustHdr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCart: false,
      cart: this.props.cartItems,
      mobileSearch: false
    };
    this.handleCart = this.handleCart.bind(this)
    this.handleRemoveCartItem = this.handleRemoveCartItem.bind(this)
    this.handleCheckOut =this.handleCheckOut.bind(this)
  }
  handleCheckOut(e){
    e.preventDefault();
      this.props.history.push("/CheckOut");
  }
  handleRemoveCartItem(id) {
    this.props.handleRemoveCartItem(id)
  }

  handleCart(e) {
    e.preventDefault();
    this.setState({
      showCart: !this.state.showCart
    });
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  handleClickOutside(event) {
    // const cartNode = findDOMNode(this.refs.cartPreview);
    // const buttonNode = findDOMNode(this.refs.cartButton);
    // if (cartNode.classList.contains("active")) {
    //   if (!cartNode || !cartNode.contains(event.target)) {
    //     this.setState({
    //       showCart: false
    //     });
    //     event.stopPropagation();
    //   }
    // }
  }
  componentDidMount() {
    document.addEventListener(
      "click",
      this.handleClickOutside.bind(this),
      true
    );
  }
  componentWillUnmount() {
    document.removeEventListener(
      "click",
      this.handleClickOutside.bind(this),
      true
    );
  }
  render() {
    let view;
    let cartLength = this.state.cart.length
    let handleRemoveCartItem = this.handleRemoveCartItem
    if (this.state.showCart && this.state.cart.length > 0) {
      view = this.state.cart.map(product => {
        return (
          <HdrCartItem key={product.id}
            id={product.id}
            name={product.name}
            quantity={product.quantity}
            price={product.price}
            handleRemoveCartItem={handleRemoveCartItem}
          />

        );
      });
    }
    return (
      <div className="custHdr">
        <div className="image">
          <img src={logo} />
        </div>
        <div>
          {this.props.hideCLS && <CusthdrCLS view={view}
            totalItems={this.props.totalItems}
            totalAmount={this.props.totalAmount}
            handleCart={this.handleCart}
            showCart={this.state.showCart}
            cartLength={cartLength}
            handleCheckOut={this.handleCheckOut} />}
        </div >
      </div>
    );
  }
}

function CusthdrCLS(props) {
  return (
    <div className="content">
      <div className="searchbar">
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit">Search</button>
      </div>
      <div className="rightItems">
        <div className="logout">
          <a>Logout</a>
        </div>
        <div className="cart">
          <div className="cart-info">
            <table>
              <tbody>
                <tr>
                  <td>No. of items</td>
                  <td>:</td>
                  <td>
                    <strong>{props.totalItems}</strong>
                  </td>
                </tr>
                <tr>
                  <td>Sub Total</td>
                  <td>:</td>
                  <td>
                    <strong>{props.totalAmount}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <EmptyCart handleCart={props.handleCart} />
          <div
            className={
              props.showCart ? "hdrcart-preview active" : "hdrcart-preview"
            }
          >
            <CartScrollBar>{props.view}</CartScrollBar>
            <div className="action-block">
              <button
                type="button"
                className={props.cartLength > 0 ? " " : "disabled"} onClick = {props.handleCheckOut}  
              >
                PROCEED TO CHECKOUT
          </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(CustHdr);