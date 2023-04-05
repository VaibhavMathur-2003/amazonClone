import React from "react";
import "./Shopping.css";
import { ShoppingCard } from "./ShoppingCard";
import Shoes from "./Shoes.json";
import Chocolates from "./Chocolates.json";
import Tech from "./Tech.json";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};
const item1 = Tech.map((i) => {
  return <ShoppingCard key={i.id} {...i} />;
});
const item2 = Shoes.map((i) => {
  return <ShoppingCard key={i.id} {...i} />;
});
const item3 = Chocolates.map((i) => {
  return <ShoppingCard key={i.id} {...i} />;
});
export const Shopping = () => {
  return (
    <>
      <div className="shoes">
        <h2 className="items">Tech Products</h2>
        <AliceCarousel
          responsive={responsive}
          infinite
          items={item1}
          className="shoeCaro"
        />
      </div>

      <div className="shoes">
        <h2 className="items">Stunning Luxurious Shoes</h2>
        <AliceCarousel
          responsive={responsive}
          infinite
          items={item2}
          className="shoeCaro"
        />
      </div>
      <div className="shoes">
        <h2 className="items">Chocolates</h2>
        <AliceCarousel
          responsive={responsive}
          infinite
          items={item3}
          className="shoeCaro"
        />
      </div>
    </>
  );
};
