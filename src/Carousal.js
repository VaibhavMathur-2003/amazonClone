import React from "react";
import Carousel from "react-elastic-carousel";

export const Carousal = () => {
  return (
    <>
      <Carousel emulateTouch={true} useKeyboardArrows={true} stopOnHover={true} dataTouch={true} enableAutoPlay={true} autoPlaySpeed={5000}>
      <div className="carouselImage">
          <img src="https://m.media-amazon.com/images/I/71xanPwQm2L._SX3000_.jpg" style={{height: "auto",  width: "100%"}}/>
        </div>
        <div className="carouselImage">
          <img src="https://m.media-amazon.com/images/G/31/prime/detail_page/Prime_Detail_Page_PC_VideoLaunch_1344x526._CB417703432_.jpg" style={{height: "auto", width: "100%"}}/>
        </div>
        <div className="carouselImage">
          <img src="https://store-images.s-microsoft.com/image/apps.16285.14618985536919905.552c0017-6644-49a8-8467-8f7b34ce0428.30ad6b05-16d9-4d5e-a242-43107708a16a?mode=scale&q=90&h=1080&w=1920" style={{height: "auto",maxHeight:"530px", width: "100%"}}/>
        </div>
      </Carousel>
    </>
  );
};
