import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { navData } from "../../constants/data";






const Component =styled(Box)`

display:flex;
margin:55px 130px 0 130px;
justify-content: space-between;
`
const Container =styled(Box)`
padding:10 px;
text-align:center;

`
const Text =styled(Typography)`
font-size:14px;
font-weight:600 ;
font-family:inherit

`

export default function Navbar() {
  return (
    <Component >
      {navData.map(data => (
        <Container>
          <img src={data.url} alt="nav" style={{width:65 }} />
          <Text> {data.text}</Text>
        </Container>
      ))}
    </Component>
  );
}
