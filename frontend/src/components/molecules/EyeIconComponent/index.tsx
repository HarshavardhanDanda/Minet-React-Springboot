import React, { MouseEventHandler } from "react";
import Image from "../../atoms/Image";
import EyeIcon from "../../../../public/assets/Images/Eye.svg";
import './index.css'
import openEye from  "../../../../public/assets/icons/EyeOn.svg";

type eyeIconProps = {
  onClick: MouseEventHandler<HTMLDivElement>;
  clicked?: boolean;
};

const EyeIconComponent = (props: eyeIconProps) => {
  return (
    <Image
      src={props.clicked ? openEye :EyeIcon}
      width="20px"
      height="19.41px"
      alt="Eye Icon"
      onClick={props.onClick}
      className="hoverable-image"
    />
  );
};

export default EyeIconComponent;


