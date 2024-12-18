import React from "react";
import { Grid, Box, Typography } from "@mui/material";

const HomeBanner = () => {
  return (
    <Grid container justifyContent="center">
      <Box sx={{ width: { sm: "1000px",xs: "300px"} }}>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: {sm:"80px",xs:'30px'},
            fontWeight: "600",
            color: "#FFFFFF",
            textTransform: "uppercase",
          }}
        >
          Driving the next generation of Tech
        </Typography>
      </Box>
      <Box sx={{position:'absolute',width:{sm:'350px',xs:'120px'},marginTop:{lg:'160px',xs:'110px'}}}>
        <img style={{width:'100%',height:'100%'}} src="https://res.cloudinary.com/doofsozyy/image/upload/v1734453865/com-720p-unscreen_riyptl.gif" alt="logo" />
      </Box>
    </Grid>
  );
};

export default HomeBanner;
