import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import CustHdr from './Custhdr.js';
import SideNav from './Sidenav.js';
import Products from './Products.js';
import FrontPage from './FrontPage.js';
import Header from './Header.js';
import Footer from './Footer.js';
import ServiceSlideShow from './SlideShow';
import Login from './Login.js';
import '../css/index.css';
import CheckOut from './CheckOut.js';
import Orders from './Orders.js';
import Services1 from './Services/Services1.js';
import Services2 from './Services/Services2.js';
import Services3 from './Services/Services3.js';
import Services4 from './Services/Services4.js';
import Verticals1 from './Verticals/Verticals1.js';
import Verticals2 from './Verticals/Verticals2.js';
import Verticals3 from './Verticals/Verticals3.js';
import Verticals4 from './Verticals/Verticals4.js';
import Verticals5 from './Verticals/Verticals5.js';
import Solutions1 from './Solutions1';
import Solutions2 from './Solutions2';
import Solutions3 from './Solutions3';
import Solutions4 from './Solutions4';
import Solutions5 from './Solutions5';
import Solutions6 from './Solutions6';
import Solutions7 from './Solutions7';
import Contactus from './Contactus';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      totalItems: 0,
      totalAmount: 0,
      discount: 30

    };
    this.handleAddToCart = this.handleAddToCart.bind(this)
    this.handleRemoveCartItem = this.handleRemoveCartItem.bind(this)
  }

  handleRemoveCartItem(id) {
    console.log(id)
    let cartItems = this.state.cartItems
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === id) {
        cartItems.splice(i, 1)
      }
    }
    this.setState({
      cartItems: cartItems
    })
    this.cartSubtotals();
  }
  cartSubtotals() {
    let cartItems = this.state.cartItems
    let totalAmount = 0;
    for (let i = 0; i < cartItems.length; i++) {
      totalAmount = totalAmount + cartItems[i].price
    }
    this.setState(

      {
        totalItems: cartItems.length,
        totalAmount: totalAmount
      })
  }
  handleAddToCart(selectedProduct) {
    let cartItems = this.state.cartItems
    let flag = false;
    for (let i = 0; i < cartItems.length; i++) {
      if (selectedProduct.id === cartItems[i].id) {
        flag = true
        cartItems[i].quantity = parseInt(cartItems[i].quantity) + parseInt(selectedProduct.quantity)
        cartItems[i].price = cartItems[i].price + (selectedProduct.price * parseInt(selectedProduct.quantity))
      }
    }
    if (!flag) {
      selectedProduct.price = selectedProduct.price * parseInt(selectedProduct.quantity)
      cartItems.push(selectedProduct)
    }
    this.setState(
      {
        cartItems: cartItems
      })
    this.cartSubtotals();
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => {
          return (
            <FrontPage scrolled={this.state.scrolled}>
              <ServiceSlideShow />
              <Header />
              <Footer/>
            </FrontPage>
          )
        }} />
        <Route exact path="/customer" render={() => {
          return (
            <div>
              <CustHdr cartItems={this.state.cartItems}
                totalItems={this.state.totalItems}
                totalAmount={this.state.totalAmount}
                hideCLS={true}
                handleRemoveCartItem={this.handleRemoveCartItem} />
              <div className="sidenav">
                <SideNav />
              </div>
              <div>
                <Products handleAddToCart={this.handleAddToCart} />
              </div>
            </div>
          )
        }}>
        </Route>
        <Route exact path="/login" render={() => {
          return (
            <div>
              <div>
                <CustHdr cartItems={this.state.cartItems}
                  totalItems={this.state.totalItems}
                  totalAmount={this.state.totalAmount}
                  hideCLS={false}
                  handleRemoveCartItem={this.handleRemoveCartItem} />
              </div>
              <div>
                <Login />
              </div>
            </div>
          )
        }}>
        </Route>
        <Route exact path="/CheckOut" render={() => {
          return (
            <div>
              <div>
                <CustHdr cartItems={this.state.cartItems}
                  totalItems={this.state.totalItems}
                  totalAmount={this.state.totalAmount}
                  discount={this.state.discount}
                  hideCLS={false}
                  handleRemoveCartItem={this.handleRemoveCartItem} />
              </div>
              <div className="checkout">
                <CheckOut cartItems={this.state.cartItems}
                  totalAmount={this.state.totalAmount}
                  discount={this.state.discount} />
              </div>
            </div>
          )
        }}>
        </Route>
        <Route exact path="/Orders" render={() => {
          return (
            <div>
              <div>

              </div>
              <div className="Orders">
                <Orders />
              </div>
            </div>
          )
        }}>
        </Route>
        <Route exact path="/Services1" render={() => {
          return (
            <div>
              <Services1 >
              <Header />
              <Footer/>
              </Services1>
            </div>
          )
        }}>
        </Route>
        <Route exact path="/Services2" render={() => {
          return (
            <div>
              <Services2 >
              <Header />
              <Footer/>
            </Services2>
            </div>
          )
        }}>
        </Route>
        <Route exact path="/Services3" render={() => {
          return (
            <div>
              <Services3>
              <Header />
              <Footer/>
            </Services3>
            </div>
          )
        }}>
        </Route>
        <Route exact path="/Services4" render={() => {
          return (
            <div>
              <Services4>
              <Header />
              <Footer/>
            </Services4>
            </div>
          )
        }}>
        </Route>
        <Route exact path="/Verticals1" render={() => {
          return (
            <div>
              <Verticals1 >
              <Header />
              <Footer/>
              </Verticals1 >
            </div>
          )
        }}>
        </Route>
        <Route exact path="/Verticals2" render={() => {
          return (
            <div>
              <Verticals2 >
              <Header />
              <Footer/>
              </Verticals2 >
            </div>
          )
        }}>
        </Route>
        <Route exact path="/Verticals3" render={() => {
          return (
            <div>
             <Verticals3 >
              <Header />
              <Footer/>
              </Verticals3 >
            </div>
          )
        }}>
        </Route>
        <Route exact path="/Verticals4" render={() => {
          return (
            <div>
              <Verticals4 >
              <Header />
              <Footer/>
              </Verticals4 >
            </div>
          )
        }}>
        </Route>
        <Route exact path="/Verticals5" render={() => {
          return (
            <div>
              <Verticals5 >
              <Header />
              <Footer/>
              </Verticals5 >
            </div>
          )
        }}>
        </Route>
        <Route exact path="/Solutions1" render={() => {
          return (
            <div>
              <Solutions1 >
              <Header />
              <Footer/>
              </Solutions1 >
            </div>
          )
        }}>
        </Route>
        <Route exact path="/Solutions2" render={() => {
          return (
            <div>
              <Solutions2 >
              <Header />
              <Footer/>
              </Solutions2 >
            </div>
          )
        }}>
        </Route>
        <Route exact path="/Solutions3" render={() => {
          return (
            <div>
             <Solutions3 >
              <Header />
              <Footer/>
              </Solutions3 >
            </div>
          )
        }}>
        </Route>
        <Route exact path="/Solutions4" render={() => {
          return (
            <div>
              <Solutions4 >
              <Header />
              <Footer/>
              </Solutions4 >
            </div>
          )
        }}>
        </Route>
        <Route exact path="/Solutions5" render={() => {
          return (
            <div>
              <Solutions5 >
              <Header />
              <Footer/>
              </Solutions5 >
            </div>
          )
        }}>
        </Route>
        <Route exact path="/Solutions6" render={() => {
          return (
            <div>
              <Solutions6 >
              <Header />
              <Footer/>
              </Solutions6 >
            </div>
          )
        }}>
        </Route>
        <Route exact path="/Solutions7" render={() => {
          return (
            <div>
              <Solutions7 >
              <Header />
              <Footer/>
              </Solutions7 >
            </div>
          )
        }}>
        </Route>
        <Route exact path="/Contactus" render={() => {
          return (
            <div>
              <Contactus >
              <Header />
              <Footer/>
              </Contactus >
            </div>
          )
        }}>
        </Route>

      </Switch>
    )
  }
}
export default (App);



