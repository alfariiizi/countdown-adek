import React from "react";
import Photo from "./Photo";
import ImgPhoto1 from "../assets/gallery/photo1.jpeg";
import ImgPhoto2 from "../assets/gallery/photo2.jpeg";
import ImgPhoto3 from "../assets/gallery/photo3.jpeg";
import ImgPhoto4 from "../assets/gallery/photo4.jpeg";
import ImgPhoto5 from "../assets/gallery/photo5.jpeg";
import ImgPhoto6 from "../assets/gallery/photo6.jpeg";
import ImgPhoto7 from "../assets/gallery/photo7.jpeg";
import ImgPhoto8 from "../assets/gallery/photo8.jpeg";
import ImgPhoto9 from "../assets/gallery/photo9.jpeg";
import ImgPhoto10 from "../assets/gallery/photo10.jpeg";
import ImgPhoto11 from "../assets/gallery/photo11.jpeg";
import ImgPhoto12 from "../assets/gallery/photo12.jpeg";
import ImgPhoto13 from "../assets/gallery/photo13.jpeg";
import ImgPhoto14 from "../assets/gallery/photo14.jpeg";
import ImgPhoto15 from "../assets/gallery/photo15.jpeg";
import ImgPhoto16 from "../assets/gallery/photo16.jpeg";
import ImgPhoto17 from "../assets/gallery/photo17.jpeg";
import ImgPhoto18 from "../assets/gallery/photo18.jpeg";
import ImgPhoto19 from "../assets/gallery/photo19.jpeg";
import ImgPhoto20 from "../assets/gallery/photo20.jpeg";
import ImgPhoto21 from "../assets/gallery/photo21.jpeg";
import ImgPhoto22 from "../assets/gallery/photo22.jpeg";

const Gallery = () => {
  return (
    <div className="mx-auto grid grid-flow-row grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      <Photo imgSrc={ImgPhoto1} />
      <Photo imgSrc={ImgPhoto2} />
      <Photo imgSrc={ImgPhoto3} />
      <Photo imgSrc={ImgPhoto4} />
      <Photo imgSrc={ImgPhoto5} />
      <Photo imgSrc={ImgPhoto6} />
      <Photo imgSrc={ImgPhoto7} />
      <Photo imgSrc={ImgPhoto8} />
      <Photo imgSrc={ImgPhoto9} />
      <Photo imgSrc={ImgPhoto10} />
      <Photo imgSrc={ImgPhoto11} />
      <Photo imgSrc={ImgPhoto12} />
      <Photo imgSrc={ImgPhoto13} />
      <Photo imgSrc={ImgPhoto14} />
      <Photo imgSrc={ImgPhoto15} />
      <Photo imgSrc={ImgPhoto16} />
      <Photo imgSrc={ImgPhoto17} />
      <Photo imgSrc={ImgPhoto18} />
      <Photo imgSrc={ImgPhoto19} />
      <Photo imgSrc={ImgPhoto20} />
      <Photo imgSrc={ImgPhoto21} />
      <Photo imgSrc={ImgPhoto22} />
    </div>
  );
};

export default Gallery;
