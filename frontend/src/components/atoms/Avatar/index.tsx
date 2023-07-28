import React from "react";
import { Avatar as MuiAvatar, SxProps } from "@mui/material";

interface AvatarProps {
  id?: string;
  src?: string;
  className?: string;
  dataTestId?: string;
  sx?: SxProps;
  children?: React.ReactNode;
  alt?: string;
  variant?: "circular" | "rounded" | "square";
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Avatar = (props: AvatarProps) => {
  const defaultProps: AvatarProps = {
    dataTestId: "avatar",
    variant: "circular",
    alt: "avatar",
    ...props,
  };
  return (
    <MuiAvatar
      id={defaultProps.id}
      src={defaultProps.src}
      alt={defaultProps.alt}
      sx={defaultProps.sx}
      onClick={defaultProps.onClick}
      variant={defaultProps.variant}
      className={defaultProps.className}
      data-testid={defaultProps.dataTestId}
    >
      {defaultProps.children}
    </MuiAvatar>
  );
};

export default Avatar;
