import React from "react";
import { Grid, Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Grid container>
      <Grid
        container
        spacing={2}
        sx={{
          height: { lg: "auto" },
          marginTop: "40px",
          backgroundColor: "#181818",
        }}
      >
        <Grid
          item
          xs={4}
          style={{
            backgroundColor: "#181818",
          }}
        >
          <Box
            sx={{
              width: "auto",
              paddingLeft: "24px",
            }}
          >
             <Box sx={{width:'180px'}}>
                <img style={{width:'100%',height:'100%'}} src="https://res.cloudinary.com/iplus/image/upload/v1731223989/Group_2_kjx1hm.webp" alt="Logo"/>

                </Box>
          </Box>
        </Grid>
        <Grid item xs={8} sx={{ backgroundColor: "#181818" }}>
          <Grid container sx={{ paddingLeft: { lg: "25%" } }}>
            <Grid item xs="auto">
            <a href="/" style={{textDecoration:'none'}}>
            <Typography sx={{color:'#FFFFFF',fontSize:'18px'}} >Home</Typography></a>
            </Grid>
            <Grid item xs="auto" marginLeft="48px">
              <Typography  sx={{color:'#FFFFFF',fontSize:'18px'}}>
                Our Story
              </Typography>
            </Grid>
            <Grid item xs="auto" marginLeft="48px">
              <Typography  sx={{color:'#FFFFFF',fontSize:'18px'}}>Our Services</Typography>
            </Grid>
            <Grid item xs="auto" marginLeft="48px">
              <Typography  sx={{color:'#FFFFFF',fontSize:'18px'}}>Privacy Policy</Typography>
            </Grid>
            <Grid item xs={2} marginLeft="48px">
                         <a href="/contact" style={{textDecoration:'none'}}>
             <Typography  sx={{color:'#FFFFFF',fontSize:'18px'}}>Contact Us</Typography> </a>
            </Grid>
          </Grid>
        </Grid>
          <Grid item={1} sx={{marginLeft:'90%',marginBottom:'8px'}}>
          <Typography sx={{ fontSize: "12px", color: "#FFFFFF" }}>
          @ QuntamLoom</Typography>
          </Grid>
          
      </Grid>
    </Grid>
  );
}
