import React from "react";
import Image from "react-image-webp";
const ImageCom = ({ img, className }) => {
  return (
    <>
      {/* <picture>
        <source
          srcSet={`${img}.webp`}
          type="image/webp"
          className={className}
        />
        <img src={`${img}.png`} alt="logo" className={className} />
      </picture> */}
      <Image
        src={require(`${img}.png`)}
        className={className}
        webp={require(`${img}.webp`)}
      />
    </>
  );
};

export default ImageCom;
