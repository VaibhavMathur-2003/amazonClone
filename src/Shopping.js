import React from "react";
import "./Shopping.css";
import Slider from "react-slick";
import { ShoppingCard } from "./ShoppingCard";
import Shoes from "./Shoes.json";
import Tech from "./Tech.json";
import Carousel from "react-elastic-carousel";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 4,
  className: "shopping",
};
const breakPoints = [
  { width: 1, itemsToShow: 1},
  { width: 350, itemsToShow: 2},
  { width: 610, itemsToShow: 3},
  { width: 1080, itemsToShow: 4},
  
];

export const Shopping = () => {
  return (
    <>
    
      <div className="shoes">
        <h2 className="items">Stunning Luxurious Shoes</h2>
        <Carousel className="shoeCaro" breakPoints={breakPoints} outerSpacing={0} emulateTouch={true} useKeyboardArrows={true} stopOnHover={false} dataTouch={true}>
          {Shoes.map((i) => {
            return <ShoppingCard key = {i.id} {...i} />;
          })}
        </Carousel>
      </div>

      <div className="shoes">
        <h2 className="items">Tech Products</h2>
        <Carousel breakPoints={breakPoints} emulateTouch={true} useKeyboardArrows={true} stopOnHover={false} dataTouch={true}>
        {Tech.map((i) => {
            return <ShoppingCard key = {i.id} {...i} />;
          })}
        </Carousel>
      </div>
      <div className="shoes">
        <h2 className="items">Tech Products</h2>
        <Carousel breakPoints={breakPoints} emulateTouch={true} useKeyboardArrows={true} stopOnHover={false} dataTouch={true}>
        {Tech.map((i) => {
            return <ShoppingCard key = {i.id} {...i} />;
          })}
        </Carousel>
      </div>
      <div className="shoes">
        <h2 className="items">Tech Products</h2>
        <Carousel breakPoints={breakPoints} emulateTouch={true} useKeyboardArrows={true} stopOnHover={false} dataTouch={true}>
        {Tech.map((i) => {
            return <ShoppingCard key = {i.id} {...i} />;
          })}
        </Carousel>
      </div>
    </>
  );
};
