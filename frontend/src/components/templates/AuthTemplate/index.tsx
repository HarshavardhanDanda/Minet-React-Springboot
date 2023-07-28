import React, { CSSProperties } from "react";
import { Stack, Box } from "@mui/material";
import Image from "../../atoms/Image";

interface TemplateProps {
  src: string,
  RightComponent: React.ReactNode;
}

const AuthTemplate = (props: TemplateProps) => {
  const imageStyle: CSSProperties = {
    objectFit: "cover"
  };
  return (
    <Box
      data-testid="auth-template"
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <Stack direction="row" sx={{ width: "100%", height: "100%" }}>
        <Stack sx={{width: "50%", height: "100%", objectFit: "cover"}}>
            <Image src={props.src} width="100%" height="100%" style={imageStyle}/>
        </Stack>
        <Stack sx={{width: "50%", height: "100%"}} alignItems={'center'} justifyContent={'center'}>
            {props.RightComponent}
        </Stack>
      </Stack>
    </Box>
  );
};
export default AuthTemplate;