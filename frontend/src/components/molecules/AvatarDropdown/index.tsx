import React from "react";
import Avatar from "../../atoms/Avatar";
import Image from "../../atoms/Image";
import { Stack, SxProps } from "@mui/material";
import ProfileIcon from "../../../../public/assets/Images/profile.svg";
import DownIcon from "../../../../public/assets/icons/chevron-down.svg";
import { Theme } from "@emotion/react";

interface AvatarDropdownProps {
  sxAvatar?: SxProps<Theme>;
  iconWidth?: string;
  iconHeight?: string;
}

const defaultProps: AvatarDropdownProps = {
  sxAvatar: { width: "32px", height: "32px" },
  iconHeight: "22.73px",
  iconWidth: "17.78px",
};

const AvatarDropdown = (props: AvatarDropdownProps) => {
  return (
    <Stack direction={"row"} alignItems={"center"}>
      <Avatar src={ProfileIcon} sx={props.sxAvatar ?? defaultProps.sxAvatar} />
      <Image
        src={DownIcon}
        width={props.iconWidth ?? defaultProps.iconWidth!}
        height={props.iconHeight ?? defaultProps.iconWidth!}
      />
    </Stack>
  );
};

export default AvatarDropdown;
