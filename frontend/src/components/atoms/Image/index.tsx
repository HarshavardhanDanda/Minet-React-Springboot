import React, { CSSProperties, MouseEventHandler } from "react";

interface ImageProps {
  src: string;
  width: string;
  height: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  className?: string;
  alt?: string;
  style?: CSSProperties;
}

const Image: React.FC<ImageProps> = ({ src, width, height,onClick, alt, style, ...props }) => {
  Image.defaultProps = {
    className: "image",
    alt: "image"
  }
  return (
    <img
      src={src}
      width={width}
      height={height}
      alt={alt}
      onClick={onClick}
      style={style}
      {...props}
    ></img>
  );
};

export default Image;
