import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
<div className="carouselImage"  onDragStart={handleDragStart}>
          <img
            src="https://m.media-amazon.com/images/I/71xanPwQm2L._SX3000_.jpg"
            alt="Na"
            style={{ height: "auto", width: "100%" }}
          />
        </div>,
        <div className="carouselImage"  onDragStart={handleDragStart}>
          <img
            src="https://wallpapers.com/images/featured/npcp6jc782ixp9zs.jpg"
            alt="Na"
            style={{ height: "auto", maxHeight: "530px", width: "100%" }}
          />
          </div>,
<div className="carouselImage"  onDragStart={handleDragStart}>
          <img
            src="https://m.media-amazon.com/images/G/31/prime/detail_page/Prime_Detail_Page_PC_VideoLaunch_1344x526._CB417703432_.jpg"
            alt="Na"
            style={{ height: "auto", width: "100%" }}
          />
        </div>];
export const Carousal = () => {
  return (
    <>
    <AliceCarousel autoPlay={true} autoPlayInterval={2000} infinite={true} disableButtonsControls={true} mouseTracking items={items} />
      
    </>
  );
};
