import React from "react";
import { Grid, Typography } from "@mui/material";
import HomeCard from "./HomeCard/HomeCard";

const HomeServices = () => {
  return (
    <Grid container justifyContent="center">
      <Grid container width={{ lg: "900px" }}>
        <Grid item xs={12} marginBottom={{lg:'32px'}}>
            <Typography sx={{
            textAlign: "center",
            fontSize: "60px",
            fontWeight: "600",
            color: "#FFFFFF",
            textTransform: "uppercase",
          }}>
                Our Services
            </Typography>
        </Grid>
        <Grid container>
        <Grid item xs={4}>
          <HomeCard  title="Web Development" description="Custom, responsive websites with seamless functionality." data1="MERN" data2="Wordpress" data3="shopify"/>
        </Grid>
        <Grid item xs={4}>
        <HomeCard  title="Product Development" description="Innovative product development that turns ideas into impactful solutions" data1="MERN" data2="IOT" data3="Android applications"/>
        </Grid>
        <Grid item xs={4}>
        <HomeCard  title="Product Design" description="Creative product design that blends functionality with user-centric aesthetics." data1="Prototyping" data2="Designing" data3="Testing and Validation"/>
        </Grid>
        </Grid>
        <Grid container marginTop={{lg:'24px'}}>
        <Grid item xs={4}>
          <HomeCard  title="UI/UX Design" description="Custom, responsive websites with seamless functionality." data1="UX Research" data2="Designing" data3="Prototyping"/>
        </Grid>
        <Grid item xs={4}>
        <HomeCard  title="Social Media Marcketing" description="Boost your brand with targeted social media strategies and engaging content" data1="Advertising" data2="Digital Strategy" data3="Trending Technics"/>
        </Grid>
        <Grid item xs={4}>
        <HomeCard  title="Content Creation" description="Engaging content that resonates with your audience and drives results." data1="Grapic Designing" data2="Animation" data3="Advertising"/>
        </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomeServices;
