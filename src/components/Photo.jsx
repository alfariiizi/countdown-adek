import React from "react";
import Zoom from "react-medium-image-zoom";
import "./Photo.css";

const Photo = ({ imgSrc }) => {
  return (
    <div className="h-[140px] w-[140px] overflow-hidden rounded-sm sm:h-[150px] sm:w-[150px]">
      <Zoom>
        {/* <img
          src={imgSrc}
          alt="photo-nadia"
          className="h-full w-full object-cover"
          height={50}
        /> */}
        <div
          aria-label="nadia-photo"
          role="img"
          style={{
            backgroundColor: "#fff",
            backgroundImage: `url(${imgSrc})`,
            backgroundPosition: "50%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100%",
            paddingBottom: "100%",
            width: "100%",
          }}
          className="transition-all md:hover:scale-110"
        />
      </Zoom>
    </div>
  );
};

export default Photo;
