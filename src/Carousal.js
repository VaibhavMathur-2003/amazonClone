import React from "react";
import Carousel from "react-elastic-carousel";

export const Carousal = () => {
  return (
    <>
      <Carousel
        emulateTouch={true}
        useKeyboardArrows={true}
        stopOnHover={true}
        dataTouch={true}
        enableAutoPlay={true}
        autoPlaySpeed={5000}
      >
        <div className="carouselImage">
          <img
            src="https://m.media-amazon.com/images/I/71xanPwQm2L._SX3000_.jpg"
            alt="Na"
            style={{ height: "auto", width: "100%" }}
          />
        </div>

        <div className="carouselImage">
          <img
            src="https://wallpapers.com/images/featured/npcp6jc782ixp9zs.jpg"
            alt="Na"
            style={{ height: "auto", maxHeight: "530px", width: "100%" }}
          />
        </div>
        <div className="carouselImage">
          <img
            src="https://m.media-amazon.com/images/G/31/prime/detail_page/Prime_Detail_Page_PC_VideoLaunch_1344x526._CB417703432_.jpg"
            alt="Na"
            style={{ height: "auto", width: "100%" }}
          />
        </div>
      </Carousel>
    </>
  );
};
