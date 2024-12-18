import React from "react";
import { Grid } from "@mui/material";
import Navbar from "../Components/NavBar/Navbar";
import HomeBanner from "../Components/HomeBanner";
import HomeServices from "../Components/HomeServices";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <Grid container 
  sx={{ 
    background: 'linear-gradient(to right top, #262629, #25252e, #262333, #272137, #2a1e3b, #2a1e3b, #2a1e3b, #2a1e3b, #272137, #262333, #25252e, #262629)', 
    minHeight: '100vh', // Set the height to full viewport height
    flexDirection: 'column', // Ensure items stack vertically
    width: '100%', // Prevents horizontal overflow
    overflowX: 'hidden', // Hides horizontal scrolling
    margin: 0, // Remove any default margin
    padding: 0, // Remove any default padding
    boxSizing: 'border-box', // Ensure padding/border doesn’t increase width
  }}
>
        <Grid container sx={{height: {lg: "90px"}}}>
          <Navbar />
        </Grid>
        <Grid container sx={{marginTop: {lg: "80px",xs:'60px'}}}>
          <HomeBanner />
        </Grid>
        <Grid container sx={{marginTop: {lg: "350px",xs:'140px'}}}>
        <HomeServices/>
        </Grid>
        <Grid container sx={{marginTop: {lg: "40px"}}}>
        <Footer/>
        </Grid>
      </Grid>
  );
};

export default Home;
