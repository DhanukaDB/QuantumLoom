import React, {  useState } from "react";
import { Grid, Box, Typography, Menu, MenuItem,  } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomButtonNew from "../../CustomComponents/CustomButtonNew";

const Navbar = () => {
  const navigate = useNavigate();
  const [showFaqone, setshowFaqone] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    setshowFaqone(false)
  };
  return (
    <>
    <Grid container justifyContent={{sm:"center"}} backgroundColor={"transparent"}>
      <Box sx={{ width: { sm: "1100px",xs:'215px' } }}>
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
            width: { sm: "1100px" },
            height: { sm: "90px" },
            display: { sm: "flex", xs: "none" },
            position: "fixed",
            top: 0,
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
            border: "1px solid rgba(255, 255, 255, 0.2)", // Subtle border for sharper edges
            transition: "background-color 0.3s ease",
            backgroundImage:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0))", // Gradient for extra depth
          }}
        >
          <Grid
            item
            sm={4}
            paddingLeft={{ sm: "15px" }}
            paddingTop={{ sm: "2px" }}
          >
            <Box
              sx={{ width: "56px", marginLeft: "20px", cursor: "pointer" }}
              onClick={() => {
                navigate("/home");
              }}
            >
              <Box sx={{ width: "240px" }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="https://res.cloudinary.com/doofsozyy/image/upload/v1734452917/LOGO_vwkjcf.webp"
                  alt="Logo"
                />
              </Box>
            </Box>
          </Grid>
          <Grid item sm={5} paddingLeft={{ sm: "56px" }}>
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
                          color: "#FFFFFF",
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
          <Grid item sm={3} paddingLeft={{ sm: "30px" }}>
            <Grid container>
              <Grid item xs="auto" marginLeft="12px">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration:'none'}}
                  href="https://api.whatsapp.com/send/?phone=94740032488&app_absent=0"
                >
                  <CustomButtonNew
                    variant="contained"
                    backgroundColor="rgba(174, 146, 183, 0.6)"
                    textColor="#FFFFFF"
                    width="190px"
                    height="43px"
                    borderColor="#FFFFFF"
                  >
                    Contact Us
                  </CustomButtonNew>
                </a>{" "}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
    
    
     {/* Mobile Landing */}
     <Grid
        container
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.1)", // Lighter transparency for more glass effect
            backdropFilter: "blur(12px) saturate(150%)", // Blur and saturation for a glossy look
          paddingTop: "34px",
          paddingBottom: "34px",
          display: { lg: "none",ls:'none', xs: "block" },
        }}
      >
        <Grid container>
          <Grid item xs={10} sm={11} sx={{ paddingLeft: "24px" }}>
          <Box
              sx={{
                width: { sm: "90px", xs: "170px" },
                marginLeft: "20px",
                paddingTop: { xs: "8px" },
              }}
            >
              <img
                style={{ width: "100%", height: "100%" }}
                src="https://res.cloudinary.com/doofsozyy/image/upload/v1734452917/LOGO_vwkjcf.webp"
                alt="Logo"
              />
            </Box>
            
          </Grid>
          <Grid item xs={1} sm={1} sx={{ paddingLeft: "-15px" }}>
          <Box onClick={handleOpenUserMenu}>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="36" height="36" rx="12" fill="transparent" />
                <path
                  d="M10 24C9.71667 24 9.47917 23.9042 9.2875 23.7125C9.09583 23.5208 9 23.2833 9 23C9 22.7167 9.09583 22.4792 9.2875 22.2875C9.47917 22.0958 9.71667 22 10 22H26C26.2833 22 26.5208 22.0958 26.7125 22.2875C26.9042 22.4792 27 22.7167 27 23C27 23.2833 26.9042 23.5208 26.7125 23.7125C26.5208 23.9042 26.2833 24 26 24H10ZM10 19C9.71667 19 9.47917 18.9042 9.2875 18.7125C9.09583 18.5208 9 18.2833 9 18C9 17.7167 9.09583 17.4792 9.2875 17.2875C9.47917 17.0958 9.71667 17 10 17H26C26.2833 17 26.5208 17.0958 26.7125 17.2875C26.9042 17.4792 27 17.7167 27 18C27 18.2833 26.9042 18.5208 26.7125 18.7125C26.5208 18.9042 26.2833 19 26 19H10ZM10 14C9.71667 14 9.47917 13.9042 9.2875 13.7125C9.09583 13.5208 9 13.2833 9 13C9 12.7167 9.09583 12.4792 9.2875 12.2875C9.47917 12.0958 9.71667 12 10 12H26C26.2833 12 26.5208 12.0958 26.7125 12.2875C26.9042 12.4792 27 12.7167 27 13C27 13.2833 26.9042 13.5208 26.7125 13.7125C26.5208 13.9042 26.2833 14 26 14H10Z"
                  fill="#FFFFFF"
                />
              </svg>
            </Box>
          </Grid>
        </Grid>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
          sx={{
            ...(Boolean(anchorElUser) && {
              boxShadow: "0px 4px 6px -2px #10182808",
            }),
            mt: "45px",
            "& .MuiMenu-list": {
              minWidth: "100%",
            },
            ".MuiPopover-paper": {
            
              width: "auto",
              minWidth: "100%",
              borderRadius: "6px",
              marginTop: {
                xs: "-50px",
              },
              marginLeft: "-15px",
              backgroundColor: "rgba(40, 30, 59, 0.9)", // Lighter transparency for more glass effect
              backdropFilter: "blur(12px) saturate(150%)", 
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
            border: "1px solid rgba(255, 255, 255, 0.2)", 
              "& .MuiMenuItem-root:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)", // Lighter transparency for more glass effect
            backdropFilter: "blur(12px) saturate(150%)", // Blur and saturation for a glossy look
                borderRadius: "6px",
              },
            },
          }}
        >
          <Grid container sx={{ backgroundColor: "transparent" }}>
            <Grid item xs={10} sm={11}>
              <Box
                sx={{
                  width: "170px",
                  marginLeft: "20px",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="https://res.cloudinary.com/doofsozyy/image/upload/v1734452917/LOGO_vwkjcf.webp"
                  alt="Logo"
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={1}
              paddingTop="4px"
              paddingLeft={{ sm: "14px", xs: "-30px" }}
            >
              <Box onClick={handleCloseUserMenu}>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="36" height="36" rx="12" fill="transparent" />

                  <path
                    d="M18.0008 19.3998L13.1008 24.2998C12.9174 24.4831 12.6841 24.5748 12.4008 24.5748C12.1174 24.5748 11.8841 24.4831 11.7008 24.2998C11.5174 24.1165 11.4258 23.8831 11.4258 23.5998C11.4258 23.3165 11.5174 23.0831 11.7008 22.8998L16.6008 17.9998L11.7008 13.0998C11.5174 12.9165 11.4258 12.6831 11.4258 12.3998C11.4258 12.1165 11.5174 11.8831 11.7008 11.6998C11.8841 11.5165 12.1174 11.4248 12.4008 11.4248C12.6841 11.4248 12.9174 11.5165 13.1008 11.6998L18.0008 16.5998L22.9008 11.6998C23.0841 11.5165 23.3174 11.4248 23.6008 11.4248C23.8841 11.4248 24.1174 11.5165 24.3008 11.6998C24.4841 11.8831 24.5758 12.1165 24.5758 12.3998C24.5758 12.6831 24.4841 12.9165 24.3008 13.0998L19.4008 17.9998L24.3008 22.8998C24.4841 23.0831 24.5758 23.3165 24.5758 23.5998C24.5758 23.8831 24.4841 24.1165 24.3008 24.2998C24.1174 24.4831 23.8841 24.5748 23.6008 24.5748C23.3174 24.5748 23.0841 24.4831 22.9008 24.2998L18.0008 19.3998Z"
                    fill="#FFFFFF"
                  />
                </svg>
              </Box>
            </Grid>
          </Grid>
          <Grid container borderBottom={2} sx={{ borderColor: "#FFFFFF" }}>
            <MenuItem key="profile" >
              <a href="/home"  style={{textDecoration:'none'}}>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontFamily: "'Uncut Sans', sans-serif",
                    fontWeight: "600",
                    color: "#FFFFFF",
                    width:{sm:"700px",md:"900px",xs:'345px'}
                  }}
                >
                  Home{" "}
                </Typography>
              </a>
            </MenuItem>
          </Grid>
          <Grid container borderBottom={2} sx={{ borderColor: "#FFFFFF" }}>
            <MenuItem key="profile">
              <Typography
                sx={{
                  fontSize: "18px",
                  fontFamily: "'Uncut Sans', sans-serif",
                  fontWeight: "600",
                  color: "#FFFFFF",
                  width:{sm:"700px",md:"900px",xs:'345px'}
                }}
                onClick={() => {
                  showFaqone ? setshowFaqone(false) : setshowFaqone(true);
                }}
                
              >
                Our Story{" "}
              </Typography>
            </MenuItem>
            
          </Grid>

          <Grid container borderBottom={2} sx={{ borderColor: "#FFFFFF" }}>
            <MenuItem key="profile">
              <a href="/our-story" style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontFamily: "'Uncut Sans', sans-serif",
                    fontWeight: "600",
                    color: "#FFFFFF",
                    width:{sm:"700px",md:"900px",xs:'345px'}
                  }}
                >
                  Services{" "}
                </Typography>
              </a>
            </MenuItem>
          </Grid>

          <Grid container marginTop="32px">
          <a
  href="mailto:contact@ql5s.com"
  target="_blank"
  rel="noopener noreferrer"
  style={{ textDecoration: 'none' }}
>
<MenuItem key="profile">
              <Typography
                sx={{
                  fontSize: "18px",
                  fontFamily: "'Uncut Sans', sans-serif",
                  fontWeight: "500",
                  color: "#FFFFFF",
                }}
              >
                contact@ql5s.com{" "}
              </Typography>
            </MenuItem>
  </a>
            
          </Grid>
          <a
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration:'none'}}
                  href="https://api.whatsapp.com/send/?phone=94740032488&app_absent=0"
                >
<Grid container backgroundColor="rgba(174, 146, 183, 0.6)">
            <MenuItem key="profile">
              <Typography
                sx={{
                  fontSize: "18px",
                  fontFamily: "'Uncut Sans', sans-serif",
                  fontWeight: "600",
                  color: "#FFFFFF",
                  width:{sm:"700px",md:"900px",xs:'345px'}
                }}
               
              >
                Contact Us{" "}
              </Typography>
            </MenuItem>  
          </Grid>

                </a>
          
        </Menu>
      </Grid>
    </>
    
  );
};

export default Navbar;
