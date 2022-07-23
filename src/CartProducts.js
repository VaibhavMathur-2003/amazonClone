import React from "react";
import "./CartProducts.css";
import { useStateValue } from "./StateProvider";


function CartProducts(props) {
    const [{cart}, dispatch] = useStateValue ();
    const deleteItem = () => {
        dispatch({
          type: "DELETE",
          id: props.id
        })
      }
  return (
    <div className="cartProducts">
      <div className="cartImage">
        <img
          src={props.image}
          alt=""
        />
      </div>
      <div className="cartDescriprtion">
          <h4>{props.name}</h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laudantiumbdf,ajsdhbfasjdbhfkajflajhbf,ahkdagdsfhgsdfkuyghsd adfhagdsfkj
        <div className="remove">
          <button onClick={deleteItem} type="button" className="btn btn-warning">
            Delete
          </button>
        </div>
        
      </div>
      <div className="cartPrice">
           <strong>Price: ₹{props.price}</strong>         
            </div>
    </div>
  );
}

export default CartProducts;
