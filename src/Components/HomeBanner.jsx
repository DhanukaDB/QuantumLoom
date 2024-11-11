import React from "react";
import { Grid, Box, Typography } from "@mui/material";

const HomeBanner = () => {
  return (
    <Grid container justifyContent="center">
      <Box sx={{ width: { lg: "1000px" } }}>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "80px",
            fontWeight: "600",
            color: "#FFFFFF",
            textTransform: "uppercase",
          }}
        >
          Driving the next generation of Tech
        </Typography>
      </Box>
      <Box sx={{position:'absolute',width:'450px',marginTop:{lg:'110px'}}}>
        <img style={{width:'100%',height:'100%'}} src="https://res.cloudinary.com/iplus/image/upload/v1731177106/pixverse-2Fmp4-2Fmedia-2Fweb-2-unscreen_1_ijliis.gif" alt="logo" />
      </Box>
    </Grid>
  );
};

export default HomeBanner;
