import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomButtonNew from "../../CustomComponents/CustomButtonNew";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Grid container justifyContent="center" backgroundColor={"transparent"}>
  <Box sx={{ width: { lg: "1100px" } }}>
  <Grid
  container
  zIndex={5}
  sx={{
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Lighter transparency for more glass effect
    backdropFilter: "blur(12px) saturate(150%)", // Blur and saturation for a glossy look
    borderRadius: "90px",
    paddingTop: "23px",
    marginTop: "20px",
    paddingBottom: "20px",
    width: { lg: "1100px" },
    height: { lg: "90px" },
    display: { lg: "flex", xs: "none" },
    position: "fixed",
    top: 0,
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
    border: "1px solid rgba(255, 255, 255, 0.2)", // Subtle border for sharper edges
    transition: "background-color 0.3s ease",
    backgroundImage: "linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0))", // Gradient for extra depth
  }}
>
          <Grid
            item
            sm={4}
            paddingLeft={{ sm: "15px" }}
            paddingTop={{ lg: "2px" }}
          >
            <Box
              sx={{ width: "56px", marginLeft: "20px", cursor: "pointer" }}
              onClick={() => {
                navigate("/home");
              }}
            >
                <Box sx={{width:'240px'}}>
                <img style={{width:'100%',height:'100%'}} src="https://res.cloudinary.com/iplus/image/upload/v1731223989/Group_2_kjx1hm.webp" alt="Logo"/>

                </Box>
            </Box>
          </Grid>
          <Grid item sm={5} paddingLeft={{ lg: "56px" }}>
            <Grid container paddingTop="10px">
              <Grid item xs="auto">
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontFamily: "'Uncut Sans', sans-serif",
                      fontWeight: "500",
                      color: "#FFFFFF",
                    }}
                  >
                    Home{" "}
                  </Typography>
              </Grid>

              <Grid item xs="auto" marginLeft="50px">
                <a href="/our-story" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontFamily: "'Uncut Sans', sans-serif",
                      fontWeight: "500",
                      color: "#FFFFFF",
                    }}
                  >
                    Our Story{" "}
                  </Typography>
                </a>
              </Grid>
              <Grid item xs="auto" marginLeft="50px">
                <Box width="90px">
                  <Grid container>
                    <Grid item xs="auto">
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontFamily: "'Uncut Sans', sans-serif",
                          fontWeight: "500",
                          color:"#FFFFFF" ,
                          cursor: "pointer",
                        }}
                      >
                        Services
                      </Typography>
                    </Grid>
                    <Grid item xs="auto" marginLeft="6px" marginTop="0px">
                      {/* Conditional rendering for arrows */}
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={3} paddingLeft={{ lg: "30px" }}>
            <Grid container>
              
              <Grid item xs="auto" marginLeft="12px">
              <CustomButtonNew
  variant="contained"
  backgroundColor="rgba(174, 146, 183, 0.6)" 
  textColor="#FFFFFF"
  width="190px"
  height="43px"
  borderColor="#FFFFFF"
  onClick={() => {
    navigate("/contact-us");
  }}
>
                  Contact Us
                </CustomButtonNew>{" "}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Navbar;
