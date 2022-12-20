import React from "react";
import { styled } from "@mui/material/styles";
import { AppBar, Toolbar, Box, Typography } from "@material-ui/core";
import Search from "./Hedare/Search";
import CustonButtons from "./Hedare/CustonButtons";



const CustomizedSlider = styled(AppBar)`
  background: #4d4d4d;
  height: 50px;
`;
const Component = styled(Box)`
  margin-left: 12%;
  line-height: 0.7;
  font-size: 30px;
  font-style: italic;
`;

const Subheading = styled(Typography)`
  font-family: "Times New Roman", Times, serif;
  font-size: 12px;
  margin-left: 30%;
`;

const CustonButtonswrapper = styled(Box)`
  margin: 0 3% 0 auto;
`;

export default function Hedare() {
  const Logourl =
    "https://www.pngfind.com/pngs/m/328-3288902_flipkart-logo-flipkart-new-logo-png-transparent-png.png";
  return (
    <CustomizedSlider>
      <Toolbar style={{ minHeight: 50 }}>
        <Component>
          {/* <img src={Logourl} alt="not fond" style={{ width: 75 }} /> */}
          FlipKart&nbsp;
          <Subheading style={{ color: "#ff8000" }}>
            Explore &nbsp;
            <Box component="span" style={{ color: "#ff8000" }}>
              more
            </Box>
          </Subheading>
        </Component>
        <Search />

        <CustonButtonswrapper>
          <CustonButtons />
        </CustonButtonswrapper>
      </Toolbar>
    </CustomizedSlider>
  );
}
