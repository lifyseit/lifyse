import React, { Component } from "react";

const EmptyCart = props => {
  return (
    <div>
      <img
        src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
        alt="empty-cart"  onClick={props.handleCart}
      />
      {/* <h2></h2> */}
     </div>
  );
};

export default EmptyCart;
