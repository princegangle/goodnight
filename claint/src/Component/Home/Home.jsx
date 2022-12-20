import React from "react";

import Navbar from "./Navbar";
import Banner from "./Banner";
import { styled,Box } from "@mui/system";


const Component=styled(Box)`

padding:10px;
background:#cfd6c2`

export default function Home() {
  return (
    <>
      <Navbar />

      <Component>
      <Banner />

      </Component>
    </>
  );
}
