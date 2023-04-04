import React from "react";
import "./ShoppingCard.css"
import { useStateValue } from "./StateProvider";



export const ShoppingCard = (props) => {
  const [{cart}, dispatch] = useStateValue ();
  const addToCart = () => {
   // dispatch the item into the data layer
   dispatch ({
      type: "ADD_TO_CART",
      item: { 
         id: props.id,
        title: props.name,
         image: props.imgUrl,
        price: props.price,
      },
    });
  };
  return (
    <>  
      <div className="product">
      <div className="productImage">
            <img
                src={props.imgUrl}
                alt=""
              />
      </div>
        <div className="productHead">{props.name}</div>
        <div className="price">
            <strong>₹ {props.price}</strong>
        </div>
        <div className="cartButton">
          <button onClick={addToCart} type="button" className="btn btn-warning">
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};
