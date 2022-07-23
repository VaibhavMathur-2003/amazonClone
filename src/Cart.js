import React from "react";
import "./Cart.css";
import { useStateValue } from "./StateProvider";
import { getCartTotal } from "./reducer";
import CartProducts from "./CartProducts";

function Cart() {
  const [{ cart }, dispatch] = useStateValue();
  
  
  return (
    <>
      <div className="cart">
        <div className="cartHead">
          <h1>Shopping Cart</h1>
          <div className="cartItem">

            {cart.map(item => (
              <CartProducts 
              id = {item.id}
              name = {item.title}
              image = {item.image}
              price = {item.price} />
            ))}
            
          </div>
        </div>
        <div className="subtotal">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
            alt=""
          />
          <h5>
            Subtotal (<strong>{cart.length} </strong>items) ={" "}
            <strong>₹{getCartTotal(cart)}</strong>
          </h5>
          <button type="button" className="btn btn-warning">
            Proceed to pay
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
