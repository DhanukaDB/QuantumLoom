import React from "react";
import { Grid, Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Grid container>
    {/* Wrapper Container */}
    <Grid
      container
      spacing={2}
      sx={{
        height: { lg: "auto" },
        marginTop: "40px",
        backgroundColor: "#181818",
      }}
    >
      {/* Logo Section */}
      <Grid
        item
        sm={4}
        xs={12}
        sx={{
          backgroundColor: "#181818",
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        <Box
          sx={{
            width: "auto",
            paddingLeft: { sm: "24px", xs: "0px" },
          }}
        >
          <Box sx={{ width: "180px", margin: "0 auto" }}>
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://res.cloudinary.com/doofsozyy/image/upload/v1734452917/LOGO_vwkjcf.webp"
              alt="Logo"
            />
          </Box>
        </Box>
      </Grid>

      {/* Navigation Links */}
      <Grid
        item
        sm={8}
        xs={12}
        sx={{
          backgroundColor: "#181818",
          textAlign: { xs: "center", sm: "left" },
          paddingTop: { xs: "20px", sm: "0px" },
        }}
      >
        <Grid container justifyContent={{ xs: "center", sm: "flex-start" }}>
          <Grid item xs={12} sm="auto" sx={{ marginBottom: { xs: "12px", sm: "0" } }}>
            <a href="/" style={{ textDecoration: "none" }}>
              <Typography sx={{ color: "#FFFFFF", fontSize: "18px" }}>
                Home
              </Typography>
            </a>
          </Grid>
          <Grid
            item
            xs={12}
            sm="auto"
            sx={{ marginBottom: { xs: "12px", sm: "0" }, marginLeft: { sm: "48px" } }}
          >
            <Typography sx={{ color: "#FFFFFF", fontSize: "18px" }}>
              Our Story
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm="auto"
            sx={{ marginBottom: { xs: "12px", sm: "0" }, marginLeft: { sm: "48px" } }}
          >
            <Typography sx={{ color: "#FFFFFF", fontSize: "18px" }}>
              Our Services
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm="auto"
            sx={{ marginBottom: { xs: "12px", sm: "0" }, marginLeft: { sm: "48px" } }}
          >
            <Typography sx={{ color: "#FFFFFF", fontSize: "18px" }}>
              Privacy Policy
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm="auto"
            sx={{ marginBottom: { xs: "12px", sm: "0" }, marginLeft: { sm: "48px" } }}
          >
            <a
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration:'none'}}
                  href="https://api.whatsapp.com/send/?phone=94740032488&app_absent=0"
                >
              <Typography sx={{ color: "#FFFFFF", fontSize: "18px" }}>
                Contact Us
              </Typography>
            </a>
          </Grid>
        </Grid>
      </Grid>

      {/* Footer Text */}
      <Grid
        item
        xs={12}
        sx={{
          textAlign: "center",
          marginTop: { xs: "16px", sm: "0px" },
          marginBottom: "8px",
        }}
      >
      <a
  href="mailto:contact@ql5s.com"
  target="_blank"
  rel="noopener noreferrer"
  style={{ textDecoration: 'none' }}
>
  <Typography sx={{ fontSize: '14px', color: '#FFFFFF' }}>
    contact@ql5s.com
  </Typography>
</a>
        
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          textAlign: "center",
          marginTop: { xs: "16px", sm: "0px" },
          marginBottom: "8px",
        }}
      >
        <Typography sx={{ fontSize: "10px", color: "#FFFFFF" }}>
        All rights reserved @ QuantumLoom
        </Typography>
      </Grid>
    </Grid>
  </Grid>
  );
}
