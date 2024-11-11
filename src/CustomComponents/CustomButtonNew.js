// CustomButtonNew.js
import React from "react";
import { Button, Typography } from "@mui/material";

const CustomButtonNew = ({
  variant ,
  backgroundColor ,
  textColor ,
  borderColor ,
  width ,
  height,
  fontSize = "16px",
  fontWeight = 500,
  borderRadius = "30px",
  onClick,
  children,
  ...props // Accept any other props passed to this component
}) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      sx={{
        backgroundColor: variant === "contained" ? backgroundColor : "transparent",
        color: textColor,
        borderColor: borderColor,
        borderWidth: variant === "outlined" ? "1px" : "0px",
        width: width,
        height: height,
        boxShadow: "none",
        borderRadius: borderRadius,
        "&:hover": {
          backgroundColor: variant === "contained" ? backgroundColor : "rgba(0,0,0,0.08)",
          borderColor: borderColor,
          
        },
      }}
      {...props} // Spread other passed props to the Button component
    >
      <Typography fontFamily="'Uncut Sans', sans-serif" fontWeight={fontWeight} fontSize={fontSize}>
        {children}
      </Typography>
    </Button>
  );
};

export default CustomButtonNew;
